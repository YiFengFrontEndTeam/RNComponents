/**
 * Created by otto on 2017/6/28.
 */

import React, {PureComponent, PropTypes} from 'react'
import {StyleSheet, View, Image, Text} from 'react-native'

import {observer} from 'mobx-react'

import SwipeCards from 'react-native-swipe-cards'
import ProgressImage from '../../component/base/progressImage'

import BasePage from '../basePage'
import GlobalStyle from '../../styles/styles'

const Cards = [
    {label: 'Tomato', backgroundColor: 'red'},
    {label: 'Aubergine', backgroundColor: 'purple'},
    {label: 'Courgette', backgroundColor: 'green'},
    {label: 'Blueberry', backgroundColor: 'blue'},
    {label: 'Umm...', backgroundColor: 'cyan'},
    {label: 'orange', backgroundColor: 'orange'},
    {label: '1', image: 'https://media.giphy.com/media/GfXFVHUzjlbOg/giphy.gif'},
    {label: '2', image: 'https://media.giphy.com/media/irTuv1L1T34TC/giphy.gif'},
    {label: '3', image: 'https://media.giphy.com/media/LkLL0HJerdXMI/giphy.gif'},
    {label: '4', image: 'https://media.giphy.com/media/fFBmUMzFL5zRS/giphy.gif'},
    {label: '5', image: 'https://media.giphy.com/media/oDLDbBgf0dkis/giphy.gif'},
    {label: '6', image: 'https://media.giphy.com/media/7r4g8V2UkBUcw/giphy.gif'},
    {label: '7', image: 'https://media.giphy.com/media/K6Q7ZCdLy8pCE/giphy.gif'},
    {label: '8', image: 'https://media.giphy.com/media/hEwST9KM0UGti/giphy.gif'},
    {label: '9', image: 'https://media.giphy.com/media/3oEduJbDtIuA2VrtS0/giphy.gif'},
]

@observer
export default class SwipeCardsPage extends BasePage {

    initPageStore() {
        super.initPageStore()
        this.showAsStaticPage()
    }

    getTitle() {
        return 'Swipe Cards'
    }

    renderContent() {
        return (
            <SwipeCards cards={Cards}
                        loop={true}
                        renderCard={this.renderCard}
                        renderNoMoreCards={this.renderNoMoreCards}
                        showYup={true}
                        showNope={true}
                        showMaybe={true}
                        handleYup={this.handleYup}
                        handleNope={this.handleNope}
                        cardRemoved={this.cardRemoved}
                        smoothTransition={true}/>
        )
    }

    renderCard = (cardData) => <Card {...cardData}/>
    renderNoMoreCards = () => {
        return (
            <View style={styles.noMoreCards}>
                <Text>No more cards</Text>
            </View>
        )
    }
    handleYup = (card) => {
    }
    handleNope = (card) => {
    }
    handleMaybe = (card) => console.log(`Maybe for ${card.text}`)
    cardRemoved = (index) => {
    }
}

@observer
class Card extends PureComponent {

    static propTypes = {
        label: PropTypes.string,
        image: PropTypes.string,
        backgroundColor: PropTypes.string,
    }

    constructor(props) {
        super(props)
    }

    render() {
        const {label, image, backgroundColor} = this.props
        return (
            <View style={[styles.card, {backgroundColor: backgroundColor}]}>
                <Text style={styles.text}>{label}</Text>
                {
                    image ? <ProgressImage style={styles.thumbnail} source={{uri: image}}/> : null
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        borderRadius: 8,
        overflow: 'hidden',
        borderColor: 'grey',
        backgroundColor: 'white',
        borderWidth: 1,
        width: 300,
        height: 300,
    },
    thumbnail: {
        flex: 1,
        width: 300,
        height: 200,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        overflow: 'hidden',
        resizeMode: Image.resizeMode.cover,
        overlayColor: GlobalStyle.colors.white,
    },
    text: {
        width: 300,
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        color: GlobalStyle.colors.white,
        backgroundColor: GlobalStyle.colors.color_primary,
        overflow: 'hidden',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    noMoreCards: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height: 300,
    }
})