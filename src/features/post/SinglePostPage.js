import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { PostAuthor } from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionButton from './ReactionButton'


function SinglePostPage({ match }) {
  const { postId } = match.params
  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  )

  console.log(post);
  if (!post) {
    return (
      <section>
        <h2>Post Not Found</h2>
      </section>
    )
  }
  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
       <p> <PostAuthor userId={post.user}/></p>
       <p> <TimeAgo timestamp={post.date}/></p>
        <Link to={`/editPost/${post.id}`} className="button ">Edit Post</Link>
        <ReactionButton post={post}/>
      </article>
    </section>
  )
}

export default SinglePostPage
