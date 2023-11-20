function Header() {
  return (
    <nav className="#b71c1c red darken-4">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo right">
          Netflix
        </a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <a href="#">Github</a>
          </li>
          <li>
            <a href="#">Поиск</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
