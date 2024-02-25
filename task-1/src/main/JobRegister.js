import React from 'react'
import jobpost from './Images/jobRegister.png'
import arrow from './Hirers/whitearrow.png'

const JobRegister = () => (
    <>
    <div className='flex justify-center border-solid-red border-2px items-center Main'>
     <form className="w-3/5 my-10 bg-white job-form">
<div class="flex my-6 justify-between">
<input type="text" className="flex-1 mr-10 ml-2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400" placeholder="Name" />
      <input type="text" className="flex-1 ml-8 mr-2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400" placeholder="Email" />
</div>

<div class="flex my-6  justify-between">
<input type="text" className="flex-1 mr-10 ml-2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400" placeholder="Phone No." />
      <input type="text" className="flex-1 ml-8 mr-2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400" placeholder="Education" />
</div>


<div class="flex my-6 w-3/4 justify-between">
<input type="text" className="flex-1 w-4/5 mx-3 px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400" placeholder="Past Experience/ Current Job" />
</div>


<div class="flex my-6 justify-between w-1/2">
<input type="file" className="flex-1 h-25 mx-3 px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400" placeholder="Submit Resume/CV" />
</div>
<button class="mt-4 mr-6 rounded-full float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>

</form>
<div className='m-auto Main-img'>
  <img src={jobpost} alt='jobpost'/>
</div>
 
</div>

    </>
  );
  

export default JobRegister;