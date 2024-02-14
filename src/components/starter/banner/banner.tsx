import { component$, useContext, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import { bannerContextId } from "./banner-context-id";
import styles from './banner.css?inline';



export const Banner = component$(() => {
  useStylesScoped$(styles);
  const {titleSignal, subTitleSignal, bannerImgSignal} = useContext(bannerContextId)
  const count = useSignal(0);
  return (
    <>
        <section class="banner">
            <div class="absolute">
                <h1>{titleSignal.value}</h1>
                <span>{subTitleSignal.value}</span>
                
            </div>
        </section>
    </>
    
  );
});