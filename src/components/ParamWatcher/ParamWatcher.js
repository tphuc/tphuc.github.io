import React from 'react';
import PT from 'prop-types';




export const ParamWatcher = (props) => {
    const { children } = props
    const [ virualProps, setVirtualProps ] = React.useState(children.props)
    
    return React.cloneElement(children, {
        ...virualProps
    })
}

ParamWatcher.propTypes = {
    children: PT.node,
}

export default ParamWatcher;