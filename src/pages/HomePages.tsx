import { BannerCaption, BannerCategory, BannerHome } from "../components";
import Container from "./Container";
const HomePages = () => {
    return (
        <div>
            <BannerHome></BannerHome>
            <BannerCategory></BannerCategory>
            <Container />
            <BannerCaption></BannerCaption>
        </div>
    );
};

export default HomePages;
