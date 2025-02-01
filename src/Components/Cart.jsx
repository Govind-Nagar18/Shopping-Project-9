export default function Cart({ cart, setCart }) {
  if (cart.length === 0) {
    return (
      <h1 className="text-2xl font-semibold text-center mt-6">
        No items in cart
      </h1>
    );
  }

  function Handleclick(id)
  {
    let newcart = cart.filter((e) => e.unique_id !== id);
    setCart(newcart);
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6">
        {cart.map((e) => (
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
                <button className=" py-1 px-2 bg-sky-600 text-white rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-indigo-800 transform hover:scale-105 focus:outline-none">
                  Buy Now
                </button>
                <button className=" py-1 px-2 bg-green-600 text-white rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-indigo-800 transform hover:scale-105 focus:outline-none"
                 onClick={() => Handleclick(e.unique_id)}
                >
                  Remove Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
