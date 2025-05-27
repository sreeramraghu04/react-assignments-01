import { Link } from "react-router-dom";

function ProfileCard({ contextData }) {
  return (
    <div className="min-h-screen flex items-center justify-center text-white mt-[-80px]">
      <div className="w-full max-w-md bg-blue-900 rounded">
        <figure className="mt-6 flex justify-center">
          <img
            className="rounded-2xl w-32 h-32 object-cover"
            src={contextData.avatar_url}
            alt="profile"
          />
        </figure>
        <div className="p-6 flex flex-col items-center text-center">
          <div className="w-full">
            <h1 className="mb-4 bg-black rounded p-3 text-lg sm:text-xl">
              Name : {contextData.name}
            </h1>
            <h2 className="mb-3 bg-black rounded p-3 text-base sm:text-lg underline">
              Username : {contextData.login}
            </h2>
            <h2 className="mb-3 bg-black rounded p-3 text-base sm:text-lg">
              Followers : {contextData.followers}
            </h2>
            <h2 className="mb-3 bg-black rounded p-3 text-base sm:text-lg">
              Following : {contextData.following}
            </h2>
          </div>
          <div className="mt-4 w-full">
            <Link
              to={contextData.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
                Go to Profile
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
