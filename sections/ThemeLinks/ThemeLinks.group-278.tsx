export interface Props {
  title: string;
  subtitle: string;
  themes?: Array<{
    title: string;
    subThemes: Array<{
      title: string;
      details?: string;
      link: string;
    }>;
  }>;
  buttonLink?: string;
}

export default function Logos({
  themes,
  title,
  subtitle,
  buttonLink,
}: Props) {
  return (
    <div className="w-full p-8 bg-info flex flex-col items-center">
      <div className="max-w-[1000px]">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">{title}</h1>
          <h2 className="mt-2 text-xl">{subtitle ?? ""}</h2>
        </div>
        {/* <div className="flex flex-row gap-4 justify-evenly"> */}
        <div className="self-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-44 gap-y-10 md:gap-y-4">
          {themes?.map((theme) => (
            <div>
              <h3 className="text-lg font-bold">{theme.title}</h3>
              <div>
                {theme.subThemes.map((subtheme) => (
                  <div>
                    <a href={subtheme.link}>
                      <button className="btn btn-link text-left capitalize p-0">
                        {subtheme.title}
                      </button>
                    </a>
                    <p className="text-xs w-[130px]">{subtheme.details}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
          className={`mt-4 w-full block btn btn-outline rounded-none md:max-w-fit ${
            !buttonLink && "hidden"
          }`}
        >
          {buttonLink ?? ""}
        </button>
      </div>
    </div>
  );
}
