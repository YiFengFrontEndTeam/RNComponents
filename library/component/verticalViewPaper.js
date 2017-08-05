/**
 * Created by yf on 2017/7/25.
 */

import React,{Component,PropTypes} from 'react'
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    Dimensions,
    InteractionManager,
} from 'react-native'
const {width,height} = Dimensions.get('window')


const MaxDragSpace = 40;

const remindTitle = {
    topNorMalTitle:"上拉去到详情页",
    topTriggerTitle:"释放去到详情页",
    bottomNormalTitle:"下拉去到列表",
    bottomTriggerTitle:"释放去到列表页"
}

const TouchState = {
    TouchState_No:0, // 没有触摸
    TouchState_Drag_Begin:1, // 拖拽开始
    TouchState_Drag_END:2, // 拖拽结束
    TouchState_Scroll_Begin:3, // 拖拽结束  滑动开始
    TouchState_Scroll_End:4, // 滑动结束
}

const DragPart = {
    dragPart_No:0,
    dragPart_Top:1,
    dragPart_Bottom:2,
}

export default class VerticalPaper extends Component{

    constructor(props){
        super(props)
        this.state = {
            topRemindTitle:remindTitle.topNorMalTitle,
            bottomRemindTitle:remindTitle.bottomNormalTitle,
        }
        this.scrollInfo = {
            offset:0, //偏移量
            dragPart:DragPart.dragPart_No, // 当前拖拽的是哪一部分，默认
            contentHeight:0,// scroll内容高度
            scrollHeight:0,// scroll高度
            isTrigger:false, // 是否已经触发
            scrollToY:0,
            topContentHeight:0,
            topScrollHeight:0,
            bottomContentHeight:0,
            bottomScrollHeight:0,
        }
    }
    static propsTypes = {
        backgroundScrollViewStyle:PropTypes.object,
        topScrollStyle:PropTypes.styleSheet,
    }

    _childrens = () =>{
        if (this.props.children == null) return [];
        return React.Children.map(this.props.children,(child)=>child);
    }

    _topChildren = ()=>{
        return this._childrens().map((child,index)=>{
            if (index == 0 && child){
                // console.warn("topchildren +",child);
                return child;
            }
        })
    }
    _bottomChildren = ()=>{
        return this._childrens().map((child,index)=>{
            if (index == 1 && child){
                return child;
            }
        })
    }

    render() {
        const {
            backgroundScrollViewStyle,
        } = this.props

        return (
            <ScrollView style={backgroundScrollViewStyle ? backgroundScrollViewStyle : defaultStyles.backgroundScrollViewStyle}
                        scrollEnabled={false}
                        ref="backgroupScrollView"
            >
                <ScrollView
                    style={backgroundScrollViewStyle ? backgroundScrollViewStyle : defaultStyles.topScrollStyle}
                    scrollEventThrottle={80}
                    onLayout={(e)=>{
                        console.warn("onlayout => ",e.nativeEvent.layout);
                        this.scrollInfo.topScrollHeight = e.nativeEvent.layout.height;
                    }}
                    onContentSizeChange={(contentWidth, contentHeight)=>{
                        console.warn("contentsize => ",contentHeight);
                        this.scrollInfo.topContentHeight = contentHeight;
                    }}
                    onScroll={(e) => {
                        this.scrollInfo.offset = e.nativeEvent.contentOffset.y;
                        this._onScroll(e.nativeEvent.contentOffset.y);
                    }}
                    onScrollBeginDrag={(e) => {
                        // console.warn(" top onScrollBeginDrag")
                        this.scrollInfo.dragPart = DragPart.dragPart_Top;
                    }}
                    onScrollEndDrag={(e) => {
                        this._onScrollEndDrag(e.nativeEvent.contentOffset.y);
                        // console.warn(" top ScrollEndDrag")
                    }}
                    onMomentumScrollBegin={(e) => {
                        // console.warn(" top MomentumScrollBegin")
                    }}
                    onMomentumScrollEnd={(e) => {
                        // console.warn(" top MomentumScrollEnd")
                    }}
                >
                    {
                        this._topChildren()
                    }
                    <Text style={{position:'absolute',alignSelf:'center',height:20,bottom:-40}}>{this.state.topRemindTitle}</Text>
                </ScrollView>
                <ScrollView
                    style={backgroundScrollViewStyle ? backgroundScrollViewStyle :defaultStyles.bottomScrollStyle}
                    scrollEventThrottle={80}
                    scrollEnabled={true}
                    onLayout={(e)=>{
                        this.scrollInfo.bottomScrollHeight = e.nativeEvent.layout.height;
                    }}
                    onContentSizeChange={(contentWidth, contentHeight)=>{
                        this.scrollInfo.bottomContentHeight = contentHeight;
                    }}
                    onScroll={(e) => {
                        // console.warn("offset => ",e.nativeEvent.contentOffset.y);
                        this.scrollInfo.offset = e.nativeEvent.contentOffset.y;
                        this._onScroll(e.nativeEvent.contentOffset.y);
                    }}
                    onScrollBeginDrag={(e) => {
                        this.scrollInfo.dragPart = DragPart.dragPart_Bottom;
                    }}
                    onScrollEndDrag={(e) => {
                        this._onScrollEndDrag(e.nativeEvent.contentOffset.y);
                    }}
                    onMomentumScrollBegin={(e) => {
                    }}
                    onMomentumScrollEnd={(e) => {
                    }}
                >
                    <Text style={{position:'absolute',alignSelf:'center',height:20,top:-40}}>{this.state.bottomRemindTitle}</Text>
                    {this._bottomChildren()}
                </ScrollView>
            </ScrollView>
        );
    }

    _onScroll = (offsetY)=>{

        if (this.scrollInfo.dragPart == DragPart.dragPart_Top){
            if (this.scrollInfo.topScrollHeight <= this.scrollInfo.topContentHeight){
                console.warn(" top offsetY =>",offsetY);
                let maxoffset = this.scrollInfo.topContentHeight - this.scrollInfo.topScrollHeight + MaxDragSpace;
                if (maxoffset <= offsetY) {
                    if (this.state.topRemindTitle === remindTitle.topTriggerTitle) return;
                    console.warn(" top offsetY <= topTriggerTitle =>",offsetY,-MaxDragSpace);
                    this.setState({topRemindTitle: remindTitle.topTriggerTitle});
                    this.scrollInfo.isTrigger = true;
                    this.scrollInfo.scrollToY = this.scrollInfo.topScrollHeight;
                }else {
                    if (this.state.topRemindTitle === remindTitle.topNorMalTitle) return;
                    // console.warn(" top offsetY <= topNorMalTitle =>",offsetY,-MaxDragSpace);
                    this.setState({topRemindTitle: remindTitle.topNorMalTitle});
                    this.scrollInfo.isTrigger = false;
                    this.scrollInfo.scrollToY = 0;
                }
            }
        }else if(this.scrollInfo.dragPart == DragPart.dragPart_Bottom){
            // console.warn("bottom offsetY =>",offsetY,-MaxDragSpace);
            if (offsetY <= -MaxDragSpace) {
                // console.warn("bottom offsetY <= -MaxDragSpace =>",offsetY,-MaxDragSpace);
                if (this.state.bottomRemindTitle === remindTitle.bottomTriggerTitle) return;
                this.setState({bottomRemindTitle: remindTitle.bottomTriggerTitle});
                this.scrollInfo.isTrigger = true;
                this.scrollInfo.scrollToY = 0;
            }else {
                if (this.state.bottomRemindTitle === remindTitle.bottomNormalTitle) return;
                this.setState({bottomRemindTitle: remindTitle.bottomNormalTitle});
                this.scrollInfo.isTrigger = false;
                this.scrollInfo.scrollToY = 0;
            }
        }else {

        }

    }

    _onScrollEndDrag = (offsetY) => {
        console.warn("_onScrollEndDrag");
        this.scrollInfo.isTrigger && this.triggerAction();
    }


    triggerAction(){

        // console.warn("trigger");
        this.refs['backgroupScrollView'] && this.refs['backgroupScrollView'].scrollTo({y:this.scrollInfo.scrollToY,animated:true})

        this.scrollInfo.isTrigger = false;
        this.scrollInfo.dragPart = DragPart.dragPart_No;
        this.scrollInfo.offset = 0;
        this.scrollInfo.scrollToY = 0;
        InteractionManager.runAfterInteractions(() => {
            this.setState({
                topRemindTitle:remindTitle.topNorMalTitle,
                bottomRemindTitle:remindTitle.bottomNormalTitle,
            })
        })
    }

}




const defaultStyles = StyleSheet.create({
    backgroundScrollViewStyle:{
        flex:1,
        backgroundColor:'red',
        width:width,
    },
    topScrollStyle:{
        backgroundColor:'white',
        width:width,
        height:500,
    },
    bottomScrollStyle:{
        backgroundColor:'blue',
        width:width,
        height:500,
    },
})


