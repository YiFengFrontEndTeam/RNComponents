/**
 * Created by otto on 2017/6/29.
 */
import React, {PropTypes, PureComponent} from 'react';
import {
    ScrollView,
    StyleSheet,
    View,
    Image,
    Text,
    Platform,
    TouchableNativeFeedback
} from 'react-native';

import {observer} from 'mobx-react'

import Button from '../../../library/component/button'
import GlobalStyle from '../../styles/styles'

import Router from '../../router'

import AppStore from '../../store/appStore'

@observer
export default class ExamPage extends PureComponent {

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={{alignItems: 'center'}}>


                    {/*<Image source={require('../../resource/webp/undefined1.webp')}
                     style={{width: GlobalStyle.screen.width, height: GlobalStyle.screen.width * 0.618}}/>
                     <Image source={require('../../resource/webp/undefined1.webp')}
                     style={{width: GlobalStyle.screen.width, height: GlobalStyle.screen.width * 0.618}}/>
                     <Image source={require('../../resource/webp/undefined1.webp')}
                     style={{width: GlobalStyle.screen.width, height: GlobalStyle.screen.width * 0.618}}/>*/}

                    <Image source={require('../../resource/webp/undefined_org.jpg')}
                           style={{width: GlobalStyle.screen.width, height: GlobalStyle.screen.width * 0.618}}/>

                    <Image source={require('../../resource/webp/undefined1.webp')}
                           style={{width: GlobalStyle.screen.width, height: GlobalStyle.screen.width * 0.618}}/>


                    {/*<Image source={{uri:'http://res.cloudinary.com/demo/image/upload/fl_awebp/bored_animation.webp'}}
                     style={{width: GlobalStyle.screen.width, height: GlobalStyle.screen.width * 0.618}}/>*/}
                    <View style={{width: GlobalStyle.screen.width * 3 / 4}}>
                        <Button
                            style={styles.buttonStyle0}
                            textStyle={styles.textStyle}
                            onPress={Router.errorPage}>
                            Error
                        </Button>
                        <Button
                            background={(Platform.OS === 'android') ? TouchableNativeFeedback.Ripple('#f39c12', true) : null}
                            style={styles.buttonStyle} textStyle={styles.textStyle}
                            onPress={Router.carousel}>
                            Carousel
                        </Button>
                        <Button
                            textStyle={styles.textStyle}
                            style={styles.buttonStyle1}
                            activeOpacity={1}
                            onPress={Router.lightboxPage}>
                            Lightbox
                        </Button>
                        <Button
                            style={styles.buttonStyle2} textStyle={styles.textStyle}
                            onPress={Router.flatListPage}>
                            FlatList
                        </Button>
                        <Button
                            style={styles.buttonStyle3} textStyle={styles.textStyle}
                            onPress={Router.classicListPage}>
                            Classic ListView
                        </Button>
                        <Button
                            style={styles.buttonStyle4} textStyle={styles.textStyle}
                            onPress={Router.progressImagePage}>
                            Progress Image
                        </Button>
                        <Button
                            style={styles.buttonStyle5} textStyle={styles.textStyle}
                            onPress={Router.dialogPage}>
                            Dialog
                        </Button>
                        <Button
                            style={styles.buttonStyle6} textStyle={styles.textStyle}
                            onPress={Router.swipeOutPage}>
                            SwipeOut
                        </Button>
                        <Button
                            style={styles.buttonStyle7} textStyle={styles.textStyle}
                            onPress={Router.swipeCardsPage}>
                            SwipeCards
                        </Button>
                        <Button
                            style={styles.buttonStyle8} textStyle={styles.textStyle}>
                            {`react-native-storage:${AppStore.storageLoadTime}`}
                        </Button>
                        <Button
                            style={styles.buttonStyle9} textStyle={styles.textStyle}
                            onPress={Router.scrollableTabViewPage}>
                            ScrollableTabView
                        </Button>
                        <Button
                            style={styles.buttonStyle8} textStyle={styles.textStyle}
                            onPress={Router.progressBarPage}>
                            ProgressBar
                        </Button>
                        <Button
                            style={styles.buttonStyle7} textStyle={styles.textStyle}
                            onPress={Router.cardSwiperPage}>
                            CardSwiper
                        </Button>
                        <Button
                            style={styles.buttonStyle6} textStyle={styles.textStyle}
                            onPress={Router.labelPage}>
                            Labels
                        </Button>
                        <Button
                            style={styles.buttonStyle6} textStyle={styles.textStyle}
                            onPress={Router.progressiveImagePage}>
                            ProgressiveImage
                        </Button>
                        <Button
                            style={styles.buttonStyle5} textStyle={styles.textStyle}
                            onPress={Router.widgetsPage}>
                            Widgets
                        </Button>
                        <Button
                            style={styles.buttonStyle4} textStyle={styles.textStyle}
                            onPress={Router.textWithDrawablePage}>
                            TextWithDrawable
                        </Button>
                        <Button
                            style={styles.buttonStyle3} textStyle={styles.textStyle}
                            onPress={Router.titleBarPage}>
                            TitleBar
                        </Button>
                        <Button
                            style={styles.buttonStyle2} textStyle={styles.textStyle}
                            onPress={Router.videoPage}>
                            Video
                        </Button>
                        <Button
                            style={styles.buttonStyle1} textStyle={styles.textStyle}
                            onPress={Router.videoPageAndroid}>
                            MediaPlayer
                        </Button>
                        <Button
                            style={styles.buttonStyle0} textStyle={styles.textStyle}
                            onPress={Router.videoPlayH5}>
                            VideoPlayerH5
                        </Button>
                        <Button
                            style={styles.buttonStyle1} textStyle={styles.textStyle}
                            onPress={Router.activityIndicatorPage}>
                            ActivityIndicator
                        </Button>
                        <Button
                            style={styles.buttonStyle2} textStyle={styles.textStyle}
                            onPress={Router.checkboxPage}>
                            Checkbox
                        </Button>
                        <Button
                            style={styles.buttonStyle3} textStyle={styles.textStyle}
                            onPress={Router.productDetailPage}>
                            productDetailPage
                        </Button>
                        <Button
                            style={styles.buttonStyle4} textStyle={styles.textStyle}
                            onPress={Router.switchPage}>
                            Switch
                        </Button>

                    </View>

                    <View style={{height: GlobalStyle.sizes.bottom_offset_height,}}/>
                </View>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: GlobalStyle.sizes.status_bar_height,
    },
    navigator: {
        flex: 1,
    },
    textStyle: {
        color: 'white'
    },
    buttonStylePressing: {
        borderColor: 'red',
        backgroundColor: 'red'
    },
    buttonStyle0: {
        borderColor: '#fff240',
        backgroundColor: '#eff190',
        marginTop: GlobalStyle.sizes.size_20,
    },
    buttonStyle: {
        borderColor: '#f39c12',
        backgroundColor: '#f1c40f',
    },
    buttonStyle1: {
        borderColor: '#d35400',
        backgroundColor: '#e98b39'
    },
    buttonStyle2: {
        borderColor: '#c0392b',
        backgroundColor: '#e74c3c'
    },
    buttonStyle3: {
        borderColor: '#16a085',
        backgroundColor: '#1abc9c'
    },
    buttonStyle4: {
        borderColor: '#135740',
        backgroundColor: '#16886e'
    },

    buttonStyle5: {
        borderColor: '#073e57',
        backgroundColor: '#266688'
    },
    buttonStyle6: {
        borderColor: '#041a25',
        backgroundColor: '#043643'
    },
    buttonStyle7: {
        borderColor: '#1e072d',
        backgroundColor: '#2b1422'
    },
    buttonStyle8: {
        borderColor: '#05010e',
        backgroundColor: '#333333'
    },
    buttonStyle9: {
        borderColor: '#5e5e5f',
        backgroundColor: '#b4b4b4'
    },
})