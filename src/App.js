import React, { Component } from 'react'
import Header from './components/Header'
import News from './components/News'
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import NewsItems from './components/NewsItems'
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return (

      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<News key="general" category="general" pageSize={6}/>}/>
          
          <Route path="business" element={<News key="business" category="business" pageSize={6} />} />
          <Route path="entertainment" element={<News key="entertainment" category="entertainment" pageSize={6} />} />
          <Route path="sports" element={<News key="sports" category="sports" pageSize={6} />} />
          <Route path="science" element={<News key="science" category="science" pageSize={6}/>} />
          <Route path="technology" element={<News key="technology" category="technology" pageSize={6} />} />
          <Route path="health" element={<News key="health" category="health" pageSize={6} />} />
          
          {/* <Route path="*" element={<NoPage />} /> */}
        
      </Routes>
      <Footer/>
    </BrowserRouter>


      // <div>
      //   <Header/>
      //   <News/>
      //   <Footer/>
      // </div>
    )
  }
}
