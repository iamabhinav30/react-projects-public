
import { Link } from "react-router-dom";
import './App.css'
import { AppRoutes } from './AppRoutes'

function App() {

  return (
    <>

      <nav style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>
        <Link to="/" style={{ marginRight: 10 }}>
          Home
        </Link>
        <Link to="/contact-form">Sign Up</Link>
      </nav>

      <AppRoutes />

    </>
  )
}

export default App
