/**
 * Created by otto on 2017/7/20.
 */

"use strict";

import React, {} from 'react'
import {View, ScrollView, StyleSheet} from 'react-native'
import {observer} from 'mobx-react'
import {observable, action} from 'mobx'
import BasePage from '../basePage'
import CheckboxGroup from '../../../library/component/checkBoxGroup'
import GlobalStyle from '../../styles/styles'

export default class CheckboxPage extends BasePage {

    checkOptions = [
        {value: '周末会友 1', label: '周末会友', selected: true},
        {value: '野钓 2', label: '野钓', selected: false},
        {value: '打羽毛球 3', label: '打羽毛球', selected: false},
        {value: '看书充电 4', label: '看书充电', selected: false},
        {value: '购物shopping 5', label: '购物shopping', selected: false},
    ]

    initPageStore() {
        super.initPageStore()
        this.showAsStaticPage()
    }

    getTitle() {
        return 'checkbox'
    }

    renderContent() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <CheckboxGroup checkOptions={this.checkOptions}
                                   onSelectedChangeListener={(selectedOptions) => console.warn(`selected:${selectedOptions}`)}
                                   optionItemStyle={{width: 200, height: 40}}
                                   iconSize={20}
                                   labelStyle={{fontSize: 14}}/>
                    <CheckboxGroup checkOptions={this.checkOptions}
                                   onSelectedChangeListener={(selectedOptions) => console.warn(`selected:${selectedOptions}`)}
                                   optionItemStyle={{width: 200, height: 40}}
                                   iconSize={20}
                                   labelStyle={{fontSize: 14}}/>
                    <CheckboxGroup checkOptions={this.checkOptions}
                                   onSelectedChangeListener={(selectedOptions) => console.warn(`selected:${selectedOptions}`)}
                                   optionItemStyle={{width: 200, height: 40}}
                                   iconSize={20}
                                   labelStyle={{fontSize: 14}}/>
                    <CheckboxGroup checkOptions={this.checkOptions}
                                   onSelectedChangeListener={(selectedOptions) => console.warn(`selected:${selectedOptions}`)}
                                   optionItemStyle={{width: 200, height: 40}}
                                   iconSize={20}
                                   labelStyle={{fontSize: 14}}/>
                    <CheckboxGroup checkOptions={this.checkOptions}
                                   onSelectedChangeListener={(selectedOptions) => console.warn(`selected:${selectedOptions}`)}
                                   optionItemStyle={{width: 200, height: 40}}
                                   iconSize={20}
                                   labelStyle={{fontSize: 14}}/>
                    <CheckboxGroup checkOptions={this.checkOptions}
                                   onSelectedChangeListener={(selectedOptions) => console.warn(`selected:${selectedOptions}`)}
                                   optionItemStyle={{width: 200, height: 40}}
                                   iconSize={20}
                                   labelStyle={{fontSize: 14}}/>
                    <CheckboxGroup checkOptions={this.checkOptions}
                                   onSelectedChangeListener={(selectedOptions) => console.warn(`selected:${selectedOptions}`)}
                                   optionItemStyle={{
                                       width: 200,
                                       height: 40
                                   }}
                                   iconSize={20}
                                   labelStyle={{fontSize: 14}}/>
                    <CheckboxGroup
                        checkOptions={this.checkOptions}
                        onSelectedChangeListener={(selectedOptions) => console.warn(`selected:${selectedOptions}`)}
                        optionItemStyle={{width: 200, height: 40}}
                        iconSize={20}
                        labelStyle={{fontSize: 14}}/>
                    <CheckboxGroup checkOptions={this.checkOptions}
                                   onSelectedChangeListener={(selectedOptions) => console.warn(`selected:${selectedOptions}`)}
                                   optionItemStyle={{width: 200, height: 40}}
                                   iconSize={20}
                                   labelStyle={{fontSize: 14}}/>
                    <CheckboxGroup checkOptions={this.checkOptions}
                                   onSelectedChangeListener={(selectedOptions) => console.warn(`selected:${selectedOptions}`)}
                                   optionItemStyle={{width: 200, height: 40}}
                                   iconSize={20}
                                   labelStyle={{fontSize: 14}}/>
                    <CheckboxGroup checkOptions={this.checkOptions}
                                   onSelectedChangeListener={(selectedOptions) => console.warn(`selected:${selectedOptions}`)}
                                   optionItemStyle={{width: 200, height: 40}}
                                   iconSize={20}
                                   labelStyle={{fontSize: 14}}/>
                    <CheckboxGroup checkOptions={this.checkOptions}
                                   onSelectedChangeListener={(selectedOptions) => console.warn(`selected:${selectedOptions}`)}
                                   optionItemStyle={{width: 200, height: 40}}
                                   iconSize={20}
                                   labelStyle={{fontSize: 14}}/>
                    <CheckboxGroup checkOptions={this.checkOptions}
                                   onSelectedChangeListener={(selectedOptions) => console.warn(`selected:${selectedOptions}`)}
                                   optionItemStyle={{width: 200, height: 40}}
                                   iconSize={20}
                                   labelStyle={{fontSize: 14}}/>
                    <CheckboxGroup checkOptions={this.checkOptions}
                                   onSelectedChangeListener={(selectedOptions) => console.warn(`selected:${selectedOptions}`)}
                                   optionItemStyle={{width: 200, height: 40}}
                                   iconSize={20}
                                   labelStyle={{fontSize: 14}}/>
                    <CheckboxGroup checkOptions={this.checkOptions}
                                   onSelectedChangeListener={(selectedOptions) => console.warn(`selected:${selectedOptions}`)}
                                   optionItemStyle={{
                                       width: 200,
                                       height: 40
                                   }}
                                   iconSize={20}
                                   labelStyle={{fontSize: 14}}/>
                    <CheckboxGroup
                        checkOptions={this.checkOptions}
                        onSelectedChangeListener={(selectedOptions) => console.warn(`selected:${selectedOptions}`)}
                        optionItemStyle={{width: 200, height: 40}}
                        iconSize={20}
                        labelStyle={{fontSize: 14}}/>

                </View>
            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: GlobalStyle.sizes.size_40,
    },
})