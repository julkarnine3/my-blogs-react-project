import React from 'react';
import { FaBookmark } from "react-icons/fa";


const Blog = ({ blog, handleBookMark,handleMarkAsRead }) => {
    const { id, cover, title, author_img, author, posted_date, reading_time, hashtags } = blog;
    return (
        <div>
            <div className="card shadow-sm overflow-hidden">

                <img className='img rounded-3xl p-8 object-cover'
                    src={cover}
                    alt="Shoes" />

                <div className="card-body">
                    <div>
                        <div className='flex gap-2'>
                            <img className='w-16 rounded-[50%]' src={author_img} alt="" />
                            <p className='name font-bold text-4xl'> Name: {author}</p>
                            <button className='bookmark-btn cursor-pointer' onClick={()=>handleBookMark(blog)}><FaBookmark size={25} /></button>
                        </div>

                        <p>Date: {posted_date}</p>
                        <p>Reading Time: {reading_time}</p>
                    </div>
                    <h2 className="card-title text-center">{title}</h2>
                    <div className='flex gap-2'>
                        {
                            hashtags.map((hash, index) => <p key={index} className='border rounded-xl bg-blue-200'>{hash}</p>)
                        }
                    </div>
                    <div className="card-actions justify-end">
                        <button onClick={()=>handleMarkAsRead(blog.reading_time,blog.id)} className="btn btn-primary">Mark as read</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;