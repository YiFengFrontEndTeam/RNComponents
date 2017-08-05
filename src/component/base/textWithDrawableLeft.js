/**
 * Created by otto on 2017/6/26.
 */

import React, {PropTypes} from 'react'
import {StyleSheet, View, Text, Image} from 'react-native'
import TextAlignVertical from './textAlignVertical'

const TextWithDrawableLeft = ({text, textStyle, icon, iconStyle, paddingBetween, rootStyle}) => {
    return (
        <View style={[styles.constructor, rootStyle]}>
            <Image source={icon} style={iconStyle}/>
            <TextAlignVertical text={text} style={[textStyle, {paddingLeft: paddingBetween}]}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

TextWithDrawableLeft.prototype = {
    text: PropTypes.string,
    textStyle: PropTypes.number,
    icon: PropTypes.number,
    iconStyle: PropTypes.number,
    paddingBetween: PropTypes.number,
    rootStyle: PropTypes.number,
}
export default TextWithDrawableLeft