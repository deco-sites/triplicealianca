import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface LogoGalleryProps {
  title: string;
  description?: string;
  categories?: Array<{
    imageUrl?: LiveImage;
    description: string;
    link: string;
  }>;
}

export default function LogoGallery(
  { title, description, categories }: LogoGalleryProps,
) {
  return (
    <div className="p-4 flex flex-col gap-3">
      <h1 className="font-bold text-left text-2xl">{title}</h1>
      <p>{description ?? ""}</p>

      <ul className="rounded-box flex items-center gap-4 md:gap-8 flex-wrap ">
        {categories?.map((logo) => (
          <li>
            <a
              className="btn btn-outline rounded-3xl md:hidden "
              href={logo.link}
            >
              <p className="md:text-left">{logo.description}</p>
            </a>
            <a
              className="hidden md:block"
              href={logo.link}
            >
              <div className="flex flex-col gap-4">
                <div className="w-[180px] h-[180px]">
                  <img
                    className="hidden h-full w-full md:block object-cover md:hover:scale-110 transition-all duration-300 "
                    src={logo.imageUrl}
                    alt={logo.description}
                  />
                </div>
                <p className="md:text-left font-bold">{logo.description}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
