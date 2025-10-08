import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, IndustrialInstallationPage, PrivacyPolicyPage } from "@pages";
import { MontazhPage } from "@pages/montazh";
import { RezkaPage } from "@pages/rezka";
import { SvarkaPage } from "@pages/svarka";
import { DostavkaPage } from "@pages/dostavka";

export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="heavytech-repair" element={<SvarkaPage />} />
                <Route path="plasma-cutting" element={<RezkaPage />} />
                <Route path="industrial-installation" element={<IndustrialInstallationPage />} />
                <Route path="engineering-networks" element={<MontazhPage />} />
                <Route path="cargo-delivery" element={<DostavkaPage />} />
                <Route path="privacy" element={<PrivacyPolicyPage />} />
            </Routes>
        </BrowserRouter>
    )
}