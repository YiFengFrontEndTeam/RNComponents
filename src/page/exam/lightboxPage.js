/**
 * Created by otto on 2017/6/27.
 */

import React, {} from 'react'
import {StyleSheet, ScrollView, View, Text, Image, Dimensions, TouchableOpacity} from 'react-native'

import {observer} from 'mobx-react'

import LightBoxView from '../../component/base/lightboxView'

import BasePage from '../basePage'

var BASE_PADDING = 10;
var WINDOW_WIDTH = Dimensions.get('window').width;

@observer
export default class LightboxPage extends BasePage {

    initPageStore() {
        super.initPageStore()
        this.showAsStaticPage()
    }

    getTitle() {
        return 'Lightbox'
    }

    renderContent() {
        return (
            <ScrollView>
                <LightBoxView underlayColor="white"
                              navigator={this.props.navigator}
                              renderContent={() => {
                                  return <Image
                                      style={styles.contain}
                                      resizeMode={Image.resizeMode.contain}
                                      source={{uri: 'https://www.yayomg.com/wp-content/uploads/2014/04/yayomg-pig-wearing-party-hat.jpg'}}
                                  />
                              }}
                              renderContentDefault={() => {
                                  return <Image
                                      style={styles.contain}
                                      source={{uri: 'https://www.yayomg.com/wp-content/uploads/2014/04/yayomg-pig-wearing-party-hat.jpg'}}
                                  />
                              }}
                />
                <LightBoxView
                    navigator={this.props.navigator}
                    renderHeader={close => (
                        <TouchableOpacity onPress={close}>
                            <Text style={styles.closeButton}>Close</Text>
                        </TouchableOpacity>
                    )} renderContent={() => {
                    return (
                        <View style={styles.customHeaderBox}>
                            <Text>I have a custom header</Text>
                        </View>
                    )
                }}/>
                <View style={styles.row}>
                    <LightBoxView style={styles.col} navigator={this.props.navigator} renderContent={() => {
                        return (
                            <View style={[styles.square, styles.squareFirst]}><Text style={styles.squareText}>I'm a
                                square</Text></View>
                        )
                    }}/>

                    <LightBoxView style={styles.col} renderContent={() => {
                        return (
                            <View style={[styles.square, styles.squareSecond]}><Text style={styles.squareText}>I'm a
                                square</Text></View>
                        )
                    }}/>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: BASE_PADDING,
    },
    closeButton: {
        color: 'white',
        borderWidth: 1,
        borderColor: 'white',
        padding: 8,
        borderRadius: 3,
        textAlign: 'center',
        margin: 10,
        alignSelf: 'flex-end',
    },
    customHeaderBox: {
        height: 150,
        backgroundColor: '#6C7A89',
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
    },
    col: {
        flex: 1,
    },
    square: {
        width: WINDOW_WIDTH / 2,
        height: WINDOW_WIDTH / 2,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    squareFirst: {
        backgroundColor: '#C0392B',
    },
    squareSecond: {
        backgroundColor: '#019875',
    },
    squareText: {
        textAlign: 'center',
        color: 'white',
    },
    contain: {
        flex: 1,
        width: WINDOW_WIDTH,
        height: 255,
        resizeMode: Image.resizeMode.cover,
    },
    text: {
        marginVertical: BASE_PADDING * 2,
    },
})