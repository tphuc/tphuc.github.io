import React from 'react';
import { Container, Image, Section, Col, Row, Card, Button } from 'react-bootstrap';
// import PropTypes from 'prop-types';



var style = {
    responsive: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    container: {
        background: 'linear-gradient(30deg, #222222 0%, #222222 50%, #ebebeb 50%, #ebebeb 100%)',
        height: 350,
    },
    test:{
        backgroundColor:"#bbbbbb"
    }
}

function Blog() {
    return (
            <Card style={{ minWidth: 300 }}>
                <Card.Img variant="top" src="http://factoryartscentre.com/wp-content/uploads/2017/06/web-banner-Materialize.png" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
    )
}

function BlogSlider(props) {
    return (
        <section style={{...style.responsive }}>
            <Container >
                <h1 style={{textAlign:"center", color:"#ce6666", fontFamily:"PT Sans", "marginTop":'5%'}}>Blogs</h1>
                <hr></hr>
                <div style={{overflowX:"auto", display:"flex", minWidth: '100%', minHeight: 200, ...style.responsive }}>
                    <Blog></Blog>
                    <Blog></Blog>
                    <Blog></Blog>
                    <Blog></Blog>
                    <Blog></Blog>
                    <Blog></Blog>
                </div>
            </Container>
        </section>
    )
}

export default BlogSlider;