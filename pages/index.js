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
      <p>{user?.userName ?? ":("}</p>
    </div>
  );
};

export default Home;
