import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Menubar from '../components/Navigator';
import Dock from '../components/Dock';
import anime from 'animejs';
import propTypes from 'prop-types'
import { ParticleContainer } from 'particle-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { cYellow } from '../assets/colors'
import BrightnessBar from '../components/BrightnessBar'
import AssistButton from '../components/AssistButton';
import * as PIXI from 'pixi.js'
import ExpandMenu from '../components/ExpandMenu';
import {FiTriangle, FiDroplet, FiUser} from 'react-icons/fi'






class Accordion extends Component {

    static propTypes = {
        duration: propTypes.number,
        text: propTypes.string
    }
    static defaultProps = {
        duration: 5000,
        text: ''
    }
    componentWillUpdate() {

        anime({
            targets: this.self,
            opacity: [1, 0],
            easing: 'easeOutExpo',
            duration: 2000,
            delay: 2000,
        })
    }





    state = {
        text: this.props.text
    }

    render(props) {
        return <div style={{ position: 'fixed', bottom: '10%', width: '100%' }} ref={ref => this.self = ref}>
            <p style={{ textAlign: 'center', color: 'white' }}>{this.props.text}</p>
        </div>
    }
}

const Footer = () => (
    <Container style={{ position: 'absolute', color: '#ffffff', bottom: '1vh' }} fluid>
        <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Col xs={6} sm={6} md={6} xl={6} lg={6} >
                <p style={{ verticalAlign: 'middle' }}>
                    Built with
                    <svg width="24" height="24" viewBox="0 0 24 24" style={{ verticalAlign: 'middle' }}>
                        <rect width="24" height="24" fill="none" rx="0" ry="0" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7454 5.17819C17.5975 3.0303 14.1151 3.0303 11.9672 5.17819C9.81935 3.0303 6.33695 3.0303 4.18906 5.17819C2.04118 7.32607 2.04118 10.8085 4.18906 12.9564L11.2188 20.8899C11.6167 21.3389 12.3178 21.3389 12.7157 20.8899L19.7454 12.9564C21.8933 10.8085 21.8933 7.32607 19.7454 5.17819ZM5.11245 6.37612C3.605 7.88356 3.5447 10.3084 4.97534 11.8889L11.5965 19.2037C11.795 19.423 12.1394 19.423 12.3379 19.2037L18.9591 11.8889C20.3898 10.3084 20.3295 7.88356 18.822 6.37612L18.6848 6.23885C17.1227 4.67675 14.59 4.67675 13.0279 6.23885L11.9672 7.29951L10.9066 6.23885C9.34448 4.67675 6.81182 4.67675 5.24972 6.23885L5.11245 6.37612Z" fill="#ffffff" />
                    </svg>
                </p>
            </Col>
            <Col xs={6} sm={6} md={3} xl={3} lg={3} style={{ textAlign: 'right' }}>
                <a href='mailto:felixtran2000@gmail.com' style={{ color: '#eeeeee', textDecoration: 'none', }}>
                    {"Contact me: "}
                    <svg width="24" height="24" viewBox="0 0 24 24" style={{ verticalAlign: 'middle' }}>
                        <rect width="24" height="24" fill="none" rx="0" ry="0" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 4C2.89543 4 2 4.89543 2 6V7V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V7V6C22 4.89543 21.1046 4 20 4H4ZM3.2 17.8V7.84L9.13269 11.9929C10.8543 13.198 13.1457 13.198 14.8673 11.9929L20.8 7.84V17.8C20.8 18.3523 20.3523 18.8 19.8 18.8H4.2C3.64772 18.8 3.2 18.3523 3.2 17.8ZM4.2 5.2C3.64772 5.2 3.2 5.64772 3.2 6.2V6.41393L9.69965 10.9829C11.0798 11.9531 12.9202 11.9531 14.3004 10.9829L20.8 6.41393V6.2C20.8 5.64772 20.3523 5.2 19.8 5.2H4.2Z" fill="#ffffff" />
                    </svg>
                </a>
                |
            </Col>
        </Row>
    </Container >
)




class Index extends Component {

    animate = () => {

        anime({
            targets: [this._introText1, this._introText2, this._introText3],
            translateY: [0, -100],
            opacity: [1, 0],
            easing: 'cubicBezier(.8, .08, .68, .6)',
            duration: 2000,
            delay: anime.stagger(100),
        })
            ;
    }

    constructor(props) {
        super(props);

    }



    componentDidMount() {
        anime({
            targets: [this._introText1, this._introText2, this._introText3],
            translateY: [-80, 0],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 3000,
            delay: anime.stagger(1000),
        })
        anime({
            targets: this._menu,
            translateX: [-100, 0],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 1000,
            delay: 3000,
        })
        anime({
            targets: this._socialIcons,
            translateX: [-100, 0],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 1000,
            delay: 3000,
        })


    }

    state = {
        messagesBottom: '',
        messagesBottomDuration: 5000,
        brightness: 1
    }

    render() {
        return (
            <div>
                <ParticleContainer
                    particle={{
                        color: cYellow,
                        glowColor: cYellow,
                        transition: 'fadeIn-Out',
                        lifeTimeMax: 8000,
                        lifeTimeMin: 5000,
                        fadeInDuration: 1500,
                        fadeOutDuration: 1500,
                        shape: 'circle',
                        maxSize: 6,
                        minSize: 0.2,
                        spanNumber: 20,
                    }}
                    style={{
                        background: 'url(https://images.unsplash.com/photo-1530625625693-b38b404cb1be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=80)'
                    }}
                    canvasStyle={{ background: `rgba(0,0,0, ${this.state.brightness})`, opacity: 0.6 }}
                >
                </ParticleContainer>

                <Container style={{ color: 'white', marginTop: '2rem' }}>
                    <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Col xs={11} sm={11} md={7} xl={5} lg={5} style={{ fontFamily: 'Montserrat, sans-serif' }} ref={heading => this._heading = heading}>
                            <h6 ref={ref => this._introText1 = ref}>Hi, nice to meet you.</h6>
                            <h6 ref={ref => this._introText2 = ref}>I'm Felix,</h6>
                            <h4 ref={ref => this._introText3 = ref} style={{ color: '#eeeeee', textAlign: 'center', marginTop: '3rem' }}>Developer/UI designer</h4>
                        </Col>
                    </Row>
                </Container>
                <div >
                    <Container ref={ref => this._menu = ref} >
                        <Row style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '1rem' }}>
                            <Col xs={10} sm={10} md={8} xl={6} lg={6} >
                                <Row style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', color: 'white', border: '2px solid #eeeeee', minHeight: '7vh', borderRadius: 1 }}>
                                    <Col xs={3} sm={3} md={3} xl={3} lg={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }} >
                                        <a href='#' style={{ color: '#eeeeee', textDecoration: 'none', fontSize: 17, textAlign:'center'}}
                                            onClick={() => this.setState({ messagesBottom: 'Portfolio comming soon!' })} >
                                            <FiTriangle /> Portfolio 
                                        </a>
                                    </Col >
                                    |
                            <Col xs={3} sm={3} md={3} xl={3} lg={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }} >
                                        <a href='#' style={{ color: '#eeeeee', textDecoration: 'none', fontSize: 17, textAlign:'center'}}
                                            onClick={() => this.setState({ messagesBottom: 'Blog comming soon!' })} >
                                            <FiDroplet size={18}/> Article 
                                        </a>
                                    </Col>
                                    |
                            <Col xs={3} sm={3} md={3} xl={3} lg={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
                                        <a href='#' style={{ color: '#eeeeee', textDecoration: 'none', fontSize: 17, textAlign:'center'}}>
                                           <FiUser size={18} style={{textAlign:'center'}}/> About
                                        </a>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>

                </div>
                <Container>
                    <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '1rem' }}>
                        <Col xs={10} sm={10} md={8} xl={6} lg={6} >
                            <div ref={ref => this._socialIcons = ref}>
                                <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }} >
                                    <Col xs={2} sm={2} md={2} xl={2} lg={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}  >
                                        <a href='#' style={{ color: 'rgba(255,255,255,0.7)', fontSize: 30 }}>
                                            <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon>
                                        </a>
                                    </Col>
                                    <Col xs={2} sm={2} md={2} xl={2} lg={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }} >
                                        <a href='#' style={{ color: 'rgba(255,255,255,0.7)', fontSize: 30 }}>
                                            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                        </a>
                                    </Col>
                                    <Col xs={2} sm={2} md={2} xl={2} lg={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }} >
                                        <a href='#' style={{ color: 'rgba(255,255,255,0.7)', fontSize: 30 }}>
                                            <FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon>
                                        </a>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Footer></Footer>
                <Accordion duration={this.messagesBottomDuration} text={this.state.messagesBottom}></Accordion>
                {/* <BrightnessBar min={0} max={1} onChange={(val) => this.setState({ brightness: val })}></BrightnessBar> */}
                <ExpandMenu>
                    <BrightnessBar value={this.state.brightness} min={0} max={1} onChange={(val) => this.setState({brightness: val})} ></BrightnessBar>

                    <FiTriangle size={20} color='#eeeeee'></FiTriangle>
                    <FiDroplet size={20} color='#eeeeee'></FiDroplet>
                    <FiUser size={20} color='#eeeeee'></FiUser>
                </ExpandMenu>
            </div>

        )
    }
}
export default Index;