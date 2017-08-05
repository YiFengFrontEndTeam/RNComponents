/**
 * Created by otto on 2017/6/26.
 */

import {Dimensions, PixelRatio} from 'react-native'
import * as Constants from '../constants/constants'

const {width, height} = Dimensions.get('window')

const uiWidthPxIOS = 375 * 2
const uiWidthPxAndroid = 800

export default  px2dp = (uiSizeInPx) => {
    return uiSizeInPx * width / ( Constants.isAndroidPlatform ? uiWidthPxAndroid : uiWidthPxIOS)
}