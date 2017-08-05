/**
 * Created by otto on 2017/6/23.
 */

import React, {PropTypes, PureComponent} from 'react'
import {InteractionManager, StyleSheet, View, Text} from 'react-native'
import {Actions} from 'react-native-router-flux'

import DefaultStore from '../store/baseStore'
import TitleBar from '../component/base/titleBar'
import ExceptionLayout from '../component/base/exceptionLayout'

export default class BasePage extends PureComponent {

    static propTypes = {
        pageStore: PropTypes.object
    }

    /**页面数据管理器**/
    pageStore
    /**返回到上一级页面后是否刷新**/
    refreshAfterBack

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (this.props.pageStore) {
            this.pageStore = this.props.pageStore
        } else {
            this.initPageStore()
        }
    }

    componentDidMount() {
        this.loadDataAfterPageAnimation()
    }

    shouldComponentUpdate(nextProps, nextState) {
        const refreshOnResume = nextProps && nextProps.refreshOnResume
        if (refreshOnResume) {
            this.onResume(nextProps.onResumeData)
        }
        return !!refreshOnResume
    }

    componentWillUnmount() {
        this.refreshAfterBackPressed()
    }

    initPageStore() {
        this.pageStore = new DefaultStore()
    }

    showAsStaticPage() {
        this.pageStore && this.pageStore.showAsStaticPage()
    }

    loadDataAfterPageAnimation() {
        InteractionManager.runAfterInteractions(() => {
            this.loadData()
        })
    }

    loadData() {
        this.pageStore.loadData()
    }

    onRetry() {
        this.pageStore.onRetry()
    }

    onResume(data) {
        console.log('onResume')
    }

    isLoading = () => {
        return this.pageStore.isLoading()
    }

    isLoadingSuccess = () => {
        return this.pageStore.isLoadingSuccess()
    }

    isLoadingEmpty = () => {
        return this.pageStore.isEmpty()
    }

    isLoadingError = () => {
        return this.pageStore.isError()
    }

    getCurrentLoadingState = () => {
        return this.pageStore.getCurrentLoadingState()
    }

    getTitle() {
        return 'title'
    }

    /**
     * 标题栏是否显示返回按钮
     * @returns {boolean}
     */
    showBackBtn() {
        return true
    }

    /**
     * 顶部栏返回按钮右侧标签，默认为空
     * @returns {null}
     */
    getBackLabel() {
        return null
    }

    /**
     * 自定义标题栏返回按钮事件
     */
    getBackFunc() {
        return this.back
    }

    /**
     * 顶部栏右侧option label，默认为空
     */
    getOptionLabel() {
        return null
    }

    /**
     * 顶部栏按钮点击事件
     */
    getOptionFunc() {
        return null
    }

    /**
     * 是否使用主色调背景色标题栏
     */
    usePrimaryColorTitleBar() {
        return true
    }

    getTitleStyle() {
        return undefined
    }

    /**
     * 是否要展示title
     * @returns {boolean}
     */
    shouldShowTitle() {
        return true
    }

    renderTitle() {
        return <TitleBar
            title={this.getTitle()}
            backFunc={this.getBackFunc()}
            showBack={this.showBackBtn()}
            backLabel={this.getBackLabel()}
            optionLabel={this.getOptionLabel()}
            optionFunc={this.getOptionFunc()}
            primaryStyle={this.usePrimaryColorTitleBar()}
            style={this.getTitleStyle()}/>
    }

    renderContent() {
        return <Text>Content</Text>
    }

    getLoadingErrorMsg = () => {
        return '噢，加载出错了~'
    }

    getLoadingEmptyMsg = () => {
        return '未加载到数据~'
    }

    getExceptionMsgDefault = () => {
        return this.pageStore.isError() ? this.getLoadingErrorMsg() : this.getLoadingEmptyMsg()
    }

    getLabelOfExceptionLayout = () => {
        return '重新加载'
    }

    getEmptyImg = () => {
        return require('../resource/image/no_data.png')
    }
    getErrorImg = () => {
        return require('../resource/image/on_error.png')
    }
    getExceptionImg = () => {
        return this.isLoadingEmpty() ? this.getEmptyImg() : this.getErrorImg()
    }

    getOnRetry() {
        return this.onRetry
    }

    showRetryBtn() {
        return this.isLoadingError()
    }

    renderExceptionLayout = () => {
        return <ExceptionLayout
            status={this.getCurrentLoadingState()}
            exceptionImg={this.getExceptionImg()}
            exceptionMsg={this.getExceptionMsgDefault()}
            retryBtnLabel={this.getLabelOfExceptionLayout()}
            onRetry={this.getOnRetry().bind(this)}
            showRetryBtn={this.showRetryBtn()}/>
    }

    render() {
        return (
            <View style={styles.base}>
                {this.shouldShowTitle() ? this.renderTitle() : null}
                {
                    this.isLoadingSuccess() ? this.renderContent() : this.renderExceptionLayout()
                }
            </View>
        )
    }


    /**
     * 返回上一级页面并刷新
     */
    refreshAfterBackPressed = () => {
        if (!this.refreshAfterBack) {
            return
        }
        setTimeout(() => Actions.refresh(), 120)
    }

    /**
     * 返回上一级并刷新
     */
    backWithRefresh = () => {
        this.refreshAfterBack = true
        this.back()
    }

    /**
     * 若在当前页面操作完毕返回上一个面后，上一个页面需要刷新，则使用该方法返回上一个页面
     * 该方法的效果类似android 平台的onActivityResult
     * @param data 需要传递到上一个页面的数据
     */
    backWithResult = (data) => {
        Actions.pop({refresh: {refreshOnResume: true, onResumeData: data}})
    }

    /**
     * 返回上一级页面
     */
    back = () => {
        Actions.pop()
    }

}

const styles = StyleSheet.create({
    base: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    }
})