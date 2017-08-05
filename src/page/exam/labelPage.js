/**
 * Created by otto on 2017/7/7.
 */

import React, {} from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {observer} from 'mobx-react'
import {observable, action} from 'mobx'
import Label from '../../../library/component/label'
import BasePage from '../basePage'
import GlobalStyle from '../../styles/styles'

import MobxExtend from '../../utils/mobxExtendUtil'

const LabelExtend = MobxExtend(Label)

import LabelStore from '../../store/labelStore'

@observer
export default class LabelPage extends BasePage {

    initPageStore() {
        this.pageStore = new LabelStore()
    }

    getTitle() {
        return 'LabelPage'
    }

    renderContent() {
        console.warn(`rend label page...`)
        return (
            <View style={styles.container}>
                <Label text="hello0" normalStyle={styles.labelBase} selectedStyle={styles.label1}/>
                <Label text="hello1" normalStyle={styles.labelBase} selectedStyle={[styles.labelBase, styles.label2]} touchHighLight={true}/>
                <Label text="hello2" normalStyle={styles.labelBase} selectedStyle={styles.label3} touchOpacity={true}/>
                <Label text="hello3"
                             normalStyle={styles.labelBase}
                             selectedStyle={[styles.labelBase, styles.label3]}
                             onPress={this.pageStore.toggleSelected}
                             selected={this.pageStore.selected}
                             touchHighLight={false}/>
            </View>
        )
    }


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        color: 'white'
    },
    labelBase: {
        width: GlobalStyle.sizes.size_200,
        height: GlobalStyle.sizes.size_80,
        borderWidth: GlobalStyle.sizes.size_1,
        borderColor: GlobalStyle.colors.color_font_third,
        borderRadius: GlobalStyle.sizes.size_20,
        color: GlobalStyle.colors.color_font_second,
        fontSize: GlobalStyle.fonts.font_24,
        marginTop: GlobalStyle.sizes.size_80,
    },
    label1: {
        borderColor: '#fff240',
        backgroundColor: '#eff190',
        marginTop: GlobalStyle.sizes.size_20,
    },
    label2: {
        borderColor: '#f39c12',
        backgroundColor: '#f1c40f',
    },
    label3: {
        borderColor: '#d35400',
        backgroundColor: '#e98b39'
    },
})