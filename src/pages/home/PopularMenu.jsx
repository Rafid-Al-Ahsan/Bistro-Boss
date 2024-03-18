import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle';
import useMenu from '../../hooks/useMenu';
import Menuitems from '../shared/Menuitems';

const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');

    // const [menu, setMenu] = useState([])

    // useEffect(() => {
    //     fetch('menu.json')
    //     .then(response => response.json())
    //     .then(data => {
    //         const popularItem = data.filter(item => item.category === 'popular')
    //         setMenu(popularItem)
    //     })
    // } , [])
    return (
        <section className='mb-12'>
            <SectionTitle
                heading="From Our Menu"
                subHeading="Popular Items"
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    popular.map(item => <Menuitems key={item._id} item={item}></Menuitems>)
                }
            </div>
            <button className='btn btn-outline border-0 border-b-4 mt-4'>View Full Menu</button>
        </section>
    );
};

export default PopularMenu;