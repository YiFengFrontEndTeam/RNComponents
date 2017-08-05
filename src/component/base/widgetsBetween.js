/**
 * Created by otto on 2017/6/26.
 */
import React, {PropTypes} from 'react'
import {View} from 'react-native'

const WidgetsBetween = ({children}) => {
    return (
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            {
                (children && children.length > 0) && children.map(e => e)
            }
        </View>
    )
}

WidgetsBetween.prototype = {
    children: PropTypes.array
}

export default WidgetsBetween