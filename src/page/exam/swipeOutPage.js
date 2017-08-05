/**
 * Created by otto on 2017/6/28.
 */

import React, {} from 'react'
import {StyleSheet} from 'react-native'

import {observer} from 'mobx-react'

import Swipeout from 'react-native-swipeout'
import CommonListView from '../../component/base/commonListView'
import LineHorizontal from '../../component/base/lineH'
import TextAlignVertical from '../../component/base/textAlignVertical'

import BasePage from '../basePage'
import GlobalStyle from '../../styles/styles'

const itemHeight = GlobalStyle.sizes.size_200
//const data = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
import data from '../../resource/data/swipeData'

@observer
export default class SwipeOutPage extends BasePage {

    constructor() {
        super();
        this.state = {
            sectionID: null,
            rowID: null,
        };
    }

    initPageStore() {
        super.initPageStore()
        this.showAsStaticPage()
    }

    getTitle() {
        return 'SwipeOut'
    }

    onRefresh = () => console.warn(`refresh`)
    getItemLayout = (data, index) => {
        return {length: itemHeight, offset: (itemHeight + GlobalStyle.sizes.size_1) * index, index}
    }
    renderItem = ({item, index}) => {
        return (
            <Swipeout
                close={!(this.state.rowID === index)}
                left={item.left}
                right={item.right}
                rowID={index}
                sectionID={0}
                autoClose={item.autoClose}
                backgroundColor={item.backgroundColor}
                onOpen={(sectionID, rowID) => {
                    this.setState({
                        sectionID,
                        rowID,
                    })
                }}
                onClose={() => console.log('===close') }
                scroll={event => console.log('scroll event') }>
                <TextAlignVertical key={index}
                                   style={styles.item}
                                   text={item.text}/>
            </Swipeout>
        )
    }

    separatorComponent = () => <LineHorizontal/>

    renderContent() {
        return <CommonListView numColumns={1}
                               data={data}
                               onRefresh={this.onRefresh}
                               renderItem={this.renderItem}
                               separatorComponent={this.separatorComponent}
                               getItemLayout={this.getItemLayout}
                               noMoreTip='没有更多啦~~'/>
    }
}

const styles = StyleSheet.create({
    item: {
        width: GlobalStyle.screen.width,
        height: itemHeight,
        fontSize: GlobalStyle.fonts.font_26,
        color: GlobalStyle.colors.color_primary,
    },
    line: {}
})