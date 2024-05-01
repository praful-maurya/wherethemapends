import React from "react";
import { accommodation } from "../BlogData";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

const Accomdations = ({ location }) => {
    const filterData = accommodation?.filter(({ id }) => id === location.pathname);
    return (
        <>
            {filterData.map((item) => {
                console.log(item?.topics.map(({ topicTitle }) => topicTitle))
                return (
                    <>
                        <Container>
                            <h4>{item.title}</h4>
                            <Col xl={10}>
                                <p>{item.extra}</p>
                            </Col>

                            <Col xl={10}>
                                {item?.topics?.map(({ topicTitle, topicDesc }) => {
                                    return (
                                        <Row>
                                            {/* <h1 className="text-start">{topicTitle}</h1> */}
                                            <h6 dangerouslySetInnerHTML={{ __html: topicTitle }}></h6>
                                            <p dangerouslySetInnerHTML={{ __html: topicDesc }}></p>
                                        </Row>
                                    )
                                })}
                            </Col>
                        </Container>
                    </>
                )
            })}
        </>
    )
};

export default Accomdations;

const Container = styled(Row)`
            padding-bottom: 15px;
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
        color: #3e3e3e;
        }

        p{
            /* font-size: 1rem; */
            text-align: start;
        }
        a{
            font-size:1.1rem;
            text-align: start;
            text-decoration: none;
            cursor: pointer;
            font-weight: 600;
            /* color: rgb(99 143 209); */
            color: rgb(99 209 132)
        }
`