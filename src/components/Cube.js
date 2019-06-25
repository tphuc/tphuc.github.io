import React from 'react';
import '../static/css/cube.css'
const Tesseract = () => {
    return (
        <div class="scene">
            <div class="cube">
                <div class="cube__face cube__face--front"></div>
                <div class="cube__face cube__face--back"></div>
                <div class="cube__face cube__face--right"></div>
                <div class="cube__face cube__face--left"></div>
                <div class="cube__face cube__face--top"></div>
                <div class="cube__face cube__face--bottom"></div>
            </div>
        </div>
    )

}
export default Tesseract;