import React from 'react'
import { reactionAdded } from './postsSlice'
import { useDispatch } from 'react-redux'
const reactionEmoji = {
  thumbsUp: '👍',
  raisingHands: '🙌',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀',
}
function ReactionButton({post}) {
    const dispatch = useDispatch()
    const ReactionButtons = Object.entries (reactionEmoji).map(([name, emoji]) => {
        return (
        <button key={name} type='button' className='muted-button reaction-button'
        onClick={()=>{dispatch(reactionAdded({postId:post.id,reaction:name}))}}>
        {emoji} {post. reactions [name]}
        </button> 
   )
         })
   return <div>{ReactionButtons}</div>
}

export default ReactionButton
