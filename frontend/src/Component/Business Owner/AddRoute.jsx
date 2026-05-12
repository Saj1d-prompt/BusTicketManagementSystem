import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useState } from 'react';
import { useForm } from 'react-hook-form';


const BANGLADESH_CITIES = ['Dhaka', 'Faridpur', 'Gazipur', 'Gopalganj', 'Jamalpur', 'Kishoreganj', 'Madaripur', 'Manikganj', 'Munshiganj', 'Mymensingh', 'Narayanganj', 'Narsingdi', 'Netrokona', 'Rajbari', 'Shariatpur', 'Sherpur', 'Tangail'
  ,'Bogra', 'Joypurhat','Naogaon','Natore','Nawabganj','Pabna','Rajshahi','Sirajgonj','Dinajpur','Gaibandha','Kurigram','Lalmonirhat','Nilphamari','Panchagarh','Rangpur','Thakurgaon', 'Barguna', 'Barisal', 'Bhola', 'Jhalokati',
  'Patuakhali', 'Pirojpur', 'Bandarban', 'Brahmanbaria', 'Chandpur', 'Chittagong', 'Comilla', 'Cox\'s Bazar', 'Feni', 'Khagrachari', 'Lakshmipur', 'Noakhali', 'Rangamati', 'Habiganj', 'Maulvibazar', 'Sunamganj', 'Sylhet',
  'Bagerhat', 'Chuadanga', 'Jessore', 'Jhenaidah', 'Khulna', 'Kushtia', 'Magura', 'Meherpur', 'Narail','Satkhira'].sort();


const AddRoute = () => {
  const {user} = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const { register, handleSubmit, reset } = useForm();
  return (
    <div>
      
    </div>
  )
}

export default AddRoute
