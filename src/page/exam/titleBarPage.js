/**
 * Created by otto on 2017/7/12.
 */

import React, {} from 'react'
import {StyleSheet, View} from 'react-native'

import {observer} from 'mobx-react'

import BasePage from '../basePage'
import TitleBarBase from '../../../library/component/titleBarBase'
import GlobalStyle from '../../styles/styles'

@observer
export default class TitleBarPage extends BasePage {

    initPageStore() {
        super.initPageStore()
        this.showAsStaticPage()
    }

    getTitle() {
        return 'custom title bar'
    }

    renderContent() {
        return (
            <View style={styles.container}>
                <TitleBarBase backIcon={require('../../resource/image/ic_arrow_back_white.png')}
                              title='通用标题样式'
                              titleStyle={{fontSize: GlobalStyle.sizes.size_32, color: GlobalStyle.colors.white}}
                              titleBarStyle={styles.titleBar}
                              statusHeight={GlobalStyle.sizes.status_bar_height}/>
                <TitleBarBase backIcon={require('../../resource/image/ic_arrow_back_white.png')}
                              backIconStyle={{backgroundColor:'red'}}
                              backOptionText='返回扩展按钮'
                              backOptionTextStyle={{
                                  fontSize: GlobalStyle.sizes.size_20,
                                  paddingHorizontal: GlobalStyle.sizes.size_20,
                                  backgroundColor:'gray',
                              }}
                              title='通用标题样式'
                              titleStyle={{fontSize: GlobalStyle.sizes.size_32, color: GlobalStyle.colors.white}}
                              titleBarStyle={styles.titleBar}
                              statusHeight={GlobalStyle.sizes.status_bar_height}/>
                <TitleBarBase backIcon={require('../../resource/image/ic_arrow_back_white.png')}
                              backIconStyle={{backgroundColor:'red'}}
                              backOptionText='返回扩展按钮'
                              backOptionTextStyle={{
                                  fontSize: GlobalStyle.sizes.size_20,
                                  paddingHorizontal: GlobalStyle.sizes.size_20,
                                  backgroundColor:'gray',
                              }}
                              title='通用标题样式'
                              titleStyle={{fontSize: GlobalStyle.sizes.size_32, color: GlobalStyle.colors.white}}
                              optionImg={require('../../resource/image/ic_format_align_left_white_18dp.png')}
                              optionImgStyle={{padding: GlobalStyle.sizes.size_40}}
                              titleBarStyle={styles.titleBar}
                              statusHeight={GlobalStyle.sizes.status_bar_height}/>
                <TitleBarBase backIcon={require('../../resource/image/ic_arrow_back_white.png')}
                              backIconStyle={{backgroundColor:'red'}}
                              backOptionText='返回扩展按钮'
                              backOptionTextStyle={{
                                  fontSize: GlobalStyle.sizes.size_20,
                                  paddingHorizontal: GlobalStyle.sizes.size_20,
                                  backgroundColor:'gray',
                              }}
                              title='通用标题样式'
                              titleStyle={{fontSize: GlobalStyle.sizes.size_32, color: GlobalStyle.colors.white}}
                              optionText='菜单'
                              optionTextStyle={{color:GlobalStyle.colors.white,fontSize:GlobalStyle.fonts.font_24, paddingHorizontal:GlobalStyle.sizes.size_20}}
                              titleBarStyle={styles.titleBar}
                              statusHeight={GlobalStyle.sizes.status_bar_height}/>

                <TitleBarBase backIcon={require('../../resource/image/ic_arrow_back_white.png')}
                              backIconStyle={{backgroundColor:'red'}}
                              backOptionText='返回扩展按钮'
                              backOptionTextStyle={{
                                  fontSize: GlobalStyle.sizes.size_20,
                                  paddingHorizontal: GlobalStyle.sizes.size_20,
                                  backgroundColor:'gray',
                              }}
                              title='通用标题样式'
                              titleStyle={{fontSize: GlobalStyle.sizes.size_32, color: GlobalStyle.colors.white}}
                              optionText='菜单'
                              optionTextStyle={{color:GlobalStyle.colors.white,fontSize:GlobalStyle.fonts.font_24, paddingHorizontal:GlobalStyle.sizes.size_20}}
                              titleBarStyle={styles.titleBar}
                              statusHeight={0}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {flex: 1},
    titleBar: {
        height: GlobalStyle.sizes.title_bar_height,
        backgroundColor: GlobalStyle.colors.color_primary,
        marginTop: GlobalStyle.sizes.size_20,
    },
})