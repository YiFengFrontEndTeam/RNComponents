/**
 * Created by yf on 2017/7/25.
 */
import React,{Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Image,
} from 'react-native'
import {observer} from 'mobx-react'
import {observable, action} from 'mobx'
import GlobalStyle from '../../styles/styles'
import BasePage from '../basePage'
import ProductDetailStore from '../../store/ProductDetailStore'
import VerticalPaper from '../../component/base/verticalViewPaper'

@observer
export default class ProductDetailPage extends BasePage{
    constructor(props){
        super(props);
    }
    initPageStore(){
        this.pageStore = new ProductDetailStore();
    }

    getTitle(){
        return "商品详情";
    }

    renderContent(){
        return (
            <View style={{flex:1}}>
                <VerticalPaper backgroundScrollViewStyle={styles.backgroundScrollViewStyle}>
                    <View style={{flex:1,backgroundColor:"yellow"}}>
                        {
                            this.pageStore.fetchDatas.map((item)=>{
                            return <CommunityItem item={item} onPress={this._pressItem.bind(this)}/>
                        })
                        }
                    </View>
                    <View style={{backgroundColor:'green',flex:1}}>
                        {
                            this.pageStore.fetchDatas.map((item)=>{
                            return <CommunityItem item={item} onPress={this._pressItem.bind(this)}/>
                        })
                        }
                    </View>
                </VerticalPaper>
            </View>
        );
    }
    _pressItem = ()=>{
        console.warn("sss");
    }
}






const styles = StyleSheet.create({
    backgroundScrollViewStyle:{
        flex:1,
        backgroundColor:'white',
        width:GlobalStyle.screen.width,
        height:GlobalStyle.screen.height - GlobalStyle.sizes.title_bar_height - GlobalStyle.sizes.status_bar_height,
    }
})


//
/*
 * item的文字内容部分
 * */
class CommunityItemTitleContentView extends React.Component{

    constructor(props){
        super(props);
        this.state = {
        };
    };
    render(){
        // console.warn(`${this.props.text}`);
        return (
            <View style={styleTool.titleContentView}>
                <Text style={styleTool.title}>
                    {this.props.text}
                </Text>
            </View>
        );
    }

}

/*
 *  item 的头部
 * */
class CommunityItemTopContentView extends Component{
    constructor(props){
        super(props);
        this.state = {
        };
        props = {
            item:Object,
        };
    };
    render(){
        return (
            <View style={styleTool.topContenView}>
                <View style={styleTool.headIconView}>
                    <Image
                        source={{uri:this.props.item.headIcon}}
                        resizeMode='cover'
                        style={styleTool.headIcon}
                    />
                </View>
                <View style={styleTool.nameAndIndictor}>
                    <View style={styleTool.name}>
                        <Text>
                            {this.props.item.name}
                        </Text>
                    </View>
                    <View style={styleTool.indictorView}>
                        <Text style={styleTool.ouxiang}>偶像</Text>
                        <Text style={styleTool.age}>{this.props.item.age}</Text>
                    </View>
                </View>
                <View style={styleTool.rightView}>
                    <Text style={styleTool.createDate}>{this.props.item.createDate}</Text>
                </View>
            </View>
        );
    }
}




/*
 * 整个item
 * */
class CommunityItem extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
        props = {
            item: Object,
            backStyle:Object,
        };
    }
    render(){
        console.warn("item => ",JSON.stringify( this.props.item));
        return (
            <TouchableHighlight
                onPress={this._onPress.bind(this)}
            >
                <View>
                    <CommunityItemTopContentView item={this.props.item}/>
                    <CommunityItemTitleContentView text={this.props.item.text}/>
                </View>
            </TouchableHighlight>
        );
    }
    _onPress = ()=> {
        this.props.onPress(this.props.item.name);
    }
}

class YCommunityItemSeparator extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return (
            <View style={styleTool.separatorStyle}/>
        );
    }
}

const  LEFT_AND_RIGHT_PADDING = 40;

const  styleTool = StyleSheet.create({
    itemView:{
        backgroundColor:'white',
    },
    separatorStyle:{
        backgroundColor:'aliceblue',
        height:4,
    },
    titleContentView:{
        paddingLeft:LEFT_AND_RIGHT_PADDING,
        paddingRight:LEFT_AND_RIGHT_PADDING,
        paddingBottom:10,
        width:GlobalStyle.screen.width,
        backgroundColor:'white',
    },
    title:{
        flex:1,
        backgroundColor:'white',
        color:'black',
    },
    topContenView:{
        backgroundColor:'white',
        justifyContent:'flex-start',
        flexDirection:'row',
        height:80,
    },
    headIconView:{
        alignSelf:'center',
        backgroundColor:'white',
        justifyContent:'center',
        flexDirection:'column',
        width:80,
    },
    headIcon:{
        width:60,
        height:60,
        borderRadius:30,
        alignSelf:'center',
    },
    nameAndIndictor:{
        flexDirection:'column',
        justifyContent:'space-around',
        backgroundColor:'white',
        width:GlobalStyle.screen.width-80-60,
    },
    name:{
        paddingLeft:0,
        // paddingTop:10,
    },
    indictorView:{
        flexDirection:'row',
        alignItems:'flex-start'
    },
    ouxiang:{
        backgroundColor:'#11ffff',
        color:'white',
        borderRadius:2,
        overflow:'hidden',
        fontSize:13,
    },
    age:{
        fontSize:13,
        backgroundColor:'#cc11aa',
        color:'white',
        borderRadius:2,
        overflow:'hidden',
        marginLeft:3,
    },
    rightView:{
        paddingRight:10,
        paddingTop:10,
        width:60,
    },
    createDate:{
        fontSize:12,
        color:'#11ffaa',
    },
});