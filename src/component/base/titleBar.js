/**
 * Created by otto on 2017/6/26.
 */

import React, {PropTypes} from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native'
import GlobalStyle from '../../styles/styles'

import Title from './textAlignVertical'
import LineHorizontal from './lineH'

const TitleBar = ({title = 'no title set', backIcon, backFunc, backLabel, optionLabel, optionFunc, primaryStyle = true, style}) => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View
                style={[styles.container, {backgroundColor: primaryStyle ? GlobalStyle.colors.color_primary : GlobalStyle.colors.white}, style]}>
                <Title text={title}
                       style={[styles.title, {color: primaryStyle ? GlobalStyle.colors.white : GlobalStyle.colors.color_primary}]}/>
                <TouchableOpacity onPress={backFunc}
                                  style={styles.backBlock}>

                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        {
                            backIcon ? backIcon : <Image style={styles.backImg}
                                                         source={primaryStyle ? require('../../resource/image/ic_arrow_back_white.png') : require('../../resource/image/ic_arrow_back.png')}/>
                        }
                        {backLabel}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={optionFunc}>
                    <View>
                        {optionLabel}
                    </View>
                </TouchableOpacity>
                <LineHorizontal style={styles.lineBottom}/>
            </View>
        </TouchableWithoutFeedback>
    )
}

TitleBar.prototype = {
    title: PropTypes.string,
    backIcon: PropTypes.number,
    backFunc: PropTypes.func,
    backLabel: PropTypes.object,
    optionLabel: PropTypes.object,
    optionFunc: PropTypes.func,
    primaryStyle: PropTypes.bool,
}

export default TitleBar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: GlobalStyle.screen.width,
        height: GlobalStyle.sizes.title_bar_height + GlobalStyle.sizes.status_bar_height,
        paddingTop: GlobalStyle.sizes.status_bar_height,
    },
    title: {
        flex: 1,
        width: GlobalStyle.screen.width * 3 / 4,
        height: GlobalStyle.sizes.title_bar_height,
        fontSize: GlobalStyle.fonts.font_34,
    },
    backBlock: {
        height: GlobalStyle.sizes.title_bar_height,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        top: 0,
        marginTop: GlobalStyle.sizes.status_bar_height,
    },
    backImg: {
        width: GlobalStyle.sizes.title_bar_height,
        height: GlobalStyle.sizes.title_bar_height,
        resizeMode: Image.resizeMode.center,
    },
    lineBottom: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
})