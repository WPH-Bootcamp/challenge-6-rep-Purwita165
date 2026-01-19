import { useState } from "react";
import MovieRow from "./MovieRow";
import {
  getTrendingMovies,
  getNowPlayingMovies,
} from "../../services/movieApi";

type Props = {
  title: string;
  type: "trending" | "new";
};

export default function MovieSection({ title, type }: Props) {
  const [page, setPage] = useState(1);

  const queryConfig =
    type === "trending"
      ? {
          key: "trending-movies",
          fn: getTrendingMovies,
        }
      : {
          key: "new-release-movies",
          fn: getNowPlayingMovies,
        };

  return (
    <section className="px-6 mt-10">
      <h2 className="text-xl font-bold text-white mb-4">{title}</h2>

      <MovieRow
        page={page}
        queryKeyName={queryConfig.key}
        queryFn={queryConfig.fn}
      />

      <div className="flex justify-center mt-6">
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="px-6 py-2 rounded-md bg-white text-black font-semibold hover:bg-gray-200"
        >
          Load More
        </button>
      </div>
    </section>
  );
}
