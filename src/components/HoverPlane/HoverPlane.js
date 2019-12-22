import React from 'react';
import './HoverPlane.scss';
import _ from 'lodash/number';

const HoverPlane = (props) => {

    const ref = React.useRef()
    const handleMouseHover = (e) => {
        const {x, y,  width, height} = ref.current.getBoundingClientRect();

        const ax = _.clamp( (e.clientX - x - width / 2) * 5 / width, -20, 20) ;
        const ay = _.clamp( (e.clientY - y - height / 2) * 5 / height, -20, 20);
        ref.current.style.transform = `rotateX(${-ay}deg) rotateY(${ax}deg) `
    }

    const handleMouseOver = (e) => {
        ref.current.style.transform = `rotateX(0deg) rotateY(0deg) `
    }

    return ( 
        <div>
            <div className='hover-plane' ref={ref} 
                    onMouseMove={handleMouseHover} onMouseLeave={handleMouseOver}
                >
                {props.children}
            </div>
        </div>
    )
}


export default HoverPlane;