import ProductCard from "@/components/shared/ProductCard";
import { getProducts } from "@/lib/cms";

export default function CollectionPage() {
  const products = getProducts();

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold md:text-5xl">Our Collection</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Explore our full range of handcrafted Diwali gift boxes.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
