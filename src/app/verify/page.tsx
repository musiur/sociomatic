import TokenVerify from "../(auth)/_utils/token-verify";


const VerifyPage = async (props: { searchParams: Promise<{ email: string, token: string }> }) => {
    const searchParams = await props.searchParams;
    return <TokenVerify email={searchParams.email} token={searchParams.token} />
}



export default VerifyPage;

