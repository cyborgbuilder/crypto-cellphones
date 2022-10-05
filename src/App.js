import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Introduction from './components/Introduction';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import BlackPage from './components/BlackPage';
import ImageSlider from './components/ImageSlider'
import Nav from './components/Nav';
import Footer from './components/Footer';
import Story from './components/Story';
import Accordion from './components/Accordion';
import {Helmet} from "react-helmet";


function App() {
  return (
    <div className="App">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Crypto Cell Phones</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      {/* <Nav /> */}
     <Home />
     <Introduction />
     {/* <BlackPage />
     
     {/* <BlackPage /> */}
     <Story />
    <ImageSlider />
    <Team />
    <Roadmap /> 
     <Accordion />
     <Footer />
    </div>
  );
}

export default App;
