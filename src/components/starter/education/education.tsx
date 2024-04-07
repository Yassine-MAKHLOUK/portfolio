import { component$, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import ImgEducationPic from '~/media/images/education-pic.jpg?jsx'
import styles from "./education.css?inline"
import { MatCalendarMonthRound } from "@qwikest/icons/material";


export const Education = component$(() => {
  useStylesScoped$(styles);   
  return (
    <section class="education_section">
        <h2 class="h1 education-title">
            Education/Experience
            <span class="education-subTitle"></span>
        </h2>
      <div class="education-container">
                <div class="education-pics">
                    <div class="education-pic education-pic1"><ImgEducationPic /></div>
                </div>
                <div class="education-text">
                    
                    
                    <div class="experience">
                        <h3 class="sect-title">Experience</h3>

                        <div class="sect-para">
                            <span class="periode"><MatCalendarMonthRound />juin 2021 - Present</span>
                            <h4 class="site">FUTUR DIGITAL</h4>
                            <div class="disc">
                                <ul>
                                    <li>Création des Sites Web, Avec les technologies : HTML-CSS -PHP-jQuery-MySQL-Bootstrap</li>
                                </ul>
                            </div>
                        </div>

                        <div class="sect-para">
                            <span class="periode"><MatCalendarMonthRound />juil 2021 - Déc 2021</span>
                            <h4 class="site">SMART TRANSFORMATION</h4>
                            <div class="disc">
                                DEVELOPPEUR FULL STACK
                                <ul>
                                    <li>Création d’une application superAdmin pour l’application web DOCCERTS, Avec les technologies : SpringBoot -Angular11 -MongoDB.</li>
                                    <li>Création d'un Système de notification pour l'application DOCCERTS.</li>
                                </ul>
                            </div>
                        </div>

                        <div class="sect-para">
                            <span class="periode"><MatCalendarMonthRound />juin 2020 - août 2020</span>
                            <h4 class="site">BRIOSS THECHNOLOGIE</h4>
                            <div class="disc">
                                DEVELOPPEUR WORDPRESS
                                <ul>
                                    <li>Création des Sites Web</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div class="education">
                        <h3 class="sect-title">Education</h3>

                        <div class="sect-para">
                            <span class="periode"><MatCalendarMonthRound />2023-2024</span>
                            <h4 class="site">CIGMA</h4>
                            <div class="disc">Licence professionel Développeur full stack</div>
                        </div>

                        <div class="sect-para">
                            <span class="periode"><MatCalendarMonthRound />2019-2021</span>
                            <h4 class="site">Youcode</h4>
                            <div class="disc">Formation DEVELOPPEUR WEB, SPÉCIALITÉ JAVA JEE </div>
                        </div>

                    </div>



                </div>
            </div>
    </section>
  );
});