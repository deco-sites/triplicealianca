import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";

export interface Feature {
  /**
   * @description Image src
   */
  icon: AvailableIcons;
  /**
   * @description Title
   */
  title: string;
  description?: string;
}

export interface Props {
  /**
   * @description Title for mobile version only
   */
  mobileTitle: string;
  features: Feature[];
}

function FeatureHighlights(
  { features, mobileTitle }: Props,
) {
  return (
    <>
      <div class="my-10 min-h-[280px] sm:m-0 px-8 sm:p-0 md:flex items-center">
        <div class="bg-info py-4 sm:w-screen flex justify-center">
          <div class="flex flex-col gap-4 w-fit mx-6 sm:flex-row ">
            <h3 className="sm:hidden text-4xl mb-4 text-center">
              {mobileTitle}
            </h3>
            {features.map(({ icon: id = "Truck", title, description }) => (
              <div class="flex flex-row gap-4  my-1 sm:items-center">
                <div className="hidden sm:block bg-neutral rounded-full p-2">
                  <Icon
                    id={id}
                    width={20}
                    height={20}
                    strokeWidth={2}
                    className="hidden sm:block text-base-100"
                  />
                </div>
                <div class="flex flex-col gap-2 md:w-52 lg:w-72">
                  <h4 class="font-bold text-lg text-center sm:text-left">
                    {title}
                  </h4>
                  <p class="text-sm text-left">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatureHighlights;
