const NavbarContent = () => {
  return (
    <ul>
      <li>
        <a href="#hero" aria-current="page">
          Home
        </a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#services">Services</a>
      </li>
      <li>
        <a href="#gallery">Gallery</a>
      </li>
    </ul>
  );
};

export default function Navbar() {
  function toggleMenu() {
    const menu = document.getElementById("smnavbarcontent");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }

  return (
    <nav>
      <div id="smnavbarcontent">
        <NavbarContent />
      </div>

      <a href="https://flowbite.com/" id="logo">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
        <p style={{ whiteSpace: "nowrap" }}>Group 22</p>
      </a>
      <div id="mdnavbarcontent" className="sm:hidden">
        <NavbarContent />
      </div>
      <div>
        <p>Login</p>
      </div>
      <div className="md:hidden" id="menu">
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          aria-controls="navbar-sticky"
          aria-expanded="false"
          onClick={toggleMenu}
        >
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
