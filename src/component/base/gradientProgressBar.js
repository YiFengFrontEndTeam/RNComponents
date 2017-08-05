/**
 * Created by otto on 2017/6/29.
 */

"use strict";

import React, {PureComponent, PropTypes} from 'react'
import {Image, Text} from 'react-native'
import {observable, action} from 'mobx'
import {observer} from 'mobx-react'

import LinearGradient from 'react-native-linear-gradient'

@observer
export default class GradientProgressBar extends PureComponent {

    static propTypes = {
        colorsBackground: PropTypes.array.isRequired,
        colorsForeground: PropTypes.array,
        backgroundImage: PropTypes.object,
        width: PropTypes.number,
        height: PropTypes.number,
        percent: PropTypes.number,
        borderRadius: PropTypes.number,
        style: PropTypes.number,
    }

    @observable
    percent = -1//进度百分比

    @action
    updatePercent = (percent) => {
        if (percent < 0) {
            percent = 0
        } else if (percent > 100) {
            percent = 100
        }
        this.percent = percent
    }

    renderd() {
        return <LinearGradient
            start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
            locations={[0, 0.5, 0.6]}
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={{width: 300, height: 30, borderRadius: 8}}>
            <Text style={{fontSize: 10, color: 'white'}}>
                Sign in with Facebook
            </Text>
        </LinearGradient>
    }

    render() {

        const {colorsBackground, colorsForeground, backgroundImage, width, height, percent, borderRadius, style} = this.props

        if (this.percent == -1) {
            this.percent = percent
        }

        //console.warn(`percent:${percent} || this.percent:${this.percent}`)

        const cursorWidth = width * (1 - this.percent / 100.0)
        let cursorLeftRadius = 0
        if (width - cursorWidth < borderRadius) {
            cursorLeftRadius = borderRadius
        }

        return (
            <LinearGradient colors={colorsBackground}
                            style={[{
                                width: width,
                                height: height,
                                borderRadius: borderRadius,
                                alignItems: 'flex-end',
                            }, style]}>
                <Image source={backgroundImage}
                       style={{
                           width: cursorWidth,
                           height: height,
                           borderTopLeftRadius: cursorLeftRadius,
                           borderBottomLeftRadius: cursorLeftRadius,
                           borderTopRightRadius: borderRadius,
                           borderBottomRightRadius: borderRadius,
                           resizeMode: Image.resizeMode.cover,
                       }}/>
                {
                    (!backgroundImage && colorsForeground) ?
                        <LinearGradient colors={colorsForeground}
                                        style={{
                                            width: cursorWidth,
                                            height: height,
                                            borderTopLeftRadius: cursorLeftRadius,
                                            borderBottomLeftRadius: cursorLeftRadius,
                                            borderTopRightRadius: borderRadius,
                                            borderBottomRightRadius: borderRadius,
                                            position: 'absolute',
                                            top: 0,
                                            right: 0,
                                            bottom: 0,
                                        }}/>
                        : null
                }
            </LinearGradient>

        )
    }

}