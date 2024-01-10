const NavbarContent = ({ toggleMenu }) => {
  const data = [
    {
      title: "Home",
      href: "#hero",
    },
    {
      title: "About",
      href: "#about",
    },
    {
      title: "Services",
      href: "#services",
    },
    {
      title: "Gallery",
      href: "#gallery",
    },
    {
      title: "Testimonials",
      href: "#testimonials",
    },
    {
      title: "Contact",
      href: "#contact",
    },
  ];

  function gotoSection(item) {
    const section = document.querySelector(item.href);
    section.scrollIntoView({ behavior: "smooth" });
    if (window.innerWidth < 768) toggleMenu();
  }

  return (
    <ul>
      {data.map((item, i) => (
        <a onClick={() => gotoSection(item)} key={i}>
          <li>{item.title}</li>
        </a>
      ))}
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
      <div id="nav_content">
        <a href="#hero" id="logo">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <p style={{ whiteSpace: "nowrap" }}>Group 25</p>
        </a>
        <div id="mdnavbarcontent" className="sm:hidden">
          <NavbarContent toggleMenu={toggleMenu} />
        </div>
        <div className="sm:hidden">
          <button className="button3">Login</button>
        </div>

        {/* small viewport */}
        <div className="md:hidden" id="menu">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            title="Menu button"
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
      </div>

      <div id="smnavbarcontent">
        <NavbarContent toggleMenu={toggleMenu} />
        <div>
          <button className="button3">Login</button>
        </div>
      </div>
    </nav>
  );
}
