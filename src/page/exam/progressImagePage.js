/**
 * Created by otto on 2017/6/28.
 */
import React, {} from 'react'
import {View, Image} from 'react-native'

import {observer} from 'mobx-react'
import ProgressImage from '../../component/base/progressImage'
import ImageWithDefaultSource from '../../component/base/imageWithDefaultSource'

import BasePage from '../basePage'
import GlobalStyle from '../../styles/styles'

@observer
export default class ProgressImagePage extends BasePage {

    initPageStore() {
        super.initPageStore()
        this.pageStore.showAsStaticPage()
    }

    getTitle() {
        return 'ProgressImage'
    }

    renderContent() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ProgressImage source={{uri: 'http://loremflickr.com/cache/images/f512fedb2caf38c32d290f98abfddbac.22.jpg'}}
                               style={{
                                   width: GlobalStyle.sizes.size_640,
                                   height: GlobalStyle.sizes.size_480,
                                   borderRadius: GlobalStyle.sizes.size_20,
                                   resizeMode: Image.resizeMode.contain
                               }}/>
                <ImageWithDefaultSource source={{uri: 'http://loremflickr.com/640/480/sexy'}}
                                        thumbnail={require('../../resource/image/article_img_default.png')}
                                        style={{
                                            width: GlobalStyle.sizes.size_640,
                                            height: GlobalStyle.sizes.size_480,
                                            borderRadius: GlobalStyle.sizes.size_20,
                                            resizeMode: Image.resizeMode.contain,
                                            marginTop: GlobalStyle.sizes.size_20,
                                        }}/>
            </View>
        )
    }
}