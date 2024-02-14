import { Signal, createContextId } from "@builder.io/qwik";

export interface ButtonProps {
    name : string,
    link : string,
    
  }
  export interface BannerState {
    titleSignal : Signal<string>,
    subTitleSignal : Signal<string>,
    bannerImgSignal : Signal<string>,
  }
export const bannerContextId = createContextId<BannerState> ('bannerContext')