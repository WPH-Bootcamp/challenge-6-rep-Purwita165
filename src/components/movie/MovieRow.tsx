import { useQuery } from "@tanstack/react-query";
import MovieCard from "./MovieCard";
import type { Movie } from "../../types/movie";

type MovieResponse = {
  results: Movie[];
};

type Props = {
  page: number;
  queryKeyName: string;
  queryFn: (page: number) => Promise<MovieResponse>;
};

export default function MovieRow({ page, queryKeyName, queryFn }: Props) {
  const { data, isLoading, isError, isFetching } = useQuery<MovieResponse>({
    queryKey: [queryKeyName, page],
    queryFn: () => queryFn(page),
    placeholderData: (prev) => prev, // keep previous page while loading next
  });

  // First load (no cache yet)
  if (isLoading && !data) {
    return <p className="text-white">Loading movies...</p>;
  }

  // Error state
  if (isError || !data) {
    return <p className="text-white">Failed to load movies</p>;
  }

  // Empty state (just in case API returns empty)
  if (data.results.length === 0) {
    return <p className="text-white">No movies found</p>;
  }

  return (
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
      {data.results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}

      {/* Subtle loading indicator when fetching next page */}
      {isFetching && (
        <div className="col-span-full text-center text-white/60 mt-4">
          Loading more movies...
        </div>
      )}
    </div>
  );
}
