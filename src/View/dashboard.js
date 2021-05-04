import React from "react";
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    //form
    <section className="#">
    <div class="container">
        <div class="px-2 mt-5 border-dashboard">
          <div class="row">
            <div class="col-md-2"><img class="mt-3 logo-dash" src={'./logo.png'}></img></div>
            <div class="mt-3 col-md-4 h4 text-primary">
              <b><i class="mt-5 fas fa-users"></i> Dorm : V-Condo | <i class="fas fa-home"></i> Room : 250</b>
              <br></br>
              <br></br>
            </div>
          </div>
        <hr></hr>
        <div class="row">          
          <div class="mt-4 col-md-2 px-5 col-md-3">
            <Link to="/dashboard">
              <button class="btn btn-lg px-5 py-1 btn-primary">Main Dashboard</button>
            </Link>
            <br></br>
            <Link to="#">            
              <button class="mt-4 btn btn-lg px-5 py-3 btn-warning">Management</button>
            </Link>
            <br></br>
            <Link to="#">
              <button class="mt-4 btn btn-lg px-5 btn-primary">Manage Post</button>
            </Link>
            <br></br>
            <Link to="#">
              <button class="mt-4 btn btn-lg px-5 btn-warning">Manage Contact</button>            
            </Link>
            <br></br>
            <Link to="/">
              <br></br>
              <br></br>
              <button class="mt-5 btn btn-lg px-5 py-2 btn-danger"><i class="px-5 fas fa-sign-out-alt"></i>Logout</button>
            </Link>
          </div>
          <div class="mt-4 col pr-5">
            อันนี้เป็นส่วนของหน้าตาม Mock up 
          </div>      
        </div>
        <br></br>
        <hr></hr>
        <center><b>Design by : System Manage Dorm Team</b></center>
      </div>
    </div>
    </section>
  );
};
export default Index;
