import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Element } from "react-scroll";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import { titleAnim } from "../../Animation";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { fade, imgAnimation, titleAnim } from '../../Animation'
import { Hide } from "../../style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const AboutUs = () => {

    const control = useAnimation();
    const [element, view] = useInView({ threshold: 0.3 });

    useEffect(() => {
        if (view) {
            control.start('show')
        } else {
            control.start('hidden')
        }
    }, [view])



    return (
        <Main variants={fade} initial="hidden" animate={control} ref={element} >
            <Element name="about">
                {/* <div>
                <img className="leaf" src="/assets/images/leaf.png" alt="" />
            </div> */}
                <Row>
                    <Col xl={5} lg={4} md={12} sm={12}>
                        <motion.div variants={imgAnimation} initial="hidden" animate={control} ref={element}>
                            <img width="75%" className="about_us_image" src="/assets/images/aboutus.png" alt="" />
                        </motion.div>
                    </Col>
                    <Col xl={7} lg={7} md={12} sm={12}>
                        <div className="content">

                            <motion.div style={{ textAlign: 'start' }}>
                                <Hide>
                                    <motion.h3 variants={titleAnim} >About</motion.h3>
                                </Hide>
                                <Hide>
                                    <motion.h4 variants={titleAnim} >Preemal & Praful</motion.h4>
                                </Hide>
                            </motion.div>

                            <motion.p variants={fade} >We're Praful and Preemal, a travel & food dream team. <br />
                                We combine stunning photography with budget-hacking tips
                                to inspire you to explore <br /> hidden gems and devour delicious
                                local flavors - all without breaking the bank. <br />
                                Join us on unforgettable adventures, one delicious bite
                                and beautiful destination at a time.</motion.p>
                            <Link className="link" to="/about-us">
                                <Hide>
                                    <motion.h5 variants={titleAnim} >More about us</motion.h5>
                                </Hide>
                            </Link>
                            <div className="icon-div d-flex justify-content-end pt-3">
                                {/* <div>
                                    <h5 style={{ fontSize: '1rem ', color: 'white', fontWeight: 100, paddingTop: '3px' }}>Follow us- </h5>
                                </div> */}
                                <div className="icon">
                                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                                </div>
                                <div className="icon">
                                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                                </div>
                                <div className="icon">
                                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                                </div>
                                <div className="icon">
                                    <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>


            </Element>
        </Main>
    )
};

export default AboutUs;

const Main = styled(motion.div)`
margin-top: 4rem;
    .about_us_image{
        /* border: 1px solid #2ec5eb; */
    height: auto;
    /* width: 85%; */
    border-radius: 4px;
    }
    .leaf{
        height: auto;
        width: 10%;
    }

    span{
        font-weight: 500;
        color: #dc5d0d;
    }
    
      h4{
        font-family: "Freehand", cursive;
    }

    .content{
        margin-top: 1rem;
    text-align: center;
    display: flex;
    align-items: center;
    height: 80%;
    justify-content: center;
    flex-direction: column;
    }
    .icon{
        color: #141414;
        padding: 0 10px;
    }
    .icon-div{
        position: relative;
        right: 2.5rem;
    }
`

// const IMG = styled(motion)