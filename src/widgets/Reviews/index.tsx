import { FC, useRef } from "react";
import styles from "./style.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import { sliderBreakpoints } from "./config";

export const Reviews: FC = () => {
    const swiperRef = useRef<SwiperType>();

    return (
        <div className={styles["reviews"]}>
            <div className="container">
                <div className={styles["reviews-inner"]}>
                    <div className={styles["reviews-texts"]}>
                        <h2 className={styles["reviews-title"]}>отзывы</h2>
                        <p className={styles["reviews-subtitle"]}>Профессиональное изготовление и монтаж оборудования, а также выполнение проектных работ любой сложности — гарантированное качество и индивидуальный подход к каждому проекту. </p>
                    </div>
                    <div>
                        <Swiper
                            modules={[Navigation]}
                            className={styles["reviews-swiper"]}
                            spaceBetween={50}
                            slidesPerView={3}
                            breakpoints={sliderBreakpoints}
                            loop
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                        >
                            <SwiperSlide>
                                <div className={styles["reviews-card"]}>
                                    Slide 1
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={styles["reviews-card"]}>
                                    Slide 2
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={styles["reviews-card"]}>
                                    Slide 3
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={styles["reviews-card"]}>
                                    Slide 4
                                </div>
                            </SwiperSlide>

                            <button
                                onClick={() => swiperRef.current?.slidePrev()}
                                className={styles["reviews-prev"]}
                            >
                                Prev
                            </button>
                            <button
                                onClick={() => swiperRef.current?.slideNext()}
                                className={styles["reviews-next"]}
                            >
                                Next
                            </button>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}