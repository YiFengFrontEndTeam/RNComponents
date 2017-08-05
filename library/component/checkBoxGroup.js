/**
 * Created by otto on 2017/7/20.
 */

"use strict";

import React, {PropTypes, PureComponent} from 'react'
import {TouchableOpacity, TouchableWithoutFeedback, Dimensions, FlatList, View, Text} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

const {width, height} = Dimensions.get('window')

export default class CheckboxGroup extends PureComponent {

    static propTypes = {
        checkOptions: PropTypes.array.isRequired,
        numColumns: PropTypes.number,
        checkedIcon: PropTypes.object,
        uncheckedIcon: PropTypes.object,
        iconColor: PropTypes.string,
        iconSize: PropTypes.number,
        onSelectedChangeListener: PropTypes.func.isRequired,
        style: PropTypes.number,
        optionItemStyle: PropTypes.number,
        labelStyle: PropTypes.number,
    }

    constructor(props) {
        super(props)
        const {checkOptions} = this.props
        let selectedOptions = []
        if (checkOptions && checkOptions.length > 0) {
            checkOptions.map(option => option.selected && selectedOptions.push(option.value))
        }
        this.state = {
            pageWith: width,
            pageHeight: height,
            selected: selectedOptions,
        }
    }

    _onSelected = (item) => {

        let selectedOptions = this.state.selected

        if (selectedOptions.indexOf(item.value) == -1) {
            selectedOptions.push(item.value)
        } else {
            selectedOptions = selectedOptions.filter(optionValue => optionValue != item.value)
        }

        item.selected = !item.selected
        this.setState({selected: selectedOptions.slice()})

        const {onSelectedChangeListener} = this.props
        onSelectedChangeListener && onSelectedChangeListener(this.state.selected)
    }

    _isSelected = (item) => {
        return this.state.selected.indexOf(item.value) >= 0
    }

    _keyExtractor = (item, index) => index

    _renderItem = ({item, index}) => {

        const {
            checkedIcon = 'ios-checkbox-outline',
            uncheckedIcon = 'ios-square-outline',
            iconColor = '#00a2dd',
            iconSize = 30,
            optionItemStyle,
            labelStyle
        } = this.props

        return (
            <TouchableWithoutFeedback
                key={index}
                onPress={() => {
                    this._onSelected(item)
                }}>
                <View style={[{flexDirection: 'row', alignItems: 'center'}, optionItemStyle]}>
                    {this._isSelected(item) ?
                        <Icon name={checkedIcon} color={iconColor} size={iconSize}/>
                        : <Icon name={uncheckedIcon} color={iconColor} size={iconSize}/>
                    }
                    <Text style={[{marginLeft: 10}, labelStyle]}>{item.label}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    render() {
        const {checkOptions, numColumns = 2, style} = this.props
        return <FlatList key={numColumns}
                         style={style}
                         data={checkOptions}
                         renderItem={this._renderItem}
                         numColumns={numColumns}
                         keyExtractor={this._keyExtractor}
                         extraData={this.state.selected}/>
    }
}
