import axios from "axios"
import { useEffect, useState } from "react"


const MyOrders = () => {
  
    const [myOrders, setmyOrders] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3000/orders')
        .then(res =>{
            setmyOrders(res.data)
        }).catch(err => console.log(err))

    },[])

  return (
    <div className="overflow-x-auto">
      <title>My Orders</title>
  <table className="table table-xs">
    <thead>
      <tr>
        <th></th>
        <th>Product Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Phone</th>
        <th>Location</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {
        myOrders.map(order=>
        <tr>
        <td></td>
        <td>{order?.productName}</td>
        <td>{order?.quantity}</td>
        <td>{order?.price}</td>
        <td>{order?.phone}</td>
        <td>{order?.address}</td>
        <td>
            {
               new Date(order?.date).toLocaleString('en-us', {
                    year: 'numeric',
                    month:'short',
                    day:'numeric',
                    hour:'numeric',
                    minute:'numeric',
                    hour12: true
                
                })}
        </td>
      </tr>

        )
      }
      </tbody> 
  </table>
</div>
  )
}

export default MyOrders
