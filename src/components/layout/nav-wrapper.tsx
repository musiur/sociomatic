
import { cookies } from "next/headers";
import Navbar from "./navbar";

const NavWrapper = async () => {
    const token = (await cookies())?.get("token")?.value;
    return <Navbar token={token} />
}

export default NavWrapper;