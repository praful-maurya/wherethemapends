import React from "react";
import AboutUs from "./components/about-us/AboutUs";
import RecentBlogs from "./components/recent-blogs/RecentBlog";
import FoodDrinks from "./components/food-section/FoodAndDrinks";
import VideoComponent from "./components/intro-section/IntroVideo";
import { pageAnimation } from "./Animation";
import { motion } from "framer-motion";
import NavBar from "./components/navbar/Navbar";
import ParallaxNav from "./components/navbar/ParallaxNav";
import { Row } from "react-bootstrap";

const HomePage = () => {
    return (
        <motion.div /* exit="exit" variants={pageAnimation} initial="hidden" animate="show" */>
            <Row>
                {/* <NavBar xl={12} lg={12} md={12} sm={12} /> */}
                <ParallaxNav />
                {/* <VideoComponent /> */}
                <AboutUs />
                <RecentBlogs />
                <FoodDrinks />
            </Row>
        </motion.div>
    )
};

export default HomePage;