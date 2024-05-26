import { useState } from 'react'
import '../src/App.css'
import Blogs from './components/Blogs/Blogs.jsx'
import Bookmarks from './components/Bookmarks/Bookmarks.jsx'
import Header from './components/Header/Header.jsx'
function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)
  const handleAddToBookmarks = blog =>{
  const newBookmarks = [...bookmarks, blog]
   setBookmarks(newBookmarks)
  }
  const handleMarkAsRead = (time, id) =>{
    // console.log(`marking as read ${time}`);
    const newReadinTime = readingTime + time;
    setReadingTime(newReadinTime);
    const remainingBokkmarks = bookmarks.filter(bookmark=> bookmark.id !== id);
    setBookmarks(remainingBokkmarks)
  }
  return (
    <div>
    <Header></Header>
    <div className='flex gap-10 container mx-auto p-5 md:p-12 lg:p-20'>
     <Blogs handleAddToBookmarks={handleAddToBookmarks} handleMarkAsRead={handleMarkAsRead} ></Blogs>
     <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
    </div>
    </div>
  )
}

export default App
