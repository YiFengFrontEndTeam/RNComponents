/**
 * Created by otto on 2017/7/10.
 */

"use strict";

import React, {PropTypes, PureComponent} from 'react'
import {View, Text, Image, TouchableWithoutFeedback, TouchableOpacity} from 'react-native'

import isEqual from 'lodash.isequal'

export default class TextWithDrawable extends PureComponent {

    static propTypes = {
        text: PropTypes.string.isRequired,
        drawable: PropTypes.number.isRequired,
        textStyle: Text.propTypes.style,
        drawableStyle: Image.prototype.style,
        drawablePosition: PropTypes.oneOf(['left', 'top', 'right', 'bottom']),
        paddingBetween: PropTypes.number,
        style: View.propTypes.style,
        touchOpacity: PropTypes.bool,
        onPress: PropTypes.func,
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !isEqual(nextProps, this.props) || !isEqual(nextState, this.state)
    }

    render() {
        const {
            text,
            drawable,
            textStyle,
            drawableStyle,
            drawablePosition = 'left',
            paddingBetween,
            style,
            touchOpacity,
            onPress,
        } = this.props

        let flexDirection = 'column'
        if (drawablePosition == 'left' || drawablePosition == 'right') {
            flexDirection = 'row'
        }
        const drawableLeftOrTop = drawablePosition == 'left' || drawablePosition == 'top'

        let textStyleFinal = [textStyle]
        if (drawablePosition == 'left') {
            textStyleFinal.push({marginLeft: paddingBetween})
        } else if (drawablePosition == 'top') {
            textStyleFinal.push({marginTop: paddingBetween})
        } else if (drawablePosition == 'right') {
            textStyleFinal.push({right: paddingBetween})
        } else if (drawablePosition == 'bottom') {
            textStyleFinal.push({bottom: paddingBetween})
        }

        const img = <Image style={drawableStyle} source={drawable}/>

        let child = (
            <View key={text}
                  style={[{flexDirection: flexDirection, alignItems: 'center', justifyContent: 'center'}, style]}>
                {
                    drawableLeftOrTop ? img : null
                }
                <Text
                    style={textStyleFinal}>{text}</Text>
                {
                    drawableLeftOrTop ? null : img
                }
            </View>
        )

        if (touchOpacity) {
            return <TouchableOpacity onPress={onPress}>{child}</TouchableOpacity>
        } else {
            return <TouchableWithoutFeedback onPress={onPress}>{child}</TouchableWithoutFeedback>
        }
    }
}


