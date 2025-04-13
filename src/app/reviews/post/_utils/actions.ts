"use server"

import { T__SlugType } from "@/app/services/[slug]/page";
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
        const response = await fetch(`${BASEURL}/reviews`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            cache: "no-store"
        });
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
        const response = await fetch(`${BASEURL}/reviews/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            cache: "no-store"
        });
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

export const Action___Get__Review_By_Category = async (category: T__SlugType) => {
    try {
        const response = await fetch(`${BASEURL}/reviews/category/${category}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            cache: "no-store"
        });
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