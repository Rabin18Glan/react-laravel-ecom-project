import { FaStar, FaStarHalfAlt} from "react-icons/fa";

function StarRating({ rating ,className}:{rating:number,className:string}) {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
 
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar color="orange" size={10} key={i} />);
      } else if (hasHalfStar && i === fullStars) {
        stars.push(<FaStarHalfAlt color="orange" size={10} key={i} />);
      } else if(rating==0){
        stars.pop();
        stars.push(<p className=' font-semibold text-gray-500 text-sm'>No Ratings</p>)
      }
      else {
        stars.push(<FaStar size={10} key={i} style={{opacity:0.4}}/>);
      }
    }
  
    return (
      <div  className={`flex ${className}`} >
        {stars}
      </div>
    );
  }
  
  export default StarRating;
  