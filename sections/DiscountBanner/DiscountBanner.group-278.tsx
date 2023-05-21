import Icon from "$store/components/ui/Icon.tsx";

export interface Props {
  messages: string[];
  durationInSeconds?: number;
}

export default function DiscountBanner(
  { messages = [], durationInSeconds }: Props,
) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes slideleft {
              0% { transform: translate(100vw,0); }
              100% { transform: translate(-100%,0); }
            }
          `,
        }}
      />
      <div class="relative bg-primary w-full overflow-hidden">
        <button class="absolute top-1/2 -translate-y-1/2 right-0 text-primary-content bg-primary z-10">
          <Icon id="XMark" width={28} height={28} strokeWidth={2} />
        </button>
        <div
          class=" flex gap-10 w-max text-sm animate-[slideleft_10s_linear_infinite]"
          style={`animation-duration: ${durationInSeconds ?? 15}s;`}
        >
          {messages.map((message) => (
            <div class="pt-2 pb-2 lg:pt-4 lg:pb-4 flex gap-10 items-center text-primary-content group">
              <p>{message}</p>
              <span class="bg-primary-content h-1 w-1 rounded group-last:hidden">
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
