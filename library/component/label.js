/**
 * Created by otto on 2017/7/7.
 */

"use strict";

import React, {PureComponent, PropTypes} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    Platform
} from 'react-native'
import isEqual from 'lodash.isequal'

export default class Label extends PureComponent {

    isAndroid = (Platform.OS == 'android')

    static propTypes = {
        text: PropTypes.string.isRequired,
        normalStyle: Text.propTypes.style,
        selectedStyle: Text.propTypes.style,
        touchOpacity: PropTypes.bool, //触摸时ui样式是否有反馈
        touchHighLight: PropTypes.bool, //触摸时高亮，显示选中时样式
        selected: PropTypes.bool, //是否选中
        onPress: PropTypes.func,
    }

    constructor(props) {
        super(props)
        this.state = {
            pressIn: false, //是否已触摸
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !isEqual(nextProps, this.props) || !isEqual(nextState, this.state)
    }

    render() {
        const {
            text,
            normalStyle,
            selectedStyle,
            onPress,
            touchOpacity,
            touchHighLight,
            selected
        } = this.props

        const orgStyle = StyleSheet.flatten(normalStyle) || {};
        let paddingTop
        if (orgStyle && orgStyle.height && orgStyle.fontSize) {
            paddingTop = (orgStyle.height - orgStyle.fontSize) / 2;
        }

        const orgSelectedStyle = StyleSheet.flatten(selectedStyle) || {}

        let child = (
            <View style={{
                flex: orgStyle.flex || orgSelectedStyle.flex,
                margin:orgStyle.margin || orgSelectedStyle.margin,
                marginLeft: orgStyle.marginLeft || orgSelectedStyle.marginLeft,
                marginTop: orgStyle.marginTop || orgSelectedStyle.marginTop,
                marginRight: orgStyle.marginRight || orgSelectedStyle.marginRight,
                marginBottom: orgStyle.marginBottom || orgSelectedStyle.marginBottom,
            }}>
                <Text
                    style={[
                        {paddingTop: !this.isAndroid ? paddingTop : null,},
                        styles.labelStyle,
                        (selected || this.state.pressIn) ? selectedStyle : normalStyle,
                        {marginLeft: 0, marginTop: 0, marginRight: 0, marginBottom: 0, margin: 0}
                    ]}>
                    {text}
                </Text>
            </View>
        )
        let touchableProps = {
            onPress: onPress,
            onPressIn: () => this.toggleHighLight(touchHighLight, true),
            onPressOut: () => this.toggleHighLight(touchHighLight, false),
        }
        if (touchOpacity) {
            if (this.isAndroid) {
                touchableProps = Object.assign(touchableProps, {
                    background: this.props.background || TouchableNativeFeedback.SelectableBackground()
                });
                return <TouchableNativeFeedback {...touchableProps}>{child}</TouchableNativeFeedback>
            }
            return <TouchableOpacity {...touchableProps}>{child}</TouchableOpacity>
        } else {
            return <TouchableWithoutFeedback {...touchableProps}>{child}</TouchableWithoutFeedback>
        }

    }

    toggleHighLight = (touchHighLight, isHighLight) => {
        if (!touchHighLight) {
            return
        }
        this.setState({pressIn: isHighLight})
    }

}

const styles = StyleSheet.create({
    labelStyle: {
        overflow: 'hidden',
        textAlignVertical: 'center',
        textAlign: 'center',
    }
})