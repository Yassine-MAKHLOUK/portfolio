import { component$, useStyles$, useStylesScoped$ } from "@builder.io/qwik";

import styles from './testimony.css?inline'

export const Testimony = component$(() => {
    useStylesScoped$(styles);
    

    return (<>
        <section class="testimony-section">
            <div class="testimony-container">
                <div class="testimony-head">
                    <h2 class="h1 testimony-title">
                        Kind Words
                        <span class="testimony-subTitle"></span>
                    </h2>
                </div>
                <div class="testimony-content">
                    
                    <div class="testimony-cards">
                    <swiper-container class="mySwiper" pagination="true" pagination-clickable="true" navigation="true" loop="true" space-between="30"
    centered-slides="true" autoplay-delay="2500" autoplay-disable-on-interaction="true">

                                <swiper-slide>
                                <div class="testimony-card">
                                    <div class="card-head">
                                        <p class="card-name">MOHAMED MOUROUH</p>
                                    </div>
                                    <p class="card-text">
                                        Yassine is creative and talented web developer. 
                                        I have had the pleasure of knowing and working with him in the same company.
                                        He is an inspirational web developer with so much passion for the service he provides.
                                        He uses innovative approaches to tackling and solving problems and I highly recommend him.
                                    </p>
                                </div>
                                </swiper-slide>

                                <swiper-slide>
                                <div class="testimony-card">
                                    <div class="card-head">
                                        <p class="card-name">Angel Rodriguez</p>
                                    </div>
                                    <p class="card-text">
                                        Il est difficile de décrire comment le travail de Yassine m'a impressionné quand j'ai eu la chance de travailler avec lui. J'ai vraiment été impressionné par la façon de travailler de Yassine, qui a réussi à achever son travail plus rapidement que prévu.
                                    </p>
                                </div>
                                </swiper-slide>

                                <swiper-slide>
                                <div class="testimony-card">
                                    <div class="card-head">
                                        <p class="card-name">Abdellatif Tijani</p>
                                    </div>
                                    <p class="card-text">
                                    I've know yassin in many activites and projects, he's one of the members who can work into different projects with the same knack and a great will.
                                    </p>
                                </div>
                                </swiper-slide>

                                <swiper-slide>
                                <div class="testimony-card">
                                    <div class="card-head">
                                        <p class="card-name">HILMI Mohammed</p>
                                    </div>
                                    <p class="card-text">
                                        MAKHLOUK is a great developer, very active. he has flexibility in communication, especially in English. very good organization and mobilization rating, very good technical knowledge in frontend and backend, I often saw Makhlouk as someone I could always count on to get the job done.It has been my pleasure working with and I extremely recommend him.
                                    </p>
                                </div>
                                </swiper-slide>

                                <swiper-slide>
                                <div class="testimony-card">
                                    <div class="card-head">
                                        <p class="card-name">Marouane Moumni</p>
                                    </div>
                                    <p class="card-text">
                                    it's really hard to find a team member that is always ready to put high effort on a project, Yassine is one of the best people I've ever worked with at YouCode, I was very glad to have him on the team, he's very skilled, talented and a man that is very reliable, he helps me a lot during many projects. 
                                    I'll be always highly recommending Yassine!
                                    </p>
                                </div>
                                </swiper-slide>


                            </swiper-container>

                    </div>
                  <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>
        

                </div>
            </div>

        </section>
    </>)
  });

function useClientEffect$(arg0: () => void) {
    throw new Error("Function not implemented.");
}
