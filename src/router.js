/**
 * Created by otto on 2017/6/27.
 */

import {Actions} from 'react-native-router-flux'

export default {
    homePage: () => Actions.mainPage(),
    errorPage: () => Actions.errorPage(),
    examPage: () => Actions.examPage(),
    carousel: () => Actions.carouselPage(),
    lightboxPage: () => Actions.lightboxPage(),
    flatListPage: () => Actions.flatListPage(),
    classicListPage: () => Actions.classicListPage(),
    progressImagePage: () => Actions.progressImagePage(),
    dialogPage: () => Actions.dialogPage(),
    swipeOutPage: () => Actions.swipeOutPage(),
    swipeCardsPage: () => Actions.swipeCardsPage(),
    scrollableTabViewPage: () => Actions.scrollableTabViewPage(),
    progressBarPage: () => Actions.progressBarPage(),
    progressiveImagePage: () => Actions.progressiveImagePage(),
    cardSwiperPage: () => Actions.cardSwiperPage(),
    labelPage: () => Actions.labelPage(),
    widgetsPage: () => Actions.widgetsPage(),
    textWithDrawablePage: () => Actions.textWithDrawablePage(),
    titleBarPage: () => Actions.titleBarPage(),
    videoPage: () => Actions.videoPage(),
    videoPageAndroid: () => Actions.videoPageAndroid(),
    videoPlayH5: () => Actions.videoPlayH5(),
    activityIndicatorPage: () => Actions.activityIndicatorPage(),
    checkboxPage: () => Actions.checkboxPage(),
    productDetailPage: () => Actions.ProductDetailPage(),
    switchPage: () => Actions.switchPage(),
}