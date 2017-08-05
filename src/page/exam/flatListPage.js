/**
 * Created by otto on 2017/6/27.
 */

import React, {} from 'react'
import {StyleSheet, View, Text} from 'react-native'

import {observer} from 'mobx-react'
import {observable, action} from 'mobx'

import CommonListView from '../../../library/component/commonListView'
import Label from '../../../library/component/label'
import LineHorizontal from '../../component/base/lineH'
import BasePage from '../basePage'
import GlobalStyle from '../../styles/styles'
import FlatListStore from '../../store/flatListStore'

import MobxExtendUtil from '../../utils/mobxExtendUtil'
const LabelMobx = MobxExtendUtil(Label)
import FunItem from '../../component/funItem'

const defaultColumnCount = 3

@observer
export default class FlatListPage extends BasePage {

    @observable
    columnsNum = defaultColumnCount
    @observable
    itemHeight = GlobalStyle.screen.width / this.columnsNum

    initPageStore() {
        this.pageStore = new FlatListStore()
    }

    getTitle() {
        return 'FlagListPage'
    }

    getOptionLabel() {
        return <Label text={`Click->column=${this.columnsNum}`}
                      onPress={this.updateColumnCount}
                      normalStyle={{
                          height: GlobalStyle.sizes.title_bar_height,
                          color: GlobalStyle.colors.white,
                          fontSize: GlobalStyle.fonts.font_32,
                          paddingHorizontal: GlobalStyle.sizes.size_30,
                      }}/>
    }

    @action
    updateColumnCount = () => {
        this.columnsNum = (this.columnsNum + 1) % defaultColumnCount
        if (this.columnsNum == 0) {
            this.columnsNum = defaultColumnCount
        }
        this.itemHeight = GlobalStyle.screen.width / this.columnsNum
    }

    onRefresh = () => console.warn(`refresh`)

    getItemLayout = (data, index) => {
        return {length: this.itemHeight, offset: (this.itemHeight + GlobalStyle.sizes.size_1) * index, index}
    }

    renderItem = ({item, index}) => {
        return <FunItem key={index}
                        style={[styles.item, {
                            width: this.itemHeight,
                            height: this.itemHeight
                        }]}
                        item={item}/>
    }

    separatorComponent = () => <LineHorizontal/>

    renderContent() {
        return (
            <View>
                <CommonListView numColumns={this.columnsNum}
                                data={this.pageStore.getDataSource}
                    //data={this.pageStore.dataSource.slice()}
                    //extraData={this.pageStore.refreshState}
                                onRefresh={this.onRefresh}
                                renderItem={this.renderItem}
                    //separatorComponent={this.separatorComponent}
                                getItemLayout={this.getItemLayout}
                                noMoreTip='没有更多啦~~'
                                initialNumToRender={100}/>

                <Label text="add item"
                       onPress={this.pageStore.addItem}
                       normalStyle={styles.btn}
                       touchOpacity={true}/>
                <Label text="change item value"
                       onPress={this.pageStore.changeItemValue}
                       normalStyle={styles.btn}
                       touchOpacity={true}/>

                <Label text="refresh"
                       onPress={this.pageStore.refresh}
                       normalStyle={styles.btn}
                       touchOpacity={true}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    item: {
        fontSize: GlobalStyle.fonts.font_26,
        color: GlobalStyle.colors.color_primary,
        borderWidth: GlobalStyle.sizes.size_1,
        borderColor: GlobalStyle.colors.color_primary,
    },
    line: {},
    btn: {
        width: GlobalStyle.sizes.size_480,
        height: GlobalStyle.sizes.size_80,
        borderWidth: GlobalStyle.sizes.size_1,
        borderColor: GlobalStyle.colors.color_font_third,
        borderRadius: GlobalStyle.sizes.size_20,
        color: GlobalStyle.colors.color_font_second,
        fontSize: GlobalStyle.fonts.font_24,
        marginTop: GlobalStyle.sizes.size_80,
        borderColor: '#d35400',
        backgroundColor: '#e98b39',
        alignSelf: 'center',
        marginTop: GlobalStyle.sizes.size_30,
    },
})