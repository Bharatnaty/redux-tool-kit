import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { PostAuthor } from './PostAuthor'
import ReactionButton from './ReactionButton'
function PostList() {
  const posts = useSelector((state) => state.posts)


  const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))
  const renderedpost = orderedPosts.map((post) => (
    <article className="post-excerpt" key={post.id}>
      {console.log(post)}
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <Link to={`/post/${post.id}`} className="button muted-button">View Post</Link>
      <PostAuthor userId={post.user}/>
      <ReactionButton post={post}/>
    </article>
  ))
  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedpost}
    </section>
  )
}

export default PostList
