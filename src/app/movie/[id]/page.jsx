

const movie = async ({param}) => {
  const movieid = param.id 
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieid}?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
  return (
    <div>
      
    </div>
  )
}

export default movie
