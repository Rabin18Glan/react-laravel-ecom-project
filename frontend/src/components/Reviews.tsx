import React, { useEffect, useState } from 'react'
import ListTile from './ListTile'
import { useAppSelector } from '../store/hooks';
import axios from 'axios';
import { Review, UserReview } from '../types/types';
import ReviewCard from './ReviewCard';

function Reviews({rated}:{rated:boolean}) {
    const [reviews, setReviews] = useState<Review[]>([]);
    const token = useAppSelector(state => state.auth.token);
    const currentSelected = useAppSelector(state=>state.products.selectedProduct);
   
    useEffect(()=>{
        const responseData = async () => {
            const response = await axios.get('http://127.0.0.1:8000/api/reviews/get-reviews/'+currentSelected?.product_id,
              {
                headers: {
      
                  'Authorization': `Bearer ${token}`,
                  'Accept': 'application/json'
      
                }
              }
            )
      
            setReviews(response.data.reviews);
      
          }
          responseData();
    },[currentSelected,rated])
  return (
    reviews ? reviews.map((review) => {
        return <ReviewCard review={review} />;
      }) : <div>No reviews</div>
  )
}

export default Reviews