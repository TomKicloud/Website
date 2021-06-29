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
            <div className="flexrow_sm_col">
              <img
                src={user?.userProfileImageUrl}
                className="rounded-full h-28 w-28 shadow-lg md:h-40 md:w-40"
              />
              <div className="flex flex-col px-5 place-items-center md:place-items-start">
                <h1 className="text-3xl font-bold pt-3 md:pt-0">
                  {user?.userFullName}
                </h1>
                <h1 className="text-3xl">{user?.userSpanishName}</h1>
                <h1 className="text-xl italic">@{user?.userName}</h1>
                <button class="mt-1 md:mt-5 p-3 px-5 text-base font-semibold focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200 rounded-xl block border-b border-purple-300 bg-purple-200 hover:bg-purple-300 text-purple-700">
                  Staff Panel
                </button>
              </div>
            </div>
          </div>

          <div className="profileCard row-span-2">
            <div className="flex flex-col place-items-center gap-4">
              <h1 className="text-3xl font-bold">Points:</h1>
              <hr />

              <h1 className="profilePointsText">
                AMIGO POINTS: {user?.userPoints?.amigoPoints?.toLocaleString()}
              </h1>
              <h1 className="profilePointsText">
                POSITIVE POINTS:{" "}
                {user?.userPoints?.positivityPoints?.toLocaleString()}
              </h1>
              <br />
              <h1 className="profilePointsText">
                PRAYERS: {user?.userPoints?.prayers?.toLocaleString()}
              </h1>
              <h1 className="profilePointsText">
                MEANINGFUL PRAYERS:{" "}
                {user?.userPoints?.meaningfulPrayers?.toLocaleString()}
              </h1>
            </div>
          </div>

          <div className="profileCard2  row-span-2">
            <div className="flex flex-col place-items-center gap-4">
              <h1 className="text-3xl font-bold">Statistics:</h1>
              <hr />
              <div className="flexrow_sm_col gap-1">
                <h1 className="profileStatsPre">Amigo Rank:</h1>
                <span className="profileStatsText">
                  {user?.userRanks?.amigoRank?.rankName}
                </span>
              </div>
              <div className="flexrow_sm_col gap-1">
                <h1 className="profileStatsPre flex-1">Positivity Rank:</h1>
                <span className="profileStatsText">
                  {user?.userRanks?.positivityRank?.rankName}
                </span>
              </div>
              <br />
              <div className="flexrow_sm_col gap-1">
                <h1 className="profileStatsPre">Team:</h1>
                <span className="profileStatsText">
                  {user?.userTeam?.team?.teamName}
                </span>
              </div>
              <div className="flexrow_sm_col gap-1">
                <h1 className="profileStatsPre">Team Standing:</h1>
                <span className="profileStatsText">{user?.userStanding}</span>
              </div>
            </div>
          </div>

          <div className="profileCard row-span-2">
            <div className="flex flex-col place-items-center gap-4">
              <h1 className="text-3xl font-bold">User Posts:</h1>
              <hr />

              <h1 className="profilePointsText">
                AMIGO POINTS: {user?.userPoints?.amigoPoints?.toLocaleString()}
              </h1>
              <h1 className="profilePointsText">
                POSITIVE POINTS:{" "}
                {user?.userPoints?.positivityPoints?.toLocaleString()}
              </h1>
            </div>
          </div>

          <div className="profileCard2 overflow-x-auto">
            <div className="flex flex-col place-items-center gap-4 overflow-x-auto">
              <h1 className="text-3xl font-bold">Misc:</h1>
              <hr />

              <div className="flex flex-row gap-5 max-w-full overflow-x-auto max-w-full">
                <div className="miscCard prayer">
                  <h1 className="cardName">Prayer Room</h1>
                  <div className="desc">
                    <span>For all your praying needs</span>
                  </div>
                </div>
                <div className="miscCard rules">
                  <h1 className="cardName">Rules &amp; Regulations</h1>
                  <div className="desc">
                    <span>The official Rules and Regulations of Gary Portal</span>
                  </div>
                </div>
                <div className="miscCard feedback">
                  <h1 className="cardName">Feedback</h1>
                  <div className="desc">
                    <span>Provide meaningful feedback to Al Himself</span>
                  </div>
                </div>
                <div className="miscCard computer">
                  <h1 className="cardName">Computer Dating</h1>
                  <div className="desc">
                    <span>Re-read the original prophecy</span>
                  </div>
                </div>
                <div className="miscCard settings">
                  <h1 className="cardName">Settings</h1>
                  <div className="desc">
                    <span>Modify your account settings</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
