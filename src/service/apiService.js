/**
 * Created by otto on 2017/6/28.
 */

"use strict";

import * as RNFetch from '../net/rnFetch'

class APIService {
    /**
     * 发送get请求
     * @param url
     */
    get = async (url) => {
        return await RNFetch.get(url)
    }

    /**
     * 发送post请求
     * @param url
     * @param body
     * @param headers
     */
    post = (url, body, headers = {}) => {

        /**
         * 添加header属性
         */
        if (!headers["Content-type"]) {
            headers["Content-type"] = 'application/json;charset=utf-8';
        }
        if (!headers["Accept"]) {
            headers["Accept"] = 'application/json';
        }

        if (body === undefined || body === null) {
            body = {}
        }

        //在发送post请求之前，往请求体`body`中注入用户token
        //const token = {_openx_head: {"auth_token": AppStore.getUserToken}}
        // 注册用于测试
        //const token = {_openx_head: {"auth_token": "eyJwaGFybWFjaXN0SWQiOiIwMDAwMDMiLCJ0aW1lIjoxNDk1NjE0MDEzMDAxLCJ1c2VySWQiOiIwMDAwMDEiLCJ1c2VyTmFtZSI6Imxpc2kifQ=="}}
        //Object.assign(body, token)

        const postPromise = RNFetch.post(url, JSON.stringify(body), headers)

        return new Promise((resolve, reject) => {
            postPromise.then(res => {
                console.warn(`response:${JSON.stringify(res)}`)
                this.filter(res, resolve, reject)
            }, error => {
                console.warn(`error.message:${error.message}`)
                if (error.message === 'Network request failed') {
                    reject({
                        code: -1,
                        ok: false,
                        message: '网络错误，请检查网络！'
                    })
                } else {
                    reject(error)
                }
                console.warn(`fetch error:${error}`)
            }).catch(e => {
                console.warn(`catch error:${e}`)
                reject(e)
            })
        })
    }

    /**
     * 拦截接口响应结果
     * @param res
     * @param resolve
     * @param reject
     * @returns {*}
     */
    filter = async (res, resolve, reject) => {
        if (res.ok) {//接口请求成功
            this.filterInBusinessLevel(res, resolve, reject)
        } else { //接口请求失败，网络层级
            //track error info
            try {
                let resp = await res.json()
                console.warn(`resp:${JSON.stringify(resp)}`)
                /*if (resp.code === Constants.Session_Error.TOKEN_Error
                 || resp.code === Constants.Session_Error.TOKEN_Empty) {
                 PageRoute.loginPage({mustRelogin: true})
                 }*/
                reject({
                    code: -1,
                    ok: false,
                    //status: JSON.stringify(res).status,
                    //resp: res.resp,
                    message: resp.message
                })
            } catch (e) {
                reject(e)
            }
        }
    }

    /**
     * json化网络响应数据
     * @param res
     * @param resolve
     * @param reject
     * @returns {*}
     */
    filterInBusinessLevel = async (res, resolve, reject) => {
        try {
            const responseJson = await res.json()
            //const {code, message, data} = responseJson
            resolve(responseJson)
        } catch (e) {
            console.warn(`api error:${e}`)
            reject({message: e})
        }
    }
}