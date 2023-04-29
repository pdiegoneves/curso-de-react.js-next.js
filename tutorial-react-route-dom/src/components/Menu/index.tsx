import { Link } from 'react-router-dom'

import './style.css'

export const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to="/" >Home</Link>
        </li>
        <li>
          <Link to="/about" state={'This is state from ABOUT'}>about</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/posts/10">Post 10</Link>
        </li>
        <li>
          <Link to="/redirect">Redirect</Link>
        </li>
      </ul>
    </nav>
  )
}
