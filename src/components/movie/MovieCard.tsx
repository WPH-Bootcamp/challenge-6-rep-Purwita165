import { getImageUrl } from "../../services/movieApi";
import type { Movie } from "../../types/movie";
import { useNavigate } from "react-router-dom";

type MovieCardProps = {
  movie: Movie;
};

export default function MovieCard({ movie }: MovieCardProps) {
  const navigate = useNavigate();

  return (
    <div className="flex-shrink-0 w-[216px]">
      {/* Poster */}
      <div
        onClick={() => navigate(`/movie/${movie.id}`)}
        className="relative aspect-[216/320] w-full overflow-hidden rounded-lg bg-zinc-800 cursor-pointer hover:scale-105 transition"
      >
        <img
          src={getImageUrl(movie.poster_path, "w342")}
          alt={movie.title}
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Title */}
      <h3 className="mt-3 text-sm font-semibold text-white line-clamp-1">
        {movie.title}
      </h3>

      {/* Rating (OUTSIDE CARD) */}
      <div className="mt-1 text-xs text-yellow-400 flex items-center gap-1">
        ⭐ {movie.vote_average.toFixed(1)}
      </div>
    </div>
  );
}


