import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa';
import { useAppSelector } from '../../store/hooks';
import axios from 'axios';
import { storeReviewsApi } from '../../api/api';
import MyButton from '../Button/MyButton/MyButton';

function RateProduct({rated,setRated}:{rated:boolean,setRated:Function}) {
    const isLoggedIn = useAppSelector(state => state.auth.status);
    const currentUserId = useAppSelector(state => state.auth.userData?.user_id);
    const currentSelected = useAppSelector(state=>state.products.selectedProduct);
    const [rating, setRating] = useState(1)
    const [reviewMessage, setReviewMessage] = useState("")
    const ratings = [1, 2, 3, 4, 5];
    const token = useAppSelector(state => state.auth.token);
    
    const handleReview = async () => {
setRated(true);
        const review = {
          userId: currentUserId,
          productId: currentSelected?.product_id,
          rating: rating,
          userReviewText: reviewMessage,
    
        }

    
        console.log(review);
        const response = await axios.post(storeReviewsApi, review, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
          }
        }
        )
        console.log(response.data)
        setRated(false);
        setRating(1);
        setReviewMessage("");
    
      };
  return (
    isLoggedIn && <div className='flex justify-between items-center '>
    <div className="flex gap-5">
      {ratings.map((rate, index) => {
        return <FaStar key={index} onClick={() => setRating(rate)} color={rating >= rate ? 'orange' : ''} size={30} />
      })}



    </div>
    <textarea
      onChange={(e) => setReviewMessage(e.target.value)}
      value={reviewMessage}
      name="mes"
      id="mes"
      placeholder="Message"
      className="w-1/2 mt-2 py-3 px-3 rounded-3xl bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
    />
    <MyButton onClick={handleReview} className={' flex items-center bg-orange-500 text-orange-500'}>{rated?'Rating':'Review Now'}<FaStar /></MyButton>

  </div>
  )
}

export default RateProduct