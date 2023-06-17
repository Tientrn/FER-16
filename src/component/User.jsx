import React, { useEffect } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import {BsFillTrashFill} from 'react-icons/bs'
import UsersData from '../data/ListOfUsers'
import { useState } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { deleteUser, updateUsername } from '../features/Users';

const User = () => {

    const dispatch = useDispatch();
const userList = useSelector((state)=> state.users.value);  
const [newUsername,setNewUsername]=useState('');

useEffect(() => {
  }, [userList]);

  return (
<>
      {userList.map((user) => (
        <div className="flex border p-4" key={user.id}>
          <div className="border flex flex-auto items-center space-x-2 w-16">
            <AiOutlineUser className="text-2xl" />
            <div>
              <h3 className="font-bold">{user.name}</h3>
              <p className="text-gray-500">{user.username}</p>
            </div>
          </div>

          <div className="border flex-auto w-64">
            <input
              className="p-3 border rounded-md w-full"
              type="text"
              placeholder="Type new username..."
              onChange={(e)=>setNewUsername(e.target.value)}
            />
          </div>

          <div className="border flex flex-auto items-center justify-end space-x-2">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md" 
            onClick={()=>{dispatch(updateUsername({id: user.id, username: newUsername}));
    }}
>
              Update
            </button>
            <BsFillTrashFill className="text-red-500 text-2xl" onClick={()=> {
      dispatch(deleteUser({id: user.id}));
      }}
 />
          </div>
        </div>
      ))}
    </>
  )
}

export default User
