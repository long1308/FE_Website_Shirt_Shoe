import React from "react";
import { Outlet } from "react-router-dom";
import BannerHome from "../Users/Banner/BannerHome";
import Sidebar from "../../partials/Admin/Sidebar";


type Props = object;

const AdminLayout = (props: Props) => {
    return (
        <div>
            <aside>
                <Sidebar />
            </aside>
            <BannerHome />
        </div>
    );
};

export default AdminLayout;
