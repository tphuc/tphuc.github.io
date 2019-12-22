import React from 'react';
import PT from 'prop-types';

const DropShadowSvg = (props) => {
    const { id, shadowColor, offsetX, offsetY, radius} = props
    return (
        <filter id={id}>
            <feGaussianBlur in="SourceAlpha" stdDeviation={`${radius}`} />
            <feOffset dx={`${offsetX}`} dy={`${offsetY}`} result="offsetblur" />
            <feFlood floodColor={`${shadowColor}`} />
            <feComposite in2="offsetblur" operator="in" />
            <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>
    )
}

DropShadowSvg.propTypes = {
    id: PT.string.isRequired,
    shadowColor: PT.string,
    offsetX: PT.number,
    offsetY: PT.number,
    radius: PT.number,
}
DropShadowSvg.defaultProps = {
    id: '',
    shadowColor: '#111',
    offsetX: 1,
    offsetY: 1,
    radius: 10
}
export default DropShadowSvg;