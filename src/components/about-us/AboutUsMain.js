import React from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { fade, pageAnimation } from "../../Animation";
import { titleAnim } from "../../Animation";
import { Hide } from "../../style";


const AboutUsMain = () => {
    return (
        <motion.div variants={pageAnimation} exit="exit" initial="hidden" animate="show">
            <Main>
                <Hide>
                    <motion.h3 variants={titleAnim}>
                        This is where the map Ends.
                    </motion.h3>
                </Hide>

                <div className="img-container">
                    <img src="" alt="" />
                </div>

                <div className="p-container">
                    <motion.p variants={fade}>
                        Hey there, travel and food enthusiasts! We're Praful and Preemal,
                        the unlikely travel buddies behind this website.

                        Praful, a photography-obsessed frontend developer, sees every trip as
                        an Instagram challenge (and usually emerges victorious... after a few
                        hilarious attempts).
                        Preemal, a data analyst with a budgeting superpower, can stretch a
                        rupee further than a playful elephant's trunk (and still find the most
                        delicious local eats).

                        We combine Praful's impulsive spirit with Preemal's meticulous planning
                        to bring you the best of both worlds: unforgettable escapades and
                        budget-friendly hacks that won't leave you feeling like a broke backpacker.
                        We also have a soft spot for the furry (or feathery!) friends we meet
                        along the way.

                        This website is our love letter to travel and food. We'll whisk you
                        away on culinary journeys that tantalize your taste buds,
                        unveil hidden gems that tourists miss, and share travel tips
                        that won't break the bank.

                        Get ready for travel tales with a wild twist, because with us,
                        it's never a dull journey!

                    </motion.p>
                </div>
            </Main>
        </motion.div>
    )
};

export default AboutUsMain;

const Main = styled(motion.div)`
     h3{
        padding-bottom: 10px;
        font-size: 2.5rem;
    }
`