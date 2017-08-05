/**
 * Created by otto on 2017/6/23.
 */
'use strict';

import React, {PropTypes, PureComponent} from 'react';
import {
    Image,
    StyleSheet,
    View,
    TouchableWithoutFeedback,
}  from 'react-native';

import {observer} from 'mobx-react'
import Swiper from 'react-native-swiper'

import AppStore from '../store/appStore'

import px2dp from '../utils/px2dp'

const guideImages = [
    require('../resource/image/guide_1.png'),
    require('../resource/image/guide_2.png'),
    require('../resource/image/guide_3.png'),
]

@observer
export default class Guide extends PureComponent {

    render() {

        let imgs = []

        guideImages.map((e, index) => {
            imgs.push(
                <Image
                    key={index}
                    style={styles.image} source={guideImages[index]}>
                    {
                        (index == guideImages.length - 1) ?
                            <TouchableWithoutFeedback onPress={AppStore.setGuidePageUsed}>
                                <View style={styles.experienceImage}/>
                            </TouchableWithoutFeedback> : null
                    }
                </Image>
            )
        })

        return <Swiper
            style={styles.wrapper}
            key='guide'
            loop={false}
            bounce={true}
            renderPagination={this.renderPagination.bind(this)}>
            {imgs}
        </Swiper>
    }

    renderPagination = (index, total, context) => {
        let dots = [];
        let dot = <View style={styles.dot}/>;
        let activeDot = <View style={styles.dotActive}/>;
        for (let i = 0; i < total; i++) {
            dots.push(i === index
                ? React.cloneElement(activeDot, {key: i})
                : React.cloneElement(dot, {key: i})
            )
        }

        return (
            <View style={styles.pagination}>
                {index !== total - 1 ? dots : null}
            </View>
        )
    }
}

const dotWidth = px2dp(14);
const margin = px2dp(7);

const styles = StyleSheet.create({
    wrapper: {},
    slide: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    image: {
        flex: 1,
        resizeMode: Image.resizeMode.stretch,
        width: null,
        height: null,
        alignItems: 'center'
    },
    experienceImage: {
        position: 'absolute',
        width: px2dp(350),
        height: px2dp(100),
        bottom: px2dp(240),
        resizeMode: Image.resizeMode.contain,
    },

    dot: {
        backgroundColor: 'rgb(204,213,211)',
        width: dotWidth,
        height: dotWidth,
        borderRadius: 7,
        marginLeft: margin,
        marginRight: margin
    },
    dotActive: {
        backgroundColor: 'rgb(44,143,233)',
        width: dotWidth,
        height: dotWidth,
        borderRadius: 7,
        marginLeft: margin,
        marginRight: margin,
    },
    pagination: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: px2dp(88),
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
