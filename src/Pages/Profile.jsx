import React, { useContext, useState } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import { updateProfile } from 'firebase/auth'
import auth from '../firebase/firebase.config'

const Profile = () => {
    const {user, setUser} = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="max-w-sm mx-auto mt-10 bg-white rounded-xl shadow-lg overflow-hidden">
      <title>Your Profile</title>
      <div className="bg-sky-900 p-6 text-center">
        <img
          src={user.photoURL}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto border-4 border-sky-600 shadow-xl object-cover"
        />
      </div>

      <div className="p-6 space-y-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-sky-900">
            {user.displayName}
          </h2>
          <p className="text-gray-500 text-sm">
            @{user?.displayName.trim().replace(/\s+/g, "_").toLowerCase()}
          </p>
        </div>

        <div className="space-y-3 text-gray-700">
          <div className="flex items-center gap-3">
            <span className="font-medium text-sky-900">Email:</span>
            <span className="text-gray-600">{user.email}</span>
          </div>
        </div>
        

        {
          isOpen && (
            <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-[#0f172a] w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form className="fieldset">
                <label className="label text-sky-600">Display Name</label>
                <input
                  defaultValue={user?.displayName}
                  name='name'
                  type="text"
                  className="input"
                  placeholder="display name"
                />
                <label className="label text-sky-600">PhotoURL</label>
                <input
                  defaultValue={user.photoURL}
                  name='photoUrl'
                  type="text"
                  className="input"
                  placeholder="paste url here"
                /><button className="btn px-5 py-2 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-semibold shadow-lg">Update Profile</button>
              </form>
            </div>
            
          </div>
        </div>) }
      </div>
    </div>
  );
  
}

export default Profile
