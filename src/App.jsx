import '../src/App.css'
import Blogs from './components/Blogs/Blogs.jsx'
import Bookmarks from './components/Bookmarks/Bookmarks.jsx'
import Header from './components/Header/Header.jsx'
function App() {
  return (
    <div className='container mx-auto p-10'>
    <Header></Header>
    <div className='flex mt-10'>
     <Blogs></Blogs>
     <Bookmarks></Bookmarks>
    </div>
    </div>
  )
}

export default App
