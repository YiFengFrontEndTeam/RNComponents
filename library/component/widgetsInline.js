/**
 * Created by otto on 2017/7/7.
 */

"use strict";

import React, {PropTypes} from 'react'
import {
    StyleSheet,
    View,
    TouchableOpacity,
    TouchableWithoutFeedback,
    TouchableNativeFeedback,
    Platform
} from 'react-native'

const WidgetsBetween = ({justifyContent = 'flex-start', flexDirection = 'row', children, onPress, touchOpacity, style}) => {

    const isAndroid = Platform.OS == 'android'

    const childFinal = []
    if (children && children.length > 0) {
        children.map((e,index)=> {
            if (React.isValidElement(e)) {
                console.warn(`element:${e}`)
                //e.key= index
                childFinal.push(e)
            }
        })
    }
    const contentView = (
        <View style={[styles.container, {flexDirection: flexDirection, justifyContent: justifyContent}, style]}>
            {childFinal}
        </View>
    )

    let touchableProps = {
        onPress: onPress,
    }

    if (touchOpacity) {
        if (isAndroid) {
            return <TouchableNativeFeedback {...touchableProps}>{contentView}</TouchableNativeFeedback>
        }
        return <TouchableOpacity {...touchableProps}>{contentView}</TouchableOpacity>
    } else {
        return <TouchableWithoutFeedback {...touchableProps}>{contentView}</TouchableWithoutFeedback>
    }
}

WidgetsBetween.prototype = {
    justifyContent: PropTypes.oneOfType(['flex-start', 'flex-end', 'center', 'space-around', 'space-between']),
    children: PropTypes.element,
    onPress: PropTypes.func,
    touchOpacity: PropTypes.bool,
    style: View.style,
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default WidgetsBetween