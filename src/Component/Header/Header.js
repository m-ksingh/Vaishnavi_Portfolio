import React , {useState} from 'react'
import "../Css/header.css"
import resume from "../../Assets/Mayank_Kr_Singh.pdf";
import MS from "../../Assets/favicon.ico"
import { Link } from 'react-router-dom';
const Navbar = ({reset=false}) => {

  const [active, setActive] = useState('home')

  const scrollView = (id) => {
      try {
          setActive(id)
          var element = document.getElementById(id);
          element && element.scrollIntoView({ behavior: "smooth" });
      } catch (err) {
          console.error("error occur on scrollView()", err)
      }
  }
  return (
    <>
        
        <header style={{background: "#AC3939"}}>

        {/* <div>
               {!reset && <div className="flx">
                    <Nav.Link className={`${active === "home" ? 'nav-active' : ''}`} onClick={() => scrollView('home')}>Home</Nav.Link>
                    <Nav.Link className={`${active === "features" ? 'nav-active' : ''}`} onClick={() => scrollView('features')}>Features</Nav.Link>
                    <Nav.Link className={`${active === "about" ? 'nav-active' : ''}`} onClick={() => scrollView('about')}>About Us</Nav.Link>
                    <Nav.Link className={`${active === "contact" ? 'nav-active' : ''}`} onClick={() => scrollView('contact')}>Contact</Nav.Link>
                </div>
              }
            </div> */}


  <nav class="navbar navbar-expand-lg navbar-light ">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarExample01"
        aria-controls="navbarExample01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarExample01">
      <div>
               {!reset && <div className="flx">
                   
               
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{boxShadow:"5px solid"}}>
        {/* <li class="nav-item active">
            <Link class="nav-link" aria-current="page" to="#">
                <img src={MS} height="30" width="40" alt='icon'/>
            </Link>
          </li> */}
          <li class="nav-item active">
            <Link class="nav-link" aria-current="page" to="#" onClick={() => scrollView('home')}>Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="#" onClick={() => scrollView('features')}>Services</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="#" onClick={() => scrollView('Gallery')}>Gallery</Link>
          </li>
          <li class="nav-item">
            <a class="nav-link" onClick={() => scrollView('contact')}>Contact</a>
          </li>
        </ul>
               
               
               
               
                </div>
              }
            </div>
      </div>
    </div>
  </nav>

  <div
    id="intro-example"
    class="p-5 text-center bg-image"
  
  >
    <div class="mask" >
      <div class="d-flex justify-content-center p-5 h-100 ">
        <div  >
          <h1 class="mb-3 name " >  <bold class="singh">Designs on Your Hands ....</bold> </h1>
          
        

          
          <a
            class="btn  btn-lg m-2"
    
            role="button"
            rel="noreferrer noopener"
            onClick={() => scrollView('contact')}
            style={{color:"white"}}
          >Contact me</a>
        
        </div>
      </div>
    </div>
  </div>

</header>

    </>
  )
}

export default Navbar