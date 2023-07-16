import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export async function fetchUser(fail: boolean) {
    if (fail) {
        console.log("🚀 ~ file: user.ts:6 ~ fetchUser ~ fail:", fail)
        throw new Error("Failed to fetch user");
    }
    const { data } = await axios.get("http://localhost:3000/api/user");
    return data;
}

export default function useUserService (fail = false) {
    console.log("🚀 ~ file: user.ts:13 ~ useUserService ~ fail:", fail)
    const userService = useQuery(["user"], () => {
        return fetchUser(fail);
    })
    return userService;
}