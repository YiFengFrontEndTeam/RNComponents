/**
 * Created by otto on 2017/6/28.
 */
import React, {PureComponent, PropTypes} from 'react';
import {
    RefreshControl,
} from 'react-native';

import {observer} from 'mobx-react/native'

import GlobalStyle from '../../styles/styles';

@observer
export default class CommonRefreshControl extends PureComponent {

    state = {
        isRefreshing: false,
    }

    static propTypes = {
        isRefreshing: PropTypes.bool,
        onRefresh: PropTypes.func,
    }

    constructor(props) {
        super(props);
    }

    render() {
        const {isRefreshing} = this.props
        return (
            <RefreshControl
                {...this.props}
                refreshing={this.state.isRefreshing || isRefreshing}
                onRefresh={this.onRefresh}
                enabled={true}
                tintColor={GlobalStyle.colors.color_primary}
                title="下拉刷新..."
                titleColor={GlobalStyle.colors.color_font_second}
                colors={['#00c599']}
                progressBackgroundColor={GlobalStyle.colors.white}
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