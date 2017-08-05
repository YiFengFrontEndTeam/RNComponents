/**
 * Created by otto on 2017/6/27.
 */

import React, {} from 'react'
import {View,} from 'react-native'

import {observer} from 'mobx-react'
import Carousel from 'react-native-looped-carousel'

import BasePage from '../basePage'
import GlobalStyle from '../../styles/styles'

@observer
export default class CarouselPage extends BasePage {

    initPageStore() {
        super.initPageStore()
        this.pageStore.showAsStaticPage()
        //this.pageStore.onError()
        //this.pageStore.onEmpty()
    }

    getTitle() {
        return 'Carousel'
    }

    renderContent() {

        const WINDOW_WIDTH = GlobalStyle.screen.width

        return (
            <Carousel
                style={{width: WINDOW_WIDTH, height: WINDOW_WIDTH * 0.618}}
                autoplay={true}>
                <View style={{backgroundColor: '#6C7A89', flex: 1}}/>
                <View style={{backgroundColor: '#019875', flex: 1}}/>
                <View style={{backgroundColor: '#E67E22', flex: 1}}/>
            </Carousel>
        )
    }
}