import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import CardPost from './CardPost';

export default function CarouselPosts(){
    return(
        <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            pagination={{clickable:true}}
            breakpoints={{
                375: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1280: {
                  slidesPerView: 3,
                },
                1440: {
                    slidesPerView: 4,
                }
            }}
            >
            <SwiperSlide className='p-2 py-5'>
                <CardPost/>
            </SwiperSlide>
            <SwiperSlide className='p-2 py-5'>
                <CardPost/>
            </SwiperSlide>
            <SwiperSlide className='p-2 py-5'>
                <CardPost/>
            </SwiperSlide>
            <SwiperSlide className='p-2 py-5'>
                <CardPost/>
            </SwiperSlide>
            <SwiperSlide className='p-2 py-5'>
                <CardPost/>
            </SwiperSlide>
            <SwiperSlide className='p-2 py-5'>
                <CardPost/>
            </SwiperSlide>
            <SwiperSlide className='p-2 py-5'>
                <CardPost/>
            </SwiperSlide>

            <SwiperSlide className='p-2 py-5'>
                <CardPost/>
            </SwiperSlide>
            <SwiperSlide className='p-2 py-5'>
                <CardPost/>
            </SwiperSlide>
            <SwiperSlide className='p-2 py-5'>
                <CardPost/>
            </SwiperSlide>
            <SwiperSlide className='p-2 py-5'>
                <CardPost/>
            </SwiperSlide>
        </Swiper>
    )
}