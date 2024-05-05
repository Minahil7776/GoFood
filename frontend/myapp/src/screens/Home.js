import React,{useState} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Crousel from "../components/Crousel";

export default function Home() {
  return (
    <div className="bg-dark text-light">
      <div><Navbar /></div>
      <div><Crousel /></div>
      <h1 className="m-3">Burger</h1>
            <hr/>
        <div className="row justify-content-center m-0">
          <div className=" col-12 col-md-6 col-lg-3">
            <Card title="Burger" text="Chiken Cheese Special Burger" src="pics/Burger.jpg"  price="700Rs"/>
          </div>
          <div className=" col-12 col-md-6 col-lg-3">
            <Card title="Burger" text="Chiken Cheese Special Burger" src="pics/burger2.jpg"  price="600Rs"/>
          </div>
          <div className=" col-12 col-md-6 col-lg-3">
            <Card title="Burger" text="Chiken Cheese Special Burger" src="pics/burger3.jpg" price="500Rs"/>
          </div>
        </div>
        <h1 className="m-3">Pizza</h1>
            <hr/>
        <div className="row justify-content-center m-0">
          <div className=" col-12 col-md-6 col-lg-3">
            <Card title="Pizza" text="Chiken Cheese Special Pizza" src="pics/Pizza.jpg"  price="1000Rs"/>
          </div>
          <div className=" col-12 col-md-6 col-lg-3">
            <Card title="Pizza" text="Chiken Cheese Special Pizza" src="pics/pizza2.jpg"  price="2000Rs"/>
          </div>
          <div className=" col-12 col-md-6 col-lg-3">
            <Card title="Pizza" text="Chiken Cheese Special Pizza" src="pics/pizza3.jpg"  price="1500Rs"/>
          </div>
        </div>
        <h1 className="m-3">Dessert</h1>
            <hr/>
        <div className="row justify-content-center m-0">
          <div className=" col-12 col-md-6 col-lg-3">
            <Card title="Dessert" text="Special Dessert" src="pics/des1.jpg"  price="2000Rs"/>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <Card title="Dessert" text="Special Dessert" src="pics/des2.jpg"  price="200Rs"/>
          </div>
          <div className=" col-12 col-md-6 col-lg-3">
            <Card title="Dessert" text="Special Dessert" src="pics/des3.jpg" price="200Rs"/>
          </div>
        </div>
        <h1 className="m-3">Ice Cream</h1>
            <hr/>
        <div className="row justify-content-center m-0">
          <div className="col-12 col-md-6 col-lg-3">
            <Card title="Ice Cream" text="Special Ice Cream" src="pics/ice1.jpg"  price="700Rs"/>
          </div>
          <div className=" col-12 col-md-6 col-lg-3">
            <Card title="Ice Cream" text="Special Ice Cream" src="pics/ice2.jpg"  price="600Rs"/>
          </div>
          <div className=" col-12 col-md-6 col-lg-3">
            <Card title="Ice Cream" text="Special Ice Cream" src="pics/ice3.jpg" price="500Rs"/>
          </div>
        </div>
       
      <div><Footer /></div>
    </div>
  )
}
