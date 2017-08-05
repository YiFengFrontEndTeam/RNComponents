/**
 * Created by otto on 2017/6/23.
 */

"use strict";

import React, {PropTypes} from 'react'

import {observer} from 'mobx-react'
import SplashScreen from 'react-native-splash-screen'

import BasePageNoTitleBar from './basePageNoTitleBar'
import MainTab from './mainTab'
import GuidePage from './guidePage'
import AppStore from '../store/appStore'

@observer
export default class MainPage extends BasePageNoTitleBar {

    componentDidMount() {
        super.componentWillMount()
        AppStore.readIsFirstTimeIn()
            .then(data => console.warn(`read data from realm...`))
            .catch(e => {
            })
            .finally(() => setTimeout(SplashScreen.hide, 1500))
    }

    initPageStore() {
        super.initPageStore()
        this.pageStore.showAsStaticPage()
    }

    renderContent() {
        return AppStore.isGuidePageShowed ? <MainTab/> : <GuidePage pageStore={AppStore}/>
    }
}