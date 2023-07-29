const products = [
  {
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
        username: "user456",
        rating: 5,
        comment: "Excellent performance!",
        userProfile:
          "https://images.pexels.com/photos/5325105/pexels-photo-5325105.jpeg",
      },
    ],
  },
  {
    name: "CPU Processor 2",
    image: "https://images.pexels.com/photos/343457/pexels-photo-343457.jpeg",
    category: "CPU - Processor",
    price: 18000,
    status: "In Stock",
    rating: 4.7,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aperiam doloremque est, autem numquam.",
    keyFeatures: {
      brand: "Brand B",
      model: "Model XYZ",
      specification: "Spec ABC",
      cores: "8 cores",
      clockSpeed: "4.0 GHz",
      socket: "Socket AM4",
      cache: "16MB",
    },
    individualRating: 4.5,
    averageRating: 4.7,
    reviews: [
      {
        username: "user123",
        rating: 4,
        comment: "Great value for money!",
        userProfile:
          "https://images.pexels.com/photos/7890123/pexels-photo-7890123.jpeg",
      },
    ],
  },
  {
    name: "CPU Processor 3",
    image: "https://images.pexels.com/photos/1432675/pexels-photo-1432675.jpeg",
    category: "CPU - Processor",
    price: 24000,
    status: "In Stock",
    rating: 4.9,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus magni consectetur nisi vero vitae suscipit.",
    keyFeatures: {
      brand: "Brand C",
      model: "Model LMN",
      specification: "Spec UVW",
      cores: "10 cores",
      clockSpeed: "3.8 GHz",
      socket: "Socket TR4",
      cache: "20MB",
    },
    individualRating: 4.8,
    averageRating: 4.9,
    reviews: [
      {
        username: "user789",
        rating: 5,
        comment: "Unbeatable performance!",
        userProfile:
          "https://images.pexels.com/photos/5678901/pexels-photo-5678901.jpeg",
      },
    ],
  },
  {
    name: "CPU Processor 4",
    image:
      "https://images.pexels.com/photos/163073/raspberry-pi-computer-linux-163073.jpeg",
    category: "CPU - Processor",
    price: 21000,
    status: "In Stock",
    rating: 4.6,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facilis doloremque ullam fugit.",
    keyFeatures: {
      brand: "Brand D",
      model: "Model XYZ",
      specification: "Spec DEF",
      cores: "6 cores",
      clockSpeed: "3.2 GHz",
      socket: "Socket LGA1151",
      cache: "8MB",
    },
    individualRating: 4.4,
    averageRating: 4.6,
    reviews: [
      {
        username: "user101",
        rating: 4,
        comment: "Good performance for everyday use.",
        userProfile:
          "https://images.pexels.com/photos/1122334/pexels-photo-1122334.jpeg",
      },
    ],
  },
  {
    name: "CPU Processor 5",
    image:
      "https://images.pexels.com/photos/51165/cpu-processor-electronics-computer-51165.jpeg",
    category: "CPU - Processor",
    price: 26000,
    status: "In Stock",
    rating: 4.8,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi laboriosam eveniet explicabo a deserunt.",
    keyFeatures: {
      brand: "Brand E",
      model: "Model UVW",
      specification: "Spec XYZ",
      cores: "12 cores",
      clockSpeed: "4.5 GHz",
      socket: "Socket LGA1700",
      cache: "24MB",
    },
    individualRating: 4.7,
    averageRating: 4.8,
    reviews: [
      {
        username: "user202",
        rating: 5,
        comment: "Superb performance for gaming!",
        userProfile:
          "https://images.pexels.com/photos/4567891/pexels-photo-4567891.jpeg",
      },
    ],
  },

  {
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
        username: "user789",
        rating: 4,
        comment: "Solid build quality.",
        userProfile:
          "https://images.pexels.com/photos/5325105/pexels-photo-5325105.jpeg",
      },
    ],
  },
  {
    name: "Motherboard Model A",
    image:
      "https://images.pexels.com/photos/163170/board-printed-circuit-board-computer-electronics-163170.jpeg",
    category: "Motherboard",
    price: 15000,
    status: "In Stock",
    rating: 4.5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quaerat molestiae accusamus incidunt cupiditate.",
    keyFeatures: {
      brand: "Brand X",
      model: "Model ABC",
      formFactor: "Micro ATX",
      socket: "Socket LGA1200",
      RAMSlots: "2",
      maxRAM: "32GB",
      connectors: "USB 3.0, DisplayPort, PCIe x16",
    },
    individualRating: 4.3,
    averageRating: 4.5,
    reviews: [
      {
        username: "user123",
        rating: 5,
        comment: "Excellent performance and value for money.",
        userProfile:
          "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg",
      },
      {
        username: "user456",
        rating: 4.5,
        comment: "Good features, easy to install.",
        userProfile:
          "https://images.pexels.com/photos/5490235/pexels-photo-5490235.jpeg",
      },
    ],
  },
  {
    name: "Motherboard Model B",
    image: "https://images.pexels.com/photos/6755059/pexels-photo-6755059.jpeg",
    category: "Motherboard",
    price: 18000,
    status: "In Stock",
    rating: 4.8,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, distinctio fugit minus ullam.",
    keyFeatures: {
      brand: "Brand Y",
      model: "Model XYZ",
      formFactor: "ATX",
      socket: "Socket LGA1700",
      RAMSlots: "4",
      maxRAM: "128GB",
      connectors: "USB 3.2, HDMI, PCIe x16, Thunderbolt 4",
    },
    individualRating: 4.9,
    averageRating: 4.8,
    reviews: [
      {
        username: "user101",
        rating: 5,
        comment: "High-quality motherboard with impressive features.",
        userProfile:
          "https://images.pexels.com/photos/10057618/pexels-photo-10057618.jpeg",
      },
      {
        username: "user202",
        rating: 4.5,
        comment: "Fast delivery and great customer service.",
        userProfile:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      },
      {
        username: "user303",
        rating: 5,
        comment: "Easy BIOS update process.",
        userProfile:
          "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg",
      },
    ],
  },
  {
    name: "Motherboard Model C",
    image: "https://images.pexels.com/photos/6755077/pexels-photo-6755077.jpeg",
    category: "Motherboard",
    price: 13500,
    status: "In Stock",
    rating: 4.2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, corrupti molestias cum explicabo.",
    keyFeatures: {
      brand: "Brand Z",
      model: "Model PQR",
      formFactor: "Mini ITX",
      socket: "Socket TR4",
      RAMSlots: "2",
      maxRAM: "64GB",
      connectors: "USB 3.1 Gen 2, DisplayPort, PCIe x16",
    },
    individualRating: 4.0,
    averageRating: 4.2,
    reviews: [
      {
        username: "user789",
        rating: 4,
        comment: "Compact design, fits well in small cases.",
        userProfile:
          "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg",
      },
      {
        username: "user987",
        rating: 4.5,
        comment: "Reliable performance for a mini ITX build.",
        userProfile:
          "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg",
      },
    ],
  },
  {
    name: "Motherboard Model D",
    image: "https://images.pexels.com/photos/6755078/pexels-photo-6755078.jpeg",
    category: "Motherboard",
    price: 9900,
    status: "In Stock",
    rating: 3.9,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, minima odio iusto facere.",
    keyFeatures: {
      brand: "Brand A",
      model: "Model LMN",
      formFactor: "EATX",
      socket: "Socket AM4",
      RAMSlots: "8",
      maxRAM: "128GB",
      connectors: "USB 2.0, HDMI, PCIe x16",
    },
    individualRating: 3.7,
    averageRating: 3.9,
    reviews: [
      {
        username: "user246",
        rating: 4,
        comment: "Decent features for the price.",
        userProfile:
          "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg",
      },
      {
        username: "user135",
        rating: 3.5,
        comment: "Not enough USB ports for my needs.",
        userProfile:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      },
    ],
  },

  {
    name: "RAM Module 8GB",
    image: "https://images.pexels.com/photos/2588756/pexels-photo-2588756.jpeg",
    category: "RAM",
    price: 5000,
    status: "In Stock",
    rating: 4.2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita officiis numquam quaerat.",
    keyFeatures: {
      brand: "Brand A",
      model: "Model XYZ456",
      capacity: "8GB",
      speed: "DDR4-2400",
      type: "DIMM",
      CASLatency: "CL15",
      voltage: "1.2V",
    },
    individualRating: 4.3,
    averageRating: 4.2,
    reviews: [
      {
        username: "user123",
        rating: 4,
        comment: "Great value for the price.",
        userProfile:
          "https://images.pexels.com/photos/10057618/pexels-photo-10057618.jpeg",
      },
      {
        username: "user789",
        rating: 4.5,
        comment: "Works well with my system.",
        userProfile:
          "https://images.pexels.com/photos/5490235/pexels-photo-5490235.jpeg",
      },
    ],
  },
  {
    name: "RAM Module 32GB",
    image: "https://images.pexels.com/photos/2588757/pexels-photo-2588757.jpeg",
    category: "RAM",
    price: 12000,
    status: "In Stock",
    rating: 4.8,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque velit sequi alias magni.",
    keyFeatures: {
      brand: "Brand B",
      model: "Model DEF789",
      capacity: "32GB",
      speed: "DDR4-3600",
      type: "DIMM",
      CASLatency: "CL18",
      voltage: "1.4V",
    },
    individualRating: 4.9,
    averageRating: 4.8,
    reviews: [
      {
        username: "user567",
        rating: 5,
        comment: "High-performance RAM for heavy tasks.",
        userProfile:
          "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg",
      },
      {
        username: "user890",
        rating: 4.5,
        comment: "Faster than expected. Impressive!",
        userProfile:
          "https://images.pexels.com/photos/5490235/pexels-photo-5490235.jpeg",
      },
    ],
  },
  {
    name: "RAM Module 64GB",
    image: "https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg",
    category: "RAM",
    price: 22000,
    status: "In Stock",
    rating: 4.9,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae doloremque cupiditate nemo iusto.",
    keyFeatures: {
      brand: "Brand D",
      model: "Model GHI123",
      capacity: "64GB",
      speed: "DDR4-4000",
      type: "DIMM",
      CASLatency: "CL19",
      voltage: "1.35V",
    },
    individualRating: 5.0,
    averageRating: 4.9,
    reviews: [
      {
        username: "user987",
        rating: 5,
        comment: "Unbelievable speed and multitasking capabilities!",
        userProfile:
          "https://images.pexels.com/photos/10057618/pexels-photo-10057618.jpeg",
      },
      {
        username: "user654",
        rating: 4.8,
        comment: "Perfect for demanding applications.",
        userProfile:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      },
    ],
  },
  {
    name: "RAM Module 16GB",
    image:
      "https://images.pexels.com/photos/163140/technology-computer-motherboard-chips-163140.jpeg",
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
        username: "user234",
        rating: 5,
        comment: "Fast and reliable RAM.",
        userProfile:
          "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg",
      },
    ],
  },

  {
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
        username: "user567",
        rating: 4,
        comment: "Good value for money.",
        userProfile:
          "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg",
      },
    ],
  },
  {
    name: "Power Supply 600W",
    image: "https://images.pexels.com/photos/5408008/pexels-photo-5408008.jpeg",
    category: "Power Supply Unit",
    price: 7500,
    status: "In Stock",
    rating: 4.6,
    description:
      "High-performance 600W power supply for gaming and workstation PCs.",
    keyFeatures: {
      brand: "Brand X",
      model: "Model PS600",
      wattage: "600W",
      efficiency: "80 Plus Gold",
      modular: "Fully Modular",
      fanSize: "140mm",
      connectors: "ATX, PCIe, SATA, EPS",
    },
    individualRating: 4.5,
    averageRating: 4.6,
    reviews: [
      {
        username: "user123",
        rating: 4,
        comment: "Reliable and efficient power supply.",
        userProfile:
          "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg",
      },
      {
        username: "gamerGirl87",
        rating: 5,
        comment: "Handles my gaming rig perfectly.",
        userProfile:
          "https://images.pexels.com/photos/5490235/pexels-photo-5490235.jpeg",
      },
    ],
  },
  {
    name: "Power Supply 850W",
    image: "https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg",
    category: "Power Supply Unit",
    price: 10500,
    status: "In Stock",
    rating: 4.9,
    description:
      "High-power 850W PSU designed for extreme gaming and overclocking.",
    keyFeatures: {
      brand: "Brand Y",
      model: "Model PS850",
      wattage: "850W",
      efficiency: "80 Plus Platinum",
      modular: "Fully Modular",
      fanSize: "135mm",
      connectors: "ATX, PCIe, SATA, EPS",
    },
    individualRating: 4.9,
    averageRating: 4.9,
    reviews: [
      {
        username: "overclockMaster",
        rating: 5,
        comment: "Handles my overclocked system with ease.",
        userProfile:
          "https://images.pexels.com/photos/5490235/pexels-photo-5490235.jpeg",
      },
      {
        username: "gamingBeast101",
        rating: 5,
        comment: "Awesome PSU for high-end gaming rigs.",
        userProfile:
          "https://images.pexels.com/photos/10057618/pexels-photo-10057618.jpeg",
      },
    ],
  },
  {
    name: "Power Supply 500W",
    image: "https://images.pexels.com/photos/5408008/pexels-photo-5408008.jpeg",
    category: "Power Supply Unit",
    price: 5500,
    status: "In Stock",
    rating: 4.2,
    description:
      "Affordable and reliable 500W power supply for entry-level PCs.",
    keyFeatures: {
      brand: "Brand Z",
      model: "Model PS500",
      wattage: "500W",
      efficiency: "80 Plus White",
      modular: "Non-Modular",
      fanSize: "120mm",
      connectors: "ATX, PCIe, SATA",
    },
    individualRating: 4.2,
    averageRating: 4.2,
    reviews: [
      {
        username: "budgetBuilder",
        rating: 4,
        comment: "Great value for the price.",
        userProfile:
          "https://images.pexels.com/photos/10057618/pexels-photo-10057618.jpeg",
      },
      {
        username: "casualUser",
        rating: 4,
        comment: "Does the job for my basic PC.",
        userProfile:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      },
    ],
  },
  {
    name: "Power Supply 1000W",
    image: "https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg",
    category: "Power Supply Unit",
    price: 12500,
    status: "In Stock",
    rating: 4.8,
    description:
      "Extreme 1000W PSU for high-performance workstations and servers.",
    keyFeatures: {
      brand: "Brand W",
      model: "Model PS1000",
      wattage: "1000W",
      efficiency: "80 Plus Titanium",
      modular: "Fully Modular",
      fanSize: "140mm",
      connectors: "ATX, PCIe, SATA, EPS",
    },
    individualRating: 4.8,
    averageRating: 4.8,
    reviews: [
      {
        username: "serverAdmin",
        rating: 5,
        comment: "Perfect for my data center servers.",
        userProfile:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      },
      {
        username: "workstationPro",
        rating: 5,
        comment: "Reliable PSU for heavy workloads.",
        userProfile:
          "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg",
      },
    ],
  },

  {
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
        username: "user890",
        rating: 5,
        comment: "Blazing fast SSD!",
        userProfile:
          "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg",
      },
    ],
  },
  {
    name: "SSD 2TB",
    image: "https://images.pexels.com/photos/5222605/pexels-photo-5222605.jpeg",
    category: "Storage Device",
    price: 22000,
    status: "In Stock",
    rating: 4.8,
    description: "High-speed 2TB SSD for all your storage needs.",
    keyFeatures: {
      brand: "Brand X",
      model: "Model SSD2TB",
      capacity: "2TB",
      interface: "SATA III",
      formFactor: "2.5-inch",
      readSpeed: "560 MB/s",
      writeSpeed: "510 MB/s",
    },
    individualRating: 4.8,
    averageRating: 4.8,
    reviews: [
      {
        username: "user123",
        rating: 4,
        comment: "Good value for the price.",
        userProfile:
          "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg",
      },
      {
        username: "user456",
        rating: 5,
        comment: "Superb performance!",
        userProfile:
          "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg",
      },
    ],
  },
  {
    name: "External HDD 4TB",
    image: "https://images.pexels.com/photos/4526279/pexels-photo-4526279.jpeg",
    category: "Storage Device",
    price: 8000,
    status: "In Stock",
    rating: 4.5,
    description: "Large capacity external HDD for data backup and storage.",
    keyFeatures: {
      brand: "Brand Y",
      model: "Model HDD4TB",
      capacity: "4TB",
      interface: "USB 3.0",
      formFactor: "2.5-inch",
      transferSpeed: "120 MB/s",
    },
    individualRating: 4.5,
    averageRating: 4.5,
    reviews: [
      {
        username: "user789",
        rating: 4,
        comment: "Reliable and spacious storage.",
        userProfile:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      },
      {
        username: "user012",
        rating: 5,
        comment: "Great for backups!",
        userProfile:
          "https://images.pexels.com/photos/10057618/pexels-photo-10057618.jpeg",
      },
    ],
  },
  {
    name: "Memory Card 256GB",
    image: "https://images.pexels.com/photos/2644597/pexels-photo-2644597.jpeg",
    category: "Storage Device",
    price: 1200,
    status: "In Stock",
    rating: 4.2,
    description: "High-capacity memory card for cameras and mobile devices.",
    keyFeatures: {
      brand: "Brand Z",
      model: "Model MC256GB",
      capacity: "256GB",
      interface: "MicroSDXC",
      readSpeed: "100 MB/s",
      writeSpeed: "80 MB/s",
    },
    individualRating: 4.2,
    averageRating: 4.2,
    reviews: [
      {
        username: "user345",
        rating: 4,
        comment: "Works well with my camera.",
        userProfile:
          "https://images.pexels.com/photos/5490235/pexels-photo-5490235.jpeg",
      },
      {
        username: "user678",
        rating: 4,
        comment: "Decent speed for the price.",
        userProfile:
          "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg",
      },
    ],
  },
  {
    name: "RAID Array 12TB",
    image:
      "https://images.pexels.com/photos/33278/disc-reader-reading-arm-hard-drive.jpg",
    category: "Storage Device",
    price: 32000,
    status: "In Stock",
    rating: 4.7,
    description: "High-performance RAID storage system with 12TB capacity.",
    keyFeatures: {
      brand: "Brand A",
      model: "Model RAID12TB",
      capacity: "12TB",
      interface: "Thunderbolt 3",
      formFactor: "Desktop",
      transferSpeed: "1000 MB/s",
    },
    individualRating: 4.7,
    averageRating: 4.7,
    reviews: [
      {
        username: "user234",
        rating: 5,
        comment: "Impressive data transfer speed!",
        userProfile:
          "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg",
      },
      {
        username: "user567",
        rating: 4,
        comment: "Great for media professionals.",
        userProfile:
          "https://images.pexels.com/photos/5490235/pexels-photo-5490235.jpeg",
      },
    ],
  },

  {
    name: "Monitor HP 21",
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
        username: "user123",
        rating: 4,
        comment: "Great color reproduction!",
        userProfile:
          "https://images.pexels.com/photos/10057618/pexels-photo-10057618.jpeg",
      },
      {
        username: "user456",
        rating: 5,
        comment: "Excellent gaming monitor!",
        userProfile:
          "https://images.pexels.com/photos/5325105/pexels-photo-5325105.jpeg",
      },
    ],
  },
  {
    name: "Monitor HP 22",
    image: "https://images.pexels.com/photos/400678/pexels-photo-400678.jpeg",
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
        username: "user123",
        rating: 4,
        comment: "Great color reproduction!",
        userProfile:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      },
      {
        username: "user456",
        rating: 5,
        comment: "Excellent gaming monitor!",
        userProfile:
          "https://images.pexels.com/photos/10057618/pexels-photo-10057618.jpeg",
      },
    ],
  },
  {
    name: "Gaming Monitor XYZ",
    image: "https://images.pexels.com/photos/1999463/pexels-photo-1999463.jpeg",
    category: "Monitor",
    price: 25000,
    status: "In Stock",
    rating: 4.9,
    description:
      "This gaming monitor is designed for hardcore gamers, providing a smooth and immersive gaming experience.",
    keyFeatures: {
      brand: "Brand G",
      model: "Model ABC",
      displaySize: "32 inches",
      resolution: "3840x2160",
      refreshRate: "240Hz",
      panelType: "TN",
      responseTime: "0.5ms",
    },
    individualRating: 4.9,
    averageRating: 4.9,
    reviews: [
      {
        username: "gamer88",
        rating: 5,
        comment:
          "Best monitor I've ever owned! The high refresh rate is a game-changer.",
        userProfile:
          "https://images.pexels.com/photos/5490235/pexels-photo-5490235.jpeg",
      },
      {
        username: "masterGamer",
        rating: 4.8,
        comment: "Great value for the performance. Colors are vibrant.",
        userProfile:
          "https://images.pexels.com/photos/10057618/pexels-photo-10057618.jpeg",
      },
    ],
  },
  {
    name: "UltraWide Monitor X",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
    category: "Monitor",
    price: 18000,
    status: "In Stock",
    rating: 4.5,
    description:
      "Immerse yourself in productivity and entertainment with this ultrawide monitor, perfect for multitasking.",
    keyFeatures: {
      brand: "Brand U",
      model: "Model UVW",
      displaySize: "34 inches",
      resolution: "3440x1440",
      refreshRate: "100Hz",
      panelType: "VA",
      responseTime: "4ms",
    },
    individualRating: 4.7,
    averageRating: 4.5,
    reviews: [
      {
        username: "officeWorker",
        rating: 4.2,
        comment:
          "The wide screen is excellent for work, but I wish the refresh rate was higher.",
        userProfile:
          "https://images.pexels.com/photos/10057618/pexels-photo-10057618.jpeg",
      },
      {
        username: "entertainmentGeek",
        rating: 4.8,
        comment: "Movie watching is incredible on this monitor!",
        userProfile:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      },
    ],
  },
  {
    name: "Budget Monitor Lite",
    image: "https://images.pexels.com/photos/326508/pexels-photo-326508.jpeg",
    category: "Monitor",
    price: 8000,
    status: "In Stock",
    rating: 3.8,
    description:
      "An affordable monitor with decent performance, suitable for everyday use.",
    keyFeatures: {
      brand: "Brand B",
      model: "Model L",
      displaySize: "21.5 inches",
      resolution: "1920x1080",
      refreshRate: "60Hz",
      panelType: "TN",
      responseTime: "5ms",
    },
    individualRating: 3.5,
    averageRating: 3.8,
    reviews: [
      {
        username: "thriftyBuyer",
        rating: 3.5,
        comment:
          "For the price, it's a decent monitor. Don't expect top-tier performance though.",
        userProfile:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      },
      {
        username: "budgetGamer",
        rating: 4,
        comment: "Not the best for gaming, but it gets the job done.",
        userProfile:
          "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg",
      },
    ],
  },
  {
    name: "Professional Monitor Pro",
    image: "https://images.pexels.com/photos/89724/pexels-photo-89724.jpeg",
    category: "Monitor",
    price: 35000,
    status: "In Stock",
    rating: 4.6,
    description:
      "Designed for creative professionals, this monitor offers exceptional color accuracy and image quality.",
    keyFeatures: {
      brand: "Brand P",
      model: "Model CP",
      displaySize: "27 inches",
      resolution: "5120x2880",
      refreshRate: "75Hz",
      panelType: "IPS",
      responseTime: "2ms",
    },
    individualRating: 4.9,
    averageRating: 4.6,
    reviews: [
      {
        username: "graphicDesigner",
        rating: 4.8,
        comment: "The high resolution and color accuracy make my work easier.",
        userProfile:
          "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg",
      },
      {
        username: "photographerPro",
        rating: 4.5,
        comment:
          "This monitor elevates my photo editing process. Highly recommended!",
        userProfile:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      },
    ],
  },
];

export default products;
