import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog/Blog";

const Blogs = () => {
    const [blogs,setBlogs] = useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="flex flex-col gap-10 w-2/3">
            <h1 className='text-3xl capitalize font-bold'>Blogs</h1>
            <div className="flex flex-col gap-16">
                {blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)}
            </div>
        </div>
    );
};

export default Blogs;