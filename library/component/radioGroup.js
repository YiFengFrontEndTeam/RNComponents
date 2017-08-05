/**
 * Created by otto on 2017/7/20.
 */

import React, {PropTypes, PureComponent} from 'react'
import {FlatList, View, Text} from 'react-native'

export default class RadioGroup extends PureComponent {

    static propTypes = {
        options: PropTypes.array.isRequired,
        onSelectedChange: PropTypes.func.isRequired,
        numColumns: PropTypes.number,
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <FlatList/>
        )
    }
}
