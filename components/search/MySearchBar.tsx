import Icon from "$store/components/ui/Icon.tsx";

export interface Props {
  placeholder: string;
}

function MySearchBar({
  placeholder,
}: Props) {
  return (
    <>
      <label htmlFor="search" className="relative md:hidden">
        <input
          type="text"
          placeholder={placeholder}
          id="search"
          className="w-full input rounded-none border-black"
        />
        <Icon
          className="absolute top-1/2 -translate-y-1/2 right-4 text-black"
          id="MagnifyingGlass"
          size={20}
          strokeWidth={2}
        />
      </label>
    </>
  );
}

export default MySearchBar;
