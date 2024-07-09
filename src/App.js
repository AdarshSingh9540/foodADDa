// import logo from './logo.svg';
import './index.css';
import Body from "./components/Body";
import Header from "./components/Header";
import SearchAppBar from "./components/Header";
import Footer from "./components/Footer";
import store from './utils/store';
import { Provider } from 'react-redux';
import { Outlet } from "react-router-dom";
import HeroSection from './components/HeroSection';
import Carousal from './components/Carousal';
function App() {
  return(
    <>
    <Provider store={store}>
    <Header />
    <HeroSection/>
    <Carousal/>
    {/* <Body /> */}
    <Outlet/>
    <Footer />
    </Provider>
    </>
  )
}

export default App;