/**
 * Created by otto on 2017/6/23.
 */

"use strict";

import {observable, action} from 'mobx'

import StorageService from '../service/storageService'
import BaseStore from './baseStore'
import * as Constants from '../constants/constants'

class AppStore extends BaseStore {

    selectedTabIndex = 0
    @observable
    selectedTab = Constants.TABS[0]
    @observable
    tabDemoDotVisible = true

    @observable
    isGuidePageShowed = true
    @observable
    storageLoadTime

    constructor() {
        super()
        this.showAsStaticPage()
    }

    readIsFirstTimeIn = async () => {
        const time1 = new Date().getTime()
        try {
            const isFirstTimeIn = await StorageService.readIsFirstTimeIn()
            this.storageLoadTime = new Date().getTime() - time1
            this.updateGuidePageFlag(isFirstTimeIn)
        } catch (e) {
            this.updateGuidePageFlag(false)
        }
        //const timeCost = new Date().getTime() - time1
        //console.log(`react-native-storage[load method]:${timeCost}`)

    }

    setGuidePageUsed = () => {
        this.updateGuidePageFlag(true)
        StorageService.setupIsFirstTimeIn(true)
    }

    @action
    updateGuidePageFlag(isGuidePageShowed) {
        this.isGuidePageShowed = isGuidePageShowed
    }

    @action
    onTabSelected = (tabIndex) => {
        if (this.selectedTabIndex == tabIndex) {
            return
        }
        this.selectedTab = Constants.TABS[tabIndex]
        this.selectedTabIndex = tabIndex
    }
}

export default new AppStore()