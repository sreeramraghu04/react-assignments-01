import { useState } from "react";
import axios from "axios";
import ProfilePage from "./components/ProfilePage";

function App() {
  const [user, setUser] = useState("");
  const [userName, setUserName] = useState("");

  const FetchDetails = async (userName) => {
    const { data } = await axios.get(
      `https://api.github.com/users/${userName}`
    );

    setUser(data);
  };

  return (
    <div className="bg-black min-h-screen p-4">
      <div className="flex justify-center w-full">
        <div className="text-center text-2xl font-bold text-white border-2 w-full max-w-xs sm:max-w-md rounded mt-10 py-2">
          <h1>GitHub User Finder</h1>
        </div>
      </div>

      <div className="flex justify-center w-full mt-10">
        <div className="w-full max-w-md bg-white p-4 rounded shadow-md">
          <form
            className="flex flex-col sm:flex-row items-stretch gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              FetchDetails(userName);
            }}
          >
            <input
              type="text"
              placeholder="Enter the username..."
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="flex-1 border border-gray-300 rounded-md sm:rounded-l-md h-10 px-4"
            />
            <button
              type="submit"
              className="bg-blue-900 text-white px-6 py-2 rounded-md sm:rounded-r-md hover:bg-blue-800"
            >
              Get Data
            </button>
          </form>
        </div>
      </div>

      <div className="mt-5">{user && <ProfilePage contextData={user} />}</div>
    </div>
  );
}

export default App;
