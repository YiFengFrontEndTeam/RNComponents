/**
 * Created by Abel on 2017/7/13.
 */

import React, {} from 'react'
import {View, Image} from 'react-native'

import ProgressiveImage from '../../../library/component/progressiveImage'

import BasePage from '../basePage'
import GlobalStyle from '../../styles/styles'

export default class ProgressiveImagePage extends BasePage {

    initPageStore() {
        super.initPageStore()
        this.pageStore.showAsStaticPage()
    }

    getTitle() {
        return 'ProgressiveImage'
    }

    renderContent() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ProgressiveImage
                    source={{uri: 'http://www.yayomg.com/wp-content/uploads/2014/04/yayomg-pig-wearing-party-hat.jpg'}}
                    thumbnail={require('../../resource/image/article_img_default.png')}
                    style={{
                                   width: GlobalStyle.sizes.size_640,
                                   height: GlobalStyle.sizes.size_480,
                                   borderRadius: GlobalStyle.sizes.size_20,
                                   resizeMode: Image.resizeMode.contain
                               }}/>
            </View>
        )
    }
}