import { component$, useStylesScoped$ } from "@builder.io/qwik";
import ImgProject1 from '~/media/projects/project1.jpg?jsx';
import ImgProject2 from '~/media/projects/project2.jpg?jsx';
import ImgProject3 from '~/media/projects/project3.jpg?jsx';
import ImgProject4 from '~/media/projects/project4.jpg?jsx';
import ImgProject5 from '~/media/projects/project5.jpg?jsx';
import ImgProject6 from '~/media/projects/project6.jpg?jsx';
import styles from './portfolio.css?inline';

export const Portfolio = component$(() => {
  useStylesScoped$(styles);
  return (<>
    <section class="portfolio-section">
        <div class="portfolio-container">
            <div class="portfolio-head">
                <h2 class="h1 portfolio-title">
                    Portfolio
                    <span class="portfolio-subTitle"></span>
                </h2>
            </div>
            <div class="portfolio-content">

                <div class="portfolio-cards">

                    <a class="portfolio-card" href="https://www.anna-grf.fr/" target="_blank">
                        <ImgProject1 />
                        <div class="card-text">
                            <p class="card-heading">Anna - Maison G.R.F.</p>
                            <p class="card-description">Web site</p>
                        </div>
                    </a>

                    <a class="portfolio-card" href="https://www.ajprestigescars.fr/" target="_blank">
                        <ImgProject2 />
                        <div class="card-text">
                            <p class="card-heading">AJ Prestiges Cars</p>
                            <p class="card-description">Web site</p>
                        </div>
                    </a>

                    <a class="portfolio-card" href="https://www.chezgeorges78.fr/" target="_blank">
                        <ImgProject3 />
                        <div class="card-text">
                            <p class="card-heading">Chez Georges</p>
                            <p class="card-description">Web site</p>
                        </div>
                    </a>

                    <a class="portfolio-card" href="https://www.poissonnerieledreux.fr/" target="_blank">
                        <ImgProject4 />
                        <div class="card-text">
                            <p class="card-heading">N.N.C Maçonnerie</p>
                            <p class="card-description">Web site</p>
                        </div>
                    </a>

                    <a class="portfolio-card" href="https://www.poissonnerieledreux.fr/" target="_blank">
                        <ImgProject5 />
                        <div class="card-text">
                            <p class="card-heading">Poissonnerie Ledreux</p>
                            <p class="card-description">Web site</p>
                        </div>
                    </a>

                    <a class="portfolio-card" href="https://www.doccerts.com/" target="_blank">
                        <ImgProject6 />
                        <div class="card-text">
                            <p class="card-heading">Doccert</p>
                            <p class="card-description">Web app</p>
                        </div>
                    </a>

                </div>


            </div>
        </div>
    </section>
  </>)
});