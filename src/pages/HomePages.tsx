import { BannerHome } from "../components";
import { Iproduct } from "../interface/product";
import Container from "./Container";
import { useEffect } from 'react';
type Props = {
    products: Iproduct[];
}
const HomePages = ({ products }: Props) => {
    useEffect(() => {
        console.log(products);
    }, [products])
    return (
        <div>
            <BannerHome></BannerHome>
            <Container />
        </div>
    );
};

export default HomePages;
