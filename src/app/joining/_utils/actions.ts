"use server";

const BaseURL = "https://sociomatic-backend.onrender.com";

export const GetOtp = async (email: string) => {
  try {
    const response = await fetch(`${BaseURL}/send-otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
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

export const VerifyOtp = async (otp: number) => {
  try {
    const response = await fetch(`${BaseURL}/verify-otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        otp,
      }),
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

export const FunnelFormAction = async (data: any) => {
    try {
      const response = await fetch(`${BaseURL}/funnel-form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
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
