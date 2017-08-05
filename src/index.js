/**
 * Created by otto on 2017/6/23.
 */

"use strict";

import React, {PureComponent} from 'react'
import {Text} from 'react-native'
import {Router, Scene, Modal, Reducer} from 'react-native-router-flux'
import Toast from '@remobile/react-native-toast'

import StorageService from './service/storageService' //用于初始化存储服务

import ExamPage from './page/exam/examPage'
import ErrorPage from './page/exam/errorPage'
import CarouselPage from './page/exam/carouselPage'
import LightboxPage from './page/exam/lightboxPage'
import FlatListPage from './page/exam/flatListPage'
import ClassicListPage from './page/exam/classicListPage'
import ProgressImagePage from './page/exam/progressImagePage'
import ProgressiveImagePage from './page/exam/progressiveImagePage'
import DialogPage from './page/exam/dialogPage'
import SwipeOutPage from './page/exam/swipeOutPage'
import SwipeCardsPage from './page/exam/swipeCardsPage'
import ScrollableTabViewPage from './page/exam/scrollableTabViewPage'
import ProgressBarPage from './page/exam/progressBarPage'
import CardSwiperPage from './page/exam/cardSwiperPage'
import LabelPage from './page/exam/labelPage'
import WidgetsPage from './page/exam/widgetsPage'
import TitleBarPage from './page/exam/titleBarPage'
import TextWithDrawablePage from './page/exam/textWithDrawablePage'
import VideoPage from './page/exam/videoPage'
import VideoPageAndroid from './page/exam/videoPageAndroid'
import VideoPlayH5 from './page/exam/videoPlayH5Page'
import ActivityIndicatorPage from './page/exam/activityIndicatorPage'
import CheckboxPage from './page/exam/checkBoxPage'
import ProductDetailPage from './page/exam/ProductDetailPage'
import SwitchPage from './page/exam/switchPage'

import MainPage from './page/mainPage'

if (!__DEV__) {
    const emptyFun = () => {
    }
    global.console = {
        info: emptyFun,
        log: emptyFun,
        warn: emptyFun,
        error: emptyFun(),
    }
}

const reducerCreator = (params) => {
    const defaultReducer = new Reducer(params)
    return (state, action) => {
        return defaultReducer(state, action)
    }
}

const getSceneStyle = (props, computedProps) => {
    return {flex: 1}
}

let lastBackPressed
const onExitApp = () => {
    if (lastBackPressed && lastBackPressed + 2000 >= Date.now()) {
        /** 最近2秒内按过back键，可以退出应用*/
        return false;
    }
    lastBackPressed = Date.now();
    Toast.show('再按一次退出应用');
    return true;
}

console.disableYellowBox = true;

export default class EH extends PureComponent {
    render() {
        return (
            <Router onExitApp={onExitApp}
                    createReducer={reducerCreator}
                    getSceneStyle={getSceneStyle}>
                <Scene key='modal' component={Modal}>
                    <Scene key='root' hideTabBar={true} hideNavBar={true} duration={220}>
                        <Scene key='mainPage' component={MainPage} initial={true} type='reset'/>

                        <Scene key='examPage' component={ExamPage}/>
                        <Scene key='carouselPage' component={CarouselPage}/>
                        <Scene key='lightboxPage' component={LightboxPage}/>
                        <Scene key='flatListPage' component={FlatListPage}/>
                        <Scene key='classicListPage' component={ClassicListPage}/>
                        <Scene key='progressImagePage' component={ProgressImagePage}/>
                        <Scene key='progressiveImagePage' component={ProgressiveImagePage}/>
                        <Scene key='errorPage' component={ErrorPage}/>
                        <Scene key='dialogPage' component={DialogPage}/>
                        <Scene key='swipeOutPage' component={SwipeOutPage}/>
                        <Scene key='swipeCardsPage' component={SwipeCardsPage}/>
                        <Scene key='scrollableTabViewPage' component={ScrollableTabViewPage}/>
                        <Scene key='progressBarPage' component={ProgressBarPage}/>
                        <Scene key='cardSwiperPage' component={CardSwiperPage}/>
                        <Scene key='labelPage' component={LabelPage}/>
                        <Scene key='widgetsPage' component={WidgetsPage}/>
                        <Scene key='textWithDrawablePage' component={TextWithDrawablePage}/>
                        <Scene key='titleBarPage' component={TitleBarPage}/>
                        <Scene key='videoPage' component={VideoPage}/>
                        <Scene key='videoPageAndroid' component={VideoPageAndroid}/>
                        <Scene key='videoPlayH5' component={VideoPlayH5}/>
                        <Scene key='activityIndicatorPage' component={ActivityIndicatorPage}/>
                        <Scene key='checkboxPage' component={CheckboxPage}/>
                        <Scene key='ProductDetailPage' component={ProductDetailPage}/>
                        <Scene key='switchPage' component={SwitchPage}/>
                    </Scene>
                    {/*<Scene key='globalDialogPage' name='globalDialogPage'
                     component={GlobalDialogPage} title='GlobalDialogPage'
                     getSceneStyle={() => {
                     return {backgroundColor: '#00000000'}
                     }}
                     />*/}
                </Scene>
            </Router>
        )
    }
}