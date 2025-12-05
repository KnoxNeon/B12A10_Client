import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import { MapPin } from 'lucide-react'
import { Link } from 'react-router';

const MyServices = () => {
  const [myServices, setMyServices] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:3000/my-services?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyServices(data))
      .catch((err) => console.log(err));
  }, [user?.email]);

  console.log(myServices);

  return (
    <div className="overflow-x-auto w-full">
      <table className="table table-zebra table-xs min-w-max md:pl-20 pt-10 text-center">
        {/* head */}
        <thead>
          <tr>
            <th className="text-blue-500">Category & Location</th>
            <th className="text-blue-500">Name & Description</th>
            <th className="text-blue-500">Price($)</th>
            <th className="text-blue-500">Date</th>
            <th className="text-blue-500">Action</th>
            <th className="text-blue-500"></th>
          </tr>
        </thead>
        <tbody>
          {myServices.map((service) => (
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={service.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{service.category}</div>
                    <div className="text-sm opacity-50 flex items-center">
                      <MapPin className="w-3 h-3" />
                      {service.location}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                {service.name}
                <br />
                <span className="badge badge-ghost badge-sm">
                  {service.description}
                </span>
              </td>
              <td>{service.price}</td>
              <td>
                <button className="btn btn-ghost btn-xs">{service.date}</button>
              </td>
              <td>
                <Link to={`/update-services/${service._id}`} className="btn bg-red-500 btn-xs">Edit</Link>
                <button className="btn bg-green-500 btn-xs">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyServices
