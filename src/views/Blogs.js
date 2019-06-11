import React, { Component } from 'react';
import Editor from '../components/BlogEditor';
import Navigator from '../components/Navigator';
import { Container, Image, Section, Col, Row, Button, Modal } from 'react-bootstrap';
import BlogSideBar from '../components/BlogSidebar';
import BlogCard from '../components/BlogList';
import { mainWhite } from '../static/scripts/color';

class View extends Component{
    constructor(){
        super();
        this.state={
            editorOpen : false,
        }
    }
    editorClose = () =>{
        this.setState({editorOpen : false})
    }
    editorOpen = ()=>{
        this.setState({editorOpen: true})
    }

    render(){
        return(
            <div style={{backgroundColor:mainWhite}}>
                <Navigator/>
                <Container >
                    <Row>
                        <Col xs={12} md={12} xl={3} sm={12} lg={4} >
                            <BlogSideBar ></BlogSideBar>
                        </Col>
                        <Col xs={12} md={12} xl={9} sm={12} lg={8} >
                            <BlogCard></BlogCard>
                            <BlogCard></BlogCard>
                            <BlogCard></BlogCard>
                            <BlogCard></BlogCard>
                            <BlogCard></BlogCard>
                            {/* <Button onClick={() => {store.dispatch(openEditor()); console.log(store.getState())}}>+</Button> */}
                        </Col>
                    </Row>
                </Container>
                <Editor></Editor>
            </div>
        )
    }
}
export default View;