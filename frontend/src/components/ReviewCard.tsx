import React from 'react'
import { Review } from '../types/types'
import ListTile from './ListTile'
import StarRating from '../components/Star'

function ReviewCard({review}:{review:Review}) {
  return (
    <div className='flex border py-2 px-8 bg-white justify-between gap-5 rounded-md'>
<div>
<div className='font-bold text-gray-600'>{review.user.name}</div>
<div className=' text-gray-500 self'>{review.user_review}</div>
</div>
<StarRating className='self-center' rating={review.rating}/>
    </div>
  )
}

export default ReviewCard