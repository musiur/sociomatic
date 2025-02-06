import TokenVerify from "../(auth)/_utils/token-verify";


const VerifyPage = ({ searchParams }: { searchParams: { email: string, token: string } }) => {
    return <TokenVerify email={searchParams.email} token={searchParams.token} />
}



export default VerifyPage;

