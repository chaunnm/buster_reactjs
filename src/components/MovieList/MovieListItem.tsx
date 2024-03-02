import { MovieListItemProps } from "../../interfaces";

const MovieListItem: React.FC<MovieListItemProps> = ({ ...props }) => {
  return (
    <div className='movie-list-item w-64 '>
      <div className='wrapped-img h-36 w-64 relative  group overflow-hidden '>
        <img
          src={props.poster}
          alt='movie-img'
          className='w-full h-full group-hover:scale-105 transition-all duration-500 ease-in-out '
        />
        <a href={props.hrefPath}>
          <div
            className='play-btn-outer hidden absolute rounded-full w-16 h-16 top-1/2 left-1/2 border-2 
          border-[--main-color] bg-gray-400 bg-opacity-50 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out
           hover:bg-gray-400 hover:bg-opacity-80 hover:w-20 hover:h-20
           group-hover:block '
          >
            <div className='play-btn'></div>
          </div>
        </a>
      </div>
      <div className='item-title '>{props.movieName}</div>
      <div className='details flex items-center text-[#707070] '>
        {props.releaseYear} - {props.rating}
        <img
          src='https://www.svgrepo.com/show/13695/star.svg'
          alt=''
          className='w-4 h-4 pl-1 
        '
        />
      </div>
    </div>
  );
};

export default MovieListItem;
