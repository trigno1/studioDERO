import ProductCard from "@/components/shared/ProductCard";
import { getProductsByCategory, getCategoryBySlug } from "@/lib/cms";
import { notFound } from "next/navigation";

export default function GourmetCollectionPage() {
  const category = getCategoryBySlug('gourmet');
  if (!category) {
    notFound();
  }
  const products = getProductsByCategory('gourmet');

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mb-12 text-center">
          <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">{category.name}</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            {category.description}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
