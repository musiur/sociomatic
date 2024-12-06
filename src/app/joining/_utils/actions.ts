"use server";
// @this variable should be in env in future while refactoring
const BASEURL = process.env.BASEURL;

export const GetOtp = async (email: string) => {
  try {
    const response = await fetch(`${BASEURL}/send-otp`, {
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

export const VerifyOtp = async (otp: number, email: string) => {
  try {
    const response = await fetch(`${BASEURL}/verify-otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        otp,
        email,
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
    const response = await fetch(`${BASEURL}/funnel-form`, {
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
