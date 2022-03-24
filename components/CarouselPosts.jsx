import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import CardPost from './CardPost';

export default function CarouselPosts({info}){

    const limitChar = (string, limit) => {
        let newString=""
        if(string.length > limit){
            newString = string.substring(0,limit)
        } else {
            newString = string
        }

        return {__html: newString + "..."} 
    }

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
                  slidesPerGroup: 3
                },
                1440: {
                    slidesPerView: 4,
                    slidesPerGroup: 4
                }
            }}
            >

            {info.map((item)=>(
                <SwiperSlide key={item.id} className='p-2 py-5'>
                    <CardPost
                        link={"#"}
                        image={item.acf.portada_blog ? item.acf.portada_blog.sizes.large : "https://www.geniorama.site/demo/geniorama/wp-content/uploads/2019/11/nikita-katsevich-QXDJGPZTwxs-unsplash-e1584533063531-1600x900.jpg"}
                        title={item.title.rendered}
                        desc={limitChar(item.excerpt.rendered, 90)}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}