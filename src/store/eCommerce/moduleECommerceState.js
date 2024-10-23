/*=========================================================================================
  File Name: moduleEcommerceState.js
  Description: Ecommerce Module State
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

export default {
  cartItems: [
    {
      name: "Nikon - D810 DSLR Camera with AF-S NIKKOR 24-120mm f/4G ED VR Zoom Lens - Black",
      description:
        "Shoot arresting photos and 1080p high-definition videos with this Nikon D810 DSLR camera, which features a 36.3-megapixel CMOS sensor and a powerful EXPEED 4 processor for clear, detailed images. The AF-S NIKKOR 24-120mm lens offers shooting versatility. Memory card sold separately.",
      brand: "Nikon",
      categories: [
        "Cameras & Camcorders",
        "Digital Cameras",
        "Digital SLR Cameras",
        "DSLR Body & Lens",
      ],
      hierarchicalCategories: {
        lvl0: "Cameras & Camcorders",
        lvl1: "Cameras & Camcorders > Digital Cameras",
        lvl2: "Cameras & Camcorders > Digital Cameras > Digital SLR Cameras",
        lvl3: "Cameras & Camcorders > Digital Cameras > Digital SLR Cameras > DSLR Body & Lens",
      },
      type: "Dslr cameras",
      price: 4099.99,
      price_range: "> 2000",
      image: "https://cdn-demo.algolia.com/bestbuy-0118/3953409_sb.jpg",
      url: "https://api.bestbuy.com/click/-/3953409/pdp",
      free_shipping: true,
      rating: 4,
      popularity: 12311,
      objectID: "3953409",
      _highlightResult: {
        name: {
          value:
            "Nikon - D810 DSLR Camera with AF-S NIKKOR 24-120mm f/4G ED VR Zoom Lens - Black",
          matchLevel: "none",
          matchedWords: [],
        },
        description: {
          value:
            "Shoot arresting photos and 1080p high-definition videos with this Nikon D810 DSLR camera, which features a 36.3-megapixel CMOS sensor and a powerful EXPEED 4 processor for clear, detailed images. The AF-S NIKKOR 24-120mm lens offers shooting versatility. Memory card sold separately.",
          matchLevel: "none",
          matchedWords: [],
        },
        brand: { value: "Nikon", matchLevel: "none", matchedWords: [] },
        categories: [
          {
            value: "Cameras &amp; Camcorders",
            matchLevel: "none",
            matchedWords: [],
          },
          { value: "Digital Cameras", matchLevel: "none", matchedWords: [] },
          {
            value: "Digital SLR Cameras",
            matchLevel: "none",
            matchedWords: [],
          },
          {
            value: "DSLR Body &amp; Lens",
            matchLevel: "none",
            matchedWords: [],
          },
        ],
      },
      quantity: 1,
      discount_in_percentage: 13,
      offers_count: 4,
      delivery_date: "Wed Apr 10",
    },
    {
      name: 'Sony - 75" Class (74.5" diag) - LED - 2160p - Smart - 3D - 4K Ultra HD TV with High Dynamic Range - Black',
      description:
        "This Sony 4K HDR TV boasts 4K technology for vibrant hues. Its X940D series features a bold 75-inch screen and slim design. Wires remain hidden, and the unit is easily wall mounted. This television has a 4K Processor X1 and 4K X-Reality PRO for crisp video. This Sony 4K HDR TV is easy to control via voice commands.",
      brand: "Sony",
      categories: ["TV & Home Theater", "TVs", "4K Ultra HD TVs"],
      hierarchicalCategories: {
        lvl0: "TV & Home Theater",
        lvl1: "TV & Home Theater > TVs",
        lvl2: "TV & Home Theater > TVs > 4K Ultra HD TVs",
      },
      type: 'Mht 61"-100" tv\'s',
      price: 4499.99,
      price_range: "> 2000",
      image: "https://cdn-demo.algolia.com/bestbuy-0118/4803900_sb.jpg",
      url: "https://api.bestbuy.com/click/-/4803900/pdp",
      free_shipping: false,
      rating: 4,
      popularity: 20687,
      objectID: "4803900",
      _highlightResult: {
        name: {
          value:
            "Sony - 75&quot; Class (74.5&quot; diag) - LED - 2160p - Smart - 3D - 4K Ultra HD TV with High Dynamic Range - Black",
          matchLevel: "none",
          matchedWords: [],
        },
        description: {
          value:
            "This Sony 4K HDR TV boasts 4K technology for vibrant hues. Its X940D series features a bold 75-inch screen and slim design. Wires remain hidden, and the unit is easily wall mounted. This television has a 4K Processor X1 and 4K X-Reality PRO for crisp video. This Sony 4K HDR TV is easy to control via voice commands.",
          matchLevel: "none",
          matchedWords: [],
        },
        brand: { value: "Sony", matchLevel: "none", matchedWords: [] },
        categories: [
          {
            value: "TV &amp; Home Theater",
            matchLevel: "none",
            matchedWords: [],
          },
          { value: "TVs", matchLevel: "none", matchedWords: [] },
          { value: "4K Ultra HD TVs", matchLevel: "none", matchedWords: [] },
        ],
      },
      quantity: 1,
      discount_in_percentage: 5,
      offers_count: 2,
      delivery_date: "Wed Apr 13",
    },
    {
      name: "Beats by Dr. Dre - Geek Squad Certified Refurbished Beats Studio Wireless On-Ear Headphones - Red",
      description:
        "Rock out to your favorite songs with these Beats by Dr. Dre Beats Studio Wireless GS-MH8K2AM/A headphones that feature a Beats Acoustic Engine and DSP software for enhanced clarity. ANC (Adaptive Noise Cancellation) allows you to focus on your tunes.",
      brand: "Beats by Dr. Dre",
      categories: ["Audio", "Headphones", "All Headphones"],
      hierarchicalCategories: {
        lvl0: "Audio",
        lvl1: "Audio > Headphones",
        lvl2: "Audio > Headphones > All Headphones",
      },
      type: "Refurbished beats",
      price: 379.99,
      price_range: "200 - 500",
      image: "https://cdn-demo.algolia.com/bestbuy-0118/4784058_sb.jpg",
      url: "https://api.bestbuy.com/click/-/4784058/pdp",
      free_shipping: false,
      rating: 4,
      popularity: 15883,
      objectID: "4784058",
      _highlightResult: {
        name: {
          value:
            "<mark>Beats</mark> <mark>by</mark> <mark>Dr.</mark> Dre - Geek Squad Certified Refurbished <mark>Beats</mark> Studio Wireless On-Ear Headphones - Red",
          matchLevel: "full",
          fullyHighlighted: false,
          matchedWords: ["beats", "by", "dr"],
        },
        description: {
          value:
            "Rock out to your favorite songs with these <mark>Beats</mark> <mark>by</mark> <mark>Dr.</mark> Dre <mark>Beats</mark> Studio Wireless GS-MH8K2AM/A headphones that feature a <mark>Beats</mark> Acoustic Engine and DSP software for enhanced clarity. ANC (Adaptive Noise Cancellation) allows you to focus on your tunes.",
          matchLevel: "full",
          fullyHighlighted: false,
          matchedWords: ["beats", "by", "dr"],
        },
        brand: {
          value: "<mark>Beats</mark> <mark>by</mark> <mark>Dr.</mark> Dre",
          matchLevel: "full",
          fullyHighlighted: false,
          matchedWords: ["beats", "by", "dr"],
        },
        categories: [
          { value: "Audio", matchLevel: "none", matchedWords: [] },
          { value: "Headphones", matchLevel: "none", matchedWords: [] },
          { value: "All Headphones", matchLevel: "none", matchedWords: [] },
        ],
      },
      quantity: 1,
      discount_in_percentage: 12,
      offers_count: 3,
      delivery_date: "Wed Apr 9",
    },
    {
      name: "Sony - PlayStation 4 Pro Console",
      description:
        "PS4 Pro Dynamic 4K Gaming & 4K Entertainment* PS4 Pro gets you closer to your game. Heighten your experiences. Enrich your adventures. Let the super-charged PS4 Pro lead the way.** GREATNESS AWAITS",
      brand: "Sony",
      categories: ["Video Games", "PlayStation 4", "PS4 Consoles"],
      hierarchicalCategories: {
        lvl0: "Video Games",
        lvl1: "Video Games > PlayStation 4",
        lvl2: "Video Games > PlayStation 4 > PS4 Consoles",
      },
      type: "Playstation 4 hw",
      price: 399.99,
      price_range: "200 - 500",
      image: "https://cdn-demo.algolia.com/bestbuy-0118/5388900_sb.jpg",
      url: "https://api.bestbuy.com/click/-/5388900/pdp",
      free_shipping: true,
      rating: 4,
      popularity: 21402,
      objectID: "5388900",
      _highlightResult: {
        name: {
          value: "<mark>Sony</mark> - <mark>Pla</mark>yStation 4 Pro Console",
          matchLevel: "full",
          fullyHighlighted: false,
          matchedWords: ["sony", "pla"],
        },
        description: {
          value:
            "PS4 Pro Dynamic 4K Gaming &amp; 4K Entertainment* PS4 Pro gets you closer to your game. Heighten your experiences. Enrich your adventures. Let the super-charged PS4 Pro lead the way.** GREATNESS AWAITS",
          matchLevel: "none",
          matchedWords: [],
        },
        brand: {
          value: "<mark>Sony</mark>",
          matchLevel: "partial",
          fullyHighlighted: true,
          matchedWords: ["sony"],
        },
        categories: [
          { value: "Video Games", matchLevel: "none", matchedWords: [] },
          {
            value: "<mark>Pla</mark>yStation 4",
            matchLevel: "partial",
            fullyHighlighted: false,
            matchedWords: ["pla"],
          },
          { value: "PS4 Consoles", matchLevel: "none", matchedWords: [] },
        ],
      },
      quantity: 1,
      discount_in_percentage: 3,
      offers_count: 1,
      delivery_date: "Wed Apr 12",
    },
    {
      name: 'Apple - Macbook® (Latest Model) - 12" Display - Intel Core M5 - 8GB Memory - 512GB Flash Storage - Space Gray',
      description:
        "MacBook delivers a full-size experience in the lightest and most compact Mac notebook ever. With a full-size keyboard, force-sensing trackpad, 12-inch Retina display,1 sixth-generation Intel Core M processor, multifunctional USB-C port, and now up to 10 hours of battery life,2 MacBook features big thinking in an impossibly compact form.",
      brand: "Apple",
      categories: ["Computers & Tablets", "Laptops", "All Laptops", "MacBooks"],
      hierarchicalCategories: {
        lvl0: "Computers & Tablets",
        lvl1: "Computers & Tablets > Laptops",
        lvl2: "Computers & Tablets > Laptops > All Laptops",
        lvl3: "Computers & Tablets > Laptops > All Laptops > MacBooks",
      },
      type: "Apple",
      price: 1599.99,
      price_range: "500 - 2000",
      image: "https://cdn-demo.algolia.com/bestbuy-0118/5229600_sb.jpg",
      url: "https://api.bestbuy.com/click/-/5229600/pdp",
      free_shipping: true,
      rating: 4,
      popularity: 19609,
      objectID: "5229600",
      _highlightResult: {
        name: {
          value:
            "<mark>Apple</mark> - Macbook® (Latest Model) - 12&quot; Display - Intel Core M5 - 8GB Memory - 512GB Flash Storage - Space Gray",
          matchLevel: "partial",
          fullyHighlighted: false,
          matchedWords: ["apple"],
        },
        description: {
          value:
            "MacBook delivers a full-size experience in the lightest and most compact Mac notebook ever. With a full-size keyboard, force-sensing trackpad, 12-inch Retina display,1 sixth-generation Intel Core M processor, multifunctional USB-C port, and now up to 10 hours of battery life,2 MacBook features big thinking in an impossibly compact form.",
          matchLevel: "none",
          matchedWords: [],
        },
        brand: {
          value: "<mark>Apple</mark>",
          matchLevel: "partial",
          fullyHighlighted: true,
          matchedWords: ["apple"],
        },
        categories: [
          {
            value: "Computers &amp; Tablets",
            matchLevel: "none",
            matchedWords: [],
          },
          {
            value: "<mark>Laptops</mark>",
            matchLevel: "partial",
            fullyHighlighted: true,
            matchedWords: ["laptop"],
          },
          {
            value: "All <mark>Laptops</mark>",
            matchLevel: "partial",
            fullyHighlighted: false,
            matchedWords: ["laptop"],
          },
          { value: "MacBooks", matchLevel: "none", matchedWords: [] },
        ],
      },
      quantity: 1,
      discount_in_percentage: 7,
      offers_count: 1,
      delivery_date: "Wed Apr 14",
    },
    {
      name: "Apple - Apple Watch Series 1 42mm Space Gray Aluminum Case Black Sport Band - Space Gray Aluminum",
      description:
        "Durable, lightweight aluminum cases in silver, space gray, gold, and rose gold. Sport Band in a variety of colors. All the features of the original Apple Watch, plus a new dual-core processor for faster performance. All models run watchOS 3. Requires an iPhone 5 or later.",
      brand: "Apple",
      categories: [
        "Wearable Technology",
        "Apple Watch",
        "Apple Watch Series 1",
      ],
      hierarchicalCategories: {
        lvl0: "Wearable Technology",
        lvl1: "Wearable Technology > Apple Watch",
        lvl2: "Wearable Technology > Apple Watch > Apple Watch Series 1",
      },
      type: "Standard apple watch",
      price: 299,
      price_range: "200 - 500",
      image: "https://cdn-demo.algolia.com/bestbuy-0118/5546604_sb.jpg",
      url: "https://api.bestbuy.com/click/-/5546604/pdp",
      free_shipping: true,
      rating: 4,
      popularity: 21419,
      objectID: "5546604",
      _highlightResult: {
        name: {
          value:
            "<mark>Apple</mark> - <mark>Apple</mark> Watch Series 1 42mm Space Gray Aluminum Case Black Sport Band - Space Gray Aluminum",
          matchLevel: "full",
          fullyHighlighted: false,
          matchedWords: ["apple"],
        },
        description: {
          value:
            "Durable, lightweight aluminum cases in silver, space gray, gold, and rose gold. Sport Band in a variety of colors. All the features of the original <mark>Apple</mark> Watch, plus a new dual-core processor for faster performance. All models run watchOS 3. Requires an iPhone 5 or later.",
          matchLevel: "full",
          fullyHighlighted: false,
          matchedWords: ["apple"],
        },
        brand: {
          value: "<mark>Apple</mark>",
          matchLevel: "full",
          fullyHighlighted: true,
          matchedWords: ["apple"],
        },
        categories: [
          {
            value: "Wearable Technology",
            matchLevel: "none",
            matchedWords: [],
          },
          {
            value: "<mark>Apple</mark> Watch",
            matchLevel: "full",
            fullyHighlighted: false,
            matchedWords: ["apple"],
          },
          {
            value: "<mark>Apple</mark> Watch Series 1",
            matchLevel: "full",
            fullyHighlighted: false,
            matchedWords: ["apple"],
          },
        ],
        type: {
          value: "Standard <mark>apple</mark> watch",
          matchLevel: "full",
          fullyHighlighted: false,
          matchedWords: ["apple"],
        },
      },
      quantity: 1,
      discount_in_percentage: 17,
      offers_count: 4,
      delivery_date: "Wed Apr 15",
    },
  ],
  wishList: [
    {
      name: 'Bowers & Wilkins - CM10 S2 Triple 6-1/2" 3-Way Floorstanding Speaker (Each) - Gloss Black',
      description:
        'Featuring triple 6-1/2" bass cones, a 6" midrange cone and a 1" tweeter, this Bowers & Wilkins CM10 S2 floorstanding speaker fills a large room with stunning, true-to-life audio. The tweeter-on-top design ensures studio-grade sound is emitted.',
      brand: "Bowers & Wilkins",
      categories: ["Audio", "Home Audio", "Speakers", "Floor Speakers"],
      hierarchicalCategories: {
        lvl0: "Audio",
        lvl1: "Audio > Home Audio",
        lvl2: "Audio > Home Audio > Speakers",
        lvl3: "Audio > Home Audio > Speakers > Floor Speakers",
      },
      type: "Mht floor speakers",
      price: 1999.98,
      price_range: "500 - 2000",
      image: "https://cdn-demo.algolia.com/bestbuy-0118/8434275_sb.jpg",
      url: "https://api.bestbuy.com/click/-/8434275/pdp",
      free_shipping: false,
      rating: 5,
      popularity: 17253,
      objectID: "8434275",
      _highlightResult: {
        name: {
          value:
            "Bowers &amp; Wilkins - CM10 S2 Triple 6-1/2&quot; 3-Way Floorstanding Speaker (Each) - Gloss Black",
          matchLevel: "none",
          matchedWords: [],
        },
        description: {
          value:
            "Featuring triple 6-1/2&quot; bass cones, a 6&quot; midrange cone and a 1&quot; tweeter, this Bowers &amp; Wilkins CM10 S2 floorstanding speaker fills a large room with stunning, true-to-life audio. The tweeter-on-top design ensures studio-grade sound is emitted.",
          matchLevel: "none",
          matchedWords: [],
        },
        brand: {
          value: "Bowers &amp; Wilkins",
          matchLevel: "none",
          matchedWords: [],
        },
        categories: [
          { value: "Audio", matchLevel: "none", matchedWords: [] },
          { value: "Home Audio", matchLevel: "none", matchedWords: [] },
          { value: "Speakers", matchLevel: "none", matchedWords: [] },
          { value: "Floor Speakers", matchLevel: "none", matchedWords: [] },
        ],
      },
    },
    {
      name: "Samsung - Chef Collection 34.3 Cu. Ft. 4-Door Flex French Door Refrigerator with Thru-the-Door Ice and Water - Stainless Steel",
      description:
        "Samsung 34.3 Cu. Ft. Frost-Free 4-Door Flex French Door Refrigerator with Thru-the Door Ice and Water: Take the utmost care of your ingredients, and keep them all organized, with this ultralarge-capacity Chef Collection refrigerator. It features 2 compressors, 3 evaporators and 4 temperature zones, keeping foods at their optimum temperature for freshness and flavor.",
      brand: "Samsung",
      categories: ["Appliances", "Refrigerators", "All Refrigerators"],
      hierarchicalCategories: {
        lvl0: "Appliances",
        lvl1: "Appliances > Refrigerators",
        lvl2: "Appliances > Refrigerators > All Refrigerators",
      },
      type: "French door refrig",
      price: 4999.99,
      price_range: "> 2000",
      image: "https://cdn-demo.algolia.com/bestbuy-0118/4039001_sb.jpg",
      url: "https://api.bestbuy.com/click/-/4039001/pdp",
      free_shipping: false,
      rating: 4,
      popularity: 17400,
      objectID: "4039001",
      _highlightResult: {
        name: {
          value:
            "Samsung - Chef Collection 34.3 Cu. Ft. 4-Door Flex French Door Refrigerator with Thru-the-Door Ice and Water - Stainless Steel",
          matchLevel: "none",
          matchedWords: [],
        },
        description: {
          value:
            "Samsung 34.3 Cu. Ft. Frost-Free 4-Door Flex French Door Refrigerator with Thru-the Door Ice and Water: Take the utmost care of your ingredients, and keep them all organized, with this ultralarge-capacity Chef Collection refrigerator. It features 2 compressors, 3 evaporators and 4 temperature zones, keeping foods at their optimum temperature for freshness and flavor.",
          matchLevel: "none",
          matchedWords: [],
        },
        brand: { value: "Samsung", matchLevel: "none", matchedWords: [] },
        categories: [
          { value: "Appliances", matchLevel: "none", matchedWords: [] },
          { value: "Refrigerators", matchLevel: "none", matchedWords: [] },
          { value: "All Refrigerators", matchLevel: "none", matchedWords: [] },
        ],
      },
    },
    {
      name: "Canon - EOS 5D Mark IV DSLR Camera with 24-70mm f/4L IS USM Lens",
      description:
        "Shoot professional photos and videos with this Canon EOS 5D Mk V 24-70mm lens kit. A huge 30.4-megapixel full-frame sensor delivers outstanding image clarity, and 4K video is possible from this DSLR for powerful films. Ultra-precise autofocus and huge ISO ranges give you the images you want from this Canon EOS 5D Mk V 24-70mm lens kit.",
      brand: "Canon",
      categories: [
        "Cameras & Camcorders",
        "Digital Cameras",
        "Digital SLR Cameras",
        "DSLR Body & Lens",
      ],
      hierarchicalCategories: {
        lvl0: "Cameras & Camcorders",
        lvl1: "Cameras & Camcorders > Digital Cameras",
        lvl2: "Cameras & Camcorders > Digital Cameras > Digital SLR Cameras",
        lvl3: "Cameras & Camcorders > Digital Cameras > Digital SLR Cameras > DSLR Body & Lens",
      },
      type: "Dslr cameras",
      price: 4399.99,
      price_range: "> 2000",
      image: "https://cdn-demo.algolia.com/bestbuy-0118/5578528_rb.jpg",
      url: "https://api.bestbuy.com/click/-/5578528/pdp",
      free_shipping: true,
      rating: 4,
      popularity: 16298,
      objectID: "5578528",
      _highlightResult: {
        name: {
          value:
            "Canon - EOS 5D Mark IV DSLR Camera with 24-70mm f/4L IS USM Lens",
          matchLevel: "none",
          matchedWords: [],
        },
        description: {
          value:
            "Shoot professional photos and videos with this Canon EOS 5D Mk V 24-70mm lens kit. A huge 30.4-megapixel full-frame sensor delivers outstanding image clarity, and 4K video is possible from this DSLR for powerful films. Ultra-precise autofocus and huge ISO ranges give you the images you want from this Canon EOS 5D Mk V 24-70mm lens kit.",
          matchLevel: "none",
          matchedWords: [],
        },
        brand: { value: "Canon", matchLevel: "none", matchedWords: [] },
        categories: [
          {
            value: "Cameras &amp; Camcorders",
            matchLevel: "none",
            matchedWords: [],
          },
          { value: "Digital Cameras", matchLevel: "none", matchedWords: [] },
          {
            value: "Digital SLR Cameras",
            matchLevel: "none",
            matchedWords: [],
          },
          {
            value: "DSLR Body &amp; Lens",
            matchLevel: "none",
            matchedWords: [],
          },
        ],
      },
    },
    {
      name: 'Apple - 27" iMac with Retina 5K display - Intel Core i7 - 32GB Memory - 2TB Fusion Drive - Silver',
      description:
        "With 14.7 million pixels, the 27-inch iMac with Retina 5K display is the most powerful iMac ever. It features quad-core Intel&#174; processors, the latest AMD graphics, 2TB Fusion Drive, and great built-in apps. All in the same ultrathin design that's just 5mm at the edge.",
      brand: "Apple",
      categories: ["Computers & Tablets", "All Desktops"],
      hierarchicalCategories: {
        lvl0: "Computers & Tablets",
        lvl1: "Computers & Tablets > All Desktops",
      },
      type: "Apple cpu's",
      price: 3199.99,
      price_range: "> 2000",
      image: "https://cdn-demo.algolia.com/bestbuy-0118/5622404_sb.jpg",
      url: "https://api.bestbuy.com/click/-/5622404/pdp",
      free_shipping: true,
      rating: 4,
      popularity: 16050,
      objectID: "5622404",
      _highlightResult: {
        name: {
          value:
            "Apple - 27&quot; iMac with Retina 5K display - Intel Core i7 - 32GB Memory - 2TB Fusion Drive - Silver",
          matchLevel: "none",
          matchedWords: [],
        },
        description: {
          value:
            "With 14.7 million pixels, the 27-inch iMac with Retina 5K display is the most powerful iMac ever. It features quad-core Intel® processors, the latest AMD graphics, 2TB Fusion Drive, and great built-in apps. All in the same ultrathin design that&#39;s just 5mm at the edge.",
          matchLevel: "none",
          matchedWords: [],
        },
        brand: { value: "Apple", matchLevel: "none", matchedWords: [] },
        categories: [
          {
            value: "Computers &amp; Tablets",
            matchLevel: "none",
            matchedWords: [],
          },
          { value: "All Desktops", matchLevel: "none", matchedWords: [] },
        ],
      },
    },
    {
      name: "Amazon - Fire TV Stick with Alexa Voice Remote - Black",
      description:
        "Enjoy smart access to videos, games and apps with this Amazon Fire TV stick. Its Alexa voice remote lets you deliver hands-free commands when you want to watch television or engage with other applications. With a quad-core processor, 1GB internal memory and 8GB of storage, this portable Amazon Fire TV stick works fast for buffer-free streaming.",
      brand: "Amazon",
      categories: ["TV & Home Theater", "Streaming Media Players"],
      hierarchicalCategories: {
        lvl0: "TV & Home Theater",
        lvl1: "TV & Home Theater > Streaming Media Players",
      },
      type: "Streaming media plyr",
      price: 39.99,
      price_range: "1 - 50",
      image: "https://cdn-demo.algolia.com/bestbuy-0118/5477500_sb.jpg",
      url: "https://api.bestbuy.com/click/-/5477500/pdp",
      free_shipping: false,
      rating: 4,
      popularity: 21469,
      objectID: "5477500",
      _highlightResult: {
        name: {
          value: "Amazon - Fire TV Stick with Alexa Voice Remote - Black",
          matchLevel: "none",
          matchedWords: [],
        },
        description: {
          value:
            "Enjoy smart access to videos, games and apps with this Amazon Fire TV stick. Its Alexa voice remote lets you deliver hands-free commands when you want to watch television or engage with other applications. With a quad-core processor, 1GB internal memory and 8GB of storage, this portable Amazon Fire TV stick works fast for buffer-free streaming.",
          matchLevel: "none",
          matchedWords: [],
        },
        brand: { value: "Amazon", matchLevel: "none", matchedWords: [] },
        categories: [
          {
            value: "TV &amp; Home Theater",
            matchLevel: "none",
            matchedWords: [],
          },
          {
            value: "Streaming Media Players",
            matchLevel: "none",
            matchedWords: [],
          },
        ],
        type: {
          value: "Streaming media plyr",
          matchLevel: "none",
          matchedWords: [],
        },
      },
    },
    {
      name: 'Alienware - 17.3" Laptop - Intel Core i7 - 16GB Memory - NVIDIA GeForce GTX 1070 - 1TB Hard Drive + 128GB Solid State Drive - Silver',
      description:
        "Alienware Laptop: Bring video games to life with this 17.3-inch Dell Alienware laptop. It has a powerful quad-core Intel Core i7 processor and 16GB of DDR4 RAM to run modern games quickly, and its 1TB hard drive stores plenty of game and other files. This Dell Alienware laptop has a 2.1 speaker configuration with a subwoofer for a dynamic gaming experience.",
      brand: "Alienware",
      categories: ["Computers & Tablets", "Laptops"],
      hierarchicalCategories: {
        lvl0: "Computers & Tablets",
        lvl1: "Computers & Tablets > Laptops",
      },
      type: "Gaming laptops",
      price: 1999.99,
      price_range: "500 - 2000",
      image: "https://cdn-demo.algolia.com/bestbuy-0118/5713010_sb.jpg",
      url: "https://api.bestbuy.com/click/-/5713010/pdp",
      free_shipping: false,
      rating: 0,
      popularity: 14033,
      objectID: "5713010",
      _highlightResult: {
        name: {
          value:
            "<mark>Alien</mark>ware - 17.3&quot; Laptop - Intel Core i7 - 16GB Memory - NVIDIA GeForce GTX 1070 - 1TB Hard Drive + 128GB Solid State Drive - Silver",
          matchLevel: "full",
          fullyHighlighted: false,
          matchedWords: ["alien"],
        },
        description: {
          value:
            "<mark>Alien</mark>ware Laptop: Bring video games to life with this 17.3-inch Dell <mark>Alien</mark>ware laptop. It has a powerful quad-core Intel Core i7 processor and 16GB of DDR4 RAM to run modern games quickly, and its 1TB hard drive stores plenty of game and other files. This Dell <mark>Alien</mark>ware laptop has a 2.1 speaker configuration with a subwoofer for a dynamic gaming experience.",
          matchLevel: "full",
          fullyHighlighted: false,
          matchedWords: ["alien"],
        },
        brand: {
          value: "<mark>Alien</mark>ware",
          matchLevel: "full",
          fullyHighlighted: false,
          matchedWords: ["alien"],
        },
        categories: [
          {
            value: "Computers &amp; Tablets",
            matchLevel: "none",
            matchedWords: [],
          },
          { value: "Laptops", matchLevel: "none", matchedWords: [] },
        ],
      },
    },
    {
      name: "Garmin - fenix 3 Sapphire GPS Watch - Silver",
      description:
        "This Garmin fenix 3 Sapphire GPS watch comes with a titanium bezel and band, providing style and strength. This watch is waterproof up to 100m, and it comes with state-of-the-art fitness training features such as advanced running dynamics with vertical oscillation and vertical ratio. Track your activity and stay fit with the Garmin fenix 3 Sapphire GPS watch.",
      brand: "Garmin",
      categories: ["Health, Fitness & Beauty", "Fitness & GPS Watches"],
      hierarchicalCategories: {
        lvl0: "Health, Fitness & Beauty",
        lvl1: "Health, Fitness & Beauty > Fitness & GPS Watches",
      },
      type: "",
      price: 649.99,
      price_range: "500 - 2000",
      image: "https://cdn-demo.algolia.com/bestbuy-0118/4922801_sb.jpg",
      url: "https://api.bestbuy.com/click/-/4922801/pdp",
      free_shipping: true,
      rating: 4,
      popularity: 12115,
      objectID: "4922801",
      _highlightResult: {
        name: {
          value: "Garmin - fenix 3 Sapphire GPS Watch - Silver",
          matchLevel: "none",
          matchedWords: [],
        },
        description: {
          value:
            "This Garmin fenix 3 Sapphire GPS watch comes with a titanium bezel and band, providing style and strength. This watch is waterproof up to 100m, and it comes with state-of-the-art fitness training features such as advanced running dynamics with vertical oscillation and vertical ratio. Track your activity and stay fit with the Garmin fenix 3 Sapphire GPS watch.",
          matchLevel: "none",
          matchedWords: [],
        },
        brand: { value: "Garmin", matchLevel: "none", matchedWords: [] },
        categories: [
          {
            value: "Health, Fitness &amp; Beauty",
            matchLevel: "none",
            matchedWords: [],
          },
          {
            value: "Fitness &amp; GPS Watches",
            matchLevel: "none",
            matchedWords: [],
          },
        ],
      },
    },
    {
      name: "Garmin - fēnix 5 GPS Heart Rate Monitor Watch - Slate gray",
      description:
        "Map your adventure with this Garmin Fenix 5 GPS watch. Built-in navigation lets you know where you are when hiking or camping, and integrated Wi-Fi connects to the Garmin Connect to track your fitness level and daily steps. This Garmin Fenix 5 GPS watch is water-resistant up to 100m for use in wet conditions.",
      brand: "Garmin",
      categories: ["Health, Fitness & Beauty", "Fitness & GPS Watches"],
      hierarchicalCategories: {
        lvl0: "Health, Fitness & Beauty",
        lvl1: "Health, Fitness & Beauty > Fitness & GPS Watches",
      },
      type: "Monitoring devices",
      price: 599.99,
      price_range: "500 - 2000",
      image: "https://cdn-demo.algolia.com/bestbuy-0118/5714479_sb.jpg",
      url: "https://api.bestbuy.com/click/-/5714479/pdp",
      free_shipping: false,
      rating: 0,
      popularity: 12534,
      objectID: "5714479",
      _highlightResult: {
        name: {
          value: "Garmin - fēnix 5 GPS Heart Rate Monitor Watch - Slate gray",
          matchLevel: "none",
          matchedWords: [],
        },
        description: {
          value:
            "Map your adventure with this Garmin Fenix 5 GPS watch. Built-in navigation lets you know where you are when hiking or camping, and integrated Wi-Fi connects to the Garmin Connect to track your fitness level and daily steps. This Garmin Fenix 5 GPS watch is water-resistant up to 100m for use in wet conditions.",
          matchLevel: "none",
          matchedWords: [],
        },
        brand: { value: "Garmin", matchLevel: "none", matchedWords: [] },
        categories: [
          {
            value: "Health, Fitness &amp; Beauty",
            matchLevel: "none",
            matchedWords: [],
          },
          {
            value: "Fitness &amp; GPS Watches",
            matchLevel: "none",
            matchedWords: [],
          },
        ],
      },
    },
    {
      name: "Beats by Dr. Dre - Powerbeats2 Wireless Earbud Headphones - Black/Red",
      description:
        "Beats by Dr. Dre Powerbeats2: These workout headphones are crafted to keep up with your active routine. The no-slip design of the call answer button ensures phone calls won't be missed, and music can be easily cycled through.",
      brand: "Beats by Dr. Dre",
      categories: ["Audio", "Headphones", "Wireless Headphones"],
      hierarchicalCategories: {
        lvl0: "Audio",
        lvl1: "Audio > Headphones",
        lvl2: "Audio > Headphones > Wireless Headphones",
      },
      type: "Wireless in ears",
      price: 199.99,
      price_range: "100 - 200",
      image: "https://cdn-demo.algolia.com/bestbuy/5565002_sb.jpg",
      url: "http://www.bestbuy.com/site/beats-by-dr-dre-powerbeats2-wireless-earbud-headphones-black-red/5565002.p?id=1219139426902&skuId=5565002&cmp=RMX&ky=1uWSHMdQqBeVJB9cXgEke60s5EjfS6M1W",
      free_shipping: false,
      popularity: 9059,
      rating: 4,
      objectID: "5565002",
    },
    {
      name: "Asus - ROG Desktop - Intel Core i7 - 16GB Memory - Double NVIDIA GeForce GTX1080 - 1TB Hard Drive + 2x512GB Solid State Drive - Gray",
      description:
        "Place the sleek form of this ASUS desktop computer tower on your desk, and take your gaming to the next level. With Intel Core i7 processing inside, this speedy desktop keeps up with even multilayered action games. Nvidia graphics on this ASUS desktop computer help eliminate ghosting and stutter so you see every move your enemy makes.",
      brand: "Asus",
      categories: ["Video Games", "PC Gaming", "Virtual Reality for PC"],
      hierarchicalCategories: {
        lvl0: "Video Games",
        lvl1: "Video Games > PC Gaming",
        lvl2: "Video Games > PC Gaming > Virtual Reality for PC",
      },
      type: "",
      price: 4999.99,
      price_range: "> 2000",
      image: "https://cdn-demo.algolia.com/bestbuy-0118/5582501_sb.jpg",
      url: "https://api.bestbuy.com/click/-/5582501/pdp",
      free_shipping: false,
      rating: 1,
      popularity: 9684,
      objectID: "5582501",
      _highlightResult: {
        name: {
          value:
            "Asus - ROG Desktop - Intel Core i7 - 16GB Memory - Double NVIDIA GeForce GTX1080 - 1TB Hard Drive + 2x512GB Solid State Drive - Gray",
          matchLevel: "none",
          matchedWords: [],
        },
        description: {
          value:
            "Place the sleek form of this ASUS desktop computer tower on your desk, and take your gaming to the next level. With Intel Core i7 processing inside, this speedy desktop keeps up with even multilayered action games. Nvidia graphics on this ASUS desktop computer help eliminate ghosting and stutter so you see every move your enemy makes.",
          matchLevel: "none",
          matchedWords: [],
        },
        brand: { value: "Asus", matchLevel: "none", matchedWords: [] },
        categories: [
          { value: "Video Games", matchLevel: "none", matchedWords: [] },
          { value: "PC Gaming", matchLevel: "none", matchedWords: [] },
          {
            value: "Virtual Reality for PC",
            matchLevel: "none",
            matchedWords: [],
          },
        ],
      },
    },
    {
      name: "Sony - ZX Series On-Ear Headphones - Black",
      description:
        "These Sony ZX Series MDRZX110/BLK headphones feature neodymium magnets and 30mm drivers for powerful, reinforced sound. Enjoy your favorite songs with lush bass response thanks to the Acoustic Bass Booster technology.",
      brand: "Sony",
      categories: ["Audio", "Headphones", "On-Ear Headphones"],
      hierarchicalCategories: {
        lvl0: "Audio",
        lvl1: "Audio > Headphones",
        lvl2: "Audio > Headphones > On-Ear Headphones",
      },
      type: "On ear headphones",
      price: 19.99,
      price_range: "1 - 50",
      image: "https://cdn-demo.algolia.com/bestbuy-0118/8618232_sb.jpg",
      url: "https://api.bestbuy.com/click/-/8618232/pdp",
      free_shipping: true,
      rating: 4,
      popularity: 21400,
      objectID: "8618232",
      _highlightResult: {
        name: {
          value: "Sony - ZX Series On-Ear Headphones - Black",
          matchLevel: "none",
          matchedWords: [],
        },
        description: {
          value:
            "These Sony ZX Series MDRZX110/BLK headphones feature neodymium magnets and 30mm drivers for powerful, reinforced sound. Enjoy your favorite songs with lush bass response thanks to the Acoustic Bass Booster technology.",
          matchLevel: "none",
          matchedWords: [],
        },
        brand: { value: "Sony", matchLevel: "none", matchedWords: [] },
        categories: [
          { value: "Audio", matchLevel: "none", matchedWords: [] },
          { value: "Headphones", matchLevel: "none", matchedWords: [] },
          { value: "On-Ear Headphones", matchLevel: "none", matchedWords: [] },
        ],
        type: {
          value: "On ear headphones",
          matchLevel: "none",
          matchedWords: [],
        },
      },
    },
  ],
};
