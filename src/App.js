import React from "react";
import { Button } from 'reactstrap';
import {BrowserRouter} from 'react-router-dom';
import Routes from "./Routes";
import Headers from "./Headers";
import Article from "./Article";
import Footer from "./Footer";


function App() {
  return (
    <BrowserRouter>
        <Headers />

        <Routes />

        <Article />

        <Footer />


    </BrowserRouter>
  );
};
export default App;
