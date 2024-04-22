import React from 'react'
import MyButton from '../Button/MyButton/MyButton'
import { Snackbar } from '@mui/material'

function SnackbarPopup({showSnackbar,handleCloseSnackbar}:any) {
  return (
    <Snackbar open={showSnackbar} onClose={handleCloseSnackbar} 
    message={
    <>
        <form className='flex flex-col gap-2 w-4/5 mb-20'>
             <textarea
             placeholder='message'
            name='message'
           
          />
        <div >  <MyButton btnColor='orange-500'>Send</MyButton>
          <MyButton className='bg-red-500'  onClick={handleCloseSnackbar}>
        cancel
        </MyButton></div>
        </form>
      </>
        
    } 
   
    style={{
     // Customize the positioning using CSS

    
   }}
/>
  )
}

export default SnackbarPopup