import React from "react";
import { NavLink } from 'react-router-dom';
import Carousel from "react-elastic-carousel";
import Item from "./Item";


const breakPoints =[
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
  {slideSpeed:1000},
  {autoPlay:true}
];
function MultiCarouselPage() {
  return (
    <>
    
      <h1  className="client">Our client speaks talks</h1>
      <div className="test">
        <Carousel breakPoints={breakPoints}>
          <Item>
         
   
    <div className="owl-carousel owl-carousel1 owl-theme " className="gtco-testimonials">
      <div>
        <div className="card text-center"><img className="card-img-top" src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300" alt=""/>
          <div className="card-body">
            <h5>Ronne Galle <br />
              <span> Project Manager </span></h5>
            <p className="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus id quod maxime placeat ” </p>
          </div>
        </div>
      </div>
      </div>
        </Item>
          <Item><div className="owl-carousel owl-carousel1 owl-theme " className="gtco-testimonials">
      <div>
        <div className="card text-center"><img className="card-img-top" src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300" alt=""/>
          <div className="card-body">
            <h5>Ronne Galle <br />
              <span> Project Manager </span></h5>
            <p className="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus id quod maxime placeat ” </p>
          </div>
        </div>
      </div>
      </div></Item>
          <Item><div className="owl-carousel owl-carousel1 owl-theme " className="gtco-testimonials">
      <div>
        <div className="card text-center"><img className="card-img-top" src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300" alt=""/>
          <div className="card-body">
            <h5>Ronne Galle <br />
              <span> Project Manager </span></h5>
            <p className="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus id quod maxime placeat ” </p>
          </div>
        </div>
      </div>
      </div></Item>
          <Item><div className="owl-carousel owl-carousel1 owl-theme " className="gtco-testimonials">
      <div>
        <div className="card text-center"><img className="card-img-top" src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300" alt=""/>
          <div className="card-body">
            <h5>Ronne Galle <br />
              <span> Project Manager </span></h5>
            <p className="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus id quod maxime placeat ” </p>
          </div>
        </div>
      </div>
      </div></Item>
          <Item><div className="owl-carousel owl-carousel1 owl-theme " className="gtco-testimonials">
      <div>
        <div className="card text-center"><img className="card-img-top" src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300" alt=""/>
          <div className="card-body">
            <h5>Ronne Galle <br />
              <span> Project Manager </span></h5>
            <p className="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus id quod maxime placeat ” </p>
          </div>
        </div>
      </div>
      </div></Item>
          <Item><div className="owl-carousel owl-carousel1 owl-theme " className="gtco-testimonials">
      <div>
        <div className="card text-center"><img className="card-img-top" src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300" alt=""/>
          <div className="card-body">
            <h5>Ronne Galle <br />
              <span> Project Manager </span></h5>
            <p className="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus id quod maxime placeat ” </p>
          </div>
        </div>
      </div>
      </div></Item>
          <Item><div className="owl-carousel owl-carousel1 owl-theme " className="gtco-testimonials">
      <div>
        <div className="card text-center"><img className="card-img-top" src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300" alt=""/>
          <div className="card-body">
            <h5>Ronne Galle <br />
              <span> Project Manager </span></h5>
            <p className="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus id quod maxime placeat ” </p>
          </div>
        </div>
      </div>
      </div></Item>
          <Item><div className="owl-carousel owl-carousel1 owl-theme " className="gtco-testimonials">
      <div>
        <div className="card text-center"><img className="card-img-top" src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300" alt=""/>
          <div className="card-body">
            <h5>Ronne Galle <br />
              <span> Project Manager </span></h5>
            <p className="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus id quod maxime placeat ” </p>
          </div>
        </div>
      </div>
      </div></Item>
        </Carousel>
      </div>
    </>
  );
};
export default MultiCarouselPage;