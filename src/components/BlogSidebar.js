import React, { Component } from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import PropTypes from 'prop-types';
import { Container, Image, Section, Col, Row,Badge, Button, Collapse} from 'react-bootstrap';

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


class BlogSidebar extends Component{
    constructor(props, context) {
        super(props, context);
    
        this.state = {
          open: false,
        };
      }
    render(){
        const { open } = this.state;
        return (
            <div style={{margin: 20, borderRadius: 5, backgroundColor:"#ffffff", paddingBottom:50, boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                <Badge
                    variant="secondary"
                    onClick={() => this.setState({ open: !open })}
                        aria-controls="1"
                        aria-expanded={open}
                        >
                    python
                </Badge>
                <Collapse in={this.state.open}>
                    <div >
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                        labore wes anderson cred nesciunt sapiente ea proident.
                    </div>
                </Collapse>
                <Badge
                    variant="secondary"
                    onClick={() => this.setState({ open: !open })}
                        aria-controls="2"
                        aria-expanded={open}
                        >
                    java
                </Badge>
                
                <Collapse in={this.state.open}>
                    <div >
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                        labore wes anderson cred nesciunt sapiente ea proident.
                    </div>
                </Collapse>
                <Blogger></Blogger>
            </div>
        )
    }
}

function Blogger(){
    return(
        <Container >
            <Row>
                <Col xs={12} md={12} xl={12} sm={12} lg={12} style={{ ...baseStyle.responsive}} >
                    <div style={{margin:5, justifyContent:'center', alignItems:"center",display:'flex'}}>
                            <Image src="https://pngimage.net/wp-content/uploads/2018/06/teal-circle-png.png" style={{ height:'auto', maxWidth:'80%'}} fluid roundedCircle />  
                    </div>
                    
                </Col>
                <Col>
                    <p>
                    Denali is a simple responsive blog template. Easily add new posts using the Editor or change layout and design using the Designer.
                    </p>
                    <hr></hr>
                    <h5>Feature posts</h5>
                    <a href="#">post's title1</a>
                    <br></br>
                    <a href="#">post's title</a>
                </Col>
            </Row>
        </Container>
    )
}
export default BlogSidebar;