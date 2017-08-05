/**
 * Created by otto on 2017/7/20.
 */

"use strict";

import React, {PropTypes, PureComponent} from 'react'
import {StyleSheet, Modal, Animated, Easing, Dimensions, Text} from 'react-native'

const {width, height} = Dimensions.get('window')
const tipBoxHeightDefault = 50
const tipTextFontSizeDefault = 15

export default class ToastTopTip extends PureComponent {

    static propTypes = {
        marginTop: PropTypes.number,
        tipBoxStyle: PropTypes.number,
    }

    maxHeight
    autoDismiss

    constructor(props) {
        super(props)
        this.state = {
            isShow: false,
            tip: '',
            animationHeight: new Animated.Value(0),
        }
    }

    componentWillUnmount() {
        this.autoDismiss && clearTimeout(this.autoDismiss)
    }

    render() {

        const {marginTop, tipBoxStyle} = this.props

        this.maxHeight = tipBoxHeightDefault
        let textFontSize = tipTextFontSizeDefault
        const tipBoxStylePass = StyleSheet.flatten(tipBoxStyle)

        if (tipBoxStylePass) {
            if (tipBoxStylePass.height) {
                this.maxHeight = tipBoxStylePass.height
            }
            if (tipBoxStylePass.fontSize) {
                textFontSize = tipBoxStylePass.fontSize
            }
        }


        return (
            <Modal
                animationType={'none'}
                transparent={true}
                visible={this.state.isShow}
                onRequestClose={() => {
                    //alert("Modal has been closed.")
                }}
                style={styles.container}>
                <Animated.Text
                    numberOfLines={1}
                    style={[
                        styles.tipBoxStyle,
                        tipBoxStyle,
                        {
                            height: this.state.animationHeight,
                            fontSize: textFontSize,
                            marginTop: marginTop,
                            paddingTop: (this.maxHeight - textFontSize) / 2
                        }
                    ]}>
                    {this.state.tip}
                </Animated.Text>
            </Modal>
        )
    }

    show = (tip, animationDuration, toastTime) => {
        this.setState({isShow: true, tip: tip})
        Animated.spring(this.state.animationHeight, {
            toValue: this.maxHeight,
            duration: animationDuration,
            //easing: Easing.ease
            //useNativeDriver: true,
        }).start()
        setTimeout(() => {
            Animated.spring(this.state.animationHeight, {
                toValue: 0,
                duration: animationDuration,
                //easing: Easing.ease
                //useNativeDriver: true,
            }).start()
            setTimeout(() => this.setState({isShow: false, tip: ''}), animationDuration)
        }, toastTime + animationDuration)
    }

}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    tipBoxStyle: {
        width: width,
        height: 0,
        backgroundColor: '#0008',
        borderRadius: 0,
        paddingHorizontal: 20,
        color: '#FFF',
        fontSize: tipTextFontSizeDefault,
        textAlign: 'center',
        textAlignVertical: 'center',
    }
});