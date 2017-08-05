/**
 * Created by otto on 2017/6/26.
 */
import React, {PropTypes} from 'react'
import {Animated} from 'react-native'
import Lightbox from 'react-native-lightbox'

const LightboxView = ({
                          navigator,
                          renderHeader,
                          activeProps,
                          renderContent,
                          renderContentDefault,
                          onClose,
                          onOpen,
                          underlayColor,
                          backgroundColor,
                          swipeToDismiss = true,
                          springConfig = Animated.spring
                      }) => {
    return (
        <Lightbox navigator={navigator}
                  renderHeader={renderHeader}
                  activeProps={activeProps}
                  renderContent={renderContent}
                  onClose={onClose}
                  onOpen={onOpen}
                  underlayColor={underlayColor}
                  backgroundColor={backgroundColor}
                  swipeToDismiss={swipeToDismiss}
                  springConfig={springConfig}
                  children={(renderContentDefault && renderContentDefault()) || (renderContent && renderContent())}/>
    )
}

LightboxView.prototype = {
    navigator: PropTypes.object,
    renderHeader: PropTypes.func,
    activeProps: PropTypes.object,
    renderContent: PropTypes.func,
    renderContentDefault: PropTypes.func,
    onClose: PropTypes.func,
    onOpen: PropTypes.func,
    underlayColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    swipeToDismiss: PropTypes.bool,
    springConfig: PropTypes.object,
}

export default LightboxView