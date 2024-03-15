import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import Category from './Category';
import Featured from './Featured';
import PopularMenu from './PopularMenu';
import Testimonal from './Testimonal';

const home = () => {
    return (
        <div>
              <Helmet>
                <title>Bistro Boss| Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonal></Testimonal>
        </div>
    );
};

export default home;