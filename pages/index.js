import Head from "next/head";
import useUser from "../lib/useUser";

const Home = (props) => {
  const { user } = useUser({ redirectTo: "/auth/login" });

  return (
    <div>
      <Head>
        <title>Gary Portal</title>
        <meta name="description" content="Gary Portal Website" />
      </Head>

      <div className="px-5 pt-5 justify-center place-items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-darkgraylight shadow-lg rounded-xl pt-7 pb-5 px-3 col-span-2 py-10">
            <div className="flex flex-col md:flex-row place-items-center md:place-items-start">
              <img
                src={user?.userProfileImageUrl}
                className="rounded-full h-28 w-28 shadow-lg md:h-40 md:w-40"
              />
              <div className="flex flex-col px-5 place-items-center md:place-items-start">
                <h1 className="text-3xl font-bold pt-3 md:pt-0">{user?.userFullName}</h1>
                <h1 className="text-3xl pl-0 md:pl-0.5">{user?.userSpanishName}</h1>
                <h1 className="text-xl pl-0 md:pl-0.5 italic">@{user?.userName}</h1>
                <button class="mt-1 md:mt-5 p-3 px-5 text-base font-semibold focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200 rounded-xl block border-b border-purple-300 bg-purple-200 hover:bg-purple-300 text-purple-700">Staff Panel</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
