/**
 * Created by otto on 2017/7/14.
 */

import React, {PureComponent, PropTypes} from 'react'
import {observer}  from 'mobx-react'
import Label from '../../library/component/label'

@observer
export default class FunItem extends PureComponent {

    static propTypes = {
        item: PropTypes.object.isRequired,
        style:PropTypes.number
    }

    render() {
        const {item, style} = this.props
        const {id, title, value} = item
        return <Label text={`id:${id}, title:${title}, value:${value}`} normalStyle={style}/>
    }
}