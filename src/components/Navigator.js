import React, { Component } from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';

class Navigator extends Component {
    render() {
        return (
            <div style={{ position: 'sticky', top: 0, zIndex: 1020 }}>
                <svg width="24" height="24">
                    <rect width="24" height="24" fill="none" rx="0" ry="0" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 7C4 6.58579 4.33579 6.25 4.75 6.25H19.25C19.6642 6.25 20 6.58579 20 7C20 7.41421 19.6642 7.75 19.25 7.75H4.75C4.33579 7.75 4 7.41421 4 7ZM4 12C4 11.5858 4.33579 11.25 4.75 11.25H19.25C19.6642 11.25 20 11.5858 20 12C20 12.4142 19.6642 12.75 19.25 12.75H4.75C4.33579 12.75 4 12.4142 4 12ZM4.75 16.25C4.33579 16.25 4 16.5858 4 17C4 17.4142 4.33579 17.75 4.75 17.75H19.25C19.6642 17.75 20 17.4142 20 17C20 16.5858 19.6642 16.25 19.25 16.25H4.75Z" fill="#ffffff" />
                </svg>
            </div>
        )
    }
}
export default Navigator;