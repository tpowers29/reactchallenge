import './App.css';
import { useState } from 'react';
import Aboutme from "./componets/Aboutme";
import Contact from "./componets/Contact";
import Portfolio from "./componets/Portfolio";
import Resume from "./componets/Resume";
import Header from "./componets/Header";
import Footer from "./componets/Footer";

const App = () =>{
  const [currentPage, setCurrentPage]=useState("Aboutme")

  const  handleCurrentPage = (page) => {
    setCurrentPage(page)
    switch(page){
      case "Aboutme":
        return <Aboutme />
      case "Contact":
        return <Contact />
      case "Porfolio":
        return <Portfolio />
      case "Resume":
        return <Resume />
      default:
        return <Aboutme />
    
    }
  }
 
  return (
    <div className="App">
      <Header currentPage={currentPage} handleCurrentPage={handleCurrentPage}/>
      {/* {handleCurrentPage()} */}
      <Footer />
    </div>
  );
}

export default App;
