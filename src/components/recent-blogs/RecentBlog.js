import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import styled from "styled-components";
import { fade, imgAnimation, titleAnim } from "../../Animation";
import { useInView } from "react-intersection-observer";
import { Hide } from "../../style";
import { blogData } from "../../APi/ApiDemo";
import { Link } from "react-router-dom";

// import { Col, Row } from "react-bootstrap";


const RecentBlogs = () => {

    const control = useAnimation();
    const [element, view] = useInView({ threshold: 0.3 });

    useEffect(() => {
        if (view) {
            control.start('show')
        } else {
            control.start('hidden')
        }
    }, [view])

    return (
        <Main variants={fade} initial="hidden" animate={control} ref={element}>
            <div>
                <motion.div>
                    <Hide>
                        <motion.h3 variants={titleAnim}>Recent Blogs</motion.h3>
                    </Hide>

                    <Hide>
                        <motion.p variants={titleAnim}>Travel Posts and Guides</motion.p>
                    </Hide>
                </motion.div>
            </div>

            <BlogContent>
                {blogData?.map((item) => {
                    return (
                        <>
                            <div className="blog-container">
                                <Link className="link" to={item.link}>
                                    <motion.div variants={imgAnimation} initial="hidden" animate={control} ref={element} className="img_div">
                                        <img src={item.img} alt="" />
                                    </motion.div>
                                </Link>
                                <div className="blog-title">
                                    <p>{item.title}</p>
                                </div>
                            </div>

                        </>
                    )
                })}

            </BlogContent>

        </Main>
    )
};

export default RecentBlogs;

const Main = styled(motion.div)`
    margin-top:5rem; 
    /* padding-bottom: 2rem; */
    width: 100%;
    h2{
        font-size: 2.3rem;
    }    
`

const BlogContent = styled.div`
    padding-left: 1rem;
    display: flex;
    overflow-x: auto; /* Use auto to only show scrollbar when content exceeds container */
    cursor: pointer;
width: 100%;

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
    padding: 0 17px;
}

    .blog-container{
        height: auto;
    width: 100%;
    }

    img {
        height: auto;
    width: 300px;
        transition: 0.3s all ease;
        margin-top: 0.7rem;
    margin-right: 0.7rem;
    margin-bottom: 5px;
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
        padding-top: 0.8rem;
        padding-left: 1.4em;
        text-align: start;
        font-weight: 500;
        font-size: 0.9rem;
    }

    .blog-title {
        width: 90%;
    }

    > div {
        margin-right: 1rem; /* Add some space between items */
    }
`;

