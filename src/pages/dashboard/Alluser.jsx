import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt } from 'react-icons/fa';

const Alluser = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            return res.json();
        }
    });

    const handleDelete = user => {

    }


    return (
        <div className='w-full'>
            <Helmet>
                <title>Bistro Boss | All Users</title>
            </Helmet>
            <p className='text-3xl font-semibold my-4'>Total Users: {users.length}</p>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) =>  <tr key={user._id}>
                            <th>{index+1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>Blue</td>
                            <button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600 text-white"><FaTrashAlt /></button>
                        </tr>)}
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Alluser;