/**
 * Created by otto on 2017/7/13.
 */

"use strict";

import PropTypes from 'prop-types'
import React, {PureComponent} from 'react'
import {FlatList} from 'react-native'
import Label from './label'
import isEqual from 'lodash.isequal'

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
        footerText: PropTypes.number,
        style: FlatList.prototype.style,
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !isEqual(nextProps, this.props) || !isEqual(nextState, this.state)
    }

    render() {
        const {
            data, extraData, renderItem, getItemLayout, separatorComponent, numColumns = 1, onRefresh,
            refreshing = false, listFooterComponent, listHeaderComponent, onEndReachedThreshold = 0, isShowLoadingMore, onLoadMore, style
        } = this.props

        let renderFooter = listFooterComponent
        if (!renderFooter) {
            renderFooter = this.renderFooter
        }

        return (
            <FlatList key={numColumns}
                      style={style}
                      data={data}
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
        const {isShowLoadingMore, loadingMoreTip = '正在加载中...', noMoreTip, footerText} = this.props
        return (
            (isShowLoadingMore || noMoreTip) ?
                <Label text={isShowLoadingMore ? loadingMoreTip : noMoreTip}
                       normalStyle={footerText}/> : null
        )
    }

    keyExtractor = (item, index) => index
}
