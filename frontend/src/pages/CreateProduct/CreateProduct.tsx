import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { useAppSelector } from '../../store/hooks';
const schema = z.object({
  name: z.string().min(3),
  price: z.number(),
  description: z.string(),
  category: z.string(),

});

interface response {
  message: string;
  product: {
    name: string,
    price: number,
    description: string,
    category: string,
    image: string,
  };
  status: number;
}


type FormFields = z.infer<typeof schema>;


function CreateProduct() {
  const token = useAppSelector(state => state.auth.token);
  const [response, setResponse] = useState<response>();
  const [imageFile, setImageFile] = useState(null);
  const { register, handleSubmit, setError, formState: { errors, isSubmitSuccessful, isSubmitting } } = useForm<FormFields>(
    {
      defaultValues: {
        price: 0
      },
      resolver: zodResolver(schema)
    }
  );
  console.log(token)
  const onSubmit: SubmitHandler<FormFields> = async (data) => {

    try {
      data.price = parseFloat(data.price.toString());
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('price', data.price.toString());
      formData.append('description', data.description);
      formData.append('category', data.category);
      if (imageFile != null) {
        formData.append('image', imageFile); // Append the image file directly

      }
      else {
        setError('root', {
          message: "Image file cannot be empty"
        });
      }


      const responses = await axios.post('http://127.0.0.1:8000/api/products/create-new-product', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        },
      })
      console.log(responses.data);
      setResponse(responses.data);

    } catch (error: any) {
      console.error('Error:', error);
      // Handle error
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error:', error.message);
      }
    }
  };
  const handleImageChange = (e: any) => {
    const file = e.target.files[0]; // Get the selected file
    setImageFile(file); // Set the selected file to the component state
  };


  return !isSubmitSuccessful ? (
    <div className='bg-gray-200 h-lvh w-full flex items-center justify-center '>
      <form className='bg-white p-10 rounded-3xl flex flex-col gap-3 items-center' onSubmit={handleSubmit(onSubmit)}>
        <h1 className='text-black text-3xl font-semibold'>Create New Product</h1>
        <div>
          <label htmlFor="name">Name:</label>
          <input className='w-100 p-2 px-2 relative rounded-xl bg-orange-100 border-2 border-gray-400 text-gray-800 font-semibold focus:border-customBlue focus:outline-none focus:bg-white' type="text" id="name" {...register('name')} />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input className='w-100 p-2 px-2 relative rounded-xl bg-orange-100 border-2 border-gray-400 text-gray-800 font-semibold focus:border-customBlue focus:outline-none focus:bg-white' type="number" id="price" {...register('price', { valueAsNumber: true })} />
          {errors.price && <p>{errors.price.message}</p>}
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea className='w-100 p-2 px-2 relative rounded-xl bg-orange-100 border-2 border-gray-400 text-gray-800 font-semibold focus:border-customBlue focus:outline-none focus:bg-white' id="description" {...register('description')} />
          {errors.description && <p>{errors.description.message}</p>}
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input className='w-100 p-2 px-2 relative rounded-xl bg-orange-100 border-2 border-gray-400 text-gray-800 font-semibold focus:border-customBlue focus:outline-none focus:bg-white' type="text" id="category" {...register('category')} />
          {errors.category && <p>{errors.category.message}</p>}
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input className='w-100 p-2 px-2 relative rounded-xl bg-orange-100 border-2 border-gray-400 text-gray-800 font-semibold focus:border-customBlue focus:outline-none focus:bg-white'
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange} // Handle image file selection
          />
          {errors.root && <p>{errors.root.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  ) : isSubmitting ? <div>Submitting</div> : response?.status == 1 ? <div>
    <div>{response?.message}</div>
    <div>{response?.product.name}</div>
    <img src={response.product.image} alt="No image" />

  </div> : <div>{response?.message}</div>;
}

export default CreateProduct;