// LEUWE TISSUE - Mock Data

export const companyInfo = {
  name: "LEUWE TISSUE",
  tagline: "Quality Tissue Products You Can Trust",
  phone: "083 217 4346",
  email: "Leuwetissue@gmail.com",
  address: "33 Polly Street, Johannesburg, South Africa",
  whatsapp: "27832174346",
};

export const products = [
  {
    id: 1,
    name: "Premium Toilet Paper",
    category: "Toilet Paper",
    description: "Soft, strong, and absorbent toilet paper for everyday use. Available in various ply options.",
    specifications: {
      ply: "2-ply / 3-ply",
      sheets: "200-500 sheets per roll",
      packaging: "4, 9, 18, 24 rolls per pack",
    },
    image: "https://images.unsplash.com/photo-1631524254770-03abe3f42a0d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHx0b2lsZXQlMjBwYXBlcnxlbnwwfHx8fDE3Njc0NDY0NDF8MA&ixlib=rb-4.1.0&q=85&w=400",
    bulkAvailable: true,
  },
  {
    id: 2,
    name: "Paper Towels",
    category: "Paper Towels",
    description: "Heavy-duty paper towels perfect for kitchen and industrial use. Superior absorption.",
    specifications: {
      ply: "2-ply",
      sheets: "50-100 sheets per roll",
      packaging: "2, 4, 6 rolls per pack",
    },
    image: "https://images.pexels.com/photos/191845/pexels-photo-191845.jpeg?auto=compress&cs=tinysrgb&w=400",
    bulkAvailable: true,
  },
  {
    id: 3,
    name: "Facial Tissues",
    category: "Facial Tissues",
    description: "Gentle and soft facial tissues ideal for sensitive skin. Perfect for homes and offices.",
    specifications: {
      ply: "2-ply / 3-ply",
      sheets: "100-200 sheets per box",
      packaging: "Single box, 3-pack, 6-pack",
    },
    image: "https://images.unsplash.com/photo-1609840112990-4265448268d1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHw0fHx0aXNzdWUlMjBwYXBlcnxlbnwwfHx8fDE3Njc0NDY0MjN8MA&ixlib=rb-4.1.0&q=85&w=400",
    bulkAvailable: true,
  },
  {
    id: 4,
    name: "Jumbo Rolls",
    category: "Jumbo Rolls",
    description: "Industrial-grade jumbo rolls for commercial and high-traffic facilities. Maximum value.",
    specifications: {
      ply: "1-ply / 2-ply",
      length: "300m - 700m per roll",
      packaging: "6, 12 rolls per case",
    },
    image: "https://images.unsplash.com/photo-1656214286228-08fdbf520d1e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxoeWdpZW5lJTIwcHJvZHVjdHN8ZW58MHx8fHdoaXRlfDE3Njc0NDY0MzZ8MA&ixlib=rb-4.1.0&q=85&w=400",
    bulkAvailable: true,
  },
];

export const highlights = [
  {
    id: 1,
    title: "Premium Quality",
    description: "We manufacture tissue products using the finest materials, ensuring softness and durability.",
    icon: "Award",
  },
  {
    id: 2,
    title: "Bulk & Wholesale",
    description: "Competitive pricing for bulk orders. Perfect for businesses, hotels, and institutions.",
    icon: "Package",
  },
  {
    id: 3,
    title: "Reliable Distribution",
    description: "Efficient nationwide delivery ensuring your orders arrive on time, every time.",
    icon: "Truck",
  },
];

export const manufacturingFeatures = [
  {
    id: 1,
    title: "State-of-the-Art Equipment",
    description: "Our facility features modern automated machinery for consistent product quality.",
    icon: "Factory",
  },
  {
    id: 2,
    title: "Quality Control",
    description: "Rigorous testing at every production stage ensures only the best products reach you.",
    icon: "ShieldCheck",
  },
  {
    id: 3,
    title: "Hygiene Standards",
    description: "We maintain strict hygiene protocols throughout our manufacturing process.",
    icon: "Sparkles",
  },
  {
    id: 4,
    title: "Sustainable Practices",
    description: "Committed to environmentally responsible production and recyclable packaging.",
    icon: "Leaf",
  },
];

export const aboutContent = {
  overview: "LEUWE TISSUE is a leading tissue manufacturer based in Johannesburg, South Africa. We specialize in producing high-quality tissue products for both retail and commercial markets.",
  mission: "To provide premium quality tissue products that meet the highest standards of hygiene, comfort, and sustainability while delivering exceptional value to our customers.",
  vision: "To be the most trusted tissue brand in South Africa, known for quality, reliability, and customer satisfaction.",
  values: [
    "Quality Excellence",
    "Customer Focus",
    "Integrity & Trust",
    "Innovation",
    "Sustainability",
  ],
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Manufacturing", href: "#manufacturing" },
  { name: "Contact", href: "#contact" },
];
