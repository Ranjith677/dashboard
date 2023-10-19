import React from 'react'
import './vendor/fontawesome-free/css/all.min.css'
import rocket from './img/undraw_rocket.svg'
import './vendor/bootstrap/js/bootstrap.min.js'
import { Link } from "react-router-dom"


const Sidebar = () => {
  return (
    <>
{/* <!-- Sidebar --> */}
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        {/* <!-- Sidebar - Brand --> */}
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink"></i>
                </div>
                <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>
            {/* <!-- Divider --> */}
            <hr class="sidebar-divider my-0"></hr>

            {/* <!-- Nav Item - Dashboard --> */}
            <li class="nav-item active">
                <a class="nav-link" >
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    
                        <Link to='/'class="text-white"><span >Dashboard</span></Link></a>
            </li>
            {/* <!-- Divider --> */}
            <hr class="sidebar-divider"></hr>

            {/* <!-- Heading --> */}
            <div class="sidebar-heading">
                Interface
            </div>
            
            {/* <!-- Nav Item - Pages Collapse Menu --> */}
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fas fa-fw fa-cog"></i>
                    <span>Components</span>
                </a>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Custom Components:</h6>
                        <a class="collapse-item" ><Link to="/button">Buttons</Link></a>
                        <a class="collapse-item" ><Link to="/cards">Cards</Link></a>
                    </div>
                </div>
            </li>
            
            {/* <!-- Nav Item - Utilities Collapse Menu --> */}
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i class="fas fa-fw fa-wrench"></i>
                    <span>Utilities</span>
                </a>
                <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Custom Utilities:</h6>
                        <a class="collapse-item" ><Link to="/color">Colors</Link></a>
                        <a class="collapse-item" > <Link to="/border">Borders</Link></a>
                        <a class="collapse-item" ><Link to="/animation">Animations</Link></a>
                        <a class="collapse-item" ><Link to="/others">Other</Link></a>
                    </div>
                </div>
            </li>
            {/* <!-- Divider --> */}
            <hr class="sidebar-divider"></hr>

            {/* <!-- Heading --> */}
            <div class="sidebar-heading">
                Addons
            </div>
            {/* <!-- Nav Item - Pages Collapse Menu --> */}
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i class="fas fa-fw fa-folder"></i>
                    <span>Pages</span>
                </a>
                <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Login Screens:</h6>
                        <a class="collapse-item" ><Link to='/loginpage'>Login</Link></a>
                        <a class="collapse-item" ><Link to='/register'>Register</Link></a>
                        <a class="collapse-item" ><Link to='/forgetpassword'>Forgot Password</Link></a>
                        <div class="collapse-divider"></div>
                        <h6 class="collapse-header">Other Pages:</h6>
                        <a class="collapse-item" ><Link to ='/page404'>404 Page</Link></a>
                        <a class="collapse-item" ><Link to='/blank'>Blank Page</Link></a>
                    </div>
                </div>
            </li>
            {/* <!-- content --> */}
            {/* <!-- Nav Item - Charts --> */}
            <li class="nav-item">
                <a class="nav-link" href="charts.html">
                    <i class="fas fa-fw fa-chart-area"></i>
                    <Link to='/charts' class="text-white"> <span>Charts</span></Link></a>
            </li>
            
            {/* <!-- Nav Item - Tables --> */}
            <li class="nav-item">
                <a class="nav-link">
                    <i class="fas fa-fw fa-table"></i>
                    <Link to='/table' class="text-white"> <span>Tables</span></Link>
                   </a>
            </li>

            {/* <!-- Divider --> */}
            <hr class="sidebar-divider d-none d-md-block"></hr>
            {/* <!-- Sidebar Toggler (Sidebar) --> */}
            <div class="text-center d-none d-md-inline">
                <button class="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

            {/* <!-- Sidebar Message --> */}
            <div class="sidebar-card d-none d-lg-flex">
                <img class="sidebar-card-illustration mb-2" src={rocket} alt="..."/>
                <p class="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                <a class="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
            </div>







        </ul>

    </>
  )
}

export default Sidebar