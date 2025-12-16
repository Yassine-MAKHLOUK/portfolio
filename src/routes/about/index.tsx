import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import BannerImage from "~/media/images/yassineMAKHLOUK.jpg?jsx";
import styles from './about.module.css?inline';
import Skills from "~/components/starter/skills/skills";

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <>
    <div class="page-banner flex flex-col items-center justify-center pt-48 pb-2 mb-8 opacity-0 animate-fade-in">
      <div class="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl mb-6">
        <BannerImage
          alt="Yassine MAKHLOUK"
          class="w-full h-full object-cover"
        />
      </div>
      <h1 class="text-4xl font-bold h1 flex flex-col items-center justify-center">
        Yassine MAKHLOUK
        <span class="text-xl mt-1 text-gray-600">Full Stack Developer</span>
      </h1>
    </div>
    <section class="page-content max-w-4xl mx-auto px-4 py-4">
      <h1 class="hidden">About me</h1>
      
      <div class="space-y-6 text-lg">
        <p>
          My path into web development started with curiosity and has evolved into 
          a passion for creating digital solutions that make a real impact.
        </p>

        <p>
          I'm Yassine Makhlouk, a Full Stack Developer from Casablanca, Morocco. 
          Over the past 4+ years, I've had the privilege of working across diverse 
          industries—from building elegant luxury real estate platforms at BRIOSS 
          Technology to developing enterprise-level applications at Smart Transformation.
        </p>

        <p>
          What excites me most is the challenge of taking complex problems and 
          transforming them into intuitive, powerful solutions. During my time at 
          Futur Digital, I've consistently delivered websites using HTML, CSS, PHP, 
          and jQuery, while my experience with Angular and SpringBoot has allowed 
          me to architect scalable applications that serve thousands of users.
        </p>

        <p>
          Projects like the HouseLuxy real estate platform and KnowMaroc tourism 
          site taught me that great development isn't just about code—it's about 
          understanding user needs and business goals. Whether I'm optimizing 
          database queries in MySQL or crafting seamless user experiences with 
          modern frontend frameworks, I always keep the end user in mind.
        </p>

        <p>
          I'm always eager to take on new challenges and collaborate with teams 
          who share my commitment to building exceptional digital experiences.
        </p>
      </div>
    </section>
    <Skills />
    </>
  );
});

export const head: DocumentHead = {
  title: "About me",
  meta: [
    {
      name: "description",
      content: "About description",
    },
  ],
};