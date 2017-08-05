/**
 * Created by otto on 2017/6/23.
 */

import React, {} from 'react'
import {Platform} from 'react-native'

export const ANDROID_PLATFORM = 'android';
export const IOS_PLATFORM = 'ios';

/**
 * 是否android平台
 * @type {boolean}
 */
export const isAndroidPlatform = (Platform.OS === ANDROID_PLATFORM)

/**
 * 页面加载状态
 * @type {{LOADING: number, SUCCESS: number, EMPTY: number, ERROR: number}}
 */
export const LOADING_STATE = {
    LOADING: 0,
    SUCCESS: 1,
    EMPTY: 2,
    ERROR: 3,
    NET_ERROR: 4,
}

export const STORE_KEY = {
    isFirstTimeIn: 'isFirstTimeIn', //是否第一次进入应用
}

export const TABS = [
    'Demo'
]