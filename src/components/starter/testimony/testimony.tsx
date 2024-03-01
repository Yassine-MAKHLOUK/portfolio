import { component$, useStylesScoped$ } from "@builder.io/qwik";
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

                        <div class="testimony-card">
                            <div class="card-head">
                                <p class="card-name">Jhon Doe</p>
                            </div>
                            <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>



                    </div>


                </div>
            </div>
        </section>
    </>)
  });