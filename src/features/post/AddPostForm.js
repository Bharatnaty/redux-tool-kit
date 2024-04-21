import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { PostAdded } from './postsSlice'

function AddPostForm() {
  const [title, settitle] = useState('')
  const [content, setcontent] = useState('')
  const [userId, setuserId] = useState('')
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users)

  const authorchanged = (e) => {
    setuserId(e.target.value)
  }

  const titlechanged = (e) => {
    settitle(e.target.value)
  }

  const contentchanged = (e) => {
    setcontent(e.target.value)
  }

  const onSavePost = () => {
    if (title && content) {
      dispatch(PostAdded(title, content, userId))
      settitle('')
      setcontent('')
    }
  }

  const cansave = Boolean(title) && Boolean(content) && Boolean(userId)

  const useroption = users.map((data) => {
    return (
      <option key={data.id} value={data.id}>
        {data.name}
      </option>
    )
  })
  return (
    <section>
      <h2>Add New Post</h2>
      <form>
        <label htmlFor="posttitle">Post Title</label>
        <input
          type="text"
          placeholder="Title"
          id="posttitle"
          name="posttitle"
          value={title}
          onChange={titlechanged}
        />
        <label htmlFor="postContent">Post Content</label>
        <textarea
          placeholder="Content"
          id="postContent"
          name="postContent"
          value={content}
          onChange={contentchanged}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" value={userId} onChange={authorchanged}>
          <option></option>
          {useroption}
        </select>
        <button type="button" onClick={onSavePost}>
          Save Post
        </button>
      </form>
    </section>
  )
}

export default AddPostForm
