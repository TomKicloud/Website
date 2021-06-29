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

      <div className="profileContainer">
        <div className="profileGrid">
          <div className="profileCard2">
            <div className="flexrow_sm_grid">
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

          <div className="profileCard row-span-2">
            <div className="flex flex-col place-items-center gap-4">
                <h1 className="text-3xl font-bold">Points:</h1>
                <hr/>

                <h1 className="profilePointsText">AMIGO POINTS: {user?.userPoints?.amigoPoints?.toLocaleString()}</h1>
                <h1 className="profilePointsText">POSITIVE POINTS: {user?.userPoints?.positivityPoints?.toLocaleString()}</h1>
                <br/>
                <h1 className="profilePointsText">PRAYERS: {user?.userPoints?.prayers?.toLocaleString()}</h1>
                <h1 className="profilePointsText">MEANINGFUL PRAYERS: {user?.userPoints?.meaningfulPrayers?.toLocaleString()}</h1>
            </div>
          </div>


        </div>

      </div>
    </div>
  );
};

export default Home;
