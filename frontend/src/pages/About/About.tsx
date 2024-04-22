import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import MyButton from '../../components/Button/MyButton/MyButton';

function About() {
    const navigate = useNavigate();

    const handleShop = ()=>{
        navigate('/home');
    }

    const handleKnowMore = ()=>{
        navigate('/about')
    }


  return (
    <Container>
<div className="hero">
<div className="name">
    <img src="/images/logo.png" alt="" />

</div>
<div className='hidden-container'>
<div className="tag">
    For Original, Organic and Fresh
</div>
<div className="btns">
    <MyButton onClick={handleKnowMore} className=' bg-customBlue'>Know More</MyButton>
    <MyButton onClick={handleShop} className='bg-orange-500'>Shop Now</MyButton>
</div>
</div>
</div>

<div className="hero-image"></div>

    </Container>
  )
}

export default About


const Container = styled.div`
display: flex;

height: 601px;
padding: 60px 95px;
justify-content: space-around;
align-items: center;
gap: 137px;
background: #FFF;
.hero{
    width: 412.781px;
height: auto;
display: flex;
flex-direction: column;
gap: 40px;

}
.hero-image{
    width: 580.196px;
height: 369.864px;
flex-shrink: 0;
overflow: hidden;
background:url('/images/hero-logo.jpg') center/cover no-repeat;
border-radius:25px;
box-shadow: 0 4px 8px rgba(9, 5, 0, 0.3)

}

.name{
    width: 365.5px;
height: 175.917px;
flex-shrink: 0;
}

.btns{
    display: flex;
    gap:20px
}
.shop{
    color: white;
    background-color: #FF8A00;
}
.tag{
    color:black;
font-size: 19.634px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
.hidden-container{
    display: flex;
    flex-direction: column;
    gap:20px;
}

`;