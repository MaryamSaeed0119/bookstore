import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AdminScreen from './screens/AdminScreen'
import AddScreen from './screens/AddScreen'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
            <li>
              <Link to="/add">Add</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/admin">
            <AdminScreen />
          </Route>
          <Route path="/add">
            <AddScreen />
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
