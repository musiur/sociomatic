"use server";

const BASEURL = process.env.BASEURL;
const FRONTEND_URL = process.env.FRONTEND_URL;

export const AuthLogin = async (data: { email: string, password: string }) => {
    try {
        const response = await fetch(`${BASEURL}/auth/login`, {
            method: "POST",

            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });

        const result = await response.json();

        return result;

    } catch (error) {
        return {
            success: false,
            message: "Something went wrong"
        }
    }
}

export const AuthRegister = async (data: { email: string, password: string, phone: string }) => {
    try {
        const response = await fetch(`${BASEURL}/auth/register`, {

            method: "POST",
            body: JSON.stringify({ ...data, host: FRONTEND_URL }),
            headers: {
                "Content-Type": "application/json"
            }

        });

        const result = await response.json();

        return result;
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong"
        }
    }
}

