/**
 * Created by otto on 2017/6/23.
 */

"use strict";

import {AsyncStorage} from 'react-native';
import Storage from 'react-native-storage';

import * as Constants from '../constants/constants'

import realmDB from '../db/realmDB'

let storage = new Storage({
    // 最大容量，默认值1000条数据循环存储
    size: 1000,

    // 存储引擎：对于RN使用AsyncStorage，对于web使用window.localStorage
    // 如果不指定则数据只会保存在内存中，重启后即丢失
    storageBackend: AsyncStorage,

    // 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
    defaultExpires: null,

    // 读写时在内存中缓存数据。默认启用。
    enableCache: true,

    // 如果storage中没有相应数据，或数据已过期，
    // 则会调用相应的sync方法，无缝返回最新数据。
    // sync方法的具体说明会在后文提到
    // 你可以在构造函数这里就写好sync的方法
    // 或是写到另一个文件里，这里require引入
    // 或是在任何时候，直接对storage.sync进行赋值修改
    // sync: require('./sync')
})

// 最好在全局范围内创建一个（且只有一个）storage实例，方便直接调用

// 对于web
// window.storage = storage;

// 对于react native
global.storage = storage;

// 这样，在此**之后**的任意位置即可以直接调用storage
// 注意：全局变量一定是先声明，后使用
// 如果你在某处调用storage报错未定义
// 请检查global.storage = storage语句是否确实已经执行过了

const useRealm = true

class StorageService {
    /**
     * 根据key获取本地缓存，未对该key缓存过数据则返回undefined
     * @param key
     * @returns {*}
     */
    load = async (key) => {
        //console.warn(`load data from local by key:${key}`)
        try {
            if (useRealm) {
                const config = RealmAgent.objects('Configs')[0]
                console.warn(`read config:${JSON.stringify(config)}`)
                if (config && config.configValues) {
                    console.warn(`read value from realm:${config.configValues}`)
                    return JSON.parse(config.configValues)[key]
                }
            } else {
                return await storage.load({key: key, autoSync: false, syncInBackground: false,})
            }
        } catch (e) {
            //console.warn(`load data from local error:${e}`)
            return undefined
        }
    }

    /**
     * 缓存数据到本地
     * @param key
     * @param value
     */
    save = async (key, value) => {

        //console.warn(`save data(${key}:${value})`)
        if (useRealm) {
            const configs = RealmAgent.objects('Configs')
            let config
            if (!configs || configs.length == 0) {
                RealmAgent.write(() => RealmAgent.create('Configs', {id: 1, configValues: `{"${key}":"${value}"}`}))
                return
            } else {
                config = configs[0]
            }
            const jsonValue = config.configValues
            if (jsonValue) {
                try {
                    let jsonObj = JSON.parse(jsonValue)
                    jsonObj[key] = value
                    RealmAgent.write(() => RealmAgent.create('Configs', {id: 1, configValues: JSON.stringify(jsonObj)}))
                } catch (e) {
                    console.warn(`insert to realm error:${e}`)
                }
            }
        } else {
            storage.save({key: key, data: value})
        }
    }

    /**
     * 根据key清除本地缓存
     * @param key
     */
    remove = (key) => {
        try {
            storage.remove({key: key});
        } catch (e) {
            //
        }
    }

    /**
     * 读取是否第一次进入应用
     */
    readIsFirstTimeIn = () => {
        return this.load(Constants.STORE_KEY.isFirstTimeIn)
    }

    /**
     * 设置是否第一次进入应用
     * @param isFirstTimeIn
     */
    setupIsFirstTimeIn = (isFirstTimeIn) => {
        this.save(Constants.STORE_KEY.isFirstTimeIn, isFirstTimeIn)
    }

}

export default new StorageService()