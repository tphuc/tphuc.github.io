import React , {Component} from 'react';
import {Row, Col, Image, Card} from 'react-bootstrap';
import { secondaryDark } from '../static/scripts/color';

var baseStyle = {
    responsive:{
        display: "flex", 
        justifyContent: "center",
        alignItems:'center'
    },
    container:{
        backgroundColor: '#eeeeee', height: 350
    },
    blog_wrapper:{
        width:'90%', margin:10, padding:0, overflow: 'hidden', alignItems:'flex-start'
    },
    blog_title:{
        fontFamily:'Roboto',
        margin:0
    },
    blog_time:{
        fontFamily:'Roboto',
        color:secondaryDark,
        margin:0
    },
    blog_text:{
        fontFamily:'Roboto',
        margin:0
    }
}
const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

class BlogCard extends Component{
    render(){
        return (
            <Row style={{...baseStyle.responsive, alignItems:"center", backgroundColor:"#eceff1", padding:0, margin: 20, minHeight: 200, borderRadius: 5, boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} >
                <Col xs={12} md={6} xl={3} sm={12} lg={4} style={{padding:0, height:"100%", minHeight:200, display:'flex'}}>
                    <div style={{width:"100%", margin:10}}>
                        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtfgtL6XAxeW_Wm2QWRUhKH6fRUhWHz5zvIujyKd4azub9gk6g" style={{ width:'100%', height:"100%", borderRadius:5, border:'0px solid #aaaaaa', objectFit: 'cover'}} fluid />
                    </div>
                </Col>
                <Col xs={12} md={6} xl={9} sm={12} lg={8} style={{padding:0, height:"100%", minHeight:200}} >
                    <div style={baseStyle.blog_wrapper}>
                        <Card.Title style={{...baseStyle.blog_title}}>This is blog's title</Card.Title>
                        <Card.Text style={baseStyle.blog_time}>September 8, 2018</Card.Text>
                        <Card.Text  style={baseStyle.blog_title} className='text-truncate'>{content}</Card.Text>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default BlogCard;
