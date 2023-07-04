import React from "react";
import { Outlet } from "react-router-dom";
import BannerHome from "../Users/BannerHome";
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
