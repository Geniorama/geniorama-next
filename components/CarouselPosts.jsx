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
            slidesPerView={4}
            pagination={{clickable:true}}
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