import { useState } from "react";
import Pages from "./components/Pages";
import axios from "axios";

function App() {
  const [Page, setPage] = useState([]);

  const FetchDetails = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products`);
    console.log(data);
    setPage(data);
  };

  useState(() => {
    FetchDetails();
  });

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-center items-center bg-gray-800 h-20 sm:h-20 text-white font-bold text-xl sm:text-2xl px-2">
        <h1>All Products</h1>
      </nav>

      {/* Content Grid */}
      <div className="bg-gray-300 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 p-4 sm:p-8">
        {Page.map((item) => (
          <div key={item.id} className="w-full sm:w-auto">
            <Pages item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
