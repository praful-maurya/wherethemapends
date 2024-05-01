import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { FoodDrinksData } from '../../APi/ApiDemo'
import { Element } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { fade, imgAnimation, titleAnim } from '../../Animation'
import { Hide } from "../../style";

const FoodDrinks = () => {

    const control = useAnimation();
    const [element, view] = useInView({ threshold: 0.2 });

    useEffect(() => {
        if (view) {
            control.start('show')
        } else {
            control.start('hidden')
        }
    }, [view])

    return (
        <Element name="food">

            <Main variants={fade} initial="hidden" animate={control} ref={element} >
                <div>
                    <motion.div>
                        <Hide>
                            <motion.h3 variants={titleAnim}>Food And Drinks</motion.h3>
                        </Hide>
                    </motion.div>
                </div>

                <BlogContent>
                    {FoodDrinksData.map(({ image, title, location }) => {
                        return (
                            <Col xl={4} lg={4} md={6} sm={10} >
                                <div className="img_div">
                                    <img src={image} alt="image" />
                                </div>
                                <div className="blog-title">
                                    <p>{title}</p>
                                    <p style={{ fontSize: '10px' }}>{location}</p>
                                </div>
                            </Col>
                        )
                    })}
                </BlogContent>
            </Main>
        </Element>

    )
};

export default FoodDrinks;

const Main = styled(motion.div)`
    margin-top:5rem; 
`

const BlogContent = styled(Row)`
margin: auto;
    padding-left: 4rem;
    /* display: flex; */
    /* overflow-x: auto;  */
    cursor: pointer;
    /* flex-wrap: wrap; */
/* width: 100%; */

::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    border: 1px solid #d8d7d7;
    padding: 4px 0;
    background-color: #f0e9e9;
    border-radius: 1rem;
    /* width: 90%; */
    /* margin-top: 5px; */
  }

.img_div{
    /* padding: 0 75px; */
}

    .blog-container{
        height: auto;
    width: 100%;
    }

    img {
        height: 280px;
    width: auto;
        transition: 0.3s all ease;
        margin-top: 0.7rem;
    /* margin-right: 0.7rem; */
    /* margin-bottom: 5px; */
    /* box-shadow: rgb(210 206 206) 0px 1px 8px; */
    text-align: center;
    /* border-radius: 20px; */
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 5px 5px;
    border-radius: 12px;
        &:hover {
            transform: scale(1.05);
        }
    }
    
    p {
        padding-top: 0.1rem;
        /* padding-left: 2rem; */
        /* text-align: start; */
        font-weight: 500;
        font-size: 1rem;
        margin: 0;
    }

    .blog-title {
        width: 90%;
        text-align: start;
    }

    
`;