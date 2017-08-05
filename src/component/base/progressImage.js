/**
 * Created by otto on 2017/6/28.
 */

"use strict";

import React, {PropTypes} from 'react'
import Image from 'react-native-image-progress';
import Circle from 'react-native-progress/Circle';
import GlobalStyle from '../../styles/styles'

const ProgressImage = ({source, indicatorSize = 40, indicatorColor = GlobalStyle.colors.color_primary, style}) => {
    return (
        <Image
            source={source}
            indicator={Circle}
            indicatorProps={{
                size: indicatorSize,
                borderWidth: 0,
                color: indicatorColor,
                unfilledColor: GlobalStyle.colors.white
            }}
            style={style}/>
    )
}
ProgressImage.prototype = {
    source: PropTypes.object,
    indicatorSize: PropTypes.number,
    indicatorColor: PropTypes.number,
    styles: PropTypes.number,
}
export default ProgressImage