import ProductSlider from "@/components/ProductSlider";
import productDatabase from "@/utils/products-database";

export default function Home() {
  return <ProductSlider {...productDatabase[1]} />;
}
