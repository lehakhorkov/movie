function Header() {
  return (
    <nav className="blue accent-2">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          Поиск Кино
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">JavaScript</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
