/* Global Imports */
import { BrowserRouter, Route, Routes } from 'react-router'

/* Application Level Imports */
// import * as UI from '@/components';
// import * as Views from '@/views';


function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={ 'HOME '} />
          <Route path="/flights" element={'FLIGHTS'} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
