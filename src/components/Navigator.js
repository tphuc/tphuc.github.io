import React, { Component } from 'react';
import { Navbar,  Nav, Image  } from 'react-bootstrap';
import {mainDark, secondaryDark, mainLight} from '../static/scripts/color';
import logoBrand from '../static/images/logo_transparent.png'

const style = {
    debug: {
        borderBottom: '2px solid #ffffff',
        margin: '10px'
    },
    navItem: {
        fontFamily: 'Trebuchet MS',
        color: mainLight
    }
}

class Navigator extends Component {
    render() {
        return (
            <section style={{ position: 'sticky', top: 0, zIndex: 1020, backgroundColor: mainDark, padding:10,  }}>
                <Navbar expand="md" variant="dark" sticky="top" style={{ backgroundColor: secondaryDark, borderRadius: '10px', margin: 0, }}>
                    {/* <Navbar.Brand href="#home" style={{ fontFamily: "monaco", ...style.debug, color:mainLight }}> FELIX NOTES </Navbar.Brand> */}
                    <Navbar.Brand>
                        <div style={{margin:0, justifyContent:'center', alignItems:"center", display:'flex', paddingRight:20, borderRadius:5}}>
                            <Image src={logoBrand} style={{border:'0px', maxHeight:80, maxWidth:'100%'}}></Image>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="nav-menu" />
                    <Navbar.Collapse id="nav-menu"  >
                        <Nav className="ml-auto" >
                            <Nav.Link href="/" style={{ ...style.debug, ...style.navItem }}> Home</Nav.Link>
                            <Nav.Link href="/blogs" style={{ ...style.debug, ...style.navItem }}>Blogs</Nav.Link>
                            <Nav.Link href="/about" style={{ ...style.debug, ...style.navItem }}>About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </section>
        )
    }
}
export default Navigator;