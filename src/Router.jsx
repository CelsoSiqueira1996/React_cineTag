import { Route, Routes } from "react-router-dom";
import { Inicio } from "./pages/Inicio";
import { Favoritos } from "./pages/Favoritos";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Player } from "./pages/Player";
import { NaoEncontrada } from "./pages/NaoEncontrada";
import { FavoritarProvider } from "./contexts/FavoritarContext";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route index element={<Inicio />}/>
                <Route path="favoritos" element={<Favoritos />} />
                <Route path="player/:id" element={<Player />} />
                <Route path="*" element={<NaoEncontrada />} />
            </Route>
        </Routes>
    )
}