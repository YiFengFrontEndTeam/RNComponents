/**
 * Created by otto on 2017/6/26.
 */

import React, {PropTypes} from 'react'
import {View} from 'react-native'
import GlobalStyle from '../../styles/styles'

const LineHorizontal = ({width, height = GlobalStyle.sizes.size_1, backgroundColor = GlobalStyle.colors.color_primary, style}) => {
    return <View style={[{backgroundColor: backgroundColor, height: height, width: width}, style]}/>
}

LineHorizontal.prototype = {
    width: PropTypes.number,
    height: PropTypes.number,
    backgroundColor: PropTypes.string,
    style: PropTypes.number,
}
export default LineHorizontal