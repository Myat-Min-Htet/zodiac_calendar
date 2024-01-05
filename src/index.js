import React from "react";
import  ReactDOM  from "react-dom";
import App from "./App";



//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";   
import "primeicons/primeicons.css";                                    
import "primeflex/primeflex.css";  
//import Zodiac from "./zodiac";


            


//const root= ReactDOM.createRoot(document.getElementById("root"));root.render(<Greeting/>);
ReactDOM.render(<App />, document.getElementById("root"));