import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

const Chapters = () => {
    return (
        <Main >
            <div>
                <h6 style={{ fontSize: '1.1rem', fontWeight: '600   ', color: 'black' }} className="text-start">Contents</h6>

                <Col xl={12} lg={12} sm={12} className="d-flex justify-content-between">
                    <div className="text-start">
                        <h6>1. How To Reach</h6>
                        <h6>2. Best Time To Visit</h6>
                    </div>

                    <div className="text-start">
                        <h6>3. Finding Your Accommondations</h6>
                        <h6>4. Things To Do</h6>
                    </div>
                </Col>
            </div>
        </Main>
    )
};

export default Chapters;

const Main = styled(Row)`
    border: 1.6px solid #ffa5006e;
    border-radius: 8px;
    padding: 7px 6px;
    margin-left:6rem;

    h6{
        padding: 3px 0;
    font-weight: 600;
    color: #525151;
    }
`