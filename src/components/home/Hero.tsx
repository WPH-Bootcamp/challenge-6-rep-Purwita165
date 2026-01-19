import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import {
  getTrendingMovies,
  getMovieVideos,
  getImageUrl,
} from '../../services/movieApi';
import type { Movie } from '../../types/movie';

type MovieResponse = {
  results: Movie[];
};

type MovieVideo = {
  key: string;
  site: string;
  type: string;
};

export default function Hero() {
  const navigate = useNavigate();

  // ambil trending page 1 saja
  const { data } = useQuery<MovieResponse>({
    queryKey: ['hero-movie'],
    queryFn: () => getTrendingMovies(1),
  });

  const movie = data?.results?.[0];
  const movieId = movie?.id;

  const { data: videos } = useQuery<MovieVideo[]>({
    queryKey: ['movie-videos', movieId],
    queryFn: () => getMovieVideos(movieId!),
    enabled: !!movieId,
  });

  if (!movie) return null;

  const imageUrl = getImageUrl(movie.backdrop_path, 'w1280');

  const trailer = videos?.find(
    (v) => v.type === 'Trailer' && v.site === 'YouTube'
  );

  return (
    <section className='relative h-[70vh] md:h-[80vh] w-full overflow-hidden'>
      <img
        src={imageUrl}
        alt={movie.title}
        className='absolute inset-0 w-full h-full object-cover'
      />

      <div className='absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent' />

      <div className='relative z-10 max-w-7xl mx-auto px-6 h-full flex items-end pb-12'>
        <div className='max-w-xl'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>{movie.title}</h1>

          <p className='text-white/80 mb-6 line-clamp-3'>{movie.overview}</p>

          <div className='flex gap-4'>
            {trailer && (
              <a
                href={`https://www.youtube.com/watch?v=${trailer.key}`}
                target='_blank'
                rel='noopener noreferrer'
                className='px-6 py-3 rounded-md bg-white text-black font-semibold'
              >
                ▶ Watch Trailer
              </a>
            )}

            <button
              onClick={() => navigate(`/movie/${movie.id}`)}
              className='px-6 py-3 rounded-md border border-white text-white font-semibold hover:bg-white hover:text-black'
            >
              See Detail
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
