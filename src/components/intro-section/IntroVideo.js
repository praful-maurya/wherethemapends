import React from 'react';
import styled from 'styled-components';
import { Col, Row } from "react-bootstrap"
import { motion } from 'framer-motion';

function VideoComponent() {
    return (
        <>
            <Main>
                <Col xl={12} lg={12} sm={6} md={6}>
                    <div>
                        {/* <motion.h2 style={{ position: 'absolute', top: '50%', left: '70%', transform: 'translate(-26%, -50%)', fontSize: '3.8rem', color: '#ff9100' }}>
                            Where will you wander next? </motion.h2> */}
                    </div>
                </Col>
            </Main>
        </>

    );
}

export default VideoComponent;

const Main = styled(motion.Row)`
 height: 90vh; /* Set height as per your requirement */
    background-image: url('/assets/images/praful.png');
    background-size: cover; /* Adjust background size as per your requirement */
    background-position: center; /* Adjust background position as per your requirement */
    display: flex;
    justify-content: center;
    align-items: center;
    /* &:after{
        content: '';
        height: 30vh;
        background-image: url('/assets/images/papercut.png');
    background-size: cover; 
    background-position: center; 
    display: flex;
    justify-content: center;
    align-items: center;
    } */

    h2{
        font-family: "Platypi", serif;
    }
`
