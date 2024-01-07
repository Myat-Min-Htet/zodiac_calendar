import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import {
  BrowserRouter,
  Route,
  Router,
  Routes,
  useParams,
} from "react-router-dom";

import react, { useEffect, useState } from "react";

import { ReactDOM } from "react";
import "./index.css";
//import {ZodiacSignsDetail} from './data';
//import Card from './card';
//import Context from './Context';
//import zodiacDetail from './zodiac';
//import Zodiac from './zodiac';
//import Test from './test';
import NavBar from "./Navbar";

import Aries from "./aries";
import Taurus from "./taurus";
import Gemini from "./gemini";
import Cancer from "./cancer";
import Leo from "./leo";
import Virgo from "./virgo";
import Libra from "./libra";
import Scorpio from "./scorpio";
import Sagittarius from "./sagittarius";
import Capricorn from "./capricorn";
import Aquarius from "./aquarius";
import Pisces from "./pisces";

function App() {
  return (
    <BrowserRouter>
      <div className="header">
        <h1>Zodiac Calendar</h1>
      </div>
      <div className="main">
        <NavBar />
      </div>
      <Routes>
        <Route
          path="aries"
          element={
            <div className="newpage">
              {" "}
              <Aries />
            </div>
          }
        />
        <Route
          path="taurus"
          element={
            <div className="newpage">
              <Taurus />{" "}
            </div>
          }
        />
        <Route
          path="gemini"
          element={
            <div className="newpage">
              <Gemini />{" "}
            </div>
          }
        />
        <Route
          path="cancer"
          element={
            <div className="newpage">
              <Cancer />{" "}
            </div>
          }
        />
        <Route
          path="leo"
          element={
            <div className="newpage">
              <Leo />{" "}
            </div>
          }
        />
        <Route
          path="virgo"
          element={
            <div className="newpage">
              <Virgo />{" "}
            </div>
          }
        />
        <Route
          path="libra"
          element={
            <div className="newpage">
              <Libra />{" "}
            </div>
          }
        />
        <Route
          path="scorpio"
          element={
            <div className="newpage">
              <Scorpio />{" "}
            </div>
          }
        />
        <Route
          path="sagittarius"
          element={
            <div className="newpage">
              <Sagittarius />{" "}
            </div>
          }
        />
        <Route
          path="capricon"
          element={
            <div className="newpage">
              <Capricorn />{" "}
            </div>
          }
        />
        <Route
          path="aquarius"
          element={
            <div className="newpage">
              <Aquarius />{" "}
            </div>
          }
        />
        <Route
          path="pisces"
          element={
            <div className="newpage">
              <Pisces />{" "}
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
