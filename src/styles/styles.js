/**
 * Created by otto on 2017/6/26.
 */

import {Dimensions} from 'react-native'
import px2dp from '../utils/px2dp'
import * as Constants from '../constants/constants'

const {width, height} = Dimensions.get('window')

export default {
    screen: {
        width: width,
        height: height,
    },
    sizes: {
        status_bar_height: px2dp(Constants.isAndroidPlatform ? 0 : 40),
        title_bar_height: px2dp(110),
        bottom_bar_height: px2dp(110),
        bottom_offset_height: px2dp(Constants.isAndroidPlatform ? 0 : 40),
        size_1: px2dp(1),
        size_4: px2dp(4),
        size_8: px2dp(8),
        size_10: px2dp(10),
        size_20: px2dp(20),
        size_30: px2dp(30),
        size_32: px2dp(32),
        size_40: px2dp(40),
        size_50: px2dp(50),
        size_60: px2dp(60),
        size_80: px2dp(80),
        size_100: px2dp(100),
        size_158: px2dp(158),
        size_200: px2dp(200),
        size_480: px2dp(480),
        size_640: px2dp(640),
    },
    colors: {
        transparent: '#00000000',
        white: '#ffffff',
        color_primary: '#152f38',
        color_primary_second: '#172f38',
        color_line: '#55000000',

        color_font_main: '#313133',
        color_font_second: '#7e7e81',
        color_font_third: '#b8b8bc',
    },
    fonts: {
        font_24: px2dp(24),
        font_26: px2dp(26),
        font_32: px2dp(32),
        font_34: px2dp(34),
    },
    lineHeights: {},
    styles: {},

}