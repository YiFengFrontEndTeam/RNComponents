/**
 * Created by otto on 2017/6/26.
 */

import React, {PropTypes} from 'react'
import {StyleSheet, View, Text, Image} from 'react-native'
import TextAlignVertical from './textAlignVertical'

const TextWithDrawableRight = ({text, textStyle, icon, iconStyle, paddingBetween, rootStyle}) => {
    return (
        <View style={[styles.constructor, rootStyle]}>
            <TextAlignVertical text={text} style={[textStyle, {paddingRight: paddingBetween}]}/>
            <Image source={icon} style={iconStyle}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

TextWithDrawableRight.prototype = {
    text: PropTypes.string,
    textStyle: PropTypes.number,
    icon: PropTypes.number,
    iconStyle: PropTypes.number,
    paddingBetween: PropTypes.number,
    rootStyle: PropTypes.number,
}
export default TextWithDrawableRight