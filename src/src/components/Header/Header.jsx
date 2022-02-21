import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      
      <div>
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="/Form">Form</Link>
        </span>
        <span>
          <Link to="/ListNews">ListNews</Link>
        </span>
      </div>
    </div>
  )
}

export default Header;