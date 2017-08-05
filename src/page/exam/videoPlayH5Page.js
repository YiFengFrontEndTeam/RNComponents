/**
 * Created by otto on 2017/7/10.
 */

import React, {} from 'react'
import {View, StyleSheet, WebView} from 'react-native'
import {observer} from 'mobx-react'

import BasePage from '../basePage'

@observer
export default class VideoPlayH5 extends BasePage {

    h5VideoPlayer = '<!DOCTYPE HTML><html><body><video width="320" height="240" controls="controls"><source src="http://www.w3school.com.cn/i/movie.ogg" type="video/mp4">Your browser does not support the video tag.</video><p>Hello</p></body></html>'

    initPageStore() {
        super.initPageStore()
        this.showAsStaticPage()
    }

    getTitle() {
        return 'Video Player H5'
    }

    renderContent() {
        return (
            <View style={styles.container}>
                {/*<WebView source={require('../../../library/videoPlayer/index.react.html')}/>*/}
                {/*<WebView source={{html: this.h5VideoPlayer}}/>*/}
                {/*<WebView source={require('../../videoPlayer/videoJS/videojs.html')}/>*/}
                <WebView source={require('../../videoPlayer/plyr/index.html')}/>
                <WebView source={require('../../../library/h5VideoPlayer/h5vp/index.html')}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})