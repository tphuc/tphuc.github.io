import React from 'react';
import { Container, Image, Section, Col, Row } from 'react-bootstrap';
// import PropTypes from 'prop-types';



var baseStyle = {
    responsive:{
        display: "flex",
        alignItems: "center", 
        justifyContent: "center"
    },
    container:{
        backgroundColor: '#eeeeee', height: 350
    },
}

var style = {
    hero:{
        ...baseStyle.responsive, 
        borderRadius:5, flexDirection:"column", color:"#ce6666" 
    },
    hero_container:{
        ...baseStyle.responsive,
        alignItems:"stretch"
    },
    hero_banner:{
        fontFamily: "PT Sans", whiteSpace: "nowrap", zIndex:1
    },
    hero_text:{
        zIndex:1
    }
}

function Hero(props){
    return (
        <section style={ {...baseStyle.container, ...baseStyle.responsive } }>
            <Container >
                <Row style={style.hero_container} >
                    <Col xs={12} md={6} xl={6} sm={12} lg={6} style={style.hero}>
                        <h1 style={style.hero_banner}> FELIX NOTES </h1>
                        <p style={style.hero_text}>Where code get naked</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Hero;