function Article({
  title,
  author,
  date,
  dateTime,
  content,
  image,
  imageAlt,
  caption,
}) {
  return (
    <article className="post-card" id="post">
      <h2 className="post-title">{title}</h2>

      <div className="post-meta">
        <span>Por {author}</span>
        <time dateTime={dateTime}>{date}</time>
      </div>

      {content.map((paragraph, index) => (
        <p key={index} className="post-text">
          {paragraph}
        </p>
      ))}

      <figure className="post-figure">
        <img className="post-image" src={image} alt={imageAlt} />
        <figcaption className="post-caption">{caption}</figcaption>
      </figure>
    </article>
  )
}

export default Article
