/**
 * Created by otto on 2017/6/28.
 */

import React, {} from 'react'
import {StyleSheet, View, Button, Text, TouchableOpacity, Image} from 'react-native'

import {observer} from 'mobx-react'
import {observable, action} from 'mobx'

import Dialog from '../../../library/component/dialog'
import ProgressImage from '../../component/base/progressImage'
import Label from '../../../library/component/label'
import CommonList from '../../../library/component/commonListView'
import TextAlignVertical from '../../component/base/textAlignVertical'

import BasePage from '../basePage'
import GlobalStyle from '../../styles/styles'

const data = ['fadeIn-has-title', 'scaleIn-touch-outside-dismiss', 'slideIn-from-bottom', 'slideIn-from-left', 'slideIn-from-top', 'slideIn-from-right', 'position:bottom']

@observer
export default class DialogPage extends BasePage {

    columnsNum = 3
    itemHeight = GlobalStyle.screen.width / this.columnsNum

    popupDialog
    @observable
    hasTitle = false
    @observable
    animationInType = 'slideIn'
    @observable
    slideInFrom = 'bottom'
    @observable
    touchOutsideDismiss = true

    position

    initPageStore() {
        super.initPageStore()
        this.showAsStaticPage()
    }

    componentWillUnmount() {
        console.warn(`dialog page will unmount`)
        this.dismissDialog()
    }

    getTitle() {
        return 'Dialog'
    }

    @action
    showDialog = (hasTitle, animationInType, slideInFrom, touchOutsideDismiss) => {
        this.hasTitle = hasTitle
        this.animationInType = animationInType
        this.slideInFrom = slideInFrom
        this.touchOutsideDismiss = touchOutsideDismiss
        setTimeout(this.popupDialog.show, 100)
    }

    dismissDialog = () => {
        this.popupDialog && this.popupDialog.dismiss()
    }

    onRefresh = () => console.warn(`refresh`)
    getItemLayout = (data, index) => {
        return {length: this.itemHeight, offset: (this.itemHeight + GlobalStyle.sizes.size_1) * index, index}
    }
    renderItem = ({item, index}) => <Label key={index} normalStyle={[styles.item, {
        width: this.itemHeight - GlobalStyle.sizes.size_40,
        height: this.itemHeight - GlobalStyle.sizes.size_40,
        margin: GlobalStyle.sizes.size_20,
    }]} text={item} onPress={() => this.onItemClick(index)} touchOpacity={true}/>

    onItemClick = (index) => {
        this.position = undefined
        if (index == 0) {
            this.showDialog(true, 'fadeIn', '', false)
        } else if (index == 1) {
            this.showDialog(false, 'scaleIn', '', true)
        } else if (index == 2) {
            this.showDialog(false, 'slideIn', 'bottom', false)
        } else if (index == 3) {
            this.showDialog(false, 'slideIn', 'left', false)
        } else if (index == 4) {
            this.showDialog(false, 'slideIn', 'top', false)
        } else if (index == 5) {
            this.showDialog(false, 'slideIn', 'right', false)
        } else if (index == 6) {
            this.position = 'bottom'
            this.showDialog(false, 'slideIn', 'bottom', false)
        }
    }

    renderContent() {
        return (
            <View style={styles.container}>
                <CommonList style={{marginTop: GlobalStyle.sizes.size_100}}
                            numColumns={this.columnsNum}
                            data={data}
                            onRefresh={this.onRefresh}
                            renderItem={this.renderItem}
                    //separatorComponent={this.separatorComponent}
                            getItemLayout={this.getItemLayout}
                            initialNumToRender={100}/>
                <Dialog
                    ref={(popupDialog) => {
                        this.popupDialog = popupDialog;
                    }}
                    title={this.hasTitle ? 'dialog title' : null}
                    titleViewStyle={{backgroundColor: GlobalStyle.colors.color_primary}}
                    titleTextStyle={{fontSize: GlobalStyle.fonts.font_26, color: GlobalStyle.colors.white}}
                    width={0.8}
                    //height={GlobalStyle.sizes.size_480}
                    dismissOnTouchOutside={this.touchOutsideDismiss}
                    animationIn={this.animationInType}
                    slideFrom={this.slideInFrom}
                    dialogStyle={{
                        marginTop: -(GlobalStyle.sizes.title_bar_height + GlobalStyle.sizes.status_bar_height),
                        position: this.position ? 'absolute' : 'relative',
                        bottom: this.position ? GlobalStyle.sizes.title_bar_height + GlobalStyle.sizes.status_bar_height : undefined
                    }}
                    contentView={
                        <View style={{
                            backgroundColor: 'white',
                            overflow: 'hidden',
                            borderTopLeftRadius: this.hasTitle ? 0 : 8,
                            borderTopRightRadius: this.hasTitle ? 0 : 8,
                        }}>
                            {/*<ProgressImage
                             source={{uri: 'http://loremflickr.com/640/480/beauty'}}
                             style={{
                             width: GlobalStyle.sizes.size_640,
                             height: GlobalStyle.sizes.size_480,
                             resizeMode: Image.resizeMode.contain
                             }}/>*/}

                            <Image
                                source={{uri: 'https://tse2.mm.bing.net/th?id=OIP.BW9Gt_53bghqR_s_dK7VIAEsDH&w=285&h=180&c=7&qlt=90&o=4&dpr=2&pid=1.7'}}
                                style={{
                                    width: GlobalStyle.sizes.size_640,
                                    height: GlobalStyle.sizes.size_480,
                                    resizeMode: Image.resizeMode.cover,
                                    borderTopLeftRadius: this.hasTitle ? 0 : 8,
                                    borderTopRightRadius: this.hasTitle ? 0 : 8,
                                    overflow: 'hidden',
                                }}/>
                            <Label text='Close' normalStyle={{
                                height: GlobalStyle.sizes.size_80,
                                fontSize: GlobalStyle.fonts.font_26,
                                backgroundColor: GlobalStyle.colors.color_primary,
                                color: GlobalStyle.colors.white,
                            }} onPress={this.dismissDialog} touchOpacity={true}/>
                        </View>
                    }/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        fontSize: GlobalStyle.fonts.font_24,
        color: GlobalStyle.colors.color_primary,
        borderWidth: GlobalStyle.sizes.size_1,
        borderColor: GlobalStyle.colors.color_primary,
        borderRadius: GlobalStyle.sizes.size_20,
    },
})