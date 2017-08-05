/**
 * Created by otto on 2017/7/13.
 */
"use strict";

import React, {PureComponent, PropTypes} from 'react'
import {} from 'react-native'

import PopupDialog, {
    DialogTitle,
    SlideAnimation,
    FadeInAnimation,
    ScaleAnimation
} from 'react-native-popup-dialog'

export default class Dialog extends PureComponent {

    static propTypes = {
        title: PropTypes.string,
        titleViewStyle: PropTypes.number,
        titleTextStyle: PropTypes.number,
        dismissOnTouchOutside: PropTypes.bool,
        width: PropTypes.number,
        height: PropTypes.number,
        contentView: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
        dialogStyle: PropTypes.number,
        animationIn: PropTypes.oneOf(['fadeIn', 'scaleIn', 'slideIn']),
        slideFrom: PropTypes.oneOf(['top', 'bottom', 'left', 'right'])
    }

    dialog

    render() {

        const {title, titleViewStyle, titleTextStyle, dismissOnTouchOutside = true, width = 0.8, height, contentView, dialogStyle, animationIn, slideFrom = 'bottom'} = this.props

        let animation = undefined
        if ('fadeIn' == animationIn) {
            animation = new FadeInAnimation({toValue: 0, animationDuration: 150})
        } else if ('scaleIn' == animationIn) {
            animation = new ScaleAnimation()
        } else {
            animation = new SlideAnimation({slideFrom: slideFrom})
        }

        return <PopupDialog ref={pDialog => this.dialog = pDialog}
                            dialogStyle={[{backgroundColor: '#00000000'}, dialogStyle]}
                            dialogTitle={
                                title ?
                                    <DialogTitle title={title} titleStyle={titleViewStyle}
                                                 titleTextStyle={titleTextStyle}/> : null
                            }
                            width={width}
                            height={height}
                            dialogAnimation={animation}
                            dismissOnTouchOutside={dismissOnTouchOutside}
                            dismissOnHardwareBackPress={dismissOnTouchOutside}>
            {contentView}
        </PopupDialog>
    }

    show = () => {
        this.dialog && this.dialog.show()
    }

    dismiss = () => {
        this.dialog && this.dialog.dismiss()
    }
}