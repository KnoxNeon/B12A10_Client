import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import { Calendar, ImagePlus } from 'lucide-react';
import Swal from 'sweetalert2';

const UpdateServices = () => {
    const {user} = useContext(AuthContext)
    const {id} = useParams()
    const isPet = user.category === 'pets';

    const [service, setService] = useState(null);
    const [category, setCategory] = useState(service?.category);
    const navigation = useNavigate()
    
    useEffect(() => {
        axios.get(`http://localhost:3000/services/${id}`)
         .then((res) => {
            setService(res.data)
            setCategory(res.data.category)
         })
         .catch((err) => console.log(err));
        }, [id]);

    const handleUpdate = (e) => {
      e.preventDefault();
      const form = e.target;

      const name = form.name.value;
      const category = form.category.value;
      const price = parseInt(form.price.value);
      const location = form.location.value;
      const description = form.description.value;
      const image = form.photoUrl.value;
      const date = form.date.value;
      const email = form.email.value;

      const formData = {
        name,
        category,
        price,
        location,
        description,
        image,
        date,
        email,
        createdAt:service?.createdAt
      };
      console.log(formData)

      axios.put(`http://localhost:3000/update/${id}`, formData)
      .then(res=>{
              console.log(res)
              if(res.data.acknowledged){
                Swal.fire({
                title: "Service Updated Successfully!",
                icon: "success",
                draggable: true
                });
                navigation('/my-services')
                form.reset()
              } else{
                Swal.fire({
                  title: "Something Went Wrong",
                  icon: "error",
                  draggable: true,
                });
              }
          }).catch(err =>{
            console.log(err)
            Swal.fire({
                  title: "Something Went Wrong",
                  icon: "error",
                  draggable: true,
                });
          })
    };

    

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <title>Update Listing</title>
      <h2 className="text-2xl font-bold text-gray-800 mb-8">
        Update Listing
      </h2>

      <form onSubmit={handleUpdate} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Product/Pet Name <span className="text-red-500">*</span></label>
          <input defaultValue={service?.name} type="text" name='name' required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            placeholder="e.g., Max the Golden Retriever or Stainless Steel Food Bowl"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Category <span className="text-red-500">*</span></label>
          <select value={category} name='category' className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            onChange={(e) => {
              setCategory(e.target.value);
              if (e.target.value === "pets") setPrice("");
            }}>

            <option value="pets">Pets</option>
            <option value="food">Food</option>
            <option value="accessories">Accessories</option>
            <option value="care products">Care Products</option>
          </select>
        </div>

        {/* Price - Hidden/Disabled for Pets */}
        <div className={isPet ? "opacity-50" : ""}>
          <label className="block text-sm font-medium text-gray-700 mb-2">Price (in USD){!isPet && <span className="text-red-500">*</span>}</label>
          <input defaultValue={service?.price} type="number" name='price' value={isPet? '0': user.price} placeholder={isPet ? "Free adoption (or leave blank)" : "29.99"} disabled={isPet} required={!isPet}
            onChange={(e) => setPrice(e.target.value)}
          
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition 
              ${isPet? "bg-gray-100 border-gray-300 cursor-not-allowed": "border-gray-300 focus:ring-blue-500"}`}/>

          {
          isPet && (<p className="text-xs text-gray-500 mt-1">Price is set to $0 for pet adoptions</p>)
          }
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Location <span className="text-red-500">*</span></label>
          <input defaultValue={service?.location} type="text" name='location' required placeholder="City, State (e.g., Dhaka, Chittagong)"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"/>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2"> Description <span className="text-red-500">*</span></label>
          <textarea defaultValue={service?.description} name='description' rows="5" required placeholder="Tell us more about the pet or product..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"/>
        </div>   
           
       {/* Image Upload */}
        <div>
          <label className="flex items-center gap-3 text-gray-700 mb-2 text-sm font-medium"><ImagePlus className="w-5 h-5" />PhotoURL</label>
           <input defaultValue={service?.image} name="photoUrl" type="text" placeholder="https://yourphoto/"
           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"/>
         </div>   
           
        {/* Pickup/Availability Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Available for Pickup From <span className="text-red-500">*</span></label>
           <div className="relative"> 
           <input defaultValue={service?.date} type="date" name='date' required onChange={(e) => setPickupDate(e.target.value)}
             className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"/>
            <Calendar className="absolute left-4 top-3.5 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>
             
      
        {/* Email (Readonly) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
          <input value={user?.email??''} type="email" name='email' readOnly className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-600 cursor-not-allowed"/>
          <p className="text-xs text-gray-500 mt-1"> Buyers will contact you at this email</p>
         </div>  
           
        {/* Submit */}
        <div className="pt-4">
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition transform hover:scale-105 shadow-md">Publish Listing </button>
         </div>    
      </form>   
    </div>   
  )
}

export default UpdateServices        
           
          
          
           
          
        

  
           
           
          
        

        
