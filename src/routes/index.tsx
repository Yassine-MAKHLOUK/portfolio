import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Introduction } from "~/components/starter/introduction/introduction";
import { Portfolio } from "~/components/starter/portfolio/portfolio";
import { Testimony } from "~/components/starter/testimony/testimony";


export default component$(() => {
  return (
    <>
      <div class="container container-center container-spacing-xl">
        <Introduction />
        <Portfolio />
        <Testimony />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
