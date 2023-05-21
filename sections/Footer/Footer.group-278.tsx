import Icon from "$store/components/ui/Icon.tsx";
import type { ComponentChildren } from "preact";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import IconPhoto from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/photo.tsx";

export type StringItem = {
  label: string;
  href: string;
};

export type Item = StringItem;

export type Section = {
  label: string;
  href: string;
};

function SectionItem({ item }: { item: Item }) {
  return (
    <a className="hover:underline text-primary-content" href={item.href}>
      {item.label}
    </a>
  );
}

function FooterContainer(
  { children, class: _class = "" }: {
    class?: string;
    children: ComponentChildren;
  },
) {
  return <div class={`py-6 px-4 sm:py-12 sm:px-0 ${_class}`}>{children}</div>;
}

export interface Props {
  links?: Section[];
  /** @description icon auxiliar text */
  text?: string;
  logo?: LiveImage | string;
  /** @description logo link */
  link?: string;

  copyright?: string;
}

function Footer({ links: sections = [], text, copyright, logo, link }: Props) {
  return (
    <footer class="w-full bg-primary flex flex-col divide-y divide-primary-content">
      <div>
        <div class="container w-full flex flex-col divide-y divide-primary-content">
          <FooterContainer>
            {/* Desktop view */}
            <ul class="hidden sm:grid grid-cols-3 gap-4">
              {sections.map((section) => (
                <li>
                  <a
                    class="font-medium text-xl text-primary-content hover:underline text-primary-content"
                    href={section.href}
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile view */}
            <ul class="flex flex-col sm:hidden sm:flex-row gap-4">
              {sections.map((section) => (
                <li>
                  <a
                    class="font-medium text-md text-primary-content hover:underline text-primary-content"
                    href={section.href}
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </FooterContainer>
        </div>
      </div>

      <div>
        <div class="container w-full">
          <FooterContainer class="flex justify-between w-full">
            <span class="flex flex-col items-center gap-1 text-primary-content md:flex-row md:justify-between md:w-full">
              <div>
                {text ?? "Powered By "}
                <a
                  href={link}
                  aria-label={`${text} ${link}`}
                >
                  {logo?.length
                    ? (
                      <img
                        src={logo}
                        alt="logo"
                        className="h-12 w-fit object-contain"
                      />
                    )
                    : <IconPhoto className="w-12 h-12" />}
                </a>
              </div>
              <p className="text-primary-content text-xs">
                {copyright ?? "© Company Name"}
              </p>
            </span>
          </FooterContainer>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
