/**
 * Created by otto on 2017/7/20.
 */

import React, {} from 'react'
import {View, StyleSheet} from 'react-native'
import {observer} from 'mobx-react'
import {observable, action} from 'mobx'
import BasePage from '../basePage'
import Button from '../../../library/component/button'
import Loading from '../../../library/component/loading'
import ToastTopTip from '../../../library/component/toastTopTip'
import GlobalStyle from '../../styles/styles'

@observer
export default class ActivityIndicatorPage extends BasePage {

    loading
    @observable
    animationType = 'fade'
    @observable
    activityIndicatorColor = 'white'
    @observable
    loadingText = 'activityIndicator adsafsadfsadf sadfasdfasdfasfasasdfa'
    @observable
    textStyle = undefined
    @observable
    autoDismiss = true
    @observable
    withoutActivityIndicator = false

    toastBgColorArray = ['#0008', 'red', 'green', 'yellow']
    toastTopTip
    bgColorIndex = 0
    @observable
    toastBgColor = this.toastBgColorArray[this.bgColorIndex]

    initPageStore() {
        super.initPageStore()
        this.showAsStaticPage()
    }

    getTitle() {
        return 'ActivityIndicator'
    }

    renderContent() {
        return (
            <View style={styles.container}>
                <Button children='show fadeIn' onPress={this.showNormal}/>
                <Button children='show slideIn' onPress={this.showSlideIn}/>
                <Button children='show top' onPress={this.showAsTopTip}/>
                <Button children='show bottom' onPress={this.showInBottom}/>
                <Button children='show top tip' onPress={this.showTopTip}/>
                <Loading ref={ref => this.loading = ref}
                         animationType={this.animationType}
                         activityIndicatorColor={this.activityIndicatorColor}
                         loadingText={this.loadingText}
                         textStyle={this.textStyle}
                         loadingStyle={undefined}
                         autoDismiss={this.autoDismiss}
                         autoShowDuration={3000}
                         withoutActivityIndicator={this.withoutActivityIndicator}/>
                <ToastTopTip ref={ref => this.toastTopTip = ref}
                             marginTop={GlobalStyle.sizes.title_bar_height + GlobalStyle.sizes.status_bar_height}
                             tipBoxStyle={{backgroundColor: this.toastBgColor}}/>
            </View>
        )
    }

    show = () => {
        setTimeout(() => this.loading && this.loading.show(), 100)
    }

    @action
    showNormal = () => {
        this.animationType = 'fade'
        this.show()
    }

    @action
    showSlideIn = () => {
        this.animationType = 'slide'
        this.show()
    }

    @action
    showAsTopTip = () => {
        //this.animationType = 'slide'
        this.animationType = 'fade'
        setTimeout(() => {
            this.loading && this.loading.showAsFallDownTip(GlobalStyle.sizes.title_bar_height + GlobalStyle.sizes.status_bar_height)
        }, 100)
    }

    @action
    showInBottom = () => {
        this.animationType = 'slide'
        setTimeout(() => {
            this.loading && this.loading.showInBottom(GlobalStyle.sizes.title_bar_height)
        }, 100)
    }

    @action
    showTopTip = () => {
        this.toastBgColor = this.toastBgColorArray[this.bgColorIndex]
        this.toastTopTip && this.toastTopTip.show(`hello, I'm a toast.`, 200, 3000)
        this.bgColorIndex = (this.bgColorIndex + 1) % this.toastBgColorArray.length
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: GlobalStyle.sizes.size_100,
    },
})
