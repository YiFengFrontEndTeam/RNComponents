/**
 * Created by Abel on 2017/7/13.
 * 带默认图片显示的图片控件
 * 加载失败，如果不传默认图，在复用的情况下会显示错误（显示上一个加载成功的图）
 */

"use strict";

import React, {PureComponent, PropTypes} from 'react'
import {Image, Animated, View, StyleSheet} from 'react-native'

export default class ProgressiveImage extends PureComponent {

    static propTypes = {
        source: PropTypes.string,
        thumbnail: PropTypes.string,
        thumbnailOpacity: PropTypes.number,
        style: View.propTypes.style,
    }

    static defaultProps = {
        thumbnailOpacity: 0,
    }

    onLoadSuccess = false

    constructor(props) {
        super(props);
        this.state = {
            thumbnailOpacity: new Animated.Value(1),
        }
    }

    onLoad = ()=> {
        this.onLoadSuccess = true
        console.log('onLoad called:', this.props.thumbnailOpacity);
        const {thumbnailOpacity} = this.props;
        if (1 === thumbnailOpacity) {
            return;
        }

        Animated.timing(this.state.thumbnailOpacity, {
            toValue: thumbnailOpacity,
            duration: 100,
        }).start();
    }

    onThumbnailLoad = ()=> {
        console.log('onThumbnailLoad called');
        // Animated.timing(this.state.thumbnailOpacity, {
        //     toValue: 1,
        //     duration: 50
        // }).start();
    }

    render() {
        const {style, source, thumbnail} = this.props;
        this.onLoadSuccess = false
        return (
            <View
                style={styles.container}>
                <Animated.Image
                    resizeMode={'contain'}
                    style={[
                        styles.imageOrigin,
                        style,
                    ]}
                    source={source}
                    onLoad={this.onLoad}
                    onLoadEnd={()=> {
                        if (!this.onLoadSuccess) {
                            this.state.thumbnailOpacity.setValue(1)
                        }
                    }}/>
                <Animated.Image
                    resizeMode={'contain'}
                    style={[
                        {
                            opacity: this.state.thumbnailOpacity
                        },
                        style
                    ]}
                    source={thumbnail}
                    onLoad={this.onThumbnailLoad}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    imageOrigin: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
});