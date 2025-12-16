import { component$, useSignal, useStylesScoped$, useVisibleTask$ } from "@builder.io/qwik";

import { Carousel } from '@qwik-ui/headless';
import { MatKeyboardArrowRightFilled, MatKeyboardArrowLeftFilled } from "@qwikest/icons/material";

import styles from './testimony.css?inline'

interface testimonyInt {
    name: string, 
    testimony: string, 
    avatar: string
}

export const Testimony = component$(() => {
    useStylesScoped$(styles);
    
    const testimonies  = [
        {
            name: "MOHAMED MOUROUH", 
            testimony: "Yassine is creative and talented web developer. I have had the pleasure of knowing and working with him in the same company. He is an inspirational web developer with so much passion for the service he provides. He uses innovative approaches to tackling and solving problems and I highly recommend him.",
            avatar: "avatar.jpg"
        },
        {
            name: "Angel Rodriguez", 
            testimony: " Il est difficile de décrire comment le travail de Yassine m'a impressionné quand j'ai eu la chance de travailler avec lui. J'ai vraiment été impressionné par la façon de travailler de Yassine, qui a réussi à achever son travail plus rapidement que prévu.", 
            avatar: "avatar.jpg"
        },
        {
            name: "Abdellatif Tijani", 
            testimony: "I've know yassin in many activites and projects, he's one of the members who can work into different projects with the same knack and a great will.", 
            avatar: "avatar.jpg"
        },
        {
            name: "HILMI Mohammed", 
            testimony: "MAKHLOUK is a great developer, very active. he has flexibility in communication, especially in English. very good organization and mobilization rating, very good technical knowledge in frontend and backend, I often saw Makhlouk as someone I could always count on to get the job done.It has been my pleasure working with and I extremely recommend him.", 
            avatar: "avatar.jpg"
        },
        {
            name: "Marouane Moumni", 
            testimony: "it's really hard to find a team member that is always ready to put high effort on a project, Yassine is one of the best people I've ever worked with at YouCode, I was very glad to have him on the team, he's very skilled, talented and a man that is very reliable, he helps me a lot during many projects. I'll be always highly recommending Yassine!", 
            avatar: "avatar.jpg"
        }
    ];
    const isPlaying = useSignal<boolean>(false);
    
    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(() => {
    isPlaying.value = true;
    });

    

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
                    <Carousel.Root
                        class="carousel-root"
                        gap={30}
                        loop
                        autoPlayIntervalMs={3500}
                        bind:autoplay={isPlaying}
                    >
                        <div class="carousel-buttons">
                        <Carousel.Previous class="bg-transparent rounded-full border border-solid border-white p-4 w-8 h-8 flex justify-center items-center absolute left-0 text-xs text-white"><MatKeyboardArrowLeftFilled/></Carousel.Previous>
                        <Carousel.Player class="hidden"></Carousel.Player>
                        <Carousel.Next class="bg-transparent rounded-full border border-solid border-white p-4 w-8 h-8 flex justify-center items-center absolute right-0"><MatKeyboardArrowRightFilled/></Carousel.Next>
                        </div>
                        <Carousel.Scroller class="carousel-scroller">
                        {testimonies.map((element:testimonyInt) => (
                            <Carousel.Slide key={element.name} class="carousel-slide">
                            <div class="testimony-card">
                                <div class="card-head">
                                    <p class="card-name">{element.name}</p>
                                </div>
                                <p class="card-text">
                                {element.testimony}
                                </p>
                            </div>
                            </Carousel.Slide>
                        ))}
                        </Carousel.Scroller>
                    </Carousel.Root>
                    
      
                    
                    </div>
        

                </div>
            </div>

        </section>
    </>)
  });


