import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
        <h1>About Us</h1>
    </>
  )
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