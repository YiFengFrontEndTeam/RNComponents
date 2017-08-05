/**
 * Created by otto on 2017/6/30.
 */
import React, {PropTypes, PureComponent} from 'react'
import {} from 'react-native'
import {observer} from 'mobx-react'

import RNCardSwiper from '@remobile/react-native-card-swiper'

@observer
export default class CardSwiper extends PureComponent {

    static propTypes = {
        dataSource: PropTypes.array.isRequired,
        width: PropTypes.number,
        height: PropTypes.number,
        vertical: PropTypes.bool,
        loop: PropTypes.bool,
        renderItem: PropTypes.func.isRequired,
        itemPress: PropTypes.func,
        onChange: PropTypes.func,
    }

    render() {
        const {dataSource, width, height, vertical, loop = false, renderItem, itemPress, onChange} = this.props
        return <RNCardSwiper
            list={dataSource}
            vertical={vertical}
            width={width}
            height={height}
            loop={loop}
            onPress={itemPress}
            onChange={onChange}
            renderRow={renderItem}/>
    }
}