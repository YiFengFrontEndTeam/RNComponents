/**
 * Created by otto on 2017/6/29.
 */

import React, {PropTypes, PureComponent} from 'react'
import {View} from 'react-native'

import {observer} from 'mobx-react'

import GlobalStyle from '../../styles/styles'

@observer
export default class RoundDot extends PureComponent {

    static propTypes = {
        size: PropTypes.number,
        borderColor: PropTypes.number,
        borderWidth: PropTypes.number,
        color: PropTypes.string,
        style: PropTypes.number,
        visible: PropTypes.bool,
    }

    render() {
        const {
            size = GlobalStyle.sizes.size_20,
            borderColor = GlobalStyle.colors.transparent,
            borderWidth = 0,
            color = GlobalStyle.colors.color_primary,
            visible,
            style
        } = this.props
        return <View
            style={[{
                width: size, height: size,
                borderRadius: size / 2,
                borderColor: borderColor,
                borderWidth: borderWidth,
            }, style, {backgroundColor: visible ? color : GlobalStyle.colors.transparent}]}/>
    }
}
