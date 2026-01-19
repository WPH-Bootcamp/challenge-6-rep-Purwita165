import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getMovieDetail, getMovieVideos, getImageUrl } from "../services/movieApi";
import type { Movie } from "../types/movie";
import AppLayout from "../components/layout/AppLayout";


type MovieVideo = {
  key: string;
  site: string;
  type: string;
};

export default function MovieDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movieId = Number(id);

  const { data: movie, isLoading } = useQuery<Movie>({
    queryKey: ["movie-detail", movieId],
    queryFn: () => getMovieDetail(movieId),
    enabled: !!movieId,
  });

  const { data: videos } = useQuery<MovieVideo[]>({
    queryKey: ["movie-videos", movieId],
    queryFn: () => getMovieVideos(movieId),
    enabled: !!movieId,
  });

  if (isLoading) {
    return <div className="text-white p-12">Loading...</div>;
  }

  if (!movie) return null;

  const imageUrl = getImageUrl(movie.backdrop_path, "w1280");

  const trailer = videos?.find(
    (v) => v.type === "Trailer" && v.site === "YouTube"
  );

  return (
    <AppLayout>
      <section className="relative h-[70vh] w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={movie.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-end pb-12">
          <div className="max-w-xl">
            <button
              onClick={() => navigate(-1)}
              className="mb-4 text-white/80 hover:text-white"
            >
              ← Back
            </button>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {movie.title}
            </h1>

            <p className="text-white/80 mb-6">{movie.overview}</p>

            {trailer && (
              <a
                href={`https://www.youtube.com/watch?v=${trailer.key}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-md bg-white text-black font-semibold"
              >
                ▶ Watch Trailer
              </a>
            )}
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
