"use client";

import Link from "next/link";

const MoviesGrid = ({ movies, handlePin, handleDelete }) => {
  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {movies.map((movie, index) => (
        <div
          key={index}
          className="flex flex-col items-center border border-gray-300 rounded-lg p-4 bg-gray-50 w-full max-w-[300px]"
        >
          {movie.pin && <p className="text-green-600 mb-2">Pinned</p>}

          <img
            src={movie.image}
            alt={movie.name}
            className="w-full h-auto rounded-md mb-3"
          />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{movie.name}</h3>
          <p className="text-gray-600 text-center mb-3">{movie.title}</p>

          <div className="flex flex-row gap-2 justify-center">
            <Link href={`/${movie._id}`}>
              <button className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700">
                View More
              </button>
            </Link>
            <button
              onClick={() => handlePin(movie._id, movie.pin)}
              className={`px-3 py-1 ${
                movie.pin ? "bg-red-500 hover:bg-red-600" : "bg-blue-600 hover:bg-blue-700"
              } text-white rounded-md`}
            >
              {movie.pin ? "Unpin" : "Pin"}
            </button>
            <button
              onClick={() => handleDelete(movie._id)}
              className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoviesGrid;