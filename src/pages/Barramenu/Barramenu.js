import React from 'react'
import { Link } from 'react-router-dom'

function Barramenu() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link class="navbar-brand" href="#" to='/Doris'>Dori's</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" href="#" to='/Doris'>Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="#" to='/Menu-Doris'>Menu</Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Ordenes</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Administracion
                </a>
                <ul class="dropdown-menu">
                  <li><Link class="dropdown-item" href="#" to='/agendadecomidas'>AdmnComidas</Link></li>
                  <li><Link class="dropdown-item" href="#" to='/agendadepersonas'>AdmnPersonas</Link></li>
                  <li><Link class="dropdown-item" href="#">Something else here</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Barramenu