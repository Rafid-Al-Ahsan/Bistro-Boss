import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useCart = () => {
    // const {user} = useContext(AuthContext);
    // const {user} = useAuth();
    // const token = localStorage.getItem('access-token');

    // const { refetch, data: cart = []} = useQuery({
    //     queryKey: ['cart', user?.email],
    //     queryFn: async () => {
    //         const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`, 
    //         { headers: {
    //             authorization: `bearer ${token}`
    //         }})
    //         return response.json();
    //     },
    // })

    // return [cart, refetch];

    const axiosSecure = useAxiosSecure();
    const { user, loading} = useAuth();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        enabled: !loading,
        queryFn: async() => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`);
            return res.data;
        }
    })

    return [cart, refetch]


}

export default useCart;