import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FavoritarProvider } from "../contexts/FavoritarContext";

export function DefaultLayout() {
    return (
        <>
            <Header />
            <FavoritarProvider>
                <Outlet />
            </FavoritarProvider>
            <Footer />        
        </>
    )
}