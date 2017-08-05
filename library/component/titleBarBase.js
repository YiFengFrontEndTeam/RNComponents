/**
 * Created by otto on 2017/7/12.
 */

"use strict";

import React, {PropTypes} from 'react'
import {View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, StyleSheet} from 'react-native'
import WidgetsInline from './widgetsInline'
import Label from './label'

const TitleBarBase = ({backFun, backIcon, backIconStyle, backOptionImg, backOptionText, backOptionTextStyle, backOptionFunc, title, titleStyle, optionImg, optionImgStyle, optionText, optionTextStyle, optionFunc, onTitleBarPress, titleBarStyle, statusHeight = 0}) => {

    const titleBarStyleOriginal = StyleSheet.flatten(titleBarStyle)
    let titleBarHeight = 0
    if (titleBarStyleOriginal) {
        titleBarHeight = titleBarStyleOriginal.height
    }

    let backOption = backOptionImg ?
        <Image key='backOptionImg' style={{
            width: titleBarHeight,
            height: titleBarHeight,
            resizeMode: Image.resizeMode.center,
        }} source={backOptionImg}/> :
        (backOptionText ?
            <Label key='backOptionText'
                   normalStyle={[{
                       height: titleBarHeight,
                   }, backOptionTextStyle]} text={backOptionText}/> : null)

    let option = optionImg ?
        <Image key='optionImg'
               style={[{
                   width: titleBarHeight,
                   height: titleBarHeight,
                   resizeMode: Image.resizeMode.center,
               }, optionImgStyle]} source={optionImg}/> :
        (optionText ?
            <Label key='optionText'
                   normalStyle={[{
                       height: titleBarHeight,
                   }, optionTextStyle]} text={optionText}/> : null)

    return (
        <WidgetsInline justifyContent='space-between'
                       onPress={onTitleBarPress}
                       style={[titleBarStyle, {height: titleBarHeight + statusHeight, paddingTop: statusHeight}]}
                       children={[
                           <Label key='label' normalStyle={[{
                               flex: 1,
                               height: titleBarHeight,
                           }, titleStyle]} text={title}/>,
                           <TouchableOpacity onPress={backFun}
                                             style={{position: 'absolute', left: 0, top: statusHeight}}>
                               <Image key='backIcon' style={[{
                                   width: titleBarHeight,
                                   height: titleBarHeight,
                                   resizeMode: Image.resizeMode.center,
                               }, backIconStyle]} source={backIcon}/>
                           </TouchableOpacity>,
                           <TouchableOpacity onPress={backOptionFunc}
                                             style={{position: 'absolute', left: titleBarHeight, top: statusHeight}}>
                               {backOption}
                           </TouchableOpacity>,
                           <TouchableOpacity onPress={optionFunc}
                                             style={{position: 'absolute', right: 0, top: statusHeight}}>
                               {option}
                           </TouchableOpacity>
                       ]}/>

    )
}

TitleBarBase.prototype = {
    backFun: PropTypes.func,
    backIcon: PropTypes.number,
    backIconStyle: PropTypes.func,
    backOptionImg: PropTypes.number,
    backOptionText: PropTypes.string,
    backOptionTextStyle: Text.propTypes.style,
    backOptionFunc: PropTypes.func,
    title: PropTypes.string,
    titleStyle: Text.prototype.style,
    optionImg: PropTypes.number,
    optionImgStyle: Image.propTypes.style,
    optionText: PropTypes.string,
    optionTextStyle: Text.propTypes.style,
    onTitleBarPress: PropTypes.func,
    titleBarStyle: View.propTypes.style,
}
export default TitleBarBase