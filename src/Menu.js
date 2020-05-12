import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <ul>
      <li>
        <Link to='/'>Accueil</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/blog'>Blog</Link>
        <ul>
          <li>
            <Link to='/blog/apprendre-react'>Apprendre React</Link>
          </li>
          <li>
            <Link to='/blog/utiliser-react-router'>Utiliser React Router</Link>
          </li>
          <li>
            <Link to='/blog/heberger-son-app-sur-un-serveur'>Heberger Son App Sur Un Serveur</Link>
          </li>
        </ul>
      </li>
    </ul>
  )
}

export default Menu
