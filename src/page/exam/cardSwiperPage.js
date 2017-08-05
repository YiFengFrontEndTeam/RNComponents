/**
 * Created by otto on 2017/6/30.
 */

"use strict";

import React, {PureComponent} from 'react'
import {StyleSheet, View, Text} from 'react-native'

import CardSwiper from '../../component/base/cardSwiper'

import {observer} from 'mobx-react'

import BasePage from '../basePage'
import GlobalStyle from '../../styles/styles'

const vertical = false
const sr = {
    tw: GlobalStyle.screen.width,
    th: GlobalStyle.screen.height,
}

@observer
export default class CardSwiperPage extends BasePage {

    initPageStore() {
        super.initPageStore()
        this.showAsStaticPage()
    }

    getTitle() {
        return 'Card Swiper'
    }

    renderRow = (obj, index) => {
        return (
            <View style={styles.panel}>
                <Text style={{color: GlobalStyle.colors.white}}>{obj}</Text>
            </View>
        )
    }
    onPressRow = (obj, index) => {
        console.warn('onPressRow', obj, index);
    }
    onChange = (obj, index) => {
        console.warn('onChange', obj, index);
    }

    renderContent() {
        return (
            <View style={[styles.container, {paddingLeft: vertical ? 50 : 0}]}>
                <CardSwiper
                    dataSource={[1, 2, 3]}
                    vertical={vertical}
                    width={vertical ? 180 : sr.tw}
                    height={vertical ? sr.th / 2 : 150}
                    loop={true}
                    itemPress={this.onPressRow}
                    onChange={this.onChange}
                    renderItem={this.renderRow}/>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    panel: {
        backgroundColor: GlobalStyle.colors.color_primary,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});