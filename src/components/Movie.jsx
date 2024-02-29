// для получения пропсов
// карточка фильмов
function Movie(props) {
  const {
    Title: title,
    Year: year,
    imdID: id,
    Type: type,
    Poster: poster,
  } = props;

  return (
    <div id={id} className="card movie">
      <div className="card-image waves-effect waves-block waves-light">
        {poster === "N/A" ? (
          <img src={`https://placehold.co/300x450?text=${title}`} alt="" />
        ) : (
          <img className="activator" src={poster} alt="" />
        )}
      </div>

      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {title}
        </span>

        <p>{year}</p>
        <span className="right">{type}</span>
      </div>
    </div>
  );
}

export { Movie };
