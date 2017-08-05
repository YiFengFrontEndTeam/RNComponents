/**
 * Created by otto on 2017/7/13.
 */

"use strict";

import React, {PureComponent, PropTypes} from 'react';
import {
    RefreshControl,
} from 'react-native';

export default class CommonRefreshControl extends PureComponent {

    state = {
        isRefreshing: false,
    }

    static propTypes = {
        tintColor: PropTypes.string,
        titleColor: PropTypes.string,
        colors: PropTypes.array,
        progressBackgroundColor: PropTypes.string,
        isRefreshing: PropTypes.bool,
        onRefresh: PropTypes.func,
    }

    constructor(props) {
        super(props);
    }

    render() {
        const {
            tintColor,
            titleColor,
            colors,
            progressBackgroundColor,
            isRefreshing
        } = this.props
        return (
            <RefreshControl
                {...this.props}
                refreshing={this.state.isRefreshing || isRefreshing}
                onRefresh={this.onRefresh}
                enabled={true}
                tintColor={tintColor}
                title="下拉刷新..."
                titleColor={titleColor}
                colors={colors}
                progressBackgroundColor={progressBackgroundColor}
            />
        )
    }

    setRefreshState = (isRefreshing) => {
        this.setState({
            isRefreshing: isRefreshing
        });
    }

    onRefresh = async () => {
        try {
            this.setRefreshState(true)
            const {onRefresh} = this.props;
            onRefresh && await onRefresh();
        } catch (e) {

        } finally {
            this.setRefreshState(false)
        }
    }
}