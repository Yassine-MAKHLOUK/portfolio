import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
    <h1>Blog</h1>
    </>
  )
});

export const head: DocumentHead = {
  title: "Blog",
  meta: [
    {
      name: "description",
      content: "Blog description",
    },
  ],
};