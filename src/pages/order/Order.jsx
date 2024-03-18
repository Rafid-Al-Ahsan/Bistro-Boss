import React, { useState } from 'react';
import orderCover from '../../assets/shop/banner2.jpg';
import Cover from '../shared/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FoodCard from '../../Components/FoodCard';
import useMenu from '../../hooks/useMenu';
import Ordertab from './Ordertab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();


    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss| Menu</title>
            </Helmet>
            <Cover img={orderCover} title="Order Food"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <Ordertab items={salad}></Ordertab>
                </TabPanel>
                <TabPanel>
                    <Ordertab items={pizza}></Ordertab>
                </TabPanel>
                <TabPanel>
                    <Ordertab items={soup}></Ordertab>
                </TabPanel>
                <TabPanel>
                    <Ordertab items={dessert}></Ordertab>
                </TabPanel>
                <TabPanel>
                    <Ordertab items={drinks}></Ordertab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default order;