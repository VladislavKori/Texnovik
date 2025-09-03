import { FC, useRef } from "react";
import styles from "./style.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import { reviews, sliderBreakpoints } from "./config";
import { motion } from "framer-motion";
import ArrowIcon from "@shared/assets/arrow.svg?react";

export const Reviews: FC = () => {
    const swiperRef = useRef<SwiperType>();

    return (
        <div className={styles["reviews"]}>
            <div className="container">
                <div className={styles["reviews-inner"]}>
                    <div className={styles["reviews-texts"]}>
                        <motion.h2
                            className={styles["reviews-title"]}
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            отзывы
                        </motion.h2>
                        <motion.p
                            className={styles["reviews-subtitle"]}
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            Профессиональное изготовление и монтаж оборудования, а также выполнение проектных работ любой сложности — гарантированное качество и индивидуальный подход к каждому проекту.
                        </motion.p>
                    </div>
                    <div>
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            className={styles["reviews-swiper"]}
                            spaceBetween={50}
                            slidesPerView={3}
                            breakpoints={sliderBreakpoints}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            loop
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                        >
                            {reviews.map((review, index) => (
                                <SwiperSlide key={`review-${index}`}>
                                    <div className={styles["reviews-card"]}>
                                        <div className={styles["reviews-user"]}>
                                            <div className={styles["reviews-avatar"]}>
                                                <img src={review.user.avatarURL} />
                                            </div>
                                            <span className={styles["reviews-name"]}>{review.user.name}</span>
                                        </div>
                                        <p className={styles["reviews-text"]}>{review.text}</p>
                                    </div>
                                </SwiperSlide>
                            ))}

                            <div className={styles["reviews-navigation"]}>
                                <div className={styles["reviews-prev"]}>
                                    <button onClick={() => swiperRef.current?.slidePrev()}>
                                        <ArrowIcon />
                                    </button>
                                </div>
                                <div className={styles["reviews-next"]}>
                                    <button onClick={() => swiperRef.current?.slideNext()}>
                                        <ArrowIcon />
                                    </button>
                                </div>
                            </div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}