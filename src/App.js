import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createGlobalStyle } from 'styled-components';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AboutUsMain from './components/about-us/AboutUsMain';
import HomePage from './HomePage';
import { blogData } from './APi/ApiDemo';
import BlogMain from './components/recent-blogs/BlogMain';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Montserrat, Arial, sans-serif;
    

    h3{
        padding-bottom: 10px;
        /* font-size: 1.8rem; */
        /* color: var(--e-global-color-text);0 */
    color: #525151;

    font-family: "Playfair Display", Sans-serif;
    font-size: 37px;
    font-weight: 300;
    }

    h5{
      font-size: 1rem;
      font-weight: 400;
      color: #302f2f;
      text-decoration: underline;
    }
    p{
        font-size: 1.1rem;
        color: #312f2f;
    }

    h4{
      text-align: start;
      /* color: var(--brand-color); */
    color: #525151;

    margin: 0 0 15px 0;
    font-weight: 700;
    line-height: 1.2;
    font-family: Montserrat, Arial, sans-serif;

    /* font-family: "Lora", serif; */

    }

    h1{
      font-size: 15px;
      font-weight:600;
    }

    h6{
    color: #525151;

    }
  }
`;

function App() {
  const location = useLocation()
  window.onload = function () {
    window.setTimeout(
      function () { window.scrollTo(0, 0); },
      10
    );
  };
  return (
    <div className="App">
      <GlobalStyle />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname} >
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about-us" element={<AboutUsMain />} />
          {blogData.map((item) => {
            const blog_data = location.pathname === item.link ? { heading: item.main.heading, desc: item.main.desc, img: item.main.img } : ''
            return (
              <>
                <Route exact path={item.link} element={<BlogMain blog_data={blog_data} />} />
              </>
            )
          })}
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
