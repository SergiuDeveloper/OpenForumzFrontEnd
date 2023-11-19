import { getLoginCookie } from "@/auth/auth";
import { API_HOST } from "./constants";

export const registerUser = async () => {
    const loginCookie = getLoginCookie();

    try {
        const response = await fetch(
            `${API_HOST}/register`,
            {
                method: 'POST',
                headers: {
                    'AuthToken': loginCookie
                }
            }
        );
    } catch (err) {
        // User already exists
    }
}