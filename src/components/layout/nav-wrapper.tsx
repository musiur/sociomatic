
import { cookies } from "next/headers";
import Navbar from "./navbar";

const NavWrapper = () => {
    const token = cookies().get("token")?.value;
    return <Navbar token={token} />
}

export default NavWrapper;