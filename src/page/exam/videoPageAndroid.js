/**
 * Created by otto on 2017/7/10.
 */
'use strict';

import React, {} from 'react'
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native'
import {observer} from 'mobx-react'

import BasePage from '../basePage'
import GlobalStyle from '../../styles/styles'
import Video from 'react-native-video'
import VideoPlayer from '../../videoPlayer/VideoPlayer'

@observer
export default class VideoPageAndroid extends BasePage {

    mediaPlayer

    state = {
        uri: '',
        rate: 1,
        volume: 1,
        muted: false,
        resizeMode: 'contain',
        duration: 0.0,
        currentTime: 0.0,
        controls: true,
        paused: false,
        skin: 'embed',
        ignoreSilentSwitch: null,
        isBuffering: false,
    }

    initPageStore() {
        super.initPageStore()
        this.showAsStaticPage()
    }

    getTitle() {
        return 'Video player'
    }

    shouldShowTitle() {
        return false
    }

    componentDidMount() {
        super.componentDidMount()
        setTimeout(() => this.setState({uri: 'https://vjs.zencdn.net/v/oceans.mp4'}), 1000)
    }

    renderContent() {
        return (
            <TouchableWithoutFeedback onPress={() => this.setState({paused: !this.state.paused})}>
                <View style={styles.fullScreen}>
                    <Video
                        ref={mediaPlayer => this.mediaPlayer = mediaPlayer}
                        source={require('../../resource/movies/broadchurch.mp4')}
                        //source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
                        //source={{uri:'rtsp://v2.cache2.c.youtube.com/CjgLENy73wIaLwm3JbT_%ED%AF%80%ED%B0%819HqWohMYESARFEIJbXYtZ29vZ2xlSARSB3Jlc3VsdHNg_vSmsbeSyd5JDA==/0/0/0/video.3gp'}}
                        //source={{uri: this.state.uri}}
                        style={styles.nativeVideoControls }
                        rate={this.state.rate}
                        paused={this.state.paused}
                        volume={this.state.volume}
                        muted={this.state.muted}
                        ignoreSilentSwitch={this.state.ignoreSilentSwitch}
                        resizeMode={this.state.resizeMode}
                        onBuffer={this.onBuffer}
                        onProgress={this.onProgress}
                        onEnd={() => {
                        }}
                        repeat={true}
                        controls={this.state.controls}
                        poster='data:image/jpeg;base64,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'
                    />
                    {/*<VideoPlayer
                     source={{uri: 'http://vjs.zencdn.net/v/oceans.mp4'}}
                     navigator={ this.props.navigator }
                     style={styles.fullScreen}
                     />*/}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    fullScreen: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
    nativeVideoControls: {
        top: 184,
        height: 300
    }
})