/**
 * Created by otto on 2017/6/26.
 */
import React, {PropTypes} from 'react'
import {View} from 'react-native'

const WidgetsAround = ({children}) => {
    return (
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
            {
                (children && children.length > 0) && children.map(e => e)
            }
        </View>
    )
}

WidgetsAround.prototype = {
    children: PropTypes.array
}

export default WidgetsAround