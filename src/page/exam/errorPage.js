/**
 * Created by otto on 2017/6/28.
 */

import React, {} from 'react'
import BasePage from '../basePage'

import {observer} from 'mobx-react'

@observer
export default class ErrorPage extends BasePage {

    initPageStore() {
        super.initPageStore()
        this.pageStore.onError()
    }

    getTitle() {
        return 'Error'
    }
}
