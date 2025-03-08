"use server";
const BASEURL = process.env.BASEURL;

export const Action___POST__SendMail = async (payload: any, type: "contact" | "quote") => {
    try {
        const response = await fetch(`${BASEURL}/auth/receive-mail`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...payload, type }),
        });
        const result = await response.json();
        return result;
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong",
        };
    }

};

