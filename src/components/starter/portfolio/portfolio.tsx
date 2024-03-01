import { component$, useStylesScoped$ } from "@builder.io/qwik";
import ImgProject1 from '~/media/projects/project1.jpg?jsx';
import ImgProject2 from '~/media/projects/project2.jpg?jsx';
import ImgProject3 from '~/media/projects/project3.jpg?jsx';
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

                    <div class="portfolio-card">
                        <ImgProject1 />
                        <div class="card-text">
                            <p class="card-heading">Project 1</p>
                            <p class="card-description">Web app</p>
                        </div>
                    </div>

                    <div class="portfolio-card">
                        <ImgProject2 />
                        <div class="card-text">
                            <p class="card-heading">Project 2</p>
                            <p class="card-description">Web site</p>
                        </div>
                    </div>

                    <div class="portfolio-card">
                        <ImgProject3 />
                        <div class="card-text">
                            <p class="card-heading">Project 3</p>
                            <p class="card-description">Mobile app</p>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    </section>
  </>)
});