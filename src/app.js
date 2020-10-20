import React from 'react';
import './app.css';

// import logo from '../public/images/ironhack-logo.svg';
// import menutop from '../public/images/menu-top.svg';
// import reactlogo from '../public/images/react-logo.svg';

// import icon1 from '../images/icon1.png';
// {/* <img src={icon1} alt="icon1 image" />; */}
// import icon2 from '../public/images/icon2.png';
// {/* <img src={icon2} alt="icon2 image" />; */}
// import icon3 from '../public/images/icon3.png';
// {/* <img src={icon3} alt="icon3 image" />; */}
// import icon4 from '../public/images/icon4.png';
// {/* <img src={icon4} alt="icon4 image" />; */}

const App = () => {
  return (
  <div id="page">

    <div id="part1">

      <div id="navbar">
          <img src='/images/ironhack-logo.svg' alt ="ironhacklogo"></img>
          <img src='/images/menu-top.svg' alt ="menutop"></img>
          {/* <img src='/images/react-logo.svg' alt ="reactlogo"></img> */}
      </div>

    <div id="main1container">
      <h1 className="app">Say hello to ReactJS</h1>
      <h2>You will learn a Frontend framework from scratch, to become an Ninja Developer</h2>
      <button>Awesome</button>
    </div>

    </div>

    <div id='part2'>
        
        <img src='../images/icon1.png' alt ="icon1"></img>
        <h2>Declarative</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

        <img src='../images/icon2.png' alt ="icon2"></img>
        <h2>Components</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>


        <img src='../images/icon3.png' alt ="icon3"></img>
        <h2>Single-Way</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

        <img src='../images/icon4.png' alt ="icon4"></img>
        <h2>JSX</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

      </div>
  
  </div>

  );

};
 
export default App;