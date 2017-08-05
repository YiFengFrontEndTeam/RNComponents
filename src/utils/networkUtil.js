/**
 * Created by otto on 2017/6/27.
 */

import React, {} from 'react'
import {NetInfo} from 'react-native'

/**
 * 获取当前网络状况
 * @returns {Promise.<*>}
 */
export const fetchNetInfo = async () => {
    const netStatus = await NetInfo.fetch()
    console.warn(`current net status:${netStatus}`)
    return parseNetStatus(netStatus)
}

/**
 * 监听网络变化
 * @param listener
 */
export const listenConnectivityChange = (listener) => {
    NetInfo.addEventListener('change', listener)
}

/**
 * 移除网络变化监听
 * @param listener
 */
export const removeConnectivityChangeListener = (listener) => {
    NetInfo.removeEventListener('change', listener)
}

/**
 * 将网络状态转为bool，无网络返回false
 * @param netStatus
 * @returns {boolean}
 */
export const parseNetStatus = (netStatus) => {
    if ('none' == netStatus || 'NONE' == netStatus || 'unknown' == netStatus || 'UNKNOWN' == netStatus) {
        return false
    }
    return true
}