import { useEffect } from "react";
import useSWR from "swr";
import Router from "next/router";

export default function useUser({
  redirectTo = false,
  redirectIfFound = false,
} = {}) {
    const { data: user, mutate: mutateUser} = useSWR("/api/user");
    console.log(user);
    useEffect(() => {
        if (!redirectTo || !user) return;

        if ((redirectTo && !redirectIfFound && !user?.isLoggedIn) || (redirectIfFound && user?.isLoggedIn)) {
            Router.push(redirectTo);
        }

    }, [user, redirectIfFound, redirectTo]);

    return { user, mutateUser };
}
