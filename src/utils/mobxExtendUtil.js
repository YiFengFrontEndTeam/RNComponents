/**
 * Created by otto on 2017/7/7.
 */

import React, {PureComponent, PropTypes} from 'react'
import {observer} from 'mobx-react'

export default MobxExtend = (component) => {
    return observer(component)
}