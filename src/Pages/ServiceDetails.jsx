import { useParams } from "react-router";
import { Globe, MapPin, ChartColumnStacked, DollarSign, ShoppingCart  } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";


const ServiceDetails = () => {
    const [service, setService] = useState(null);
    const { myId } = useParams();
    const [loading, setLoading] = useState(true);
    const {user} = useContext(AuthContext)

    useEffect(() => {
      fetch(`http://localhost:3000/services/${myId}`)
        .then((res) => res.json())
        .then((data) => {
          setService(data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }, [myId]);

const handleOrders = (e) =>{
   e.preventDefault()

   const form = e.target

   const buyerName = form.buyerName.value
   const buyerEmail = form.buyerEmail.value
   const productName = form.productName.value
   const quantity = parseInt(form.quantity.value)
   const price = parseInt(form.price.value)
   const address = form.address.value
   const phone = form.phone.value
   const note = form.note.value

   const formData = {
    productId:myId,
     buyerName,
     buyerEmail,
     productName,
     quantity,
     price,
     address,
     phone,
     note,
     date: new Date()
   }
    
   axios.post('http://localhost:3000/orders', formData)
   .then(res =>{
    console.log(res)
   }).catch(err => {console.log(err)})

  }



  if (loading) return <div>Details not found</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <title>Service Details</title>
      <div className="relative h-96 sm:h-[500px] lg:h-[600px] overflow-hidden">
        <img src={service.image} alt={service.name} className="absolute inset-0 w-full h-full object-cover brightness-50"/>

        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/60 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-12">
          <div className="max-w-7xl mx-auto flex">
            <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-end">
              <div className="flex-1 space-y-4 lg:space-y-6">
                <div>
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight drop-shadow-2xl">{service.name}</h1>
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mt-2 font-medium">Listed by{" "}<span className="text-yellow-500">{service.email}</span></p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-sky-900 backdrop-blur rounded-full text-sm font-semibold flex items-center gap-1"><ChartColumnStacked className="w-4 h-4 text-yellow-500" />
                    {service.category}
                  </span>
                  <span className="px-4 py-2 bg-sky-900 backdrop-blur rounded-full text-sm font-semibold flex items-center ">
                    {service.price}{" "}<DollarSign className="w-4 h-4  text-yellow-500" />
                  </span>
                  <span className="px-4 py-2 bg-sky-900 backdrop-blur rounded-full text-sm font-semibold flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-yellow-500" />{service.location}
                  </span>
                </div>

                <a onClick={() => document.getElementById("my_modal_4").showModal()}
                  className="inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-linear-to-r from-sky-700 to-sky-400 hover:from-sky-800 hover:to-sky-900 rounded-xl font-bold text-lg shadow-xl transition-all transform hover:scale-105 cursor-pointer">
                  <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />Order Now
                </a>

                <dialog id="my_modal_4" className="modal">
                  <div className="modal-box bg-gray-900 text-white border border-sky-700/40 shadow-2xl rounded-2xl p-8 max-w-3xl">
                    <h3 className="text-2xl font-bold mb-4 text-sky-400">Place Your Order</h3>
                    <p className="text-gray-300 mb-6">Fill in your information below to complete the order.</p>

                    <form onSubmit={handleOrders} method="dialog" className="space-y-4">

                      <div className="flex flex-col">
                        <label className="text-sm font-semibold">Buyer Name</label>
                        <input type="text" defaultValue={user.displayName} readOnly name="buyerName"
                          className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white"/>
                      </div>

                      <div className="flex flex-col">
                        <label className="text-sm font-semibold">Buyer Email</label>
                        <input type="email" defaultValue={user.email} readOnly name="buyerEmail"
                          className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white"/>
                      </div>

                      <div className="flex flex-col">
                        <label className="text-sm font-semibold">Product Name</label>
                        <input required defaultValue={service.name} readOnly="text" name="productName"
                          className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white"/>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col">
                          <label className="text-sm font-semibold"> Quantity</label>
                          <input required type="number" name="quantity"
                            className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white"/>
                        </div>

                        <div className="flex flex-col">
                          <label className="text-sm font-semibold">Price($)</label>
                          <input defaultValue={service.price} type="number" name="price" readOnly
                            className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white"/>
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <label className="text-sm font-semibold">Address</label>
                        <input required type="text" name="address"
                          className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white"/>
                      </div>

                      <div className="flex flex-col">
                        <label className="text-sm font-semibold">Phone</label>
                        <input required type="text" name="phone"
                          className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white"/>
                      </div>

                      <div className="flex flex-col">
                        <label className="text-sm font-semibold">Additional Note</label>
                        <input type="text" name="note"
                          className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white"/>
                      </div>

                      {/* Modal Buttons */}
                      <div className="flex justify-end gap-3 pt-4">
                        <button onClick={() => document.getElementById("my_modal_4").close()} className="btn px-5 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition font-semibold">Close</button>
                        <button type="submit" className="btn px-5 py-2 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-semibold shadow-lg">Confirm Order</button>
                      </div>

                    </form>
                  </div>
                               
                </dialog>
              </div>
            </div>
            
            <div className="w-full lg:w-auto flex justify-center lg:justify-end mt-8 lg:mt-0">
              <img src={service?.image} alt={service.name} className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-80 lg:h-96 xl:h-[500px] object-cover rounded-2xl shadow-2xl border-4 border-sky-700/50"/>
            </div>

          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="bg-gray-800/90  backdrop-blur-lg rounded-3xl shadow-2xl border  border-gray-700 p-8 sm:p-10 lg:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-3">
            <Globe className="w-7 h-7 sm:w-8 sm:h-8 text-yellow-500" />
            About This Service
          </h2>

          <p className="text-gray-300 leading-relaxed text-base sm:text-lg whitespace-pre-line">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;

