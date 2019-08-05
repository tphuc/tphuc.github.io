import React, { Component } from 'react';
import { FiCircle, FiMenu } from 'react-icons/fi'

const clampValueInRange = (value, start, end) => Math.min(Math.max(value, start), end)

export default class AssistButton extends Component {

    componentDidMount() {
        this.maxWidth = window.screen.availWidth
        this.maxHeight = window.screen.availHeight
        console.log(this.maxWidth, this.maxHeight)
        const { x, y, left, top, width, height } = this.inner.getBoundingClientRect()
        this.offsetX = width / 2
        this.offsetY = height / 2
        this.x = clampValueInRange(left + width / 2, 0, this.maxWidth);
        this.y = clampValueInRange(top + height / 2, 0, this.maxHeight)
    }

    state = {
        top: this.y,
        left: this.x,
        dragging:false
    }

    setPosition = (touch) => {
        this.setState({
            top: clampValueInRange(touch.clientY - this.offsetY, 0, this.maxHeight),
            left: clampValueInRange(touch.clientX - this.offsetX, 0, this.maxWidth)
        })
        // console.log(e.changedTouches[0].clientY - this.offsetY, '=>', 0, clampValueInRange(e.changedTouches[0].clientY - this.offsetY, 0, this.maxHeight), this.maxHeight)
    }

    render() {
        return (
            <div
                ref={ref => this.inner = ref}
                style={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    zIndex: 10
                }}
   
            >
                <FiMenu size={50} color='rgba(255,255,255,0.8)' style={{  padding: 5 }}></FiMenu>
            </div>
        )
    }
}