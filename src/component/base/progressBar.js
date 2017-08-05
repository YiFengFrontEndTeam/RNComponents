/**
 * Created by otto on 2017/6/29.
 */

import React, {PureComponent, PropTypes} from 'react'
import {View, Image, Platform, Animated} from 'react-native'
import StyleConfig from '../../styles/styles'


export default class ProgressBar extends PureComponent {

    static propTypes = {
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        animated: PropTypes.bool,
        overlayColor: PropTypes.string,
        backgroundColor: PropTypes.string,
        backgroundImage: PropTypes.number,
        foregroundColor: PropTypes.string,
        foregroundImage: PropTypes.number,
        borderRadius: PropTypes.number,
        percent: PropTypes.number.isRequired,
        oldPercent: PropTypes.number,
    }

    oldPercent = 0


    constructor(props) {
        super(props)
        this.state = {
            widthInit: props.width,
            pregressViewWidth: new Animated.Value(((this.props.percent || 0) / 100 * props.width)),
        }
        this.oldPercent = this.props.percent
    }

    updatePercent = (percent) => {
        if (percent < 0) {
            percent = 0
        } else if (percent > 100) {
            percent = 100
        }
        const width = (this.state.widthInit - StyleConfig.sizes.size_8)
        if (this.props.animated) {
            this.state.pregressViewWidth.setValue(((this.oldPercent || 0) / 100.0 * width))
            Animated.spring(this.state.pregressViewWidth, {
                toValue: ( width * (percent / 100.0)),
                duration: 500,
            }).start();
        } else {
            this.state.pregressViewWidth.setValue((this.state.widthInit - StyleConfig.sizes.size_8) * (percent / 100.0))
        }
        this.oldPercent = percent
    }

    updateProgressBar = (percent) => {
        if (percent === undefined || percent === 0) {
            return
        }
        this.updatePercent(percent)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.percent !== undefined) {
            this.updateProgressBar(nextProps.percent)
        }
    }


    pregressView = (foregroundImage, overlayColor, height, foregroundColor, cursorLeftRadius) => {
        return (
            foregroundImage ?
                <Animated.Image
                    style={{
                        width: this.state.pregressViewWidth,
                        height: height - StyleConfig.sizes.size_8,
                        resizeMode: Image.resizeMode.stretch,
                        overlayColor: overlayColor,
                        overflow: 'hidden',
                        backgroundColor: foregroundColor,
                        borderRadius: cursorLeftRadius,
                        marginVertical: StyleConfig.sizes.size_4,
                        marginHorizontal: StyleConfig.sizes.size_4,
                    }}
                    source={foregroundImage}/>
                :
                <Animated.View
                    style={{
                        width: this.state.pregressViewWidth,
                        height: height - StyleConfig.sizes.size_8,
                        backgroundColor: foregroundColor,
                        borderRadius: cursorLeftRadius,
                        marginHorizontal: StyleConfig.sizes.size_4,
                        marginVertical: StyleConfig.sizes.size_4,
                    }}/>
        )
    }

    render() {
        const {width, height, overlayColor, backgroundColor, backgroundImage, foregroundColor, foregroundImage, borderRadius} = this.props
        let cursorLeftRadius = borderRadius - StyleConfig.sizes.size_4
        return (
            <View>
                {
                    backgroundImage ?
                        <Image
                            style={{
                                width: width,
                                height: height,
                                resizeMode: Image.resizeMode.cover,
                                overlayColor: overlayColor,
                                overflow: 'hidden',
                                backgroundColor: backgroundColor,
                                borderRadius: borderRadius,
                                alignItems: 'flex-start'
                            }}
                            source={backgroundImage}>
                            {
                                this.pregressView(foregroundImage, overlayColor, height, foregroundColor, cursorLeftRadius)
                            }
                        </Image>
                        :
                        <View
                            style={{
                                width: width,
                                height: height,
                                backgroundColor: backgroundColor,
                                borderRadius: borderRadius,
                                alignItems: 'flex-start'
                            }}>
                            {
                                this.pregressView(foregroundImage, overlayColor, height, foregroundColor, cursorLeftRadius)
                            }
                        </View>
                }
            </View>
        )
    }
}