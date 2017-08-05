/**
 * Created by otto on 2017/7/10.
 */

import React, {} from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {observer} from 'mobx-react'

import WidgetsInline from '../../../library/component/widgetsInline'
import BasePage from '../basePage'
import GlobalStyle from '../../styles/styles'

@observer
export default class WidgetsPage extends BasePage {

    initPageStore() {
        super.initPageStore()
        this.showAsStaticPage()
    }

    getTitle() {
        return 'Widgets'
    }

    renderContent() {
        return (
            <View style={styles.container}>
                <WidgetsInline children={<Text>single</Text>} style={styles.item}/>
                <WidgetsInline children={[<Text>Hello</Text>, <Text> default</Text>]} style={styles.item}/>
                <WidgetsInline children={[<Text>Hello</Text>, <Text> flex-end</Text>]} justifyContent='flex-end'
                               style={styles.item}/>
                <WidgetsInline children={[<Text>Hello</Text>, <Text> center</Text>]} justifyContent='center'
                               style={styles.item}/>
                <WidgetsInline children={[<Text>Hello</Text>, <Text> space-around</Text>]} justifyContent='space-around'
                               style={styles.item}/>
                <WidgetsInline children={[<Text>Hello</Text>, <Text> space-between</Text>]}
                               justifyContent='space-between' style={styles.item} onPress={()=>console.warn(`click...`)}/>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: GlobalStyle.sizes.size_80,
        padding: GlobalStyle.sizes.size_20,
        borderWidth: GlobalStyle.sizes.size_1,
        borderColor: GlobalStyle.colors.color_primary,
        borderRadius: GlobalStyle.sizes.size_20
    },
    item: {
        height: GlobalStyle.sizes.size_100,
        borderWidth: GlobalStyle.sizes.size_1,
        borderColor: GlobalStyle.colors.black,
        marginBottom: GlobalStyle.sizes.size_20,
    }
})
