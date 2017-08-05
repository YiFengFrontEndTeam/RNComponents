/**
 * Created by otto on 2017/7/13.
 */
"use strict";

import React, {PureComponent, PropTypes} from 'react'
import {StyleSheet, ListView} from 'react-native'

import Label from './label'

export default class ClassicListView extends PureComponent {

    static propTypes = {
        dataSource: PropTypes.object,
        renderRow: PropTypes.func,
        renderHeader: PropTypes.func,
        renderFooter: PropTypes.func,
        renderSeparator: PropTypes.func,
        initialListSize: PropTypes.number,
        onEndReachedThreshold: PropTypes.number,
        pageSize: PropTypes.number,
        isShowLoadingMore: PropTypes.bool,
        onLoadMore: PropTypes.func,
        loadingMoreTip: PropTypes.string,
        noMoreTip: PropTypes.string,
        refreshControl: PropTypes.object,
        style: PropTypes.number,
        footerText: PropTypes.number,
    }

    render() {
        const {
            dataSource, renderRow, renderHeader, renderFooter, renderSeparator, initialListSize = 10,
            onEndReachedThreshold = 0, pageSize = 10, isShowLoadingMore, onLoadMore, refreshControl, style
        } = this.props
        let renderFooterFinal = renderFooter
        if (!renderFooterFinal) {
            renderFooterFinal = this.renderFooter
        }
        return <ListView refreshControl={refreshControl}
                         dataSource={dataSource}
                         renderRow={renderRow}
                         renderHeader={renderHeader}
                         renderFooter={renderFooterFinal}
                         renderSeparator={renderSeparator}
                         initialListSize={initialListSize}
                         pageSize={pageSize}
                         {...this.props}
                         onEndReached={isShowLoadingMore ? onLoadMore : null}
                         onEndReachedThreshold={onEndReachedThreshold}
                         style={[styles.listView, style]}/>
    }

    renderFooter = () => {
        const {isShowLoadingMore, loadingMoreTip = '正在加载中...', noMoreTip, footerText} = this.props
        return (
            (isShowLoadingMore || noMoreTip) &&
            <Label text={isShowLoadingMore ? loadingMoreTip : noMoreTip} normalStyle={footerText}/>
        )
    }
}

const styles = StyleSheet.create({
    listView: {flex: 1},
})