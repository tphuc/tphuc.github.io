import React from 'react';
import Navigator from '../components/Navigator';
import { Container, Col, Row, Image, Card } from 'react-bootstrap';
import authorLogo from '../static/images/logo.jpg';
import { mainDark, mainLight, secondaryLight, darkDra } from '../static/scripts/color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faDiceD6, faSmile, faBriefcase, faPhone, faHeart, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faFacebook, faBlogger } from '@fortawesome/free-brands-svg-icons'

var baseStyle = {
    responsive: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    container: {
        height: 300,
    },
}

var style = {
    debug: {
        marginTop: -100
    },
    hero: {
        ...baseStyle.responsive,
        flexDirection: "column",
        color: mainLight
    },
    hero_container: {
        ...baseStyle.responsive,
        alignItems: "stretch"
    },
    hero_banner: {
        fontFamily: "PT Sans", zIndex: 1, whiteSpace:'nowrap',
        color: mainLight
    },
    hero_text: {
        zIndex: 1, whiteSpace:'nowrap'
    },
    about_container: {
        ...baseStyle.responsive,
        flexDirection: "column",
        fontFamily: 'Roboto',
    },
    about_name: {
        fontFamily: 'Ranga, Arial',
        color: '#37474f'
    }
    ,
    row_section: {
        ...baseStyle.responsive,
        flexDirection: 'column',
        fontFamily: 'Roboto',
        marginTop: 20,
    },
    about_text: {
        fontFamily: 'Ranga, Arial'
    },
    discover_item: {
        ...baseStyle.responsive,
        alignItems:'stretch',
        textAlign: 'center',
        color: mainLight,
        paddingLeft: 80,
        paddingRight: 80,
        paddingBottom: 50,

    },
    discover_item_text: {
        fontSize: '10em',
    },
    discover_item_wrap: {

    }
}


function Hero(props) {
    return (
        <section style={{ ...baseStyle.container, ...baseStyle.responsive, backgroundColor: mainDark }}>
            <Container >
                <Row style={style.hero_container} >
                    <Col xs={6} md={6} xl={6} sm={6} lg={6} style={style.hero}>
                        <h1 style={style.hero_banner}> FELIX NOTES </h1>
                        <p style={style.hero_text}>where code get naked</p>
                    </Col>
                </Row>

            </Container>
        </section>
    )
}

const Media = () => {
    return (
        <div style={{ ...baseStyle.responsive, flexDirection: 'row', position: 'fixed', bottom: '5%', left: '5%', width: '3%', minWidth: 50, backgroundColor: 'rgba(67, 75, 83, 0.61)', borderRadius: 10, }}>
            <h2 style={{ color: mainLight }}>
                <FontAwesomeIcon icon={faGithub} style={{ width: '100%' }}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faLinkedin} style={{ width: '100%' }}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faFacebook} style={{ width: '100%' }}></FontAwesomeIcon>
            </h2>
        </div>
    )
}

const About = () => {
    return (
        <section>
        <Container fluid>
            <Row style={{ ...style.about_container, marginTop: '-5rem'}}>
                <Col xl={2} lg={2} md={3} sm={5} xs={5} >
                    <Image src={authorLogo} style={{ border: '3px solid #eceff1' }} roundedCircle fluid />
                    <h3 className='text-center' style={style.about_name}><strong> PHUC TRAN (FELIX)</strong></h3>
                </Col>
            </Row>
            <Row style={{ ...style.row_section }}>

                <hr style={{ border: '2px solid #333333', width: 100 }}></hr>
                <h3><strong>ABOUT ME</strong></h3>
                <h5 className='text-center'>A junior fullstack developer and hobbyist game developer!</h5>
                <h5 style={style.about_text}>"knowing yourself is the beginning of all wisdoms"</h5>

            </Row>
            <Row style={{ ...style.row_section, backgroundColor: mainDark, }}>
                <hr style={{ border: '2px solid #333333', width: 100 }}></hr>
                <Row>
                    <h3 style={{ color: '#e0f2f1' }}><strong>Discover</strong></h3>
                </Row>
                <hr style={{ border: '2px solid #ffffff', width: 100 }}></hr>
                <Container fluid>
                <Row>
                    <Col xl={4} lg={4} md={4} sm={12} xs={12} style={style.discover_item}>
                        <div style={style.discover_item_wrap}>
                            <FontAwesomeIcon icon={faBlogger} style={style.discover_item_text}></FontAwesomeIcon>
                            <h4 style={{ marginTop: '10%' }}>Blogs</h4>
                        </div>

                    </Col>
                    <Col xl={4} lg={4} md={4} sm={12} xs={12} style={style.discover_item}>
                        <div style={style.discover_item_wrap}>
                            <FontAwesomeIcon icon={faDiceD6} style={style.discover_item_text}></FontAwesomeIcon>
                            <h4 style={{ marginTop: '10%' }}>Apps</h4>
                        </div>
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={12} xs={12} style={style.discover_item}>
                        <div style={style.discover_item_wrap}>
                            <FontAwesomeIcon icon={faFileAlt} style={style.discover_item_text}></FontAwesomeIcon>
                            <h4 style={{ marginTop: '10%' }}>CV</h4>
                        </div>
                    </Col>

                </Row>
                </Container>

            </Row>
        </Container>
        </section>

    )
}

const Contact = () => {
    return (
        <section>
            <Container style={{ background: darkDra, marginTop: 2, color: secondaryLight, paddingTop:50, paddingBottom:100 }} fluid>

                <Row style={{ margin: 0 }}>
                    <Col xl={6} lg={6} md={6} sm={6} xs={6} className='text-center' style={{ fontFamily: 'Ranga' }}>
                        <h1>Built with <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></h1>
                    </Col>

                    <Col xl={6} lg={6} md={6} sm={6} xs={6} fluid>

                        <Row>
                            <Col xl={3} lg={3} md={3} sm={3} xs={3} className='text-center'>
                                <h3>
                                    <FontAwesomeIcon icon={faSmile}></FontAwesomeIcon>
                                </h3>
                            </Col>
                            <Col xl={9} lg={9} md={9} sm={9} xs={9} className='text-left'>
                                <p>Tran Bao (Felix) Phuc</p>
                            </Col>
                        </Row>
                        
                        <Row>
                            <Col xl={3} lg={3} md={3} sm={3} xs={3} className='text-center'>
                                <h3>
                                    <FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>
                                </h3>
                            </Col>
                            <Col xl={9} lg={9} md={9} sm={9} xs={9} className='text-left'>
                                <p>Web developer</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={3} lg={3} md={3} sm={3} xs={3} className='text-center'>
                                <h3>
                                    <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                                </h3>
                            </Col>
                            <Col xl={9} lg={9} md={9} sm={9} xs={9} className='text-left'>
                                <p>+84 889775268</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={3} lg={3} md={3} sm={3} xs={3} className='text-center'>
                                <h3>
                                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                                </h3>
                            </Col>
                            <Col xl={9} lg={9} md={9} sm={9} xs={9} className='text-left'>
                                <p> felixtran2000 @gmail.com </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}


function Index() {
    return (
        <React.Fragment>
            <Navigator />
            <Hero />
            <About />
            <Contact></Contact>
            <Media></Media>

            {/* <BlogSlider></BlogSlider> */}
        </React.Fragment>
    )
}

export default Index;