/**
 * Created by otto on 2017/6/29.
 */

import React, {PureComponent} from 'react'
import {View, Text} from 'react-native'

import {observer} from 'mobx-react'

import ScrollableTabView from 'react-native-scrollable-tab-view'

import GlobalStyle from '../../styles/styles'

@observer
export default class ScrollableTabViewPage extends PureComponent {

    render() {
        return (
            <ScrollableTabView initialPage={0}
                               tabBarTextStyle={{fontSize: GlobalStyle.fonts.font_34}}
                               locked={false}
                               tabBarBackgroundColor='white'
                               style={{paddingTop: GlobalStyle.sizes.status_bar_height}}>
                <View tabLabel='Page 1'><Text>Page 1</Text></View>
                <View tabLabel='Page 2'><Text>Page 2</Text></View>
                <View tabLabel='Page 3'><Text>Page 3</Text></View>
            </ScrollableTabView>
        )
    }
}