/**
 * Created by otto on 2017/6/29.
 */

import React, {} from 'react'
import {StyleSheet, View} from 'react-native'

import {observer} from 'mobx-react'

import ProgressBar from '../../component/base/progressBar'
import GradientProgressBar from '../../component/base/gradientProgressBar'
import Button from '../../../library/component/button'

import BasePage from '../basePage'

import GlobalStyle from '../../styles/styles'

const progressBarWidth = GlobalStyle.screen.width * 3 / 4

@observer
export default class ProgressBarPage extends BasePage {

    percent = 0
    pb
    gpb
    interval

    componentDidMount() {
        super.componentDidMount()
        //this.updateProgressBar()
    }

    componentWillUnmount() {
        super.componentWillUnmount()
        this.stop()
    }

    initPageStore() {
        super.initPageStore()
        this.showAsStaticPage()
    }

    getTitle() {
        return 'ProgressBar'
    }

    renderContent() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                {/*<ProgressBar ref={pb => this.pb = pb}*/}
                             {/*width={progressBarWidth}*/}
                             {/*height={GlobalStyle.sizes.size_20}*/}
                             {/*percent={67}*/}
                             {/*backgroundColor={'red'}*/}
                             {/*backgroundImage={require('../../resource/image/icon_jf_bar.png')}*/}
                             {/*foregroundColor={GlobalStyle.colors.color_primary}*/}
                             {/*borderRadius={GlobalStyle.sizes.size_10}/>*/}

                <ProgressBar ref={pb => this.pb = pb}
                             width={progressBarWidth}
                             height={GlobalStyle.sizes.size_30}
                             animated={true}
                             percent={67}
                             backgroundColor={'red'}
                             foregroundColor={GlobalStyle.colors.color_primary}
                             borderRadius={GlobalStyle.sizes.size_30 / 2}/>


                <GradientProgressBar ref={gpb => this.gpb = gpb}
                                     width={progressBarWidth}
                                     height={GlobalStyle.sizes.size_20}
                                     percent={67}
                    //backgroundImage={require('../../resource/image/icon_jf_bar.png')}
                                     colorsBackground={['#9f260d', '#0c0a6a']}
                                     colorsForeground={['#fff240', '#13fffd']}
                                     style={{marginTop: GlobalStyle.sizes.size_20}}
                                     borderRadius={GlobalStyle.sizes.size_10}/>
                <View style={{alignItems: 'center',}}>
                    <Button
                        style={styles.buttonStyle0}
                        textStyle={styles.textStyle}
                        onPress={this.restart}>
                        Restart
                    </Button>
                </View>
            </View>
        )
    }

    updateProgressBar = () => {
        this.pb.updatePercent(this.percent)
        this.interval = setInterval(() => {
            this.gpb.updatePercent(this.percent += 0.1)
            if (this.percent > 1) {
                clearInterval(this.interval)
            }
        }, 100)

    }

    restart = () => {
        this.stop()
        this.updateProgressBar()
    }

    stop = () => {
        clearInterval(this.interval)
        this.percent = 0
    }
}

const styles = StyleSheet.create({
    textStyle: {
        color: 'white'
    },
    buttonStyle0: {
        width: GlobalStyle.screen.width * 3 / 4,
        borderColor: '#073e57',
        backgroundColor: '#266688',
        marginTop: GlobalStyle.sizes.size_100,
    },
})