import { useEffect, useState } from "react";
import useSWR from "swr";
import GetUserFromServer from "../../lib/getUser";
import withSession from "../../lib/session";

export const getServerSideProps = withSession(async function ({ req, res }) {
  let user = await GetUserFromServer(req, res);

  if (!user) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }
  return {
    props: { user },
  };
});

export default function PrayerRoom(props) {
  // TODO: Write wrapper for User.setpoints
  // Update points in useEffect cleanup
  const user = props.user;
  let [simplePrayers, setSimplePrayers] = useState(user.userPoints.prayers);
  let [meaningfulPrayers, setMeaningfulPrayers] = useState(
    user.userPoints.meaningfulPrayers
  );

  function commitPrayers() {
    fetch("/api/updatePoints", {
      method: "POST",
      body: JSON.stringify({
        userUUID: user.userUUID,
        amigoPoints: user.userPoints.amigoPoints,
        positivityPoints: user.userPoints.positivityPoints,
        prayers: simplePrayers,
        bowelsRelieved: user.userPoints.bowelsRelieved,
        meaningfulPrayers,
        user: null,
      }),
    })
      .then(() => { alert('Prayers Saved!')})
      .catch(() => {});
  }

  const incrementSimple = () => {
    setSimplePrayers((previous) => previous + 1);
  };
  const incrementMeaningful = () => {
    setMeaningfulPrayers((previous) => previous + 1);
  };

  return (
    <div className="pageContainer">
      <h1 className="pageTitle">Prayer Center:</h1>
      <div className="rounded-lg p-5 w-full md:w-1/3 bg-darkgray dark:bg-gray-700 text-white mt-20 m-auto shadow-lg flex flex-col gap-2">
        <h2 className="pageSubtitle text-center">Your Current Prayers:</h2>
        <div className="flexrow_sm_col gap-1 m-auto">
          <span className="profileStatsPre">Simple Prayers:</span>
          <span className="profileStatsText">{simplePrayers}</span>
        </div>
        <div className="flexrow_sm_col gap-1 m-auto">
          <span className="profileStatsPre">Meaningful Prayers:</span>
          <span className="profileStatsText">{meaningfulPrayers}</span>
        </div>
      </div>

      <div className="flex flex-col gap-5 place-items-center mt-32">
        <button
          onClick={incrementSimple}
          className="w-full md:w-1/2 text-center p-5 rounded-lg bg-green-900 bg-opacity-40 shadow-xl ring-2 ring-offset-2 ring-offset-green-800 ring-green-700 cursor-pointer hover:bg-green-900 hover:bg-opacity-100 transition"
        >
          Make a Simple Prayer
        </button>
        <button
          onClick={incrementMeaningful}
          className="w-full md:w-1/2 text-center p-5 rounded-lg bg-indigo-900 bg-opacity-40 shadow-xl ring-2 ring-offset-2 ring-offset-blue-800 ring-cyan-700 cursor-pointer hover:bg-blue-900 hover:bg-opacity-100 transition"
        >
          Make a Meaningful Prayer
        </button>

        <button
          onClick={commitPrayers}
          className="w-full md:w-1/2 text-center p-5 rounded-lg bg-indigo-900 bg-opacity-40 shadow-xl ring-2 ring-offset-2 ring-offset-blue-800 ring-cyan-700 cursor-pointer hover:bg-blue-900 hover:bg-opacity-100 transition"
        >
          Commit and Save Prayers
        </button>
      </div>
    </div>
  );
}
