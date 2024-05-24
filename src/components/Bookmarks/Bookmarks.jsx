
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({bookmarks, readingTime}) => {
  return (
    <div className='flex flex-col gap-10 w-1/3'>
      <div>
        <h3 className='text-xl text-indigo-600 capitalize font-bold'>reading time: {readingTime} minutes</h3>
      </div>
      <div className='flex flex-col gap-5 p-10 bg-[#E8E2E2] rounded-xl '>
      <h3 className='text-xl font-bold'>Bookmarked blogs: {bookmarks.length}</h3>
      {
        bookmarks.map(bookmark => <Bookmark key={bookmark} bookmark={bookmark}></Bookmark>)
      }
      </div>
    </div>
   
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.func
}

export default Bookmarks