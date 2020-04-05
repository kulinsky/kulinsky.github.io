import React from 'react';
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import './App.css';


function App() {
  console.log("I'am senior software engineer!!1");
  return (
    <div className="wrapper">
      <Header
        text="The ultimate page!"
      />
      <Content/>
      <Footer />
    </div>
  );
}

export default App;
