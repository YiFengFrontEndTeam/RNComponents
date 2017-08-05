/**
 * Created by otto on 2017/7/12.
 */

import React, {} from 'react'
import {View, Image, StyleSheet} from 'react-native'
import {observer} from 'mobx-react'
import BasePage from '../basePage'
import GlobalStyle from '../../styles/styles'
import WidgetsInline from '../../../library/component/widgetsInline'
import TextWithDrawable from '../../../library/component/textWithDrawable'

@observer
export default class TextWithDrawablePage extends BasePage {

    initPageStore() {
        super.initPageStore()
        this.showAsStaticPage()
    }

    getTitle() {
        return 'TextWithDrawable'
    }

    renderContent() {
        return (
            <View style={styles.container}>
                <WidgetsInline justifyContent='space-between'
                               style={[styles.widgetsLineStyle, {paddingHorizontal: GlobalStyle.sizes.size_20}]}
                               children={[
                                   <TextWithDrawable text="文字0"
                                                     drawable={require('../../resource/image/no_data.png')}
                                                     drawablePosition='left'
                                                     drawableStyle={styles.drawableStyle}
                                                     paddingBetween={GlobalStyle.sizes.size_10}
                                                     style={{flex: 1, justifyContent: 'flex-start'}}/>,
                                   <TextWithDrawable text="文字1"
                                                     drawable={require('../../resource/image/no_data.png')}
                                                     drawablePosition='left'
                                                     drawableStyle={styles.drawableStyle}
                                                     paddingBetween={GlobalStyle.sizes.size_10}
                                                     style={{flex: 1, justifyContent: 'flex-end'}}/>,
                               ]}/>
                <WidgetsInline justifyContent='space-between'
                               style={styles.widgetsLineStyle}
                               children={[
                                   <TextWithDrawable text="文字1"
                                                     drawable={require('../../resource/image/no_data.png')}
                                                     drawablePosition='top'
                                                     drawableStyle={styles.drawableStyle}
                                                     paddingBetween={GlobalStyle.sizes.size_10}
                                                     style={{flex: 1}}/>,
                                   <TextWithDrawable text="文字2"
                                                     drawable={require('../../resource/image/no_data.png')}
                                                     drawablePosition='top'
                                                     drawableStyle={styles.drawableStyle}
                                                     paddingBetween={GlobalStyle.sizes.size_10}
                                                     style={{flex: 1}}/>,
                                   <TextWithDrawable text="文字3"
                                                     drawable={require('../../resource/image/no_data.png')}
                                                     drawablePosition='top'
                                                     drawableStyle={styles.drawableStyle}
                                                     paddingBetween={GlobalStyle.sizes.size_10}
                                                     style={{flex: 1}}/>,
                               ]}/>
                <WidgetsInline justifyContent='space-between'
                               style={styles.widgetsLineStyle}
                               children={[
                                   <TextWithDrawable text="文字2"
                                                     drawable={require('../../resource/image/no_data.png')}
                                                     drawablePosition='right'
                                                     drawableStyle={styles.drawableStyle}
                                                     paddingBetween={GlobalStyle.sizes.size_10}
                                                     style={{flex: 1}}/>,
                                   <TextWithDrawable text="文字3"
                                                     drawable={require('../../resource/image/no_data.png')}
                                                     drawablePosition='right'
                                                     drawableStyle={styles.drawableStyle}
                                                     paddingBetween={GlobalStyle.sizes.size_10}
                                                     style={{flex: 1}}/>,
                                   <TextWithDrawable text="文字4"
                                                     drawable={require('../../resource/image/no_data.png')}
                                                     drawablePosition='right'
                                                     drawableStyle={styles.drawableStyle}
                                                     paddingBetween={GlobalStyle.sizes.size_10}
                                                     style={{flex: 1}}/>,
                                   <TextWithDrawable text="文字5"
                                                     drawable={require('../../resource/image/no_data.png')}
                                                     drawablePosition='right'
                                                     drawableStyle={styles.drawableStyle}
                                                     paddingBetween={GlobalStyle.sizes.size_10}
                                                     style={{flex: 1}}/>,
                               ]}/>
                <WidgetsInline justifyContent='space-between'
                               style={styles.widgetsLineStyle}
                               children={[
                                   <TextWithDrawable text="文字3"
                                                     drawable={require('../../resource/image/no_data.png')}
                                                     drawablePosition='bottom'
                                                     drawableStyle={styles.drawableStyle}
                                                     paddingBetween={GlobalStyle.sizes.size_10}
                                                     style={{flex: 1}}/>,
                                   <TextWithDrawable text="文字4"
                                                     drawable={require('../../resource/image/no_data.png')}
                                                     drawablePosition='bottom'
                                                     drawableStyle={styles.drawableStyle}
                                                     paddingBetween={GlobalStyle.sizes.size_10}
                                                     style={{flex: 1}}/>,
                                   <TextWithDrawable text="文字5"
                                                     drawable={require('../../resource/image/no_data.png')}
                                                     drawablePosition='bottom'
                                                     drawableStyle={styles.drawableStyle}
                                                     paddingBetween={GlobalStyle.sizes.size_10}
                                                     style={{flex: 1}}/>,
                                   <TextWithDrawable text="文字6"
                                                     drawable={require('../../resource/image/no_data.png')}
                                                     drawablePosition='bottom'
                                                     drawableStyle={styles.drawableStyle}
                                                     paddingBetween={GlobalStyle.sizes.size_10}
                                                     style={{flex: 1}}/>,

                               ]}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: GlobalStyle.sizes.size_20,
    },
    widgetsLineStyle: {
        height: GlobalStyle.sizes.size_200,
        marginTop: GlobalStyle.sizes.size_20,
        borderColor: GlobalStyle.colors.color_font_second,
        borderWidth: GlobalStyle.sizes.size_1,
        borderRadius: GlobalStyle.sizes.size_20,
    },
    drawableStyle: {
        width: GlobalStyle.sizes.size_80,
        height: GlobalStyle.sizes.size_80,
        resizeMode: Image.resizeMode.contain,
    }
})
