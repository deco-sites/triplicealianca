import IconPhoto from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/photo.tsx";
import type { Image as ImageType } from "deco-sites/std/components/types.ts";

export interface Props {
  title: string;
  subtitle: string;
  imgUrl?: Array<{
    url?: ImageType | string;
    textAlt?: string;
  }>;
}

export default function Logos({
  imgUrl,
  title,
  subtitle,
}: Props) {
  return (
    <div className="w-full p-8">
      <div className="text-center mb-6">
        <h1 className="text-4xl">{title ?? "Title"}</h1>
        <h2 className="mt-2">
          {subtitle ??
            "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"}
        </h2>
      </div>
      {imgUrl?.length && (
        <ul className="grid grid-cols-3 justify-center w-full flex-wrap gap-4 lg:flex lg:justify-between">
          {imgUrl?.map((element) => (
            <li className="h-[48px] flex items-center justify-center">
              {element?.url
                ? (
                  <img
                    src={element.url}
                    alt={element.textAlt}
                    className="h-full w-fit object-contain"
                  />
                )
                : <IconPhoto class="w-12 h-12" />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
