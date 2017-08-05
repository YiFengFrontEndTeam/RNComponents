/**
 * Created by otto on 2017/6/28.
 */

"use strict";

import React, {} from 'react'
import {StyleSheet, View, Text, ListView} from 'react-native'

import {observer} from 'mobx-react'

import ClassicListView from '../../../library/component/classicListView'
import CommonRefreshControl from '../../component/base/commonRefreshControl'
import TextAlignVertical from '../../component/base/textAlignVertical'
import LineHorizontal from '../../component/base/lineH'

import BasePage from '../basePage'

import GlobalStyle from '../../styles/styles'

const data = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const itemHeight = GlobalStyle.sizes.size_200

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

@observer
export default class ClassicListPage extends BasePage {

    initPageStore() {
        super.initPageStore()
        this.showAsStaticPage()
    }

    getTitle() {
        return 'Classic ListView Page'
    }

    onRefresh = () => console.warn(`refresh`)

    renderRow = (rowData, sectionID, rowID, highlightRow) => <TextAlignVertical key={rowID}
                                                                                style={styles.item}
                                                                                text={rowData}/>
    renderSeparator = () => <LineHorizontal/>

    renderContent() {
        return <ClassicListView dataSource={ds.cloneWithRows(data)}
                                refreshControl={<CommonRefreshControl onRefresh={this.onRefresh}/>}
                                renderRow={this.renderRow}
                                renderSeparator={this.renderSeparator}/>
    }
}
const styles = StyleSheet.create({
    item: {
        height: itemHeight,
        fontSize: GlobalStyle.fonts.font_26,
        color: GlobalStyle.colors.color_primary,
    },
    line: {}
})