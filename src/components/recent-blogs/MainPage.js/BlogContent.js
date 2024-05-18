import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import HowToReach from "./HowToReach";
import { useLocation } from "react-router-dom";
import BestTimeVisit from "./Topics/BestTimeVisit";
import Accomdations from "./Topics/Accomdations";
import { Col, Row } from "react-bootstrap";
import ThingsToDo from "./Topics/ThingsToDo";

const BlogContent = () => {
    const location = useLocation()

    return (
        <div> 
            <Row>
                <Col xl={10} lg={10} className="mt-4">
                    <HowToReach location={location} />
                </Col>

                <Col xl={10} lg={10} className="mt-4">
                    <BestTimeVisit location={location} />
                </Col>

                <Col xl={12} lg={10} className="mt-4">
                    <Accomdations location={location} />
                </Col>

                <Col xl={10} lg={10} className="mt-4">
                    <ThingsToDo location={location} />
                </Col>
            </Row>
        </div>
    )
};

export default BlogContent;


