import React, { useState } from 'react';
import { Filter, ChevronDown } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  dimensions: string[];
  colors: string[];
  technique: string;
  productionTime: string;
  careInstructions: string[];
}

const initialProducts: Product[] = [
  {
    id: 1,
    name: "Mukuta Hat - Navy Stripes",
    description: "Classic navy striped hat featuring traditional Endek Bali weaving patterns. Handcrafted using non-mechanical weaving tools (ATBM) for authentic texture and durability.",
    price: 89.00,
    image: "/products/hat- (1).jpg",
    category: "Mukuta Hat",
    dimensions: ["One size fits most", "Adjustable strap"],
    colors: ["Navy Blue", "White"],
    technique: "Traditional Endek Bali weaving with ATBM tools",
    productionTime: "2-3 weeks",
    careInstructions: [
      "Hand wash only",
      "Air dry in shade",
      "Store in cool, dry place",
      "Avoid direct sunlight"
    ]
  },
  {
    id: 2,
    name: "Mukuta Hat - Red Stripes",
    description: "Bold red and black striped hat combining traditional Endek Bali weaving with contemporary design. Each piece showcases the authentic ATBM weaving technique.",
    price: 89.00,
    image: "/products/hat- (2).jpg",
    category: "Mukuta Hat",
    dimensions: ["One size fits most", "Adjustable strap"],
    colors: ["Red", "Black"],
    technique: "Traditional Endek Bali weaving with ATBM tools",
    productionTime: "2-3 weeks",
    careInstructions: [
      "Hand wash only",
      "Air dry in shade",
      "Store in cool, dry place",
      "Avoid direct sunlight"
    ]
  },
  {
    id: 3,
    name: "Mukuta Hat - Multi Stripe",
    description: "Vibrant multi-colored striped hat showcasing intricate Endek Bali weaving patterns. Handwoven using traditional non-mechanical tools for superior quality.",
    price: 99.00,
    image: "/products/hat- (3).jpg",
    category: "Mukuta Hat",
    dimensions: ["One size fits most", "Adjustable strap"],
    colors: ["Blue", "Orange", "Yellow", "Green"],
    technique: "Complex multi-color Endek Bali weaving with ATBM",
    productionTime: "3-4 weeks",
    careInstructions: [
      "Hand wash only",
      "Air dry in shade",
      "Store in cool, dry place",
      "Avoid direct sunlight"
    ]
  },
  {
    id: 4,
    name: "Mukuta Hat - Purple Fusion",
    description: "Elegant purple hat with intricate multi-colored stripe detail. Features authentic Endek Bali weaving techniques passed down through generations.",
    price: 99.00,
    image: "/products/hat- (4).jpg",
    category: "Mukuta Hat",
    dimensions: ["One size fits most", "Adjustable strap"],
    colors: ["Purple", "Green", "Blue", "Gold"],
    technique: "Advanced Endek Bali pattern weaving with metallic accents",
    productionTime: "3-4 weeks",
    careInstructions: [
      "Hand wash only",
      "Air dry in shade",
      "Store in cool, dry place",
      "Avoid direct sunlight"
    ]
  },
  {
    id: 5,
    name: "Jagadhita Tote - Honey Gold",
    description: "Elegant tote bag featuring traditional Endek Bali striped patterns in honey gold with blue accents. Combines authentic Indonesian weaving with modern functionality.",
    price: 129.00,
    image: "/products/Jagadhita Bag -  (1).jpg",
    category: "Jagadhita Bag",
    dimensions: ["40cm x 35cm x 12cm"],
    colors: ["Honey Gold", "Blue", "Black"],
    technique: "Traditional Endek Bali weaving with modern canvas combination",
    productionTime: "2-3 weeks",
    careInstructions: [
      "Spot clean with damp cloth",
      "Store in dust bag when not in use",
      "Avoid exposure to rain",
      "Keep away from direct sunlight"
    ]
  },
  {
    id: 6,
    name: "Jagadhita Tote - Burgundy Ikat",
    description: "Sophisticated burgundy tote featuring traditional Indonesian ikat patterns. Handwoven using ATBM techniques for authentic texture and durability.",
    price: 139.00,
    image: "/products/Jagadhita Bag -  (2).jpg",
    category: "Jagadhita Bag",
    dimensions: ["40cm x 35cm x 12cm"],
    colors: ["Burgundy", "Black", "Gold"],
    technique: "Traditional Indonesian ikat weaving with canvas construction",
    productionTime: "2-3 weeks",
    careInstructions: [
      "Spot clean with damp cloth",
      "Store in dust bag when not in use",
      "Avoid exposure to rain",
      "Keep away from direct sunlight"
    ]
  },
  {
    id: 7,
    name: "Jagadhita Tote - Navy Diamond",
    description: "Classic navy tote with traditional diamond ikat pattern from Indonesian weaving heritage. Perfect blend of traditional artistry and modern functionality.",
    price: 139.00,
    image: "/products/Jagadhita Bag -  (3).jpg",
    category: "Jagadhita Bag",
    dimensions: ["40cm x 35cm x 12cm"],
    colors: ["Navy", "Yellow", "Orange", "Green"],
    technique: "Diamond ikat weaving using traditional ATBM tools",
    productionTime: "2-3 weeks",
    careInstructions: [
      "Spot clean with damp cloth",
      "Store in dust bag when not in use",
      "Avoid exposure to rain",
      "Keep away from direct sunlight"
    ]
  },
  {
    id: 8,
    name: "Jagadhita Tote - Ruby Red",
    description: "Vibrant ruby red tote with traditional Endek Bali striped pattern. Features convenient front pockets and authentic Indonesian weaving construction.",
    price: 129.00,
    image: "/products/Jagadhita Bag -  (4).jpg",
    category: "Jagadhita Bag",
    dimensions: ["40cm x 35cm x 12cm"],
    colors: ["Ruby Red", "Gold", "Purple"],
    technique: "Traditional Endek Bali stripe weaving with modern canvas blend",
    productionTime: "2-3 weeks",
    careInstructions: [
      "Spot clean with damp cloth",
      "Store in dust bag when not in use",
      "Avoid exposure to rain",
      "Keep away from direct sunlight"
    ]
  },
  {
    id: 9,
    name: "Talina Strap - Burgundy Diamond",
    description: "Luxurious bag strap featuring traditional Indonesian diamond patterns in rich burgundy and olive tones. Handwoven using authentic ATBM techniques.",
    price: 79.00,
    image: "/products/Talina -  (1).jpg",
    category: "Talina",
    dimensions: ["Length: 120cm", "Width: 5cm"],
    colors: ["Burgundy", "Olive", "White", "Black"],
    technique: "Traditional Indonesian diamond pattern weaving with modern hardware",
    productionTime: "1-2 weeks",
    careInstructions: [
      "Spot clean only",
      "Store flat",
      "Avoid exposure to moisture",
      "Keep away from direct sunlight"
    ]
  },
  {
    id: 10,
    name: "Talina Strap - Noir Elegance",
    description: "Sophisticated bag strap with classic black and burgundy geometric patterns from traditional Indonesian weaving. Features premium brass hardware.",
    price: 79.00,
    image: "/products/Talina -  (2).jpg",
    category: "Talina",
    dimensions: ["Length: 120cm", "Width: 5cm"],
    colors: ["Black", "Burgundy", "White"],
    technique: "Traditional Indonesian geometric pattern weaving with brass hardware",
    productionTime: "1-2 weeks",
    careInstructions: [
      "Spot clean only",
      "Store flat",
      "Avoid exposure to moisture",
      "Keep away from direct sunlight"
    ]
  },
  {
    id: 11,
    name: "Talina Strap - Emerald Fusion",
    description: "Striking bag strap featuring emerald green and gold geometric patterns from traditional Indonesian motifs. Handcrafted using non-mechanical weaving tools.",
    price: 89.00,
    image: "/products/Talina -  (3).jpg",
    category: "Talina",
    dimensions: ["Length: 120cm", "Width: 5cm"],
    colors: ["Emerald Green", "Gold", "White", "Black"],
    technique: "Complex Indonesian geometric weaving with metallic accents",
    productionTime: "1-2 weeks",
    careInstructions: [
      "Spot clean only",
      "Store flat",
      "Avoid exposure to moisture",
      "Keep away from direct sunlight"
    ]
  },
  {
    id: 12,
    name: "Talina Strap - Forest Medallion",
    description: "Elegant bag strap with forest green and gold medallion patterns from traditional Indonesian weaving heritage. Features premium brass hardware and adjustable length.",
    price: 89.00,
    image: "/products/Talina -  (4).jpg",
    category: "Talina",
    dimensions: ["Length: 120cm", "Width: 5cm"],
    colors: ["Forest Green", "Gold", "White", "Black"],
    technique: "Traditional Indonesian medallion pattern weaving with adjustable hardware",
    productionTime: "1-2 weeks",
    careInstructions: [
      "Spot clean only",
      "Store flat",
      "Avoid exposure to moisture",
      "Keep away from direct sunlight"
    ]
  }
];

const categories = [
  "All",
  "Mukuta Hat",
  "Talina",
  "Hobler Holder",
  "Mawra Bag",
  "Sangrianusa Holder",
  "Karllet Wallet",
  "Kirana Strap",
  "Carriena Bag",
  "Jagadhita Bag"
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="overflow-hidden transition-shadow duration-300 bg-white shadow-sm rounded-xl hover:shadow-md">
        <div className="overflow-hidden aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="p-6">
          <div className="mb-4">
            <p className="mb-2 text-sm text-amber-700">{product.category}</p>
            <h3 className="mb-2 text-xl font-medium">{product.name}</h3>
            <p className="text-2xl font-medium text-gray-900">${product.price.toFixed(2)}</p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center px-3 py-2 mt-4 text-xs font-medium text-white rounded-lg hover:bg-amber-700 bg-amber-600"
          >
            Show details
            {/* <ChevronDown className={`ml-1 h-4 w-4`} /> */}
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-8 bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between mb-6">
              <h2 className="text-2xl font-semibold">{product.name}</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full rounded-lg aspect-square"
              />
              <div>
                <p className="mb-2 text-sm text-amber-700">{product.category}</p>
                <p className="mb-4 text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
                <p className="mb-4 text-gray-700">{product.description}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="mb-2 text-lg font-medium">Dimensions:</h4>
                <ul className="text-sm text-gray-600">
                  {product.dimensions.map((dim, index) => (
                    <li key={index}>{dim}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-2 text-lg font-medium">Colors:</h4>
                <ul className="text-sm text-gray-600">
                  {product.colors.map((color, index) => (
                    <li key={index}>{color}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-2 text-lg font-medium">Weaving Technique:</h4>
                <p className="text-sm text-gray-600">{product.technique}</p>
              </div>

              <div>
                <h4 className="mb-2 text-lg font-medium">Production Time:</h4>
                <p className="text-sm text-gray-600">{product.productionTime}</p>
              </div>

              <div>
                <h4 className="mb-2 text-lg font-medium">Care Instructions:</h4>
                <ul className="text-sm text-gray-600 list-disc list-inside">
                  {product.careInstructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full px-4 py-2 mt-8 font-medium text-white rounded-lg bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const FeaturedProducts: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filteredProducts = initialProducts.filter(product =>
    selectedCategory === "All" || product.category === selectedCategory
  );

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-xl mx-auto mb-12 text-center">
          <h2 className="mb-4 text-3xl font-medium">Product Catalogue</h2>
          <p className="text-gray-600">Discover our handcrafted fashion accessories made with authentic Indonesian woven fabrics, each piece showcasing traditional ATBM weaving techniques</p>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 transition-all bg-white rounded-lg shadow-sm hover:shadow-md"
              >
                <Filter size={20} className="text-amber-700" />
                <span>Category: {selectedCategory}</span>
                <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && (
                <div className="absolute left-0 z-10 w-64 py-2 mt-2 bg-white rounded-lg shadow-lg top-full">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-amber-50 transition-colors ${selectedCategory === category ? 'bg-amber-50 text-amber-700' : 'text-gray-600'
                        }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <p className="text-sm text-gray-600">
              Showing {filteredProducts.length} products
            </p>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-10 text-center bg-gray-100 rounded-lg">
            <p className="text-xl text-gray-500">No product in this category</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
