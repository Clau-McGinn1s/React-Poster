import MainHeader from "../components/MainHeader";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loading from "../components/Loading";

function RootLayout(){
    return(
        <>
            < Suspense fallback={<Loading/>} >
                <MainHeader/>
                <Outlet />
            </Suspense>
        </>
    );
}

export default RootLayout;