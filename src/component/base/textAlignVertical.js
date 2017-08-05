/**
 * Created by otto on 2017/6/26.
 */

import React, {PropTypes} from 'react'
import {StyleSheet, Text} from 'react-native'
import * as Constants from '../../constants/constants'

const TextAlignVertical = ({text, style}) => {

    const originalStyle = StyleSheet.flatten(style)
    let paddingTop = 0

    if (originalStyle && originalStyle.height && originalStyle.fontSize) {
        paddingTop = (originalStyle.height - originalStyle.fontSize) / 2
    }

    return <Text numberOfLines={1}
                 {...this.props}
                 style={[{
                     paddingTop: Constants.isAndroidPlatform ? null : paddingTop,
                     overflow: 'hidden',
                     textAlign: 'center',
                     textAlignVertical: 'center'
                 }, style]}>{text}</Text>
}
TextAlignVertical.prototype = {
    text: PropTypes.string,
}
export default TextAlignVertical