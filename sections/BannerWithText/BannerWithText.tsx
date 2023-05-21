import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import IconPhoto from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/photo.tsx";

export interface Props {
  logo?: LiveImage | string;
  logoAlt?: string;
  image?: Banner;
  title?: string;
  paragraphs?: string[];
  bulletPoints?: string[];
  buttonLinks?: Array<{
    type?: "contained" | "outlined";
    title?: string;
    link?: string;
  }>;
}

export interface Banner {
  image?: LiveImage | string;
  alt?: string;
}

function BannerItem({ image, alt }: Banner) {
  return (
    <div className="w-full md:w-[400px] h-[400px] flex justify-center items-center mb-6">
      {image
        ? (
          <img
            src={image}
            alt={alt}
            className="h-full w-full object-cover"
          />
        )
        : <IconPhoto class="w-14 h-14" />}
    </div>
  );
}

export default function BannerWithText(
  { bulletPoints, buttonLinks, image, paragraphs, title, logo, logoAlt }: Props,
) {
  return (
    <section className="px-6 lg:px-20 py-12 md:flex md:flex-row md:justify-between">
      <BannerItem alt={image?.alt ?? "banner"} image={image?.image} />
      <div className="flex flex-col gap-4 md:order-first">
        {logo && (
          <div className="flex justify-center md:justify-start">
            <img
              className="h-8 w-fit object-contain"
              src={logo}
              alt={logoAlt ?? "logo"}
            />
          </div>
        )}
        <h2 className="font-bold text-lg md:text-2xl">
          {title ?? "Section Title"}
        </h2>
        {paragraphs && (
          <div className="flex flex-col gap-2 md:text-xl">
            {paragraphs.map((text) => <p>{text}</p>)}
          </div>
        )}
        {bulletPoints && (
          <ul className="flex flex-col gap-2 md:text-xl">
            {bulletPoints.map((text) => (
              <li className="list-disc list-inside">{text}</li>
            ))}
          </ul>
        )}
        {buttonLinks && (
          <div className="flex flex-col gap-2 md:flex-row">
            {buttonLinks.map(({ link, title, type }) => (
              <a
                href={link ?? "#"}
                className={`btn btn-primary ${
                  type === "outlined" ? "btn-outline" : ""
                }`}
              >
                {title}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
