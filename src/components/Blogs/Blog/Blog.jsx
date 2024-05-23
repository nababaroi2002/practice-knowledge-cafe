
import PropTypes from 'prop-types'
const Blog = ({blog}) => {
    const{title, cover, author_img, author, posted_date, reading_time, hashtags} = blog
    return (
        <div className="flex flex-col gap-5">
            <img className="mb-3 rounded-xl" src={cover} alt="" />
            <div className="flex justify-between">
                <div className="flex gap-5">
                    <img src={author_img} alt="" />
                    <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold capitalize">{author}</h3>
                    <p className="font-semibold text-gray-500">{posted_date}</p>
                    </div>
                </div>
                <div className="flex gap-5">
                    <h4 className="text-lg font-semibold text-gray-600">{reading_time}</h4>
                </div>
            </div>
            <h2 className="text-3xl capitalize font-bold">{title}</h2>
            <p className="text-xl font-bold text-gray-600 flex gap-5">
                {hashtags.map((hash, idx) => <span className='cursor-pointer hover:text-violet-600' key={idx}><a href=""></a>#{hash}</span>)}
            </p>
            <a className="underline text-xl font-semibold text-[#6047EC]" href="#">Mark as read</a>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;