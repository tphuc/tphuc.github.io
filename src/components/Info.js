import React from 'react';
import { Container, Image, Section, Col, Row } from 'react-bootstrap';
// import PropTypes from 'prop-types';



var style = {
    responsive:{
        display: "flex",
        alignItems: "center", 
        justifyContent: "center"
    },
    container:{
        background: 'linear-gradient(30deg, #222222 0%, #222222 50%, #ebebeb 50%, #ebebeb 100%)',
        height: 350,
    },
    info_text:{
        background:"rgba(20, 20, 20, 0.8)", borderRadius:5, flexDirection:"column", color:"#ce6666"
    }

}

function Info(props){
    return (
        <section style={ {...style.container, ...style.responsive} }>
            <Container >
                <Row style={{...style.responsive, alignItems:"stretch"}} >
                    <Col xs={7} md={6} xl={3} sm={7} lg={3} style={style.responsive} >
                        <Image src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" fluid />
                    </Col>
                    <Col xs={9} md={6} xl={5} sm={8} lg={5} style={style.info_text}>
                        <h1 style={{fontFamily: "PT Sans", whiteSpace: "nowrap"}}>HI! I'M FELIX</h1>
                        <p>I'm a fullstack web developer</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Info;