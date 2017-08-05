/**
 * Created by otto on 2017/6/28.
 */

"use strict";

import React, {PureComponent, PropTypes} from 'react'
import {} from 'react-native'
import {observer} from 'mobx-react'

import PopupDialog, {DialogTitle, DialogButton, SlideAnimation} from 'react-native-popup-dialog'
import GlobalStyle from '../../styles/styles'

const getPosition = (btnCount, index) => {
    if (btnCount == 1) {
        return 'center'
    } else if (btnCount == 2) {
        return index == 0 ? 'left' : 'right'
    } else if (btnCount === 3) {
        return index == 0 ? 'left' : (index == 1 ? 'center' : 'right')
    } else {
        return 'center'
    }
}

@observer
export default class Dialog extends PureComponent {

    static propTypes = {
        title: PropTypes.string,
        titleStyle: PropTypes.number,
        titleTextStyle: PropTypes.number,
        dismissOnTouchOutside: PropTypes.bool,
        width: PropTypes.number,
        height: PropTypes.number,
        child: PropTypes.array,
    }

    dialog

    render() {

        const {title, titleStyle, titleTextStyle, dismissOnTouchOutside = true, actions, width = 0.8, height, child} = this.props

        let dialogButtons = []
        if (actions && actions instanceof Array && actions.length > 0) {
            actions.map((e, index) => {
                dialogButtons.push(
                    <DialogButton
                        text={e.title}
                        onPress={e.onPress}
                        key={`btn_${index}`}
                        align={getPosition(actions.length, index)}
                    />
                )
            })
        }

        return (
            <PopupDialog
                ref={pDialog => this.dialog = pDialog}
                dialogStyle={{ backgroundColor:'#00000000', position:'absolute',bottom:0}}
                dialogTitle={
                    title ?
                        <DialogTitle title={title} titleStyle={titleStyle} titleTextStyle={titleTextStyle}/> : null
                }
                width={width}
                height={height}
                dialogAnimation={new SlideAnimation({slideFrom: 'bottom'})}
                dismissOnTouchOutside={dismissOnTouchOutside}
                dismissOnHardwareBackPress={dismissOnTouchOutside}
                actions={dialogButtons}>
                {child}
            </PopupDialog>
        )
    }

    show = () => {
        this.dialog && this.dialog.show()
    }

    dismiss = () => {
        this.dialog && this.dialog.dismiss()
    }
}