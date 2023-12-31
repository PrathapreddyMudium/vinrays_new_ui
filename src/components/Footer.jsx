import React from 'react'

const Footer = () => {
  return (
    <footer class="footer bg-dark py-3">
      <div class="container grid grid-3">
        <div>
          <h1>Vinrays</h1>
          <p>Copyright &copy; 2023</p>
        </div>
        <nav>
          <ul>
            <li><a href="/">Company</a></li>
            <li><a href="/software">Services</a></li>
            <li><a href="/construction">Industries</a></li>
          </ul>
        </nav>
        <div class="social"> 
          <a href="/" ><i class="fab fa-github fa-2x"></i></a>
          <a href="/"><i class="fab fa-facebook fa-2x"></i></a>
          <a href="/"><i class="fab fa-instagram fa-2x"></i></a>
          <a href="/"><i class="fab fa-twitter fa-2x"></i></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer