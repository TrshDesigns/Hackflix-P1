import "./nav.css";

function Navbar() {
  return (
    <>
      <div className="nav-container navbar-glass p-3 text-white">
        <div className="d-flex flex-wrap align-items-center w-100">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none navbar-logo"
          >
            <svg className="bi me-2" width="40" height="32" role="img"></svg>
          </a>

          <div className="text-star">
            <img width="60px" src="src/media/hackflixlogo.png"></img>
          </div>

          <ul className="nav col-12 col-lg-auto ms-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" className="nav-link px-3 nav-item-glass">
                Bienvenida
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-3 nav-item-glass">
                Planes
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-3 nav-item-glass">
                FAQs
              </a>
            </li>
          </ul>

          <div className="text-end ms-auto">
            <button type="button" className="btn btn-danger btn-glass me-2">
              Login
            </button>
            <button type="button" className="btn btn-danger btn-glass ms-3">
              Sign-up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
