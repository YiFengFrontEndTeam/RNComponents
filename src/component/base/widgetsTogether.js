/**
 * Created by otto on 2017/6/26.
 */
import React, {PropTypes} from 'react'
import {View} from 'react-native'

const WidgetsTogether = ({children}) => {
    return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {
                (children && children.length > 0) && children.map(e => e)
            }
        </View>
    )
}

WidgetsTogether.prototype = {
    children: PropTypes.array
}

export default WidgetsTogether