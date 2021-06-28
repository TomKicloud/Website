import { withIronSession } from "next-iron-session";

export default function withSession(handler) {
    return withIronSession(handler, {
        password: 'Eawsifp%Dh,]C-wBm!a%DQ!WheXd.V2xZ9^)B?var}!-gfyZs0E',
        cookieName: "nextIRONsession",
        cookieOptions: {
            secure: process.env.NODE_ENV === "production",
        }
    })
}