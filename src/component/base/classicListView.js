/**
 * Created by otto on 2017/6/28.
 */

"use strict";

import React, {PureComponent, PropTypes} from 'react'
import {StyleSheet, ListView, Text} from 'react-native'

import {observer} from 'mobx-react'

import TextAlignVertical from './textAlignVertical'
import GlobalStyle from '../../styles/styles'

@observer
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
        const {isShowLoadingMore, loadingMoreTip = '正在加载中...', noMoreTip} = this.props
        return (
            (isShowLoadingMore || noMoreTip) &&
            <TextAlignVertical text={isShowLoadingMore ? loadingMoreTip : noMoreTip} style={styles.footerText}/>
        )
    }
}

const styles = StyleSheet.create({
    listView: {flex: 1},
    footerText: {
        height: GlobalStyle.sizes.size_100,
        color: GlobalStyle.colors.color_font_third,
        fontSize: GlobalStyle.fonts.font_24,
    },
})