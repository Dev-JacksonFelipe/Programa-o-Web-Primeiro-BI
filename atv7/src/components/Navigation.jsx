function Navigation({ links }) {
  return (
    <nav aria-label="Navegacao principal">
      <ul className="navigation-list">
        {links.map((link) => (
          <li key={link.href}>
            <a className="navigation-link" href={link.href}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
