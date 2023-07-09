import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import axios from "axios"
export default function Sidebar() {
  const [cats,setCats]=useState([])
  useEffect(()=>{
const getCats=async ()=>{
  const res=await axios.get("/categories")
  setCats(res.data)
}
getCats()
  },[])
  return (
    <div className="sidebar">
      <div className="sidebarItems">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://plus.unsplash.com/premium_photo-1687202582480-025b6d54f93d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=900&q=60"
          alt=""
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, nihil!{" "}
        </p>
      </div>
      <div className="sidebarItems">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c,qi)=>(
            <Link key={qi} className="link" to={`/?cat=${c.name}`}>
             <li  className="sidebarListItem">{c.name}</li>
             </Link>
          ))}
         
        
        </ul>
      </div>
      <div className="sidebarItems">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcons fa-brands fa-square-facebook"></i>
          <i className="sidebarIcons fa-brands fa-square-twitter"></i>
          <i className="sidebarIcons fa-brands fa-square-pinterest"></i>
          <i className="sidebarIcons fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
}
