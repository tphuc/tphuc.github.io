import React from 'react';
import { TiWeatherSunny, TiWeatherNight } from "react-icons/ti";

import propTypes from 'prop-types';

/* BLUEPRINT 
    #div:

    [  icon ]    [ BAR  [THUMB]  ]    [ icon  ] | width
        20%             50%            20%
    <---------------- height-------------------->



*/



/*  ULTILITY FUNCTIONS */

const clampValueInRange = (value, start, end) => Math.min(Math.max(value, start), end)
const valueToPercent = (value, start, end) => (value - start) / Math.abs(end - start) * 100
const clampValuePercent = (value, start, end) => valueToPercent(clampValueInRange(value, start, end), start, end)
const mapPercentToValue = (percent, min, max) => min + (max - min) * percent / 100;

// distance 2D
const distance2D = (pointA, pointB) => Math.sqrt((pointA.x - pointB.x) ** 2 + (pointA.y - pointB.y) ** 2)





const matchStyleByProps = (props, styles) => {

    switch (props.direction) {

        case 'horizontal':
            styles = {
                ...styles,
                width: styles.height ? styles.height : undefined,
                height: styles.width ? styles.width : undefined,
                flexDirection: 'row',
                left: styles.top ? styles.top : undefined,
                top: styles.left ? styles.left : undefined
            }
            break

        case 'vertical':
            styles = {
                ...styles,
                flexDirection: 'column'
            }
            break

        default:
            break
    }

    return styles
}


/* BASIC STYLING */

const styles = {
    wrapper: {
        // position: 'fixed', right: '2%', top: '40vh'
    },
    inner: {
        display: 'flex', alignItems: 'center', justifyContent: 'space-around'
    }
};

/* CLASS IMPLEMENTATION */

class Slider extends React.Component {

    static propTypes = {
        direction: propTypes.oneOf(['horizontal', 'vertical']),
        reverse: propTypes.bool,
        thumbShape: propTypes.oneOf(['round', 'diamond', 'square']),
        min: propTypes.number,
        max: propTypes.number,
        value: propTypes.number,
        

        //styling
        barStyle: propTypes.object,
        thumbStyle: propTypes.object,
        style: propTypes.object
    }

    static defaultProps = {
        direction: 'vertical',
        reverse: false,
        min: 0,
        max: 1,
        value: 0,
        barStyle: {
            width: 10,
            height: 100
        },
        style: {
            width: '100%',
            height: 100
        }
    }

    state = {
        valueInPercent: 0
    }

    componentDidMount() {
        this.setState({ valueInPercent: clampValuePercent(this.props.value, this.props.min, this.props.max) })
        const { top, height, left, width } = this.bar.getBoundingClientRect()
        this.mouseGest = this.props.direction === 'vertical' ? 'clientY' : 'clientX'
        this.min = this.props.direction === 'vertical' ? top : left
        this.max = this.props.direction === 'vertical' ? top + height : left + width
        this.offsetPercent = clampValuePercent(this.thumb.getBoundingClientRect().width / 2, 0, this.max - this.min)

    }



    setNewValue = (val) => {
        this.setState({ valueInPercent: val })
        if (this.props.onChange) {
            this.props.onChange(mapPercentToValue(val, this.props.min, this.props.max))
        }
    }

    handleTouchStart = (event) => {
        //event prevent default
        event.preventDefault()
        this.touch = event.changedTouches[0]
        if (this.touch) {
            this.touchID = this.touch.identifier
        }



        this.setNewValue(clampValuePercent(this.touch[this.mouseGest], this.min, this.max))

    }

    handleTouchMove = (event) => {
        this.touch = event.changedTouches[0]
        // console.log(this.touch.pageX, this.touch.pageY)
        this.setNewValue(clampValuePercent(this.touch[this.mouseGest], this.min, this.max))

    }



    handleMouseMove = (event) => {

        if (event.buttons === 1) {
            this.setNewValue(clampValuePercent(event[this.mouseGest], this.min, this.max))
        }
        else if (event.buttons === 0 && event.target !== this.wrapper) {
            document.body.removeEventListener('mousemove', this.handleMouseMove)
        }
    }

    handleMouseOut = (event) => {
        // when cursor outs of the target, checking if LMB is holding

        if (event.buttons === 1) {
            document.body.addEventListener('mousemove', this.handleMouseMove)
        }
    }

    handleMouseMoveOver = (event) => {
        //dragging over the target div
        event.preventDefault()
        if (event.buttons === 1) {
            this.setNewValue(clampValuePercent(event[this.mouseGest], this.min, this.max))
        }
    }

    render() {
        const {
            direction,
            width,
            height,
            strokeWidth,
            thumbWidth,

            style,
            thumbStyle,
            barStyle
        } = this.props



        return (
            <div style={{ ...styles.wrapper, ...this.props.style, height: '' }}
                onTouchStart={this.handleTouchStart}
                onTouchMove={this.handleTouchMove}
                onClick={event => { event.preventDefault(); this.setNewValue(clampValuePercent(event[this.mouseGest], this.min, this.max)) }}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
                ref={ref => this.wrapper = ref}
            >
                <div ref={ref => this.inner = ref}
                    style={matchStyleByProps(this.props,
                        {
                            flexDirection: 'column', ...styles.inner,
                            transform: `rotateZ(0deg)`,
                            height: this.props.style.height * 100 / 60
                        })}
                >

                    <div style={matchStyleByProps(this.props, { height: '15%', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' })}><TiWeatherSunny color='white' height='100%'></TiWeatherSunny></div>
                    <div style={matchStyleByProps(this.props, { height: '60%', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', ...this.props.barStyle })}>
                        <div className='bar'
                            style={{
                                position: 'absolute',
                                width: '0px',
                                height: '100%',
                                border: '1px solid #eeeeee',
                                borderRadius: 0,
                            }}
                            ref={ref => this.bar = ref}
                        />
                        <div className='thumb' style={
                            matchStyleByProps(this.props, {
                                position: 'absolute', width: 10, height: 10, background: '#f9fbe7', borderRadius: '50%',
                                top: `${this.state.valueInPercent - this.offsetPercent}%`
                            })}
                            ref={ref => this.thumb = ref}
                        />
                    </div>
                    <div style={matchStyleByProps(this.props, { height: '15%', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' })}><TiWeatherNight color='white' height='100%' /></div>
                </div>
            </div>
        )
    }
}




export default Slider;