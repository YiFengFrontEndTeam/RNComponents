/**
 * Created by otto on 2017/6/23.
 */

import React, {PureComponent} from 'react'
import {StyleSheet, Image} from 'react-native'
import {observer} from 'mobx-react'

import TabNavigator from 'react-native-tab-navigator'

import RoundDot from '../component/base/roundDot'

import AppStore from '../store/appStore'
import GlobalStyle from '../styles/styles'
import * as Constants from '../constants/constants'
import ExamPage from './exam/examPage'

@observer
export default class MainTab extends PureComponent {

    render() {
        return (
            <TabNavigator tabBarStyle={styles.tabBarStyle}
                          sceneStyle={styles.sceneStyle}>
                <TabNavigator.Item
                    renderBadge={() => <RoundDot style={styles.redDot} visible={AppStore.tabDemoDotVisible}/>}
                    tabStyle={styles.tabStyle}
                    title={Constants.TABS[0]}
                    selected={Constants.TABS[0] === AppStore.selectedTab}
                    selectedTitleStyle={{color: GlobalStyle.colors.color_primary}}
                    renderIcon={() => this.rendIcon(0, false)}
                    renderSelectedIcon={() => this.rendIcon(0, true)}
                    onPress={() => AppStore.onTabSelected(0)}>
                    {<ExamPage/>}
                </TabNavigator.Item>
            </TabNavigator>
        )
    }

    rendIcon = (tabIndex, selected) => {
        let icon
        if (tabIndex === 0) {
            icon = selected ? require('../resource/image/ic_assistant_black.png') : require('../resource/image/ic_assistant_black.png')
        }
        return <Image style={styles.tabIcon} source={icon} resizeMode={Image.resizeMode.contain}/>
    }
}

const styles = StyleSheet.create({
    tabBarStyle: {
        height: GlobalStyle.sizes.bottom_bar_height,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: GlobalStyle.colors.white,
    },
    sceneStyle: {
        paddingBottom: GlobalStyle.sizes.bottom_bar_height
    },
    tabStyle: {
        padding: GlobalStyle.sizes.size_8
    },
    tabIcon: {
        width: GlobalStyle.sizes.size_60,
        height: GlobalStyle.sizes.size_40,
        paddingHorizontal: GlobalStyle.sizes.size_10
    },
    redDot: {
        position: 'absolute', top: 0, right: 0
    }
})