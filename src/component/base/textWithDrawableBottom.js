/**
 * Created by otto on 2017/6/26.
 */

import React, {PropTypes} from 'react'
import {StyleSheet, View, Text, Image} from 'react-native'
import TextAlignVertical from './textAlignVertical'

const TextWithDrawableBottom = ({text, textStyle, icon, iconStyle, paddingBetween, rootStyle}) => {
    return (
        <View style={[styles.constructor, rootStyle]}>
            <TextAlignVertical text={text} style={[textStyle, {paddingBottom: paddingBetween}]}/>
            <Image source={icon} style={iconStyle}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    }
})

TextWithDrawableBottom.prototype = {
    text: PropTypes.string,
    textStyle: PropTypes.number,
    icon: PropTypes.number,
    iconStyle: PropTypes.number,
    paddingBetween: PropTypes.number,
    rootStyle: PropTypes.number,
}
export default TextWithDrawableBottom