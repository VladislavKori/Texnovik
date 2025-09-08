import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "@pages";
import { MontazhPage } from "@pages/montazh";
import { RezkaPage } from "@pages/rezka";
import { SvarkaPage } from "@pages/svarka";
import { DostavkaPage } from "@pages/dostavka";

export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="svarka" element={<SvarkaPage />} />
                <Route path="rezka" element={<RezkaPage />} />
                <Route path="montazh" element={<MontazhPage />} />
                <Route path="dostavka" element={<DostavkaPage />} />
                {/* <Route path="*" element={<NotFoundPage />} /> */}
            </Routes>
        </BrowserRouter>
    )
}