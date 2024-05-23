import '../src/App.css'
import Blogs from './components/Blogs/Blogs.jsx'
import Bookmarks from './components/Bookmarks/Bookmarks.jsx'
import Header from './components/Header/Header.jsx'
function App() {
  return (
    <div>
    <Header></Header>
    <div className='flex gap-10 container mx-auto m-5 md:m-12 lg:m-20'>
     <Blogs></Blogs>
     <Bookmarks></Bookmarks>
    </div>
    </div>
  )
}

export default App
