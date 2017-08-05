/**
 * Created by otto on 2017/6/27.
 */

"use strict";

import PropTypes from 'prop-types'
import React, {PureComponent} from 'react'
import {StyleSheet, FlatList} from 'react-native'

import {observer} from 'mobx-react'


import TextAlignVertical from './textAlignVertical'
import GlobalStyle from '../../styles/styles'

@observer
export default class CommonListView extends PureComponent {

    static propTypes = {
        data: PropTypes.array,
        extraData: PropTypes.object,
        renderItem: PropTypes.func,
        getItemLayout: PropTypes.func,
        numColumns: PropTypes.number,
        onRefresh: PropTypes.func,
        refreshing: PropTypes.bool,
        separatorComponent: PropTypes.func,
        listFooterComponent: PropTypes.object,
        listHeaderComponent: PropTypes.object,
        isShowLoadingMore: PropTypes.bool,
        onEndReachedThreshold: PropTypes.number,
        onLoadMore: PropTypes.func,
        loadingMoreTip: PropTypes.string,
        noMoreTip: PropTypes.string,
    }

    render() {
        const {
            data, extraData, renderItem, getItemLayout, separatorComponent, numColumns = 1, onRefresh,
            refreshing = false, listFooterComponent, listHeaderComponent, onEndReachedThreshold = 0, isShowLoadingMore, onLoadMore
        } = this.props

        let renderFooter = listFooterComponent
        if (!renderFooter) {
            renderFooter = this.renderFooter
        }

        return (
            <FlatList data={data}
                      extraData={extraData}
                      renderItem={renderItem}
                      getItemLayout={getItemLayout}
                      numColumns={numColumns}
                      onRefresh={onRefresh}
                      refreshing={refreshing}
                      ItemSeparatorComponent={separatorComponent}
                      ListFooterComponent={renderFooter}
                      ListHeaderComponent={listHeaderComponent}
                      keyExtractor={this.keyExtractor}
                      onEndReached={isShowLoadingMore ? onLoadMore : null}
                      onEndReachedThreshold={onEndReachedThreshold}/>
        )
    }

    renderFooter = () => {
        const {isShowLoadingMore, loadingMoreTip = '正在加载中...', noMoreTip} = this.props
        return (
            (isShowLoadingMore || noMoreTip) ?
                <TextAlignVertical text={isShowLoadingMore ? loadingMoreTip : noMoreTip}
                                   style={styles.footerText}/> : null
        )
    }

    keyExtractor = (item, index) => index
}

const styles = StyleSheet.create({
    listView: {flex: 1},
    footerText: {
        height: GlobalStyle.sizes.size_100,
        color: GlobalStyle.colors.color_font_third,
        fontSize: GlobalStyle.fonts.font_24,
    },
})
