import React, { Component } from 'react';
import { Navbar,  Nav, Image  } from 'react-bootstrap';
import PropTypes from 'prop-types';


// appearance 
import {mainDark, secondaryDark, mainLight, darkDra, secondaryLight} from '../static/scripts/color';
import logoBrand from '../static/images/logo_transparent.png';

const style = {
    navItem: {
        fontFamily: 'Roboto',
        borderRadius: 2,
        color: secondaryLight,
        marginLeft: 5
    },
    responsive:{
        display:'flex',
        justifyContent:'center',
        alignItems:'flex-end'
    }
}

class NavBtn extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            hover : false
        }
    }
    render(){
        const padding = 10
        return <Nav.Link {...this.props} 
                        style={{ ...this.props.style, 
                                padding: this.state.hover ? `${padding}px ${padding*3}px ${padding}px ${padding*3}px` : padding, 
                                transition:'1s',
                                backgroundColor: this.state.hover ? secondaryDark : mainDark,
                            }} 
                        onMouseEnter={() => this.setState({hover:true})} 
                        onMouseLeave={() => this.setState({hover: false})}
                        > {this.props.text} </Nav.Link>
    }
}

NavBtn.propTypes = {
    text: PropTypes.string,
};

class Navigator extends Component {
    render() {
        return (
            <section style={{ position: 'sticky', top: 0, zIndex: 1020, backgroundColor: mainDark, padding:'5px 0 5px 0' }}>
                <Navbar expand="md" variant="dark" sticky="top" style={{ backgroundColor: 'transparent', borderRadius: '10px', }}>
                    {/* <Navbar.Brand href="#home" style={{ fontFamily: "monaco", ...style.debug, color:mainLight }}> FELIX NOTES </Navbar.Brand> */}
                    <Navbar.Brand>
                        <div style={{margin:0, justifyContent:'center', alignItems:"center", display:'flex', paddingRight:20, borderRadius:5}}>
                            {/* <Image src={logoBrand} style={{border:'0px', maxHeight:80, maxWidth:'100%'}}></Image> */}
                        </div>
                    </Navbar.Brand>

                    <Nav className="ml-auto" style={{...style.responsive, flexDirection:'row'}}>
                        <NavBtn href="/" style={{ ...style.debug, ...style.navItem, backgroundColor:'transparent' }} text={'Home'} />
                        <NavBtn href="/blogs" style={{ ...style.debug, ...style.navItem, backgroundColor:'transparent' }} text={'Blogs'} />
                        <NavBtn href="/projects" style={{ ...style.debug, ...style.navItem, backgroundColor:'transparent' }} text={'Projects'} />
                    </Nav>

                </Navbar>
            </section>
        )
    }
}
export default Navigator;