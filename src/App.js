import React, { useEffect, useRef } from 'react';
import './app.scss'
import anime from 'animejs'
import _ from 'lodash';
import DropShadowSvg from './components/DropShadowSVG/DropShadowSVG';
import { CirclePercent } from './utils/helper';

const color = 'hsl(230, 100%, 86%)'

const PI2 = Math.PI * 2
const PI = Math.PI
function App() {
  const ref = useRef()

  return (
    <div className="App" >
      <div className='Plane' ref={ref} >

        {/* <svg className='Grid' style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }} >
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <rect width="80" height="80" fill="url(#smallGrid)" />
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(20,130,250,0.1)" strokeWidth="3" />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg> */}
        <div className='Holo-View'>

</div>
       
          <svg className='hud' id='core' viewBox='0 0 600 600' >
            <DropShadowSvg id='circle' shadowColor='hsl(230, 100%, 66%)' radius={2} offsetX={0.5} offsetY={0.5} />
           

            <circle id='c1' cx="50%" cy="50%" r="5" fill={color} strokeDasharray='200%' strokeDashoffset='0' />
          </svg>
          <svg className='hud' id='c1' viewBox='0 0 600 600' >
            <circle
              filter='url(#circle)'
              cx="50%" cy="50%" r="15" stroke={color} fill='hsl(230, 100%, 86%)'
              fillOpacity="0.1" strokeDasharray='200%' strokeDashoffset='0' />
          </svg>
          <svg className='hud' id='c2' viewBox='0 0 600 600' >
            <circle
              filter='url(#circle)'
              cx="50%" cy="50%" r="28" stroke={color} fill='hsl(230, 100%, 86%)'
              fillOpacity="0.1" strokeOpacity='0.6' strokeDasharray={`${CirclePercent(1, 28)}`} strokeDashoffset='0' />
          </svg>
          <svg className='hud' id='c3' viewBox='0 0 600 600' >
            <circle
              filter='url(#circle)'
              cx="50%" cy="50%" r="40" stroke={color} fill='hsl(230, 100%, 86%)'
              fillOpacity="0.1" strokeOpacity='0.6' strokeDasharray={`${CirclePercent(1 / 3, 40)}`} strokeDashoffset='0' />
          </svg>
          <svg className='hud' id='c4' viewBox='0 0 600 600' >
            <circle
              filter='url(#circle)'
              strokeWidth='10'
              cx="50%" cy="50%" r="80" stroke={color} fill='hsl(230, 100%, 86%)'
              fillOpacity="0.1" strokeOpacity='0.6' strokeDasharray={`${CirclePercent(9 / 50, 80)} ${CirclePercent(1 / 50, 80)}`} strokeDashoffset='0' />
          </svg>
          <svg className='hud' id='c5' viewBox='0 0 600 600' >
            <circle
              filter='url(#circle)'
              strokeWidth='12'
              cx="50%" cy="50%" r="90" stroke={color}
              strokeOpacity='0.8' fillOpacity="0" strokeDasharray={`${CirclePercent(1 / 5, 90)} ${CirclePercent(1 / 20, 90)} `} strokeDashoffset={`0`} />
          </svg>
          <svg className='hud' id='c6' viewBox='0 0 600 600' >
            <circle
              // filter='url(#filter)'
              cx="50%" cy="50%" r="120" stroke={color} fill='hsl(230, 100%, 86%)'
              fillOpacity="0.1" strokeOpacity='0.7' strokeDasharray={`${CirclePercent(1, 120)}  `} strokeDashoffset='0' />
          </svg>
          {/* <svg className='hud' id='r7' viewBox='0 0 600 600' style={{ width: "100vw", height: '100vh' }}>
          <rect
            // filter='url(#distortion)'
            width="300" height="300" x='calc(50% - 150px)' y='calc(50% - 150px)' stroke='hsl(220, 100%, 60%)'
            strokeWidth='3' strokeOpacity='0.8' fillOpacity='0.2' fill='hsl(220, 100%, 60%)' strokeDasharray={`20 260 20 0 `}
          />
        </svg> */}

          <svg className='hud' id='light-projector' viewBox='0 0 1050 1050'>
            <DropShadowSvg id='circle2' shadowColor='hsl(230, 100%, 66%)' radius={10} offsetX={2} offsetY={2} />
            <rect
              filter='url(#circle2)'
              width="300" height="300" x='calc(50% - 150px)' y='calc(50% - 150px)' stroke='hsl(230, 100%, 90%)' 
              rx='150' ry='300'
              strokeWidth='300' strokeOpacity='0.05' fill='none'
              strokeDasharray={`${150 * PI2 / 3} ${150 * PI2 / 3 * 2} `} strokeDashoffset={`${150 * PI2 / 3 / 2}`}
            />

          </svg>

        
      </div>

    </div>
  );
}

export default App;
