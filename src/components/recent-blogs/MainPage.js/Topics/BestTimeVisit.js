import React from "react";
import { Visit } from "../BlogData";
import styled from "styled-components";
import { Col, Row } from "react-bootstrap";

const BestTimeVisit = ({ location }) => {
    const filterData = Visit?.filter(({ id }) => id === location.pathname);
    return (
        <>
            {filterData?.map((item) => {
                return (
                    <>
                        <Container>
                            <h4>{item.title}</h4>

                            <Col>
                                <p>{item.extra}</p>
                            </Col>


                        </Container>
                        <Col xl={9} className="pb-4">
                            <img style={{ width: '100%', borderRadius: '3px' }} src={item.img} alt="" />
                        </Col>
                    </>
                )
            })}
        </>
    )
};

export default BestTimeVisit;

const Container = styled(Row)`
padding-bottom: 15px;
h6{
    font-size: 1.1rem;
    /* font-weight: 600; */
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
    text-decoration: none;
}
`