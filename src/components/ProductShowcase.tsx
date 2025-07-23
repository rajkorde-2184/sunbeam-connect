import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Home, Battery, Zap } from "lucide-react";
import residentialImage from "@/assets/residential-solar.jpg";
import commercialImage from "@/assets/commercial-solar.jpg";
import energyStorageImage from "@/assets/energy-storage.jpg";

const products = [
  {
    icon: Home,
    title: "Residential Solar",
    description: "Perfect solar solutions for your home with premium panels and smart monitoring.",
    features: ["High-efficiency panels", "25-year warranty", "Smart monitoring", "Professional installation"],
    image: residentialImage,
    badge: "Most Popular"
  },
  {
    icon: Building,
    title: "Commercial Solar",
    description: "Scale your business with enterprise-grade solar energy systems.",
    features: ["Custom design", "ROI optimization", "Grid-tie solutions", "Maintenance included"],
    image: commercialImage,
    badge: "Enterprise"
  },
  {
    icon: Battery,
    title: "Energy Storage",
    description: "Store your solar energy for use when you need it most.",
    features: ["Backup power", "Peak shaving", "Grid independence", "Smart controls"],
    image: energyStorageImage,
    badge: "Advanced"
  }
];

const ProductShowcase = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Solar Solutions for Every Need
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From residential rooftops to commercial installations, we provide 
            comprehensive solar energy solutions tailored to your requirements.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                  {product.badge}
                </Badge>
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <product.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                </div>
                <CardDescription className="text-base">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-secondary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;