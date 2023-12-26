import { useState } from 'react'

import AdminScreen from './screens/AdminScreen';
import AddScreen from './screens/AddScreen';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateScreen from './screens/UpdateScreen';
import UserScreen from './screens/UserScreen';


function App() {
  

  return (
    <BrowserRouter>

      <Routes>
        
        <Route path = "/" element = {<AdminScreen/>} > </Route>
        <Route path = "/admin/add" element = {<AddScreen/>} > </Route>
        <Route path = "/admin/update" element = {<UpdateScreen/>} > </Route>
        <Route path = "/user" element = {<UserScreen/>} > </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
