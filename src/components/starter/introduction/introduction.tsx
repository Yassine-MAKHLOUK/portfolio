import { component$, useStylesScoped$ } from "@builder.io/qwik";
import ImgPresentationPic from '~/media/images/presentation-pic.png?jsx'
import styles from './introduction.css?inline';

export const Introduction = component$(() => {
  useStylesScoped$(styles);
  return (
    <>
        <section class="about_section container container-center container-spacing-xl">
            <div class="about-container">
                <div class="about-pics">
                    <div class="about-pic about-pic1"><ImgPresentationPic /></div>
                </div>
                <div class="about-text">
                    <h2 class="h1 about-title">
                        About me
                        <span class="about-subTitle">I bring a cool and collected vibe to coding</span>
                    </h2>
                    <article>
                        <p class="about-paragraphe">Hello, I'm <b>Yassine MAKHLOUK</b>, the Web Developer extraordinaire from [Casablanca]. I'm all about turning web challenges into digital triumphs.</p>
                        <p class="about-paragraphe">Beyond the screen, I draw inspiration from the everyday for a dash of creativity. Ready to turn your web vision into a vibrant reality? Let's connect! Step into my digital workshop, where websites evolve into captivating online adventures.</p>
                        <p class="about-paragraphe">In this vast digital universe, I'm the guide who thrives on staying ahead of the tech game.</p>
                    </article>
                </div>
            </div>
        </section>
    </>
  )
});