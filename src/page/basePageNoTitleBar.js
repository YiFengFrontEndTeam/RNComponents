/**
 * Created by otto on 2017/6/23.
 */

import BasePage from './basePage'

export default class BasePageNoTitleBar extends BasePage {

    shouldShowTitle() {
        return false
    }
}