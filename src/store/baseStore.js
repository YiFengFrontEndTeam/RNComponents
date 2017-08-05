/**
 * Created by otto on 2017/6/23.
 */

import {observable, action} from 'mobx'
import * as Constants from '../constants/constants'

export default class BaseStore {

    @observable
    loadingState = Constants.LOADING_STATE.LOADING

    constructor() {

    }

    loadData() {

    }

    @action
    updateLoadingState(loadingState) {
        this.loadingState = loadingState
    }

    /**
     * 标记为静态页面
     */
    showAsStaticPage() {
        this.onSuccess()
    }

    onLoading() {
        this.updateLoadingState(Constants.LOADING_STATE.LOADING)
    }

    onSuccess() {
        this.updateLoadingState(Constants.LOADING_STATE.SUCCESS)
    }

    onEmpty() {
        this.updateLoadingState(Constants.LOADING_STATE.EMPTY)
    }

    onError() {
        this.updateLoadingState(Constants.LOADING_STATE.ERROR)
    }

    onRetry() {
        this.updateLoadingState(Constants.LOADING_STATE.LOADING)
        this.loadData()
    }

    /**
     * 是否正在加载
     * @returns {boolean}
     */
    isLoading() {
        return this.getCurrentLoadingState() === Constants.LOADING_STATE.LOADING
    }

    /**
     * 是否加载成功
     * @returns {boolean}
     */
    isLoadingSuccess() {
        return this.getCurrentLoadingState() === Constants.LOADING_STATE.SUCCESS
    }

    /**
     * 是否加载结果为空
     * @returns {boolean}
     */
    isEmpty() {
        return this.getCurrentLoadingState() === Constants.LOADING_STATE.EMPTY
    }

    /**
     * 是否加载出错
     * @returns {boolean}
     */
    isError() {
        return this.getCurrentLoadingState() === Constants.LOADING_STATE.ERROR
    }

    /**
     * 当前加载状态
     * @returns {*}
     */
    getCurrentLoadingState() {
        return this.loadingState
    }

}