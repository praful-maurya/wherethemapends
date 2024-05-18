import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { fade, imgAnimation, titleAnim } from "../../Animation";
import { useInView } from "react-intersection-observer";
import { Hide } from "../../style";
import { blogData } from "../../APi/ApiDemo";
import { Link } from "react-router-dom";

const RecentBlogs = () => {
    const control = useAnimation();
    const [element, view] = useInView({ threshold: 0.3 });
    const [scrollPosition, setScrollPosition] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        if (view) {
            control.start('show');
            window.addEventListener('scroll', handleScroll);
        } else {
            control.start('hidden');
            window.removeEventListener('scroll', handleScroll);
        }
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [view, control]);

    const handleScroll = () => {
        const position = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        setScrollPosition(position);
    };

    return (
        <Main variants={fade} initial="hidden" animate={control} ref={element}>
            <div className="fillBackground" ref={ref} scrollPosition={scrollPosition} >
            <div>
                <motion.div>
                    <Hide>
                            <motion.h3 variants={titleAnim}>TRAVEL BLOGS</motion.h3>
                    </Hide>
                </motion.div>
            </div>

            <BlogContent>
                {blogData?.map((item) => {
                    return (
                        <div className="blog-container">
                            <Link className="link" to={item.link}>
                                <motion.div variants={imgAnimation} initial="hidden" animate={control} className="img_div">
                                    <img src={item.img} alt="" />
                                </motion.div>
                            </Link>
                            <div className="blog-title">
                                <p>{item.title}</p>
                            </div>
                        </div>
                    );
                })}
            </BlogContent>
            </div>
        </Main>
    );
};

export default RecentBlogs;

const Main = styled(motion.div)`
    margin-top:5rem; 
    width: 100%;
    background-color: ${({ scrollPosition }) => {
        const maxScroll = document.body.clientHeight - window.innerHeight;
        const scrollPercentage = Math.min(scrollPosition / maxScroll, 1);
        return `rgba(251, 225, 197, ${scrollPercentage})`;
    }};
    
    h2 {
        font-size: 2.3rem;
    }

    .fillBackground {
        background-color: #FBE1C5; /* Set background color when in view */
    }
`;

const BlogContent = styled.div`
    padding-left: 1rem;
    display: flex;
    overflow-x: scroll; /* Use auto to only show scrollbar when content exceeds container */
    scrollbar-width: none; /* For Firefox */
    -ms-overflow-style: none; /* For IE and Edge */
    ::-webkit-scrollbar {
        width: 0;
        background-color: transparent; 
    }
    cursor: pointer;
    width: 100%;

    .img_div {
        padding: 0 17px;
    }

    .blog-container {
        height: auto;
        width: 100%;
    }

    img {
        height: auto;
        width: 290px;
        transition: 0.3s all ease;
        margin-top: 0.7rem;
        margin-right: 0.7rem;
        margin-bottom: 5px;
        text-align: center;
        display: flex;
        flex-direction: column;
        -webkit-box-pack: justify;
        justify-content: space-between;
        padding: 5px 5px;
        border-radius: 12px;
        &:hover {
            transform: scale(1.02);
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
        width: auto;
        p {
            font-size: 1.1rem;
            line-height: var(--goat-line-height, 2rem);
        }
        &:hover {
            text-decoration: underline;
            text-underline-offset: var(--goat-text-underline-offset, .4375rem);
            text-decoration-thickness: 1px;
            text-decoration-skip-ink: none;
        }
    }

    > div {
        margin-right: 1rem; 
    }
`;
