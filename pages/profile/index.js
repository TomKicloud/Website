
export async function getStaticProps() {
    return {
        redirect: {
            destination: "/",
            permanent: true
        }
    }
};

const Profile = () => {
    return <div></div>;
};

export default Profile;