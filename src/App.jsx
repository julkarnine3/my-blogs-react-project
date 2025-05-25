
import { useState } from 'react'
import './App.css'

import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [bookMarked, setBookMarked] = useState([]);
  const [reading_time, setTime] = useState(0);

  const handleBookMark = (blog) => {

    setBookMarked([...bookMarked, blog]);

  }
  const handleMarkAsRead = (time, id) => {
    const newTime = reading_time + time;
    setTime(newTime);
    handleRemoveBookMark(id);
  }
  const handleRemoveBookMark = (id) => {
    const remainingBookMark = bookMarked.filter(mark => id !== mark.id);
    setBookMarked(remainingBookMark);
  }




  // console.log(bookMarked);

  return (
    <>
      <Navbar></Navbar>

      <div className="main-container  flex text-center gap-3">
        <div className="left-container w-[70%] ">
          <Blogs handleBookMark={handleBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        </div>
        <div className="right-container w-[30%] ">
          <h1>Reading Time: {reading_time}</h1>
          <h1>Bookmark Count: {bookMarked.length}</h1>
          <div className='bookMark mt-3 bg-blue-200 rounded-xl p-5'>
            <h1 className='text-2xl font-bold border-b-2 pb-2'>BookMarks:</h1>
            <div id='bookmark-container'>
              {
                bookMarked.map(bookmark => <p className='border rounded-xl m-3 bg-amber-300'>{bookmark.title}</p>)
              }
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
