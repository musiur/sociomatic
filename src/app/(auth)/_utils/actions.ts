"use server";

import { cookies } from "next/headers";

const BASEURL = process.env.BASEURL;
const FRONTEND_URL = process.env.FRONTEND_URL;

export const A___Auth__Login = async (data: { email: string, password: string }) => {
    try {
        const response = await fetch(`${BASEURL}/auth/signin`, {
            method: "POST",

            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });

        const result = await response.json();
        
        if (result?.success) {
            (await cookies()).set("token", result?.result?.token);
        }
        
        return result;

    } catch (error) {
        return {
            success: false,
            message: "Something went wrong"
        }
    }
}

export const A___Auth__Register = async (data: { email: string, password: string, phone: string }) => {
    try {
        const response = await fetch(`${BASEURL}/auth/signup`, {
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

export const A___Auth__Verify = async (email: string, token: string) => {
    try {
        const response = await fetch(`${BASEURL}/auth/verify`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({email})
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

