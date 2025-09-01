import { Button } from "@/components/ui/button";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const products = [
  {
    id: 1,
    name: "Air Jordan 1 Retro",
    description: "Classic basketball shoe with premium leather construction",
    price: "₹12,995",
    image: product1,
  },
  {
    id: 2,
    name: "Air Max 270 React",
    description: "Next-generation cushioning meets modern design",
    price: "₹13,995",
    image: product2,
  },
  {
    id: 3,
    name: "Zoom Pegasus 39",
    description: "Responsive running shoe for every mile",
    price: "₹10,995",
    image: product3,
  },
  {
    id: 4,
    name: "Blazer Mid '77",
    description: "Vintage basketball style meets modern comfort",
    price: "₹7,995",
    image: product4,
  },
];

const Products = () => {
  return (
    <section id="products" className="py-32 bg-background relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#764ba2] to-background"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-black gradient-text-primary mb-6">
            Featured Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked shoes that represent the perfect blend of innovation, style, and performance
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group glass-card rounded-3xl p-8 hover-lift hover-glow cursor-pointer relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Shimmer Effect */}
              <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shimmer"></div>
              
              {/* Product Image */}
              <div className="h-60 bg-gradient-secondary rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-w-[90%] h-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.3)] group-hover:scale-105 group-hover:-rotate-3 transition-transform duration-300"
                />
              </div>

              {/* Product Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">
                  {product.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
                <div className="text-2xl font-black gradient-text-primary">
                  {product.price}
                </div>
                <Button className="w-full mt-6 group">
                  Add to Cart
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;