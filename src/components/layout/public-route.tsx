import { cookies } from "next/headers"
import { redirect } from "next/navigation";
import { ReactElement } from "react"

const PublicRoute = ({ children }: { children: ReactElement }) => {
    const previousRoute = cookies().get("previousRoute")?.value || "";

    if (cookies().get("token")?.value) {
        redirect(previousRoute || "/dashboard");
    }
    return children
}

export default PublicRoute