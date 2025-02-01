import { useState } from "react";

export default function Login() {
  const [Data, setData] = useState([]);
  const [Fn, setFn] = useState("");
  const [Ln, setLn] = useState("");
  const [Mn, setMn] = useState("");
  const [Ad, setAd] = useState("");
  const [Id, setId] = useState("");

  function Userdata(e) {
    e.preventDefault();
    let obj = {
      First_Name: Fn,
      Last_Name: Ln,
      Mobile_number: Mn,
      Address: Ad,
      Id: Id,
    };
    setData([...Data, obj]);
    e.target.reset();
  }

  function DeleteData(id) {
    const IndexTodelete = Data.findIndex((item) => item.Id === id);
    if (IndexTodelete !== -1) {
      const updatedData = [
        ...Data.slice(0, IndexTodelete),
        ...Data.slice(IndexTodelete + 1),
      ];
      setData(updatedData);
    }
  }
  
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-lg w-full">
        <form onSubmit={Userdata} className="space-y-6 animate-fadeIn">
          <h2 className="text-2xl font-bold text-gray-700 text-center">Login Form</h2>

          <input
            
            onChange={(e) => setFn(e.target.value)}
            required
            type="text"
            placeholder="Enter your First Name"
            className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform hover:scale-105"
          />
          <input
            
            onChange={(e) => setLn(e.target.value)}
            required
            type="text"
            placeholder="Enter your Last Name"
            className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform hover:scale-105"
          />
          <input
            
            onChange={(e) => setMn(e.target.value)}
            required
            type="number"
            placeholder="Enter your Mobile No."
            className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform hover:scale-105"
          />
          <input
            
            onChange={(e) => setAd(e.target.value)}
            required
            type="text"
            placeholder="Enter your Address"
            className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform hover:scale-105"
          />
          <input
            
            onChange={(e) => setId(e.target.value)}
            required
            type="number"
            placeholder="Enter your Id"
            className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform hover:scale-105"
          />
          <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors shadow-md">Submit</button>
        </form>

        <div className="mt-8 space-y-4">
          {Data.map((e) => (
            <div key={e.Id} className="p-4 bg-gray-100 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 animate-slideIn">
              <h1 className="text-xl font-semibold">{e.First_Name} {e.Last_Name}</h1>
              <p>Mobile: {e.Mobile_number}</p>
              <p>Address: {e.Address}</p>
              <p>ID: {e.Id}</p>
              <button onClick={() => DeleteData(e.Id)} className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600">Delete</button>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-fadeIn { animation: fadeIn 0.7s ease-in-out; }
        .animate-slideIn { animation: slideIn 0.7s ease-in-out; }
      `}</style>
    </div>
  );
}
