import React from 'react';
import Navigator from '../components/Navigator';
import { Container, Col, Row, Image, Card } from 'react-bootstrap';
import authorLogo from '../static/images/logo.jpg';
import { mainDark, mainLight, secondaryLight, darkDra, secondaryDark } from '../static/scripts/color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faBriefcase, faPhone, faHeart, faEnvelope, faFeatherAlt, faDice, faProjectDiagram, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faFacebook, faBlogger } from '@fortawesome/free-brands-svg-icons'
import BlogPNG from '../static/images/blog.png';
import '../static/css/home.css';

const colorScheme = {
    list: '#00acc1'
}

const linearDark = 'linear-gradient(to bottom, rgba(33,33,33,1) 0%, rgba(33,33,33,1) 12%, rgba(33,33,33,1) 34%, rgba(41,41,41,1) 65%, rgba(51,51,51,1) 100%)'
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
        fontFamily: "PT Sans", zIndex: 1, whiteSpace: 'nowrap',
        color: mainLight
    },
    hero_text: {
        zIndex: 1, whiteSpace: 'nowrap'
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
        alignItems: 'stretch',
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
        <section onWheel={(e) =>  console.log(e.pageX, e.pageY)}
        style={{ ...baseStyle.container, ...baseStyle.responsive, background: 'linear-gradient(to bottom, rgba(33,33,33,1) 0%, rgba(33,33,33,1) 12%, rgba(33,33,33,1) 34%, rgba(41,41,41,1) 65%, rgba(51,51,51,1) 100%)' }}>
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
        <section >
            <Container fluid>
                <Row style={{ ...style.about_container, marginTop: '-5rem' }} >
                    <Col xl={2} lg={2} md={3} sm={5} xs={5} >
                        <Image src={authorLogo} style={{ border: `3px solid ${mainLight}` }} roundedCircle fluid />
                        <h3 className='text-center' style={style.about_name}><strong> PHUC TRAN (FELIX)</strong></h3>
                    </Col>
                </Row>
                <Row style={{ ...style.row_section }}>

                    <hr style={{ border: '2px solid #333333', width: 100 }}></hr>
                    <h3><strong>ABOUT ME</strong></h3>
                    <h5 className='text-center'>A junior fullstack developer and hobbyist game developer!</h5>
                    <h5 style={style.about_text}>"knowing yourself is the beginning of all wisdoms"</h5>

                </Row>
                <Row style={{ ...style.row_section, background: linearDark, }}>
                    <hr style={{ border: '2px solid #333333', width: 100 }}></hr>
                    <Row>
                        <h3 style={{ color: mainLight }}><strong>Discover</strong></h3>
                    </Row>
                    <hr style={{ border: '2px solid #ffffff', width: 100 }}></hr>
                    <Container fluid>
                        <Row style={{...baseStyle.responsive, paddingBottom:'20%'}}>

                            <Col xl={7} lg={7} md={8} sm={10} xs={11} style={{ border: '1px solid transparent', borderRadius: '1%', 
                            paddingBottom: '0%', backgroundColor: 'rgba(0,0,0,0.45)',
                            boxShadow:'10px 10px 0 0px #222222, 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                            minHeight: '40vw',
                            transition: '1s'
                             }}>

                                <Row style={{ margin: 3, ...baseStyle.responsive }}>
                                    <Col xl={3} lg={3} md={3} sm={3} xs={3} style={{ background: secondaryLight, margin: 10 }}>

                                    </Col>
                                    <Col xl={5} lg={5} md={6} sm={6} xs={6} style={{ background: secondaryLight, margin: 10 }}>

                                    </Col>
                                </Row>
                                <div style={{zIndex: 10, fontFamily:"'Roboto Mono', monospace"}}>
                                    <p style={{marginTop:'5%', padding:0, color:secondaryLight, fontSize:'3vw'}}>felix>~ ls</p>
                                    <a href='/projects' style={{marginTop:0, padding:0, color:colorScheme.list, fontSize:'3vw', height:'2vw'}}>Projects</a>
                                    <br></br>
                                    <a href='/blogs'style={{marginTop:0, padding:0, color:colorScheme.list, fontSize:'3vw', height:'2vw'}}>Blogs</a>
                                    <p style={{marginTop:'5%', padding:0, color:secondaryLight, fontSize:'3vw'}}>felix>~ |</p>
                                </div>
                                <div style={{ width: '1.2vw', height: '1.2vw', background: '#ef5350', zIndex: 1, position: 'absolute', top: '3%', left: '5%', borderRadius: '50%' }}></div>
                                <div style={{ width: '1.2vw', height: '1.2vw', background: '#eeff41', zIndex: 1, position: 'absolute', top: '3%', left: '8%', borderRadius: '50%' }}></div>
                                <div style={{ width: '1.2vw', height: '1.2vw', background: '#00e676', zIndex: 1, position: 'absolute', top: '3%', left: '11%', borderRadius: '50%' }}></div>

                                
                                <div style={{ position: 'absolute', width: '100%', height: '10%', top: '0%', border: '1px solid transparent', left: '0%', borderRadius: '1%', background: '#111111' }}>
                                </div>
                                <div style={{ position: 'absolute', width: '30vw', height: '120%', top: '12%', border: '1px solid transparent', left: '40%', borderRadius: '1%', background:'rgba(30,30,30,0.7)',boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1)', }}>
                                <div style={{ width: '1.2vw', height: '1.2vw', background: colorScheme.list, zIndex: 1, position: 'absolute', top: '3%', left: '5%', borderRadius: '50%' }}></div>
                                <div style={{ width: '4vw', height: '4vw', background: colorScheme.list, zIndex: 1, position: 'absolute', top: '90%', left: '43%', borderRadius: '50%' }}></div>
                                <div style={{ width: '30%', height: '1.2vw', background: colorScheme.list, zIndex: 1, position: 'absolute', top: '3%', left: '35%', borderRadius: '1%', color:mainLight}}></div>
                                    <Row style={{...baseStyle.responsive, marginTop:'10%'}}>
                                        <Col xl={6} lg={6} md={6} sm={6} xs={6} style={{margin:'5%', ...baseStyle.responsive, flexDirection:'column' }} >
                                               <FontAwesomeIcon  icon={faFeatherAlt} style={{fontSize:'15vw', width:'100%', color:secondaryLight}}></FontAwesomeIcon>
                                               <p style={{margin:0, color:'#666666', fontSize:'2vw'}}>Blogs</p>
                                        </Col>
                                        <Col xl={6} lg={6} md={6} sm={6} xs={6} style={{margin:'0%', ...baseStyle.responsive, flexDirection:'column' }} >
                                                <FontAwesomeIcon  icon={faProjectDiagram} style={{fontSize:'15vw', width:'100%', color:secondaryLight}}></FontAwesomeIcon>
                                                <p style={{margin:0, color:'#666666', fontSize:'2vw'}}>Projects</p>
                                        </Col>
                                    </Row>
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
            <Container style={{ background: darkDra, marginTop: 2, color: secondaryLight, paddingTop: 20, paddingBottom: '5%' }} fluid>

                <Row style={{ margin: 0 }}>
                    <Col xl={6} lg={6} md={6} sm={6} xs={6} className='text-center' style={{ fontFamily: 'Ranga' }}>
                        <h1>Built with <FontAwesomeIcon icon={faHeart} style={{color:'#ef5350'}}></FontAwesomeIcon></h1>
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