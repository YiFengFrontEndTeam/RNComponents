/**
 * Created by otto on 2017/7/7.
 */
import {observable, action} from 'mobx'

import BaseStore from './baseStore'

export default class LabelStore extends BaseStore {

    @observable
    selected = false

    constructor(props) {
        super(props)
        this.showAsStaticPage()
    }

    @action
    toggleSelected = () => {
        this.selected = !this.selected
    }
}