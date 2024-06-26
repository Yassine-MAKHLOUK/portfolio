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
            <div class="text-left banner-text">
                <h1 class="relative text-8xl">{titleSignal.value}</h1>
                <div class="relative text-sm ">{subTitleSignal.value}</div>
                <div class="h-fit relative my-16">
                  <a class="relative rounded bg-blue-700 px-4 py-2 text-md font-semibold text-white shadow-sm hover:bg-white hover:text-blue-500" href="/contact">
                    Let's Talk
                  </a>
                </div>
            </div>
            <div class="mascot">
              <script type="module" src="https://unpkg.com/@splinetool/viewer@1.0.93/build/spline-viewer.js"></script>
              <spline-viewer url="https://prod.spline.design/YVMwU9pRUM3ptfPE/scene.splinecode"></spline-viewer>
            </div>
        </section>
    </>
    
  );
});