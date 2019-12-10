import React from 'react';
import './HoverPlane.scss';
import _ from 'lodash/number';

const HoverPlane = (props) => {

    const ref = React.useRef()
    const handleMouseHover = (e) => {
        const {x, y,  width, height} = ref.current.getBoundingClientRect();

        const ax = _.clamp((e.clientX - x - width / 2) / 10, -30, 30) ;
        const ay = _.clamp((e.clientY - y - height / 2) / 10, -30, 30);
        ref.current.style.transform = `rotateX(${-ay}deg) rotateY(${ax}deg) `
    }

    const handleMouseOver = (e) => {
        ref.current.style.transform = `rotateX(0deg) rotateY(0deg) `
    }

    return ( 
        <div className='hover-plane' ref={ref} onMouseMove={handleMouseHover} onMouseLeave={handleMouseOver}>
            {props.children}
        </div>
    )
}


export default HoverPlane;