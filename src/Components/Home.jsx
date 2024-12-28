import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Home() {
  let Navigate = useNavigate();
  let [Categary, setCategary] = useState([
    {
      id: 1,
      name: "Electronics",
      image:
        "https://www.shutterstock.com/image-illustration/home-appliances-shopping-cart-ecommerce-600w-328915340.jpg",
      description: "Find the latest gadgets, devices, and tech accessories.",
    },
    {
      id: 2,
      name: "Fashion",
      image:
        "https://media.istockphoto.com/id/854321536/photo/look-at-this-gorgeous-dress.jpg?s=612x612&w=0&k=20&c=UyxEiEddYEFQPAoopwYs-_8xJ5vp0vKE0Sl3GnrQpK8=",
      description: "Stay stylish with the latest clothing and accessories.",
    },
    {
      id: 3,
      name: "Home Appliances",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHqSLqrC1KZsr2tcFX9fUecfxf01cMrcEoPw&s",
      description: "Upgrade your home with our top-of-the-line appliances.",
    },
    {
      id: 4,
      name: "Books",
      image:
        "https://media.istockphoto.com/id/1212483651/photo/stack-of-books-in-trolley-bookshop-concept.jpg?s=612x612&w=0&k=20&c=PiJ-o1La4fnPSOPn83FnSnkMvRwhyhDDeI-bIQdIPrM=",
      description: "Explore a world of knowledge with a variety of books.",
    },
    {
      id: 5,
      name: "Beauty & Personal Care",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKctyzan7lY0p7XuFDzhdNB2qpnAyrL2EEag&s",
      description: "Discover beauty and skincare products for a radiant you.",
    },
    {
      id: 6,
      name: "Sports & Fitness",
      image:
        "https://www.shutterstock.com/shutterstock/photos/2296205191/display_1500/stock-vector-set-of-d-vector-of-workout-gym-tools-sport-equipment-gym-time-concept-eps-vector-2296205191.jpg",
      description: "Stay active with sports gear and fitness equipment.",
    },
    {
      id: 7,
      name: "Toys & Games",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/028/535/140/small/many-colorful-toys-collection-on-the-desk-generative-ai-photo.jpg",
      description: "Fun and entertainment for kids of all ages.",
    },
    {
      id: 8,
      name: "Groceries",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4kVcUMzbBa12LpvEi2HAOiLNcj-KsZ7ebHQ&s",
      description: "Get fresh and organic groceries delivered to your door.",
    },
    {
      id: 9,
      name: "Automotive",
      image:
        "https://media.istockphoto.com/id/854321536/photo/look-at-this-gorgeous-dress.jpg?s=612x612&w=0&k=20&c=UyxEiEddYEFQPAoopwYs-_8xJ5vp0vKE0Sl3GnrQpK8=",
      description: "Find car accessories and vehicle maintenance products.",
    },
    {
      id: 10,
      name: "Health & Wellness",
      image:
        "https://www.shutterstock.com/image-illustration/home-appliances-shopping-cart-ecommerce-600w-328915340.jpg",
      description: "Stay healthy with vitamins, supplements, and more.",
    },
    {
      id: 11,
      name: "Automotive",
      image:
        "https://media.istockphoto.com/id/1212483651/photo/stack-of-books-in-trolley-bookshop-concept.jpg?s=612x612&w=0&k=20&c=PiJ-o1La4fnPSOPn83FnSnkMvRwhyhDDeI-bIQdIPrM=",
      description: "Find car accessories and vehicle maintenance products.",
    },
    {
      id: 12,
      name: "Health & Wellness",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4kVcUMzbBa12LpvEi2HAOiLNcj-KsZ7ebHQ&s",
      description: "Stay healthy with vitamins, supplements, and more.",
    },
  ]);

  return (
    <>
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 relative">
          {/* Image */}
          <img
            src="https://t3.ftcdn.net/jpg/03/20/68/66/360_F_320686681_Ur6vdYQgDC9WiijiVfxlRyQffxOgfeFz.jpg"
            alt="Shopping"
            className="mx-auto rounded-lg shadow-xl w-[90vw] h-[240px] object-cover"
          />

          {/* Text Overlapping the Image (Right side with padding-right) */}
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white px-6 py-4 w-[40%]">
            <h1 className="text-4xl font-extrabold text-indigo-600 mb-4 pr-5">
              Welcome to Shop.In
            </h1>
            <p className="text-lg font-medium leading-relaxed pt-2 pb-2 pr-5">
              Shop.In is your one-stop destination for all your shopping needs.
              From the latest electronics to trendy fashion, we provide a wide
              range of products to meet all your desires. Experience quality,
              affordability, and great customer service all in one place. Start
              shopping with us today and find the best deals just for you!
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {Categary.map((category) => (
            <div
              key={category.id}
              className="p-1 shadow-lg rounded-lg bg-gray-100 hover:shadow-xl transition duration-300"
            >
              <img
                src={category.image}
                alt={category.name}
                className="h-60 w-full object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-indigo-600 mb-2">
                {category.name}
              </h2>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <button
                onClick={() => Navigate(`Home/Products/${category.id}`)}
                className=" px-4 py-1 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
              >
                Show Products
              </button>
            </div>
          ))}
        </div>
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
