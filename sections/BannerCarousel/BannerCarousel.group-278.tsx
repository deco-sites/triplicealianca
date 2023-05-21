import Icon from "$store/components/ui/Icon.tsx";
import Button from "$store/components/ui/Button.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import { useId } from "preact/hooks";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import MySearchBar from "$store/components/search/MySearchBar.tsx";

export interface Banner {
  /** @description desktop otimized image */
  desktop: LiveImage;
  /** @description mobile otimized image */
  mobile: LiveImage;
  /** @description Image's alt text */
  alt: string;
  /** @description Image text title */
  title: string;
  /** @description Image text subtitle */
  subTitle: string;
  /** @description Principal Button Text */
  primaryButton?: string;
  secundaryButtons?: Array<{
    /** @description when user clicks on the image, go to this link */
    href: string;
    /** @description Button label */
    label: string;
  }>;
}

export interface Props {
  images?: Banner[];
  /**
   * @description Check this option when this banner is the biggest image on the screen for image optimizations
   */
  preload?: boolean;
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

function BannerItem({ image, lcp }: { image: Banner; lcp?: boolean }) {
  const {
    alt,
    mobile,
    desktop,
    secundaryButtons,
    primaryButton,
    title,
    subTitle,
  } = image;

  return (
    <div className="w-full max-h-fit">
      <div className="relative flex flex-col h-[600px] ">
        <div className="h-1/2 lg:h-full">
          <Picture preload={lcp}>
            <Source
              media="(max-width: 360px)"
              fetchPriority={lcp ? "high" : "auto"}
              src={mobile}
              width={360}
              height={600}
            />
            <Source
              media="(min-width: 768px)"
              fetchPriority={lcp ? "high" : "auto"}
              src={desktop}
              width={1440}
              height={600}
            />
            <img
              class="h-full w-full object-cover lg:object-scale-down"
              loading={lcp ? "eager" : "lazy"}
              src={desktop}
              alt={alt}
            />
          </Picture>
        </div>

        <div class="m-auto w-full h-1/2 flex flex-col gap-2 p-4 bg-base-100 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-48 lg:min-h-[300px] lg:w-96 lg:p-8 lg:h-fit lg:shadow-lg">
          <h2 class="text-3xl font-medium text-neutral">
            {title}
          </h2>
          <p class="font-medium text-sm text-neutral ">
            {subTitle}
          </p>
          <div className="mt-auto">
            <div className="flex gap-4 my-4 lg:justify-evenly">
              {secundaryButtons?.map(({ label }, index) => (
                <Button
                  class={`rounded-none ${
                    index !== 0 ? "btn btn-outline text-black" : "text-white"
                  }`}
                >
                  {label}
                </Button>
              ))}
            </div>
            <div>
              <MySearchBar
                placeholder={primaryButton ?? "O que você quer aprender?"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <>
      <div class="flex items-center justify-center z-10 col-start-1 row-start-2 ml-4">
        <Slider.PrevButton class="btn btn-circle">
          <Icon
            class="text-base-100"
            size={20}
            id="ChevronLeft"
            strokeWidth={3}
          />
        </Slider.PrevButton>
      </div>
      <div class="flex items-center justify-center z-10 col-start-3 row-start-2 mr-4">
        <Slider.NextButton class="btn btn-circle">
          <Icon
            class="text-base-100"
            size={20}
            id="ChevronRight"
            strokeWidth={3}
          />
        </Slider.NextButton>
      </div>
    </>
  );
}

function BannerCarousel({ images, preload, interval }: Props) {
  const id = useId();

  return (
    <div
      id={id}
      class="grid grid-cols-[48px_1fr_48px] sm:grid-cols-[120px_1fr_120px] grid-rows-[1fr_48px_1fr_64px]"
    >
      <Slider class="carousel carousel-center w-full col-span-full row-span-full scrollbar-none gap-6">
        {images?.map((image, index) => (
          <Slider.Item index={index} class="carousel-item w-full">
            <BannerItem image={image} lcp={index === 0 && preload} />
          </Slider.Item>
        ))}
      </Slider>

      <Buttons />

      <SliderJS rootId={id} interval={interval && interval * 1e3} infinite />
    </div>
  );
}

export default BannerCarousel;
