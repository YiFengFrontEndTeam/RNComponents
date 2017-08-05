/**
 * Created by otto on 2017/7/20.
 */

"use strict";

import React, {PropTypes, PureComponent} from 'react'
import {StyleSheet, Dimensions, Modal, ActivityIndicator, View, Text} from 'react-native'

const {width, height} = Dimensions.get('window')
const boxHeightDefault = 100
const loadingTextFontSizeDefault = 15
const borderRadiusDefault = 10

export default class Loading extends PureComponent {

    static propTypes = {
        animationType: PropTypes.oneOf(['fade', 'slide']),
        activityIndicatorColor: PropTypes.string,
        loadingText: PropTypes.string.isRequired,
        textStyle: React.PropTypes.any,
        loadingStyle: React.PropTypes.any,
        autoDismiss: PropTypes.bool,
        autoShowDuration: PropTypes.number,
        withoutActivityIndicator: PropTypes.bool,
    }

    autoDismiss

    constructor(props) {
        super(props)
        this.state = {
            isShow: false,
            showPosition: 'center',//默认居中显示
            sideDistance: 0, //距离边框距离
        }
    }

    componentWillUnmount() {
        this.autoDismiss && clearTimeout(this.autoDismiss)
    }

    render() {

        const {animationType = 'fade', activityIndicatorColor, loadingText, textStyle, loadingStyle, withoutActivityIndicator = false} = this.props
        let boxHeight = boxHeightDefault
        const boxStylePass = StyleSheet.flatten(loadingStyle)
        if (boxStylePass && boxStylePass.height) {
            boxHeight = boxStylePass.height
        }
        let loadingTextFontSize = loadingTextFontSizeDefault
        const textStylePass = StyleSheet.flatten(textStyle)
        if (textStylePass && textStylePass.fontSize) {
            loadingTextFontSize = textStylePass.fontSize
        }

        let hideActivityIndicator = withoutActivityIndicator

        let boxMarginTop = (height - boxHeight) / 2
        if (this.state.showPosition == 'top') {
            boxMarginTop = this.state.sideDistance
            hideActivityIndicator = true
        } else if (this.state.showPosition == 'bottom') {
            boxMarginTop = height - boxHeight - this.state.sideDistance
        }

        return (
            <Modal
                animationType={animationType}
                transparent={true}
                visible={this.state.isShow}
                onRequestClose={() => {
                    //alert("Modal has been closed.")
                }}
                style={styles.container}>
                <View
                    style={[
                        styles.load_box,
                        loadingStyle,
                        {
                            width: this.state.showPosition == 'top' ? width : null,
                            height: hideActivityIndicator ? loadingTextFontSize * 3 : boxHeightDefault,
                            borderRadius: this.state.showPosition == 'top' ? 0 : borderRadiusDefault,
                            justifyContent: 'center',
                            marginTop: boxMarginTop,
                        }
                    ]}
                    onLayout={({nativeEvent: e}) => {
                        console.warn(`nativeEvent:${JSON.stringify(e)}`)
                    }}>
                    {
                        !hideActivityIndicator ? <ActivityIndicator animating={true}
                                                                    color={activityIndicatorColor || '#FFF'}
                                                                    size={'large'}
                                                                    style={styles.load_progress}/> : null
                    }
                    <Text
                        numberOfLines={1}
                        style={[styles.load_text, textStyle, {
                            marginTop: loadingTextFontSize / 2,
                            maxWidth: this.state.showPosition == 'top' ? width - 20 * 2 : boxHeightDefault * 2,
                        }]}
                        onLayout={({nativeEvent: e}) => {
                            console.warn(`nativeEvent of text:${JSON.stringify(e)}`)
                        }}>
                        {loadingText}
                    </Text>
                </View>
            </Modal>
        )
    }

    /**
     * 显示activityIndicator， 默认居中显示
     * @param autoDismissParam
     * @param autoShowDurationParam
     */
    show = (autoDismissParam, autoShowDurationParam) => {
        this.setState({isShow: true, showPosition: 'center'})
        this._setupAutoDismiss(autoDismissParam, autoShowDurationParam)
    }

    /**
     * 靠页面顶部显示
     * @param marginTop
     */
    showAsFallDownTip = (marginTop) => {
        this.setState({isShow: true, showPosition: 'top', sideDistance: marginTop})
        this._setupAutoDismiss()
    }

    /**
     * 靠页面底部显示
     * @param marginBottom
     */
    showInBottom = (marginBottom) => {
        this.setState({isShow: true, showPosition: 'bottom', sideDistance: marginBottom})
        this._setupAutoDismiss()
    }

    dismiss = () => {
        this.setState({isShow: false})
    }

    _setupAutoDismiss = (autoDismissParam, autoShowDurationParam) => {
        let {autoDismiss = false, autoShowDuration = 2000} = this.props
        if (autoDismissParam !== undefined) {
            autoDismiss = autoDismissParam
        }
        if (autoShowDurationParam !== undefined) {
            autoShowDuration = autoShowDurationParam
        }
        autoDismiss && (this.autoDismiss = setTimeout(this.dismiss, autoShowDuration))
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    load_box: {
        height: boxHeightDefault,
        backgroundColor: '#0008',
        alignItems: 'center',
        borderRadius: borderRadiusDefault,
        alignSelf: 'center',
        paddingHorizontal: 20,
    },
    load_progress: {
        width: 40,
        height: 40,
    },
    load_text: {
        color: '#FFF',
        fontSize: loadingTextFontSizeDefault,
        marginTop: loadingTextFontSizeDefault / 2
    }
})
