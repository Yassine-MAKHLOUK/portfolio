/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { Navigation, Pagination, Scrollbar, Autoplay, A11y } from 'swiper/modules';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper-bundle.css'

function QwikSwiper () {
    return(
        <section className="testimony-section">
            <div className="testimony-container">
                <div className="testimony-head">
                    <h2 className="h1 testimony-title">
                        Kind Words
                        <span className="testimony-subTitle"></span>
                    </h2>
                </div>
                <div className="testimony-content">
                    
                    <div className="testimony-cards">
                        <div className="swiper mySwiper">
                        <Swiper 
                             modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                             spaceBetween={50}
                             slidesPerView={3}
                             autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                              }}
                             navigation
                             pagination={{ clickable: true }}
                             scrollbar={{ draggable: true }}
                             onSwiper={(swiper) => console.log(swiper)}
                             onSlideChange={() => console.log('slide change')}
                        >

                                    <SwiperSlide>
                                        <div className="testimony-card">
                                            <div className="card-head">
                                                <p className="card-name">MOHAMED MOUROUH</p>
                                            </div>
                                            <p className="card-text">
                                                Yassine is creative and talented web developer. 
                                                I have had the pleasure of knowing and working with him in the same company.
                                                He is an inspirational web developer with so much passion for the service he provides.
                                                He uses innovative approaches to tackling and solving problems and I highly recommend him.
                                            </p>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="testimony-card">
                                            <div className="card-head">
                                                <p className="card-name">Angel Rodriguez</p>
                                            </div>
                                            <p className="card-text">
                                                Il est difficile de décrire comment le travail de Yassine m'a impressionné quand j'ai eu la chance de travailler avec lui. J'ai vraiment été impressionné par la façon de travailler de Yassine, qui a réussi à achever son travail plus rapidement que prévu.
                                            </p>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="testimony-card">
                                            <div className="card-head">
                                                <p className="card-name">Abdellatif Tijani</p>
                                            </div>
                                            <p className="card-text">
                                            I've know yassin in many activites and projects, he's one of the members who can work into different projects with the same knack and a great will.
                                            </p>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="testimony-card">
                                            <div className="card-head">
                                                <p className="card-name">HILMI Mohammed</p>
                                            </div>
                                            <p className="card-text">
                                                MAKHLOUK is a great developer, very active. he has flexibility in communication, especially in English. very good organization and mobilization rating, very good technical knowledge in frontend and backend, I often saw Makhlouk as someone I could always count on to get the job done.It has been my pleasure working with and I extremely recommend him.
                                            </p>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="testimony-card">
                                            <div className="card-head">
                                                <p className="card-name">Marouane Moumni</p>
                                            </div>
                                            <p className="card-text">
                                            it's really hard to find a team member that is always ready to put high effort on a project, Yassine is one of the best people I've ever worked with at YouCode, I was very glad to have him on the team, he's very skilled, talented and a man that is very reliable, he helps me a lot during many projects. 
                                            I'll be always highly recommending Yassine!
                                            </p>
                                        </div>
                                    </SwiperSlide>


                                </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
)};

export const TestimonyReact = qwikify$(QwikSwiper);;