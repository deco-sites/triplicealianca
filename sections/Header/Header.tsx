import IconMenu2 from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/menu-2.tsx";
import Icon from "$store/components/ui/Icon.tsx";

export interface Props {
  menuHamburger?: Array<{
    title?: string;
    url?: string;
  }>;
  menuOthers?: Array<{
    title?: string;
    url?: string;
  }>;
  logo: {
    src?: string;
    alt?: string;
  };
  searchPlaceholder?: string;
  iconsUrls?: {
    search?: string;
    heart?: string;
    location?: string;
    person?: string;
    shop?: string;
  };
  buttonLinks?: Array<{
    type?: "contained" | "outlined";
    label?: string;
    url?: string;
  }>;
  language?: Array<string>;
}

export default function Header(props: Props) {
  const {
    buttonLinks,
    iconsUrls,
    logo,
    menuHamburger,
    searchPlaceholder,
  } = props;

  return (
    <header className="navbar p-1 md:p-6 max-h-[120px] min-h-[72px] w-full border border-solid border-b-[#aaaaaa] bg-white">
      <div className="navbar-start md:w-fit">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <IconMenu2 class="w-6 h-6" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box "
          >
            {menuHamburger?.map((item) => {
              const { title, url } = item;

              return (
                <li>
                  <a href={url}>{title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="navbar-center md:w-fit md:m-5">
        <a href="/">
          <img src={logo?.src} alt={logo?.alt} className="h-8" />
        </a>
      </div>

      <div className="navbar-end w-full">
        <div className="form-control hidden lg:block w-full">
          <div className="input-group w-full">
            <button
              type="button"
              href={iconsUrls?.search}
              className="btn btn-outline btn-square"
            >
              <Icon id="MagnifyingGlass" size={24} strokeWidth={2} />
            </button>
            <input
              type="text"
              placeholder={searchPlaceholder ?? "Pesquisar por qualquer coisa"}
              className="input input-bordered border-primary min-w-[50%]"
            />
          </div>
        </div>
        <a className="btn btn-ghost lg:hidden" href={iconsUrls?.search}>
          <Icon id="MagnifyingGlass" size={24} strokeWidth={2} />
        </a>

        <a
          className="hidden btn btn-ghost xl:inline-flex"
          href={iconsUrls?.heart}
        >
          <Icon id="Heart" size={24} strokeWidth={2} />
        </a>

        <a
          className="hidden btn btn-ghost xl:inline-flex"
          href={iconsUrls?.location}
        >
          <Icon id="MapPin" size={24} strokeWidth={2} />
        </a>

        <a
          className="hidden btn btn-ghost xl:inline-flex"
          href={iconsUrls?.person}
        >
          <Icon id="User" size={24} strokeWidth={2} />
        </a>

        <a className="btn btn-ghost" href={iconsUrls?.shop}>
          <Icon id="ShoppingCart" size={24} strokeWidth={2} />
        </a>
        {buttonLinks?.length && (
          <div className="hidden md:flex gap-2">
            {buttonLinks.map(({ label, type, url }) => (
              <a
                href={url}
                className={`flex btn btn-primary w-fit h-10 min-h-full py-2 px-3 items-center ${
                  type === "outlined" ? "btn-outline" : ""
                }`}
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
