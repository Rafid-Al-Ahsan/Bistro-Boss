import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Testimonal = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(response => response.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className='my-20'>
            <SectionTitle
                subHeading={"What Our Clients Say "}
                heading={'Testimonails'}
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide key={review._id} >
                        <div className='flex flex-col items-center mx-24 my-16 m-24'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className='py-8'>{review.details}</p>
                            <h3 className='text-2xl text-orange-400'>{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonal;