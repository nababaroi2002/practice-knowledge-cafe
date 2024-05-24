
import PropTypes from 'prop-types'
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog, handleAddToBookmarks, handleMarkAsRead}) => {
    const{title, cover, author_img, author, posted_date, reading_time, hashtags} = blog
    return (
        <div className="flex flex-col gap-5 ">
            <img className="mb-3 rounded-xl" src={cover} alt="" />
            <div className="flex justify-between items-center">
                <div className="flex gap-5">
                    <img src={author_img} alt="" />
                    <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold capitalize">{author}</h3>
                    <p className="font-semibold text-gray-500">{posted_date}</p>
                    </div>
                </div>
                <div className="flex gap-5 items-center">
                    <h4 className="text-lg font-semibold text-gray-600">{reading_time} minutes</h4>
                    <button onClick={()=>handleAddToBookmarks(blog)} className='text-gray-500 hover:text-black focus:text-black'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-3xl capitalize font-bold">{title}</h2>
            <p className="text-xl font-bold text-gray-600 flex gap-5">
                {hashtags.map((hash, idx) => <span className='cursor-pointer hover:text-violet-600' key={idx}><a href=""></a>#{hash}</span>)}
            </p>
            <button onClick={()=>handleMarkAsRead(reading_time)} className="underline text-xl font-semibold text-[#6047EC] text-left" >Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.object
}

export default Blog;