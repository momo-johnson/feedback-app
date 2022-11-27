import React from "react";
import Header  from "./components/Header";
import AboutPage from "./pages/AboutPage"
import IndexPage from "./pages/IndexPage";
import  { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext"
function App() {

    return(
        
        <React.Fragment>
        <FeedbackProvider>
        <Header />
        <Router>
        <div className="container">
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/about" element={<AboutPage />} />
        </Routes>
        <AboutIconLink />
        </div>
        
        </Router>
        </FeedbackProvider>
        </React.Fragment>
      
        )
    
}

export default App;