import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { PostUpdate } from './postsSlice'

function EditPostForm({ match }) {
  const { postId } = match.params
  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  )

  const [title, settitle] = useState(post.title)
  const [content, setcontent] = useState(post.content)

  const dispatch = useDispatch()
  const history = useHistory()
  const titlechanged = (e) => {
    settitle(e.target.value)
  }

  const contentchanged = (e) => {
    setcontent(e.target.value)
  }

  const onSavePost = () => {
    if (title && content) {
      dispatch(PostUpdate({ id: postId, title, content }))
      history.push(`/post/${postId}`)
      settitle('')
      setcontent('')
    }
  }
  return (
    <section>
      <h2>Edit Post</h2>
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
        <button type="button" onClick={onSavePost}>
          Save Post
        </button>
      </form>
    </section>
  )
}

export default EditPostForm
