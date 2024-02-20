import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
        <h1>Contact</h1>
    </>
  )
});

export const head: DocumentHead = {
  title: "Contact",
  meta: [
    {
      name: "description",
      content: "Contact description",
    },
  ],
};