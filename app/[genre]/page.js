//telling next to only build these three genres, otherwise it would have infinite possibilities

import MovieScroll from "../shared/MovieScroll"

export function generateStaticParams() {
  return [
    { genre: 'drama'},
    { genre: 'comedy'},
    { genre: 'horror'},
  ]
}

export function generateMetaData({ params: {genre} }) {
  return {
    title: `My ${genre} Movie Database`,
    description: `Here are some of my favorite ${genre} movies.`,
  }
}

// dynamic routing

export default function Page({ params: { genre } }) {
  return(
    <main className="p-8">
      <h1 className="capitalize text-2xl text-orange-400 font-semibold">
        {genre} Movies
      </h1>
      <MovieScroll genre={genre} number={12}/>
    </main>
  )
}