import { BannerHome, BannerCaption, BannerCategory,HeaderHomeInfo } from "../components";
import Container from "./Container";
const HomePages = () => {

    return (
        <div>
            <BannerHome></BannerHome>
            <BannerCategory></BannerCategory> 
            <Container />
            <BannerCaption></BannerCaption>
            <HeaderHomeInfo />
        </div>
    );
};

export default HomePages;
