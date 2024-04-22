import React from 'react'

function Location() {
  return (
    <div className='bg-white flex justify-around items-center  p-12'>
        <div className='flex-col bg-gray-100 border rounded-xl justify-center items-center'>
            <h1 className='p-4 font-semibold text-4xl text-gray-900'>Main Branch</h1>
            <div className='bg-gray-500'>  <h1 className='px-10 text-white font-semibold'>Raksirang</h1>
            <iframe className='border rounded-b-xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56577.80280911604!2d84.80656968757029!3d27.59003611971514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994ce8391f26823%3A0x996b5fa09635b6b0!2sRaksirang%2044100!5e0!3m2!1sen!2snp!4v1713497709311!5m2!1sen!2snp" width="700" height="600"  loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            </div></div>
            <div className='flex-col bg-gray-100 border rounded-xl justify-center items-center'>
            <h1 className='p-4 text-4xl font-semibold text-gray-900'>Branches</h1>
          <div className='bg-gray-500'>  <h1 className='px-10 text-white font-semibold'>Kathmandu</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8641.87548507734!2d85.03699618710111!3d27.430742178315413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1713499703887!5m2!1sen!2snp" width="400" height="180"  loading="lazy" referrerPolicy="no-referrer-when-downgrade">

            </iframe></div>
            <div className='bg-gray-500'>  <h1 className='px-10 text-white font-semibold'>Hetauda</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8641.87548507734!2d85.03699618710111!3d27.430742178315413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1713499703887!5m2!1sen!2snp" width="400" height="180" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                
                </iframe>
           </div>
           <div className='bg-gray-500'>  <h1 className='px-10 text-white font-semibold'>Manahari</h1>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8641.87548507734!2d85.03699618710111!3d27.430742178315413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1713499703887!5m2!1sen!2snp" width="400" height="180" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                
                </iframe>
               </div>
            </div>
            </div>
  )
}

export default Location