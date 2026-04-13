function Sidebar({ posts }) {
  return (
    <aside className="sidebar-card" id="relacionados">
      <h2>Posts Relacionados</h2>

      <ul className="sidebar-list">
        {posts.map((post) => (
          <li key={post.url} className="sidebar-item">
            <a
              className="sidebar-link"
              href={post.url}
              target="_blank"
              rel="noreferrer"
            >
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
