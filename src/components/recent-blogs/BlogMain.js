import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { Hide } from "../../style";
import { fade, pageAnimation, titleAnim } from "../../Animation";
import { Col, Row } from "react-bootstrap";
import Chapters from "./Chapters";
import BlogContent from "./MainPage.js/BlogContent";


const BlogMain = ({ blog_data }) => {
    return (
        <Main variants={pageAnimation} exit="exit" initial="hidden" animate="show">
            <div style={{ background: '#857b6e', position: 'absolute', zIndex: 0, top: 0, left: 0, width: '100%', height: '80vh' }}></div>

            <Row style={{ position: 'relative', zIndex: 1 }}>
                <Col style={{ background: 'white', zIndex: 100, overflow: 'hidden' }} className="m-auto pt-3 mt-5" xl={7}>
                    <Hide>
                        <Col className="m-auto text-start" xl={10} lg={10} sm={12} md={12} >
                            <motion.h3 variants={titleAnim}>{blog_data.heading}</motion.h3>
                        </Col>
                    </Hide>

                    <Col className="pb-5">
                        <img className="main_blog-img" src={blog_data.img} alt="" />
                    </Col>
                </Col>


                <Col className="pt-4 text-start" xl={9} lg={12} sm={12} md={12}>
                    <Hide>
                        <motion.p style={{ color: 'black', paddingLeft: '6rem' }} variants={fade}>{blog_data.desc}</motion.p>
                    </Hide>
                </Col>
            </Row>


            <Row>
                <Col className="mt-4" xl={6} lg={6} md={8} sm={12}>
                    <Chapters />
                </Col>

                {/* <Col className="mt-5" xl={5} >
                    <div style={{ height: 'auto', width: 40, border: '1px solid', borderRadius: '10px' }}>
                        <h3>hi</h3>
                    </div>
                </Col> */}
            </Row>
            <Col className="m-auto pt-4" xl={10}>
                <BlogContent />
            </Col>
        </Main>
    )
};

export default BlogMain;

const Main = styled(motion.div)`
position: relative;
    margin-top: 1rem;
    .main_blog-img{
        width: auto;
    height: 300px;
    }

    .main_blog-img{
        width: 70%;
        height: auto;
    }
`