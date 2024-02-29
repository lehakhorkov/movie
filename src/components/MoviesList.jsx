//для получения пропсов
import { Movie } from "./Movie";
function MoviesList(props) {
  const { movies = [] } = props;
  return (
    <div className="movies">
      {movies.length ? (
        movies.map((movie) => <Movie key={Movie.id} {...movie} />)
      ) : (
        // Оператор spread - это конструкция в JS, которая позволяет передавать элементы массива или свойства обьекта в виде отдельных аргументов.
        <h5>Nothing found</h5>
      )}
    </div>
  );
}
export { MoviesList };
