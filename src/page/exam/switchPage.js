/**
 * Created by otto on 2017/8/2.
 */

import React, {} from 'react'
import {View} from 'react-native'
import {observer} from 'mobx-react'
import {observable, action} from 'mobx'
import Switch from '../../../library/component/switch'
import BasePage from '../basePage'

@observer
export default class SwitchPage extends BasePage {

    @observable
    switchValue = false

    initPageStore() {
        super.initPageStore()
        this.showAsStaticPage()
    }

    getTitle() {
        return 'switch'
    }

    @action
    updateSwitchValue = (value) => {
        this.switchValue = value
    }

    renderContent() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Switch value={this.switchValue}
                        disabled={false}
                        defaultValue={this.switchValue}
                        width={100}
                        height={60}
                        onSyncPress={(value) => {
                            console.warn(`current value:${value}`)
                            this.updateSwitchValue(value)
                        }}/>
            </View>
        )
    }
}
