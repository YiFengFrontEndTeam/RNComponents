/**
 * Created by otto on 2017/7/14.
 */

import {observer} from 'mobx-react'
import {observable, action, computed} from 'mobx'

import BaseStore from './baseStore'

const dataDefault = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const data = [
    {id: 0, title: '天气预报', value: '今日长沙室外平均温度33℃'},
    {id: 1, title: '明日待办事项', value: '啊，不知道'},
    {id: 2, title: '讲个笑话吧', value: '嗯，哈哈哈😆'},
]

export default class FlatListStore extends BaseStore {

    @observable
    refreshState
    @observable
    dataSource = []

    constructor(props) {
        super(props)
    }

    loadData() {
        setTimeout(this.fillData, 2000)
    }

    @action
    fillData = () => {
        console.warn(`data:${data}`)
        this.dataSource.push(...data)
        this.onSuccess()
        //console.warn(`dataSource:${JSON.stringify(this.dataSource)}`)
    }

    @action
    showDefaultData = () => {
        this.dataSource = dataDefault.slice()
        this.onSuccess()
    }

    @action
    addItem = () => {
        this.dataSource.push(data[0])
        //console.warn(`dataSource:${this.dataSource}`)
        //this.refreshState = this.dataSource.length
    }

    @action
    changeItemValue = () => {
        this.dataSource.map(e => e.id = e.id + 1)
        //console.warn(`dataSource:${JSON.stringify(this.dataSource)}`)
        //this.refreshState = Math.random()
    }

    @action
    refresh = () => {
        this.dataSource.clear()
        this.dataSource.push(...data)
    }

    @computed
    get getDataSource() {
        return this.dataSource.slice()
    }

}