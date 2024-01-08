

import Connection from './components/Connection';
import Contact from './components/Contactus';
import Content from './components/Content';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";
import Thankyoucontactus from './components/Thankyoucontactus';
import Searchtwo from './components/Searchtwo';
import Dataforproandcon from './components/Dataforproandcon';
import ProCounDetails from './components/ProCounDetails';
import About from './components/About';

import URank from './components/URank';
import CurrencyConverter from './components/CurrencyConverter';
import Studies from './components/Studies';
import IELTS from './components/IELTS';
import Writing from './components/Writing';
import Reading from './components/Reading';
import PTE from './components/PTE';
import Finance from './components/Finance';
import America from './components/America';
import Australia from './components/Australia';
import Germany from './components/Germany';
import UK from './components/UK';
import Canada from './components/Canda';


function App() {
  return (
    <Router>
      <Navbar/>
      <div className="container">
      <Routes>
        <Route exact path="/" element={<Content/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/des" element={<Dataforproandcon/>} />
        <Route exact path="/contactus" element={<Contact/>} />
        <Route exact path="/connections" element={<Searchtwo/>} />
        <Route exact path="/contact/thankyou" element={<Thankyoucontactus></Thankyoucontactus>} />
        <Route exact path="/connection/peopledetails" element={<ProCounDetails />} />
        <Route exact path="/universityranking" element={<URank />} />
        <Route exact path="/universityranking/america" element={<America></America>} />
        <Route exact path="/universityranking/australia" element={<Australia></Australia>} />
        <Route exact path="/universityranking/germany" element={<Germany></Germany>} />
        <Route exact path="/universityranking/canada" element={<Canada></Canada>} />
        <Route exact path="/universityranking/uk" element={<UK></UK>} />
        <Route exact path="/currencyconverter" element={<CurrencyConverter></CurrencyConverter>} />
        <Route exact path="/studies" element={<Studies></Studies>} />
        <Route exact path="/studies/ielts" element={<IELTS></IELTS>} />
        <Route exact path="/studies/ielts/writing" element={<Writing></Writing>} />
        <Route exact path="/studies/ielts/reading" element={<Reading></Reading>} />
        <Route exact path="/studies/pte" element={<PTE></PTE>} />
        <Route exact path="/finance" element={<Finance></Finance>} />
      </Routes>
      </div>
      <Footer/>
      </Router>
  );
}

export default App;
