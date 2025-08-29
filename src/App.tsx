/* Global Imports */
import { BrowserRouter, Link, Route, Routes } from 'react-router'

/* Application Level Imports */
import * as UI from '@/components';
import * as Views from '@/views';


function App() {

  return (
    <>

      <BrowserRouter>

        <UI.AppBar />
        <UI.Navigation />

        <Routes>
          <Route path="/" element={ <Views.Home/>} />
          <Route path="/flights" element={ <Views.Flights/> } />
          <Route path="/notifications" element={ <Views.Notifications/> } />
          <Route path="/dashboard" element={ <Views.Dashboard/> } />
        </Routes>
        
      </BrowserRouter>
      
    </>
  )
}

export default App
