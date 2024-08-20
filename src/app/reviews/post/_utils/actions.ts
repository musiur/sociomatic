"use server"

import { revalidatePath } from "next/cache";

const BASEURL = process.env.BASEURL;

export const Action___POST__Review = async (data: any) => {
    try {
        const response = await fetch(`${BASEURL}/reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        const result = await response.json();
        revalidatePath("/reviews/post")
        return result;
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong",
            error
        }
    }
}

export const Action___GET__AllReviews = async () => {
    try {
        const response = await fetch(`${BASEURL}/reviews`);
        const result = await response.json();
        return result;
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong",
            error
        }
    }
}

export const Action___GET__Review = async (id: string) => {
    try {
        const response = await fetch(`${BASEURL}/reviews/${id}`);
        const result = await response.json();
        return result;
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong",
            error
        }
    }
}

export const Action___PATCH__Review = async (id: string, data: any) => {
    try {
        const response = await fetch(`${BASEURL}/reviews/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        const result = await response.json();
        revalidatePath("/reviews/post")

        return result;
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong",
            error
        }
    }
}

export const Action___DELETE__Review = async (id: string) => {
    try {
        const response = await fetch(`${BASEURL}/reviews/${id}`, {
            method: "DELETE",
        })
        const result = await response.json();
        revalidatePath("/reviews/post")

        return result;
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong",
            error
        }
    }
}