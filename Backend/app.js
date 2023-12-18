import { useState } from 'react'

import AdminScreen from './screens/AdminScreen';
import AddScreen from './screens/AddScreen';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateScreen from './screens/UpdateScreen';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>

      <Routes>
        <Route path = "/" > </Route>
        <Route path = "/admin" element = {<AdminScreen/>} > </Route>
        <Route path = "/admin/add" element = {<AddScreen/>} > </Route>
        <Route path = "/admin/update" element = {<UpdateScreen/>} > </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
