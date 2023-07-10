import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
type Props = {
  name: string;
};
const Icon = ({ name }: Props) => {
  let IconComponent: any = null;
  switch (name) {
    case "AiOutlineHeart":
      IconComponent = AiOutlineHeart;
      break;
    case "FaRegEye":
      IconComponent = FaRegEye;
      break;
    case "RiDeleteBin6Line":
      IconComponent = RiDeleteBin6Line;
      break;
    case "AiOutlineShoppingCart":
      IconComponent = AiOutlineShoppingCart;
      break;
    default:
      return null;
  }
  return <IconComponent />;
};

export default Icon;
