/**
 * Created by otto on 2017/4/13.
 */
import React, {PureComponent, PropTypes} from 'react'
import {StyleSheet, View, WebView} from 'react-native'
import {observer} from 'mobx-react/native'
import TitleBar from '../component/base/titleBar'
import GlobalStyle from '../styles/styles'
import PageRoute from '../router'

@observer
export default class ExWebViewPage extends PureComponent {

    currentUrl //当前页面url
    forbiddenInnerUrl //拦截页面内部所有非企业内部url链接，不跳转
    acceptUrlPrefix//通配 放行的url地址前缀
    filterUrl //需要拦截的URL地址或片段 {url,callback(triggered)}

    static propTypes = {
        title: PropTypes.string,
        url: PropTypes.string,
        html: PropTypes.string,
        injectedJavaScript: PropTypes.string, //在网页加载之前注入
        hideTitle: PropTypes.bool,
        filterUrl: PropTypes.array,
        forbiddenInnerUrl: PropTypes.bool,
        acceptUrlPrefix: PropTypes.string,
        onMessageCallback: PropTypes.func,
        injectValue: PropTypes.string, //在网页加载完毕之后注入
    }

    webViewRef

    constructor() {
        super()
        this.state = {}
    }

    render() {
        const {title, url, html, injectedJavaScript, hideTitle, filterUrl, forbiddenInnerUrl = false, acceptUrlPrefix, onMessageCallback} = this.props
        this.filterUrl = filterUrl
        this.forbiddenInnerUrl = forbiddenInnerUrl
        this.acceptUrlPrefix = acceptUrlPrefix
        return (
            <View style={styles.root}>
                {hideTitle ? null : <TitleBar title={title} backFunc={this.onBack}/>}
                <WebView
                    ref={(webView) => this.webViewRef = webView}
                    automaticallyAdjustContentInsets={false}
                    style={styles.webView}
                    source={{uri: url} || html}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate='normal'
                    injectedJavaScript={injectedJavaScript}
                    onMessage={onMessageCallback}
                    onNavigationStateChange={this.onNavigationStateChange}
                    onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
                    startInLoadingState={true}
                    scalesPageToFit={true}
                    onLoadStart={this.onStart}
                    onLoadEnd={this.onLoadEnd}
                />
            </View>
        )
    }

    freezon = false

    onStart = () => {
        console.warn(`on start...`)
        if (this.freezon) {
            this.webViewRef.stopLoading()
            return
        }
    }
    onLoadEnd = () => {
        console.warn(`on load end...`)
        //注入js
        this.inJect(this.currentUrl)
    }

    onNavigationStateChange = (navState) => {

        const url = navState.url
        console.warn(`url:${url}`)
        console.warn(`triggered:${url.indexOf(this.acceptUrlPrefix)}`)
        console.warn(`filter:${this.forbiddenInnerUrl && url && url.indexOf(this.acceptUrlPrefix) == -1}`)
        this.currentUrl = url

        if (this.forbiddenInnerUrl && url && url.indexOf(this.acceptUrlPrefix) == -1) {
            console.warn(`stop loading...`)
            this.freezon = true
            this.webViewRef.stopLoading()
            //this.webViewRef.onLoadingFinish(navState)
            return false
        }

        this.setState({
            canGoBack: navState.canGoBack,
            canGoForward: navState.canGoForward,
            url: navState.url,
            status: navState.title,
            loading: navState.loading,
            scalesPageToFit: true
        })

        console.warn(`navState:${JSON.stringify(navState)}`)
        if (this.filterUrl && this.filterUrl.callback) {
            this.filterUrl.callback(navState.url.indexOf(this.filterUrl.url) >= 0)
        }
    }

    onShouldStartLoadWithRequest = (event) => {
        // Implement any custom loading logic here, don't forget to return!
        console.warn(`event:${JSON.stringify(event)}`)
        const {url} = event

        if (this.forbiddenInnerUrl && url && url.indexOf(this.acceptUrlPrefix) == -1) {
            return false
        }
        return true
    };

    onBack = () => {
        if (this.webViewRef && this.state.canGoBack) {
            this.webViewRef.goBack()
        } else {
            PageRoute.pop()
        }
    }

    inJect = (currentUrl) => {
        const {url, injectValue} = this.props
        if (url != currentUrl) { //在主url地址页才执行注入
            return
        }
        if (injectValue && this.webViewRef) {
            this.webViewRef.injectJavaScript(injectValue)
        }
    }

}
const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    webView: {
        flex: 1,
        backgroundColor: GlobalStyle.colors.white,
    },
})

