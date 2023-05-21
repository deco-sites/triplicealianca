import Image from "deco-sites/std/components/Image.tsx";
import WishlistIcon from "$store/islands/WishlistButton.tsx";
import { formatPrice } from "$store/sdk/format.ts";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export type Product = {
  name: string;
  productId: string;
  url: string;
  image: LiveImage | string;
  fullPrice: number;
  currentPrice?: number;
};

interface Props {
  product: Product;
}

const WIDTH = 200;
const HEIGHT = 100;

function ProductCard({ product }: Props) {
  const {
    url,
    fullPrice,
    image,
    name,
    productId,
    currentPrice,
  } = product;

  return (
    <div
      class="card card-compact card-bordered border-transparent hover:border-base-200 group w-full"
      data-deco="view-product"
      id={`product-card-${productId}`}
    >
      <figure class="relative " style={{ aspectRatio: `${WIDTH} / ${HEIGHT}` }}>
        {/* Wishlist button */}
        <div class="absolute top-0 right-0 z-10">
          <WishlistIcon productGroupID={productId} productID={productId} />
        </div>
        {/* Product Images */}
        <a
          href={url}
          aria-label="view product"
          class="contents"
        >
          <Image
            src={image}
            alt={name}
            width={WIDTH}
            height={HEIGHT}
            class="absolute rounded w-full"
            sizes="(max-width: 640px) 50vw, 20vw"
            decoding="async"
          />
        </a>
      </figure>
      {/* Prices & Name */}
      <div class="card-body">
        <h2 class="card-title whitespace-nowrap overflow-hidden">{name}</h2>
        <div class="flex items-end gap-2">
          <span class="line-through text-base-300 text-xs">
            {formatPrice(fullPrice)}
          </span>
          <span class="text-secondary">
            {formatPrice(currentPrice)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
