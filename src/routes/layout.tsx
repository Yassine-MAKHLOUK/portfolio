import { component$, Slot, useContextProvider, useSignal, useStore, useStyles$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";

import Header from "../components/starter/header/header";
import Footer from "../components/starter/footer/footer";

import styles from "./styles.css?inline";
import { Banner } from "~/components/starter/banner/banner";
import { bannerContextId } from "~/components/starter/banner/banner-context-id";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  useStyles$(styles);
  const titleSignal = useSignal('Hello This is Yassine')
  const subTitleSignal = useSignal('Building Exceptional Web Solutions for a Digital Tomorrow.')
  const bannerImgSignal = useSignal('banner.jpg')
 
  useContextProvider( bannerContextId, {
    titleSignal,
    subTitleSignal,
    bannerImgSignal
  })
  return (
    <>
      <Header />
      <Banner />
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
