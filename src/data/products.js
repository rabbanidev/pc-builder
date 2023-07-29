const products = [
  {
    id: "1",
    name: "CPU Processor 1",
    image: "https://images.pexels.com/photos/1432680/pexels-photo-1432680.jpeg",
    category: "CPU - Processor",
    price: 20000,
    status: "In Stock",
    rating: 4.8,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae.",
    keyFeatures: {
      brand: "Brand A",
      model: "Model PQR",
      specification: "Spec XYZ",
      cores: "6 cores",
      clockSpeed: "3.5 GHz",
      socket: "Socket LGA1200",
      cache: "12MB",
    },
    individualRating: 4.6,
    averageRating: 4.8,
    reviews: [
      {
        id: 1,
        username: "user456",
        rating: 5,
        comment: "Excellent performance!",
        userProfile:
          "https://images.pexels.com/photos/5325105/pexels-photo-5325105.jpeg",
      },
    ],
  },
  {
    id: "2",
    name: "Motherboard Model X",
    image:
      "https://images.pexels.com/photos/163140/technology-computer-motherboard-chips-163140.jpeg",
    category: "Motherboard",
    price: 12000,
    status: "In Stock",
    rating: 4.2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae.",
    keyFeatures: {
      brand: "Brand B",
      model: "Model MNO",
      formFactor: "ATX",
      socket: "Socket AM4",
      RAMSlots: "4",
      maxRAM: "64GB",
      connectors: "USB 3.1, HDMI, PCIe x16",
    },
    individualRating: 4.1,
    averageRating: 4.2,
    reviews: [
      {
        id: 1,
        username: "user789",
        rating: 4,
        comment: "Solid build quality.",
        userProfile:
          "https://images.pexels.com/photos/5325105/pexels-photo-5325105.jpeg",
      },
    ],
  },
  {
    id: "3",
    name: "RAM Module 16GB",
    image: "https://images.pexels.com/photos/2588757/pexels-photo-2588757.jpeg",
    category: "RAM",
    price: 8000,
    status: "In Stock",
    rating: 4.6,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae.",
    keyFeatures: {
      brand: "Brand C",
      model: "Model ABC123",
      capacity: "16GB",
      speed: "DDR4-3200",
      type: "DIMM",
      CASLatency: "CL16",
      voltage: "1.35V",
    },
    individualRating: 4.7,
    averageRating: 4.6,
    reviews: [
      {
        id: 1,
        username: "user234",
        rating: 5,
        comment: "Fast and reliable RAM.",
        userProfile:
          "https://images.pexels.com/photos/5325105/pexels-photo-5325105.jpeg",
      },
    ],
  },
  {
    id: "4",
    name: "Power Supply 750W",
    image: "https://images.pexels.com/photos/5408008/pexels-photo-5408008.jpeg",
    category: "Power Supply Unit",
    price: 9000,
    status: "In Stock",
    rating: 4.4,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae.",
    keyFeatures: {
      brand: "Brand D",
      model: "Model PSU750",
      wattage: "750W",
      efficiency: "80 Plus Bronze",
      modular: "Semi-Modular",
      fanSize: "120mm",
      connectors: "ATX, PCIe, SATA",
    },
    individualRating: 4.3,
    averageRating: 4.4,
    reviews: [
      {
        id: 1,
        username: "user567",
        rating: 4,
        comment: "Good value for money.",
        userProfile:
          "https://images.pexels.com/photos/5325105/pexels-photo-5325105.jpeg",
      },
    ],
  },
  {
    id: "5",
    name: "SSD 1TB",
    image: "https://images.pexels.com/photos/3631991/pexels-photo-3631991.jpeg",
    category: "Storage Device",
    price: 14000,
    status: "In Stock",
    rating: 4.9,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae.",
    keyFeatures: {
      brand: "Brand E",
      model: "Model SSD1TB",
      capacity: "1TB",
      interface: "NVMe PCIe Gen3 x4",
      formFactor: "M.2 2280",
      readSpeed: "3500 MB/s",
      writeSpeed: "2500 MB/s",
    },
    individualRating: 5.0,
    averageRating: 4.9,
    reviews: [
      {
        id: 1,
        username: "user890",
        rating: 5,
        comment: "Blazing fast SSD!",
        userProfile:
          "https://images.pexels.com/photos/5325105/pexels-photo-5325105.jpeg",
      },
    ],
  },
  {
    id: "6",
    name: "Monitor HP 22",
    image:
      "https://images.pexels.com/photos/159394/pc-computer-android-android-pc-159394.jpeg",
    category: "Monitor",
    price: 20000,
    status: "In Stock",
    rating: 4.7,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iusto voluptatibus voluptas, consequatur dolorum laborum ipsam quas.",
    keyFeatures: {
      brand: "Brand M",
      model: "Model XYZ",
      displaySize: "27 inches",
      resolution: "2560x1440",
      refreshRate: "144Hz",
      panelType: "IPS",
      responseTime: "1ms",
    },
    individualRating: 4.5,
    averageRating: 4.7,
    reviews: [
      {
        id: 1,
        username: "user123",
        rating: 4,
        comment: "Great color reproduction!",
        userProfile:
          "https://images.pexels.com/photos/5325105/pexels-photo-5325105.jpeg",
      },
      {
        id: 2,
        username: "user456",
        rating: 5,
        comment: "Excellent gaming monitor!",
        userProfile:
          "https://images.pexels.com/photos/5325105/pexels-photo-5325105.jpeg",
      },
    ],
  },
  {
    id: "7",
    name: "Monitor HP 2222",
    image:
      "https://images.pexels.com/photos/159394/pc-computer-android-android-pc-159394.jpeg",
    category: "Monitor",
    price: 20000,
    status: "Out of stock",
    rating: 4.7,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iusto voluptatibus voluptas, consequatur dolorum laborum ipsam quas.",
    keyFeatures: {
      brand: "Brand M",
      model: "Model XYZ",
      displaySize: "27 inches",
      resolution: "2560x1440",
      refreshRate: "144Hz",
      panelType: "IPS",
      responseTime: "1ms",
    },
    individualRating: 4.5,
    averageRating: 4.7,
    reviews: [
      {
        id: 1,
        username: "user123",
        rating: 4,
        comment: "Great color reproduction!",
        userProfile:
          "https://images.pexels.com/photos/5325105/pexels-photo-5325105.jpeg",
      },
      {
        id: 2,
        username: "user456",
        rating: 5,
        comment: "Excellent gaming monitor!",
        userProfile:
          "https://images.pexels.com/photos/5325105/pexels-photo-5325105.jpeg",
      },
    ],
  },
];

export default products;