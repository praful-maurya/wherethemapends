import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { howToReach } from "./BlogData";
import { Col, Row } from "react-bootstrap";


const HowToReach = ({ location }) => {

    const filterData = howToReach?.filter(({ id }) => id === location.pathname);
    console.log(filterData)

    return (
        <>
            <Main>
                {filterData?.map((item) => {
                    return (
                        <Container>
                            <Col xl={12}>
                                <h4>{item.title}</h4>
                            </Col>

                            <Col xl={12}>
                                <p className="text-start m-auto pb-2">{item?.extra}</p>
                            </Col>

                            <Col className="m-auto" xl={11} >
                                {item.topic?.map((({ topicDesc, links, linkTitle, afterLink }) => {
                                    return (
                                        <>
                                            <p className="text-start m-auto">{topicDesc} {!!links && <a href={links} target="_blank">{linkTitle}</a>} {afterLink} </p> <br />
                                        </>
                                    )
                                }))}
                            </Col>
                            <p>{item.notes}</p>

                        </Container>
                    )
                })}
            </Main>
        </>
    )
};

export default HowToReach;

const Main = styled.div`
    
`

const Container = styled(Row)`
            /* padding-bottom: 15px; */
        h6{
            font-size: 1.1rem;
            font-weight: 600;
            text-align: start;
        }
        li{
            font-size: 1rem;
    font-weight: 600;
        }
        span{
            font-weight: normal;
        }

        h4{
        /* font-size: 1.3rem; */
        font-weight: 600;
        /* font-family: "Lora", serif; */
        color: #6E4B21;
        }

        p{
            text-align: start;
        }
        a{
            text-decoration: none;
        }
`