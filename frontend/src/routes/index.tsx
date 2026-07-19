import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import PerfilPage from "../pages/PerfilPage";
import MascotasPage from "../pages/MascotasPage";
import RegistrarMascotaPage from "../pages/RegistrarMascotaPage";
import EditarMascotaPage from "../pages/EditarMascotaPage";

import ProtectedRoute from "./ProtectedRoute";

export default function AppRoutes() {

    return (

        <Routes>

            <Route path="/" element={<MainLayout />}>

                <Route
                    index
                    element={<HomePage />}
                />

                <Route
                    path="login"
                    element={<LoginPage />}
                />

                <Route
                    path="register"
                    element={<RegisterPage />}
                />

                <Route
                    path="perfil"
                    element={
                        <ProtectedRoute>
                            <PerfilPage />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="mascotas"
                    element={<MascotasPage />}
                />

                <Route
                    path="registrar-mascota"
                    element={
                        <ProtectedRoute>
                            <RegistrarMascotaPage />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="editar-mascota/:id"
                    element={
                        <ProtectedRoute>
                            <EditarMascotaPage />
                        </ProtectedRoute>
                    }
                />

            </Route>

        </Routes>

    );

}