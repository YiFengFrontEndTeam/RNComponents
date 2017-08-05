/**
 * Created by otto on 2017/6/27.
 */

"use strict"

import React, {PropTypes, PureComponent} from 'react'
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native'

import {observer} from 'mobx-react'
import {observable, action} from 'mobx'

import TextAlignVertical from './textAlignVertical'

import * as Constants from '../../constants/constants'
import GlobalStyle from '../../styles/styles'
import * as NetworkUtil from '../../utils/networkUtil'

@observer
export default class ExceptionLayout extends PureComponent {

    static propTypes = {
        status: PropTypes.oneOf(Constants.LOADING_STATE),
        exceptionImg: PropTypes.number,
        exceptionMsg: PropTypes.string,
        retryBtnLabel: PropTypes.string,
        onRetry: PropTypes.func,
        showRetryBtn: PropTypes.bool,
    }

    //监听网络状态

    @observable
    netState

    constructor() {
        super()
        this.initNetStatus()
        NetworkUtil.listenConnectivityChange((netStatus) => {
            console.warn(`net state changed:${netStatus}`)
            this.updateNetState(NetworkUtil.parseNetStatus(netStatus))
        })
    }

    initNetStatus = async () => {
        const netState = await NetworkUtil.fetchNetInfo()
        this.updateNetState(netState)
    }

    @action
    updateNetState = (netState) => {
        this.netState = netState
    }

    render() {
        let {status, exceptionImg, exceptionMsg, retryBtnLabel = '重新加载', onRetry, showRetryBtn = false} = this.props

        if (Constants.LOADING_STATE.LOADING == status) {
            return (
                <View style={styles.container}>
                    <Image
                        style={styles.loadingImg}
                        source={require('../../resource/image/loading.gif')}/>
                </View>
            )
        } else {
            if (!this.netState && Constants.LOADING_STATE.EMPTY != status) { //无网络
                exceptionImg = require('../../resource/image/ic_network_error.png')
                exceptionMsg = '无网络~'
                showRetryBtn = true
            }
            return (
                <View style={styles.container}>
                    <Image
                        style={styles.img}
                        source={exceptionImg}/>
                    <Text style={styles.exceptionMsg}>{exceptionMsg}</Text>
                    {
                        showRetryBtn &&
                        <TouchableOpacity onPress={onRetry}>
                            <TextAlignVertical text={retryBtnLabel} style={styles.retryBtn}/>
                        </TouchableOpacity>
                    }
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: GlobalStyle.colors.white,
    },
    loadingImg: {
        width: GlobalStyle.sizes.size_32,
        height: GlobalStyle.sizes.size_32,
    },
    img: {
        width: GlobalStyle.sizes.size_158,
        height: GlobalStyle.sizes.size_158,
        resizeMode: Image.resizeMode.contain,
    },
    exceptionMsg: {
        color: GlobalStyle.colors.color_font_second,
        fontSize: GlobalStyle.fonts.font_26,
        padding: GlobalStyle.sizes.size_40,
    },
    retryBtn: {
        color: GlobalStyle.colors.color_font_second,
        height: GlobalStyle.sizes.size_50,
        fontSize: GlobalStyle.fonts.font_24,
        borderColor: GlobalStyle.colors.color_font_second,
        borderRadius: GlobalStyle.sizes.size_10,
        borderWidth: GlobalStyle.sizes.size_1,
        paddingLeft: GlobalStyle.sizes.size_20,
        paddingRight: GlobalStyle.sizes.size_20,
    },
})

