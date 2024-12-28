import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Produts({setcart}) {
  let { cate_id } = useParams();


  let [Product, setProduct] = useState([
    {
      id: 1,
      name: "Samsung 55-inch LED TV",
      description: "4K UHD Smart LED TV with HDR",
      image: "https://example.com/tv1.jpg",
    },
    {
      id: 1,
      name: "Sony 65-inch 4K TV",
      description: "Ultra HD LED Smart TV with Android OS",
      image: "https://example.com/tv2.jpg",
    },
    {
      id: 1,
      name: "LG OLED 77-inch TV",
      description: "OLED 4K TV with perfect black levels",
      image: "https://example.com/tv3.jpg",
    },
    {
      id: 1,
      name: "Samsung QLED 75-inch TV",
      description: "Quantum Dot Technology, 8K Resolution",
      image: "https://example.com/tv4.jpg",
    },
    {
      id: 1,
      name: "Vizio 50-inch 4K TV",
      description: "Affordable 4K UHD TV with SmartCast",
      image: "https://example.com/tv5.jpg",
    },
    {
      id: 1,
      name: "TCL 65-inch 6-Series TV",
      description: "4K UHD Smart TV with Roku built-in",
      image: "https://example.com/tv6.jpg",
    },
    {
      id: 1,
      name: "Sharp 60-inch LED TV",
      description: "Smart TV with HDR and Dolby Vision",
      image: "https://example.com/tv7.jpg",
    },
    {
      id: 1,
      name: "Panasonic 43-inch LED TV",
      description: "Full HD TV with rich color enhancement",
      image: "https://example.com/tv8.jpg",
    },
    {
      id: 1,
      name: "Apple MacBook Pro 14-inch",
      description: "M1 Pro chip, 16GB RAM, 512GB SSD",
      image: "https://example.com/laptop1.jpg",
    },
    {
      id: 1,
      name: "Dell XPS 13",
      description: "13-inch laptop with Intel Core i7, 16GB RAM",
      image: "https://example.com/laptop2.jpg",
    },
    {
      id: 1,
      name: "HP Spectre x360",
      description: "Convertible laptop with Intel Core i7",
      image: "https://example.com/laptop3.jpg",
    },
    {
      id: 1,
      name: "Asus ROG Zephyrus G14",
      description: "Gaming laptop with AMD Ryzen 9, 16GB RAM",
      image: "https://example.com/laptop4.jpg",
    },
    {
      id: 1,
      name: "Microsoft Surface Laptop 4",
      description: "13.5-inch touchscreen laptop with Intel Core i5",
      image: "https://example.com/laptop5.jpg",
    },
    {
      id: 1,
      name: "Lenovo ThinkPad X1 Carbon",
      description: "14-inch, Intel Core i5, 8GB RAM, 512GB SSD",
      image: "https://example.com/laptop6.jpg",
    },
    {
      id: 1,
      name: "Sony WH-1000XM4",
      description: "Wireless noise-canceling over-ear headphones",
      image: "https://example.com/headphones1.jpg",
    },
    {
      id: 1,
      name: "Bose QuietComfort 35 II",
      description: "Industry-leading noise cancellation and Alexa-enabled",
      image: "https://example.com/headphones2.jpg",
    },
    {
      id: 1,
      name: "Sennheiser Momentum 3",
      description:
        "Wireless noise-canceling headphones with high-fidelity sound",
      image: "https://example.com/headphones3.jpg",
    },
    {
      id: 1,
      name: "Beats Studio3 Wireless",
      description:
        "Active noise-canceling headphones with 22 hours of battery life",
      image: "https://example.com/headphones4.jpg",
    },
    {
      id: 1,
      name: "Jabra Elite 85h",
      description: "Smart noise-canceling headphones with 36-hour battery life",
      image: "https://example.com/headphones5.jpg",
    },
    {
      id: 1,
      name: "Apple iPhone 14 Pro Max",
      description: "6.7-inch OLED, A16 Bionic chip, 128GB storage",
      image: "https://example.com/iphone1.jpg",
    },
    {
      id: 1,
      name: "Samsung Galaxy S23 Ultra",
      description: "6.8-inch AMOLED display, Snapdragon 8 Gen 2",
      image: "https://example.com/galaxy1.jpg",
    },
    {
      id: 1,
      name: "Google Pixel 8 Pro",
      description: "5G smartphone with 120Hz OLED display",
      image: "https://example.com/pixel1.jpg",
    },
    {
      id: 2,
      name: "Men's Slim Fit Jeans",
      description: "Stretchable, slim fit, classic blue denim",
      image: "https://example.com/jeans1.jpg",
    },
    {
      id: 2,
      name: "Women's Leather Jacket",
      description: "Premium quality leather, stylish and comfortable",
      image: "https://example.com/jacket1.jpg",
    },
    {
      id: 2,
      name: "Black High Heels",
      description: "Elegant black high heels for evening wear",
      image: "https://example.com/shoes1.jpg",
    },
    {
      id: 2,
      name: "Casual White Sneakers",
      description: "Comfortable white sneakers for everyday use",
      image: "https://example.com/shoes2.jpg",
    },
    {
      id: 2,
      name: "Ray-Ban Sunglasses",
      description: "Classic aviator sunglasses with UV protection",
      image: "https://example.com/sunglasses1.jpg",
    },
    {
      id: 2,
      name: "Michael Kors Watch",
      description: "Luxury wristwatch with a stainless steel band",
      image: "https://example.com/watch1.jpg",
    },
    {
      id: 2,
      name: "Adidas Sports Hoodie",
      description: "Soft cotton hoodie for active wear",
      image: "https://example.com/hoodie1.jpg",
    },
    {
      id: 2,
      name: "Levi's Denim Jacket",
      description: "Iconic denim jacket with a relaxed fit",
      image: "https://example.com/jacket2.jpg",
    },
    {
      id: 2,
      name: "Gucci Handbag",
      description: "Luxury designer handbag in genuine leather",
      image: "https://example.com/handbag1.jpg",
    },
    {
      id: 2,
      name: "Nike Air Max 270",
      description: "Men's running shoes with breathable mesh",
      image: "https://example.com/shoes3.jpg",
    },
    {
      id: 2,
      name: "Women's Floral Dress",
      description: "Charming floral print dress, perfect for summer",
      image: "https://example.com/dress1.jpg",
    },
    {
      id: 2,
      name: "Burberry Trench Coat",
      description: "Classic trench coat with signature Burberry check pattern",
      image: "https://example.com/trenchcoat1.jpg",
    },
    {
      id: 2,
      name: "Tommy Hilfiger Polo Shirt",
      description: "Cotton polo shirt with classic logo detail",
      image: "https://example.com/polo1.jpg",
    },
    {
      id: 2,
      name: "Men's Black Turtleneck",
      description: "Soft, fitted black turtleneck sweater",
      image: "https://example.com/sweater1.jpg",
    },
    {
      id: 2,
      name: "Kate Spade Wallet",
      description: "Sleek leather wallet with multiple card slots",
      image: "https://example.com/wallet1.jpg",
    },
    {
      id: 2,
      name: "Chanel No. 5 Perfume",
      description: "Classic floral fragrance, timeless and elegant",
      image: "https://example.com/perfume1.jpg",
    },
    {
      id: 2,
      name: "H&M Cotton Shirt",
      description: "Lightweight, breathable shirt perfect for casual wear",
      image: "https://example.com/shirt1.jpg",
    },
    {
      id: 2,
      name: "BOSS Business Suit",
      description: "Tailored business suit with a modern fit",
      image: "https://example.com/suit1.jpg",
    },
    {
      id: 2,
      name: "Reebok Running Shoes",
      description: "Comfortable running shoes with cushioned sole",
      image: "https://example.com/shoes4.jpg",
    },
    {
      id: 3,
      name: "Samsung 4K Smart TV",
      description: "Ultra HD 4K Smart TV with built-in apps",
      image: "https://example.com/tv1.jpg",
    },
    {
      id: 3,
      name: "Dyson V11 Cordless Vacuum",
      description: "Powerful suction and advanced filtration for cleaning",
      image: "https://example.com/vacuum1.jpg",
    },
    {
      id: 3,
      name: "KitchenAid Stand Mixer",
      description: "Heavy-duty stand mixer with multiple attachments",
      image: "https://example.com/mixer1.jpg",
    },
    {
      id: 3,
      name: "Whirlpool Refrigerator",
      description:
        "Energy-efficient side-by-side refrigerator with water and ice dispenser",
      image: "https://example.com/fridge1.jpg",
    },
    {
      id: 3,
      name: "Ninja Foodi Pressure Cooker",
      description: "Versatile 9-in-1 pressure cooker and air fryer",
      image: "https://example.com/cooker1.jpg",
    },
    {
      id: 3,
      name: "Bose Soundbar 700",
      description: "Premium soundbar with Alexa voice control and deep bass",
      image: "https://example.com/soundbar1.jpg",
    },
    {
      id: 3,
      name: "iRobot Roomba 675",
      description: "Wi-Fi connected robot vacuum with 3-stage cleaning system",
      image: "https://example.com/roomba1.jpg",
    },
    {
      id: 3,
      name: "Breville Espresso Machine",
      description:
        "High-quality espresso machine with precise temperature control",
      image: "https://example.com/espresso1.jpg",
    },
    {
      id: 3,
      name: "GE Electric Range",
      description: "Modern electric range with convection oven",
      image: "https://example.com/range1.jpg",
    },
    {
      id: 3,
      name: "Philips Air Fryer",
      description: "Fat-free frying with rapid air technology",
      image: "https://example.com/airfryer1.jpg",
    },
    {
      id: 3,
      name: "Cuisinart Food Processor",
      description: "12-cup food processor with multiple blades and attachments",
      image: "https://example.com/foodprocessor1.jpg",
    },
    {
      id: 3,
      name: "Vitamix Blender",
      description: "High-powered blender for smoothies, soups, and more",
      image: "https://example.com/blender1.jpg",
    },
    {
      id: 3,
      name: "LG Washing Machine",
      description: "High-efficiency front-load washer with TurboWash",
      image: "https://example.com/washingmachine1.jpg",
    },
    {
      id: 3,
      name: "Keurig K-Elite Coffee Maker",
      description: "Single serve coffee brewer with strong brew setting",
      image: "https://example.com/coffeemaker1.jpg",
    },
    {
      id: 3,
      name: "Ecovacs Deebot X1",
      description: "Robot vacuum and mop with AI-driven navigation",
      image: "https://example.com/deebot1.jpg",
    },
    {
      id: 4,
      name: "The Great Gatsby",
      description: "A novel by F. Scott Fitzgerald about the American dream.",
      image: "https://example.com/gatsby.jpg",
    },
    {
      id: 4,
      name: "1984",
      description:
        "A dystopian novel by George Orwell exploring totalitarianism.",
      image: "https://example.com/1984.jpg",
    },
    {
      id: 4,
      name: "To Kill a Mockingbird",
      description:
        "A Pulitzer Prize-winning novel by Harper Lee about racial injustice.",
      image: "https://example.com/mockingbird.jpg",
    },
    {
      id: 4,
      name: "The Catcher in the Rye",
      description: "J.D. Salinger's novel about teenage angst and alienation.",
      image: "https://example.com/catcher.jpg",
    },
    {
      id: 4,
      name: "The Hobbit",
      description:
        "A fantasy novel by J.R.R. Tolkien, a prequel to 'The Lord of the Rings'.",
      image: "https://example.com/hobbit.jpg",
    },
    {
      id: 4,
      name: "Pride and Prejudice",
      description:
        "Jane Austen's classic novel about love, marriage, and society in early 19th-century England.",
      image: "https://example.com/pride.jpg",
    },
    {
      id: 4,
      name: "Harry Potter and the Sorcerer's Stone",
      description:
        "The first book in J.K. Rowling's famous Harry Potter series.",
      image: "https://example.com/harrypotter.jpg",
    },
    {
      id: 4,
      name: "The Alchemist",
      description:
        "A philosophical novel by Paulo Coelho about pursuing one's dreams.",
      image: "https://example.com/alchemist.jpg",
    },
    {
      id: 4,
      name: "Moby-Dick",
      description:
        "Herman Melville's epic tale of obsession and revenge aboard a whaling ship.",
      image: "https://example.com/mobydick.jpg",
    },
    {
      id: 4,
      name: "The Road",
      description:
        "A post-apocalyptic novel by Cormac McCarthy about survival and fatherhood.",
      image: "https://example.com/road.jpg",
    },
    {
      id: 4,
      name: "Sapiens: A Brief History of Humankind",
      description:
        "Yuval Noah Harari's exploration of human history from the Stone Age to the modern world.",
      image: "https://example.com/sapiens.jpg",
    },
    {
      id: 4,
      name: "The Hunger Games",
      description:
        "A dystopian novel by Suzanne Collins set in a future where children fight for survival.",
      image: "https://example.com/hungergames.jpg",
    },
    {
      id: 4,
      name: "The Diary of a Young Girl",
      description:
        "Anne Frank's poignant account of her life hiding from the Nazis.",
      image: "https://example.com/diary.jpg",
    },
    {
      id: 4,
      name: "The Shining",
      description:
        "Stephen King's horror novel about a haunted hotel and a man's descent into madness.",
      image: "https://example.com/shining.jpg",
    },
    {
      id: 4,
      name: "The Da Vinci Code",
      description:
        "A thriller by Dan Brown that blends history, art, and suspense.",
      image: "https://example.com/davinci.jpg",
    },
    {
      id: 5,
      name: "Olay Regenerist Retinol 24 Night Moisturizer",
      description:
        "A powerful anti-aging night cream with retinol and peptides.",
      image: "https://example.com/olay.jpg",
    },
    {
      id: 5,
      name: "L'Oreal Paris Revitalift Bright Reveal Brightening Peel Pads",
      description:
        "Exfoliating peel pads to reveal smoother and brighter skin.",
      image: "https://example.com/lorealpeel.jpg",
    },
    {
      id: 5,
      name: "Neutrogena Hydro Boost Water Gel",
      description:
        "Moisturizing gel that boosts hydration and locks it in for smooth skin.",
      image: "https://example.com/neutrogena.jpg",
    },
    {
      id: 5,
      name: "Fenty Beauty Pro Filt'r Soft Matte Longwear Foundation",
      description:
        "Long-lasting foundation with a soft matte finish in a wide shade range.",
      image: "https://example.com/fentyfoundation.jpg",
    },
    {
      id: 5,
      name: "CeraVe Hydrating Cleanser",
      description:
        "Gentle facial cleanser that helps restore the skin’s natural moisture balance.",
      image: "https://example.com/ceravecleanser.jpg",
    },
    {
      id: 5,
      name: "Maybelline New York Lash Sensational Mascara",
      description:
        "Mascara that provides full volume and length to lashes with a fanned-out look.",
      image: "https://example.com/maybellinemascara.jpg",
    },
    {
      id: 5,
      name: "The Ordinary Niacinamide 10% + Zinc 1%",
      description:
        "A serum to reduce the appearance of blemishes and congestion.",
      image: "https://example.com/theordinaryserum.jpg",
    },
    {
      id: 5,
      name: "Kiehl's Ultra Facial Cream",
      description:
        "Moisturizer that provides long-lasting hydration, leaving skin soft and smooth.",
      image: "https://example.com/kiehls.jpg",
    },
    {
      id: 5,
      name: "Tatcha The Water Cream",
      description:
        "Oil-free, anti-aging moisturizer that helps minimize pores and hydrates skin.",
      image: "https://example.com/tatcha.jpg",
    },
    {
      id: 5,
      name: "Drunk Elephant T.L.C. Sukari Babyfacial",
      description:
        "A facial mask that exfoliates and resurfaces the skin to reveal a radiant glow.",
      image: "https://example.com/drunkelephant.jpg",
    },
    {
      id: 5,
      name: "Lush Cosmetics Buffy Body Butter",
      description:
        "Exfoliating body butter that leaves skin smooth and moisturized.",
      image: "https://example.com/lushbodybutter.jpg",
    },
    {
      id: 5,
      name: "Estée Lauder Advanced Night Repair Synchronized Multi-Recovery Complex",
      description:
        "Anti-aging serum that works overnight to repair and hydrate skin.",
      image: "https://example.com/esteelauder.jpg",
    },
    {
      id: 5,
      name: "Aveda Damage Remedy Daily Hair Repair",
      description:
        "Leave-in treatment that strengthens and repairs damaged hair.",
      image: "https://example.com/aveda.jpg",
    },
    {
      id: 5,
      name: "Burt's Bees Beeswax Lip Balm",
      description: "Natural lip balm that moisturizes and nourishes dry lips.",
      image: "https://example.com/burtsbees.jpg",
    },
    {
      id: 5,
      name: "Pixi Glow Tonic",
      description:
        "Exfoliating toner with glycolic acid that gives a natural, healthy glow.",
      image: "https://example.com/pixiglowtonic.jpg",
    },
    {
      id: 6,
      name: "Nike Air Zoom Pegasus 39 Running Shoes",
      description:
        "Comfortable and lightweight running shoes with responsive cushioning.",
      image: "https://example.com/nike-running-shoes.jpg",
    },
    {
      id: 6,
      name: "Fitbit Charge 5 Fitness Tracker",
      description:
        "Advanced fitness tracker with built-in GPS and heart rate monitoring.",
      image: "https://example.com/fitbit-charge.jpg",
    },
    {
      id: 6,
      name: "Bowflex SelectTech 552 Adjustable Dumbbells",
      description:
        "Adjustable dumbbells that replace 15 sets of weights for space-saving convenience.",
      image: "https://example.com/bowflex-dumbbells.jpg",
    },
    {
      id: 6,
      name: "Peloton Bike+ with Screen",
      description:
        "High-tech indoor cycling bike with live and on-demand classes.",
      image: "https://example.com/peloton-bike.jpg",
    },
    {
      id: 6,
      name: "Under Armour Men's HeatGear Compression Shirt",
      description:
        "Compression shirt designed for comfort and moisture-wicking during workouts.",
      image: "https://example.com/under-armour-shirt.jpg",
    },
    {
      id: 6,
      name: "adidas Ultraboost 22 Running Shoes",
      description:
        "Premium running shoes with responsive cushioning and a sleek design.",
      image: "https://example.com/adidas-ultraboost.jpg",
    },
    {
      id: 6,
      name: "TRX Suspension Training Kit",
      description:
        "Full-body workout system for strength, flexibility, and balance training.",
      image: "https://example.com/trx-suspension.jpg",
    },
    {
      id: 6,
      name: "Manduka PRO Yoga Mat",
      description:
        "High-density, durable yoga mat with superior cushioning for comfort during yoga sessions.",
      image: "https://example.com/manduka-mat.jpg",
    },
    {
      id: 6,
      name: "Rogue Fitness Kettlebells",
      description:
        "Durable kettlebells designed for strength training and improving endurance.",
      image: "https://example.com/rogue-kettlebells.jpg",
    },
    {
      id: 6,
      name: "Polar H10 Heart Rate Monitor",
      description:
        "Precision heart rate monitor for fitness enthusiasts and athletes.",
      image: "https://example.com/polar-heart-rate.jpg",
    },
    {
      id: 6,
      name: "Everlast Heavy Bag Kit",
      description:
        "Complete punching bag kit for boxing training, including gloves and chains.",
      image: "https://example.com/everlast-bag.jpg",
    },
    {
      id: 6,
      name: "ProForm Treadmill",
      description:
        "High-quality treadmill with interactive touch screen and incline options.",
      image: "https://example.com/proform-treadmill.jpg",
    },
    {
      id: 6,
      name: "Nike Training Club Subscription",
      description:
        "Access to a variety of professional training programs for fitness at home.",
      image: "https://example.com/nike-training.jpg",
    },
    {
      id: 6,
      name: "JBL Flip 5 Bluetooth Portable Speaker",
      description:
        "Waterproof, portable speaker with great sound for outdoor workouts.",
      image: "https://example.com/jbl-flip5.jpg",
    },
    {
      id: 6,
      name: "Theragun Elite Massage Gun",
      description:
        "Percussive therapy device for muscle recovery and relaxation after workouts.",
      image: "https://example.com/theragun-elite.jpg",
    },
  ]);
  return (
    <>
      <div className="bg-teal-500 text-white py-16">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl font-bold mb-4">
            Explore Our Amazing Products
          </h1>
          <p className="text-lg mb-8">
            Discover a wide range of high-quality products across electronics,
            fashion, home appliances, and more. Shop now and find the best
            deals!
          </p>
          <button className="bg-gray-800 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg text-lg transition duration-300">
            Start Shopping
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6">
        {Product.filter((fil) => fil.id === Number(cate_id)).map((e) => (
          <div
            key={e.id}
            className="bg-white shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={e.image}
              alt={e.name}
              className="w-full h-48 object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {e.name}
              </h2>
              <p className="text-gray-600 mb-4">{e.description}</p>
             <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
             <button className=" py-2 px-4 bg-sky-600 text-white rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-indigo-800 transform hover:scale-105 focus:outline-none">
                Buy Now
              </button>
              <button className=" py-2 px-4 bg-green-600 text-white rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-indigo-800 transform hover:scale-105 focus:outline-none"
               onClick={()=>setcart( (prev) => [...prev, e])}
              >
                Add to Cart
              </button>
             </div>
            </div>
          </div>
        ))}
      </div>

      <footer className="bg-gray-800 text-white py-10 mt-10">
        <div className="container mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">About Shop.In</h3>
              <p className="text-gray-400 text-sm">
                Shop.In is your one-stop online store offering the best products
                for electronics, fashion, home appliances, and more. We aim to
                deliver quality and satisfaction with every purchase.
              </p>
            </div>

            {/* Useful Links Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/about"
                    className="text-gray-400 hover:text-indigo-500 transition duration-200"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-400 hover:text-indigo-500 transition duration-200"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy"
                    className="text-gray-400 hover:text-indigo-500 transition duration-200"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="text-gray-400 hover:text-indigo-500 transition duration-200"
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  className="text-gray-400 hover:text-indigo-500 transition duration-200"
                >
                  <i className="fab fa-facebook-f"></i>{" "}
                  {/* FontAwesome Icon for Facebook */}
                </a>
                <a
                  href="https://twitter.com"
                  className="text-gray-400 hover:text-indigo-500 transition duration-200"
                >
                  <i className="fab fa-twitter"></i>{" "}
                  {/* FontAwesome Icon for Twitter */}
                </a>
                <a
                  href="https://instagram.com"
                  className="text-gray-400 hover:text-indigo-500 transition duration-200"
                >
                  <i className="fab fa-instagram"></i>{" "}
                  {/* FontAwesome Icon for Instagram */}
                </a>
                <a
                  href="https://linkedin.com"
                  className="text-gray-400 hover:text-indigo-500 transition duration-200"
                >
                  <i className="fab fa-linkedin-in"></i>{" "}
                  {/* FontAwesome Icon for LinkedIn */}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Shop.In. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
