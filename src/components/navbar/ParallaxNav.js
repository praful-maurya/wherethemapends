/* eslint-disable no-unused-expressions */
import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import NavBar from "./Navbar";

const ParallaxNav = () => {

    let headingRef = useRef()
    let leafRef = useRef()
    let hill1 = useRef()
    let hill4 = useRef()
    let hill5 = useRef()

    // const [element, view] = useInView();
    // console.log(view)

    const scroll = () => window.addEventListener('scroll', () => {
        let value = window.scrollY;
        if (headingRef.current && value < 130) {
            headingRef.current.style.marginTop = value * 2.5 + 'px'
        }
        if (leafRef.current && value < 165) {
            leafRef.current.style.top = value * -1 + 'px'
            leafRef.current.style.left = value * 1 + 'px'
        }

        if (hill4.current && value < 165) {
            hill4.current.style.left = value * -1.5 + 'px'
        }
        if (hill5.current && value < 165) {
            hill5.current.style.marginTop = value * 1.5 + 'px'
        }

        if (hill1.current && value < 165)
            hill1.current.style.top = value * 1 + 'px'
    })

    useEffect(() => {
        window.addEventListener('scroll', scroll);
        return () => {
            window.removeEventListener('scroll', scroll);
        }
    }, [])

    return (
        <Main>
            {/* <header>
                <h3 className="logo">Logo</h3>
                <nav className="navigation">
                    <a href="" className="active">Destinagtion</a>
                    <a href="">Home</a>
                    <a href="">About us</a>
                    <a href="">Contact</a>
                </nav>
            </header> */}
            <NavBar />
            <Col>
                <section className="parallax">
                    <img ref={hill1} className="hill1" src="/assets/images/hill1.png" alt="" />
                    <img src="/assets/images/hill2.png" alt="" />
                    <img src="/assets/images/hill3.png" alt="" />
                    <h2 ref={headingRef} id="text">WheretheMapEnds?</h2>
                    <img ref={hill4} className="hill4" src="/assets/images/hill4.png" alt="" />
                    <img ref={hill5} className="hill5" src="/assets/images/hill5.png" alt="" />
                    <img src="/assets/images/tree.png" alt="" />
                    <img ref={leafRef} className="leaf" src="/assets/images/leaf.png" alt="" />
                    <img src="/assets/images/plant.png" alt="" />
                </section>
            </Col>

            <section className="sec">
                <h2>Travel and adventures</h2>
                <p style={{ color: 'white' }}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis autem repudiandae illum, et voluptatem temporibus.
                    Voluptates architecto quidem eos dolores maxime, quaerat velit alias illum dolorem nobis in ipsum obcaecati nulla voluptas.
                    Atque soluta unde explicabo eius ratione pariatur ab quis perferendis quisquam harum. Laborum maiores fuga nostrum minima. Atque,
                    doloribus. Iure perspiciatis fugit officia ducimus ex sunt, aut nobis voluptas fugiat vero est sint eius esse incidunt, labore ipsa
                    commodi accusamus similique, rem placeat iusto. Sapiente aliquid possimus sit, qui atque veniam enim? Assumenda libero est aliquid nemo
                    molestias in enim. Et possimus quia accusamus veritatis saepe nam voluptatum alias autem vitae vero cumque consequatur nisi neque iure delectus consectetur,
                    reiciendis voluptas,
                    mollitia aperiam exercitationem ullam facere ipsam? Eum voluptates aut veritatis pariatur, tenetur accusamus distinctio sed libero doloremque!
                </p>

            </section>
        </Main>
    )
};

export default ParallaxNav;

const Main = styled(Row)`
/* overflow-x: scroll; */
/* height: 100vh; */
padding: 0;
header{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 30px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
}
.navigation a{
    text-decoration: none;
    color: #359381;
    padding: 6px 15px;
    border-radius: 20px;
    margin: 0px 10px;
    font-weight: 600;

    &:hover{
        background: #359381;
    color: white;
    }
}
.navigation a.active
{
    background: #359381;
    color: white;
}
.parallax{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    /* overflow: scroll; */
}
.parallax img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    pointer-events: none;
}
#text{
    position: absolute;
    font-size: 4em;
    margin-bottom: 3rem;
    margin-right: 3rem;
    font-weight: 600;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0,0,0, .2);
}

.sec{
    position: relative;
    background-color: #003329;
    padding: 100px;
    margin-top: 150px;

}
.sec h2{
    font-size: 3rem;
    color: white;
    margin-bottom: 10px;
}
`