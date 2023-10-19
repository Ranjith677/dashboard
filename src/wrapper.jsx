import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blank from './component/blank'
import Page404 from './component/404page'
import Forgetpassword from './component/forgetpassword'
import Register from './component/register'
import Loginpage from './component/loginpage'

import Animation from './component/animation'
import Others from './component/others'
import Border from './component/border'
import Color from './component/color'
import Button from './component/button'
import Cards from './component/cards'
import Dashboard from './component/dashboard'
import Footer from './footer'

import Topbar from './topbar'
import Chart from './component/chart'
import Table from './component/table'


const Wrapper = () => {
    return (
    <>

        {/* // <!-- Content Wrapper --> */}
        <div id="content-wrapper" class="d-flex flex-column">

            {/* <!-- Main Content --> */}
            <div id="content">

                <Topbar></Topbar>

                
                {/* <!-- Begin Page Content --> */}
                <div class="container-fluid">
                    <Routes>
                        <Route path='/' element={<Dashboard/>}/>
                        <Route path='/button' element={<Button/>}/>
                        <Route path='/cards' element={<Cards/>}/>
                        <Route path='/color' element={<Color/>}/>
                        <Route path='/border' element={<Border/>}/>
                        <Route path='/animation' element={<Animation/>}/>
                        <Route path='/others' element={<Others/>}/>
                        <Route path='/loginpage' element={<Loginpage/>}/>
                        <Route path='/register' element={<Register/>}/>
                        <Route path='/forgetpassword' element={<Forgetpassword/>}/>
                        <Route path='/page404' element={<Page404/>}/>
                        <Route path='/blank' element={<Blank/>}/>
                        <Route path='/charts' element={<Chart/>}/>
                        <Route path='/table' element={<Table/>}/>


                        
                    </Routes>
                
                   
                   
                 
                 
                   
                 
                                  
               


                   <Footer></Footer>
                </div>

                
            </div>
        </div>
    </>
    )
}

export default Wrapper