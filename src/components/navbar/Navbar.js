import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-scroll";

const NavBar = () => {
    return (
        <>

            <Main>
                <div>
                    <Row>
                        <Col xl={2} lg={2}>
                            <header className="logo" style={{ textAlign: 'start' }}>
                                <img src="/assets/images/wtmelogo.png" alt="" />
                            </header>
                        </Col>
                        <Col xl={5} lg={4}>
                            <Row style={{ /* position: 'relative', left: '9rem',  */paddingTop: '14.5px' }} className="justify-content-start">
                                <Col className="p-0" xl={2}>
                                    <h4>Destinations</h4>
                                </Col>
                                <Col style={{ paddingLeft: '14px' }} className="p-0" xl={2}>
                                    <Link to="food" spy={true} smooth={true} duration={200} offset={-50}>
                                        <h4>Food</h4>
                                    </Link>
                                </Col>
                                <Col className="p-0" xl={2}>
                                    <Link to="Itineraries" spy={true} smooth={true} duration={200} >
                                        <h4>Itineraries</h4>
                                    </Link>
                                </Col>
                                <Col className="p-0" xl={2}>
                                    <Link to="about" spy={true} smooth={true} duration={200} offset={-100}>
                                        <h4>About Us</h4>
                                    </Link>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
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
                        </Col>
                    </Row>
                </div>
            </Main>
            {/* <hr style={{ margin: 0, color: '#0c058c', border: '1px solid' }} /> */}
        </>
    )
}

export default NavBar;

const Main = styled.div`
/* position: fixed; */
background: #f4e6d9;
  /* -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(3px); */

/* padding-top: 32px; */
padding-bottom: 6.5px;
width: 99.20%;
    /* border: 1px solid; */
    /* p{} */
    h4{
        font-size: 1.1rem;
        padding-top: 7px;
        color: #222121;
        font-weight: 600;
    }
    .icon{
        color: #e3dede;
        padding: 0 10px;
        color: #2b2a2a;
    }
    .icon-div{
        position: relative;
        right: 2.5rem;
    }

    img{
        /* width: 190px;
        height: auto;
        padding-left: 1rem;
        padding-top: 0.5rem; */
        width: auto;
    height: 63px;
    padding-left: 3rem;
    padding-top: 0.5rem;
    }
`