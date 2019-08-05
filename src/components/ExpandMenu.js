import React from 'react';
import { FiChevronDown } from 'react-icons/fi'
import BrightnessBar from './BrightnessBar'
import anime from 'animejs';
import { hidden } from 'ansi-colors';


export default class Menu extends React.Component {

    state = {
        open: false,
        animating: false
    }

    _toggle = () => {
        if (!this.state.animating) {
            this.setState({ animating: true })
            let rotateTransform = this.state.open ? [180, 0] : [0, 180]
            let heightTransform = this.state.open ? [400, 30] : [30, 400]
            anime({
                targets: this.icon,
                easing: 'linear',
                rotateX: rotateTransform,
                duration: 500,
            });

            anime({
                targets: this.wrapper,
                easing: 'linear',
                duration: 400,
                height: heightTransform,
                complete: () => this.setState({ open: !this.state.open, animating: false })
            })
        }
    }

    render() {
        return (
            <div ref={ref => this.wrapper = ref} style={{
                position: 'absolute', border: '1px solid rgba(255,255,255,0.5)', borderRadius:5, top: '2vw', right: '2vw', display: 'flex', alignItems: 'center', flexDirection: 'column', overflow: 'hidden', background: 'rgba(0,0,0,0.2)',
                ...this.props.style
            }}>
                <div ref={ref => this.icon = ref} style={{ display: 'flex', justifyContent: 'center', }}>
                    <FiChevronDown color='#ffffff' strokeWidth={1} size={30} onClick={() => this._toggle()}></FiChevronDown>
                </div>
                <div style={{ display: 'flex', alignItems:'center', justifyContent:'space-around', flexDirection: 'column', width:'100%', height:'100%'}}>
                    {this.state.open && this.props.children}
                </div>
            </div>
        )
    }
}