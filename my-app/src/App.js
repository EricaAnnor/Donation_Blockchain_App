import React from 'react'
import {Routes,Route} from 'react-router-dom' 
import {Sidebar,Navbar} from './components'
import {Home,Profile,CreateCampaign,CampaignDetails} from './pages'


const App = () => {
  return (
    <div className='relative sm:-8 bg-[#13131a] min-h-screen flex flex-row p-4'>
      <div className='relative mr-10 sm:flex hidden'>
        <Sidebar/>  
      </div>
      <div className='flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5'>

        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>  
          <Route path ="/create-campaign" element = {<CreateCampaign/>}/>
          <Route path = "/profile" element = {<Profile/>}/>
          <Route path = "/campaign-details:id" element ={<CampaignDetails/>}/>
        </Routes>  
      </div>     

    </div>
  )
}

export default App