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
                            <motion.h3 variants={titleAnim}>FOOD BLOGS</motion.h3>
                        </Hide>
                    </motion.div>
                </div>

                <Col className="m-auto" xl={11}>
                <BlogContent>
                    {FoodDrinksData.map(({ image, title, location }) => {
                        return (
                            <Col className="m-auto" xl={4} lg={4} md={6} sm={10} >
                                <div className="img_div">
                                    <img src={image} alt="image" />
                                    <div className="blog-title">
                                    <p>{title}</p>
                                        <small>{location}</small>
                                </div>
                                </div>

                            </Col>
                        )
                    })}
                </BlogContent>
                </Col>
            </Main>
        </Element>

    )
};

export default FoodDrinks;

const Main = styled(motion(Row))`
    margin-top:4.5rem; 
    overflow: auto;
    h3{
        padding: 0;
        margin: 0;
    }
`

const BlogContent = styled(Row)`
    cursor: pointer;
  ::-webkit-scrollbar-track {
    border: 1px solid #d8d7d7;
    padding: 4px 0;
    background-color: #f0e9e9;
    border-radius: 1rem;
  }

.img_div{
    padding-top: 2rem;
}
    .blog-container{
        height: auto;
    width: 100%;
    }
    img {
        height: 290px;
    width: auto;
    margin: auto;
    box-shadow: none;
        transition: 0.3s all ease;
    text-align: center;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
        &:hover {
            box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
            transform: scale(1.02);
        }
    }    
    /* p {
        padding-top: 0.1rem;
        font-weight: 500;
        margin: 0;
        font-size: 1.1rem;
    } */

   

    .blog-title {
        width: 100%;
        text-align: center;
        margin: auto;
        padding-left: 0.4rem;
        padding-top: 1rem;

        p {
            font-size: 1.1rem;
            margin: 0;
            font-weight: 500;
            /* line-height: var(--goat-line-height, 2rem); */
        }
        &:hover {
            text-decoration: underline;
            text-underline-offset: var(--goat-text-underline-offset, .4375rem);
            text-decoration-thickness: 1px;
            text-decoration-skip-ink: none;
        }
    }

    
`;