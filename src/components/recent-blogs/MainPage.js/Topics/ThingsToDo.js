import React from "react";
import { thingsToDo } from "../BlogData";
import styled from "styled-components";
import { Col, Row } from "react-bootstrap";

const ThingsToDo = ({ location }) => {
    const filterData = thingsToDo?.filter(({ id }) => id === location.pathname);
    return (
        <>
            {filterData?.map((item) => {
                return (
                    <>
                        <Container>
                            <h4>{item.title}</h4>
                            <Col xl={10}>
                                <p>{item.extra}</p>
                            </Col>

                            <Col xl={9} className="pb-4 ">
                                <img style={{ width: '100%', borderRadius: '3px' }} src={item.img} alt="" />
                            </Col>

                            <Col xl={10}>
                                {item?.topics?.map(({ topicTitle, topicDesc }) => {
                                    return (
                                        <Row>
                                            <p dangerouslySetInnerHTML={{ __html: topicTitle }}></p>
                                            <p>{topicDesc}</p>
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

export default ThingsToDo;

const Container = styled(Row)`
padding-bottom: 15px;
h6{
    font-size: 1.1rem;
    font-weight: 600;
    text-align: start;
}
h4{
    /* padding-bottom: 10px; */
/* font-size: 1.3rem; */
font-weight: 600;
/* font-family: "Lora", serif; */
color: #3e3e3e;
}

p{
            text-align: start;
        }
a{
    font-size:1rem;
            text-align: start;
            text-decoration: none;
            cursor: pointer;
            font-weight: 600;
            /* color: rgb(99 143 209); */
            color: rgb(99 209 132)
}
`