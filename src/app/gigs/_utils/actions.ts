"use server";

export const Action___GET__VerifyPayment = async (sessionId: string) => {
    try {
        const response = await fetch(
            `/api/stripe/verify?session_id=${sessionId}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
        const data = await response.json();
        return data
    } catch (error) {
        return {
            success: false,
            message: "Failed to verify payment"
        }
    }
}