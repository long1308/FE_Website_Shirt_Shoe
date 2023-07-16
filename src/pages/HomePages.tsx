import { BannerHome, BannerCaption, BannerCategory } from "../components";
import Container from "./Container";
const HomePages = () => {

    return (
        <div>
            {/* <BannerHome></BannerHome>
            <BannerCategory></BannerCategory> */}
            <Container />
            <BannerCaption></BannerCaption>
        </div>
    );
};

export default HomePages;
