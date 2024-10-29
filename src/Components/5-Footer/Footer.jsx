import  './Footer.css'

export default function Footer() {
  return <footer>
    <div className="row d-flex justify-content-between text-center">
      <div className="col-lg-6">
        <div className="links">
            <ul className="links d-flex offset-1  ">
              <li><a href="#hero">About</a></li>
              {/* <li><a href="">Articles</a></li> */}
              <li><a href="#main">Projects</a></li>
              <li><a href="#contactUs">Contact Us</a></li>
              {/* <li><a href="">Uses</a></li> */}
            </ul>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="content ">
          <p>© 2024 Spencer Sharp. All rights reserved.</p>
        </div>
      </div>
    </div>
    
    
  </footer>
}
