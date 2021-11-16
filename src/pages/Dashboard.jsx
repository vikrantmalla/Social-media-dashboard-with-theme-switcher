
import Overall from "../component/Overall"
import Details from "../component/Details"
import { ContentWrapper } from "../styles/Global"



const Dashboard = () => {


    return (
        <>
            <ContentWrapper>
                <Overall />
                <Details />
            </ContentWrapper>
        </>
    )
}

export default Dashboard
