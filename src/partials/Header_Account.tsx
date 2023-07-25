import { Tooltip } from "antd"
import { Link } from "react-router-dom"
import Image from "../components/Image/Image"
import { BiLogOut } from "react-icons/bi"
import { RiAccountCircleLine } from "react-icons/ri"

const UserAccount = () => {
    const UserAccount = localStorage.getItem("user")
    const account = [
        { title: "Detail Account", icon: <RiAccountCircleLine />, path: "/account" },
        { title: "Logout", icon: <BiLogOut />, path: "/", logout: true }
    ]


    return (
        <>

            <div className=" flex items-center ">
                {UserAccount ? (
                    <div className="w-10 h-10 ">
                        <Tooltip trigger={"click"} color={"white"}
                            overlayInnerStyle={{ width: "200px" }}
                            placement="bottom"
                            arrow={false}
                            getTooltipContainer={() => document.querySelector('.account-user') as HTMLElement}
                            title={
                                <div className="flex items-center ">
                                    <ul className="p-1 w-full">
                                        {account.map((item, index) => (
                                            <Link key={index} to={item.path}>
                                                <li className="hover:bg-gray-100 flex items-center gap-1  pl-1 pr-10 py-1 rounded-md">
                                                    <i className="text-xl text-teal-400">
                                                        {item.icon}
                                                    </i>
                                                    <span className="text-md text-black font-normal">{item.title}</span>
                                                </li>
                                            </Link>
                                        ))}


                                    </ul>
                                </div>
                            }

                        >
                            <Image className={"w-full h-full object-cover rounded-full cursor-pointer"} src={"https://i.pinimg.com/736x/33/28/0b/33280ba2ba4abd31695983a35c92b6da.jpg"} />
                        </Tooltip>

                    </div>
                ) : (
                    <div className="sigin_sigup">
                        <Link to={"/signup"}>    <button className="px-3 py-2 bg-teal-400 rounded-md text-white hover:bg-teal-500">Sign up now</button></Link>
                    </div>
                )

                }

            </div>

        </>
    )
}
export default UserAccount