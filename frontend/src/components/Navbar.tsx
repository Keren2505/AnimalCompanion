import { Link, useNavigate } from "react-router-dom";

import AuthService from "../services/auth.service";

const Navbar = () => {

    const navigate = useNavigate();

    const autenticado = AuthService.estaAutenticado();

    const usuario = AuthService.obtenerUsuario();

    const cerrarSesion = () => {

        AuthService.logout();

        navigate("/login");

    };

    return (

        <nav
            style={{
                background: "#1e3a8a",
                padding: "15px 40px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: "white"
            }}
        >

            <Link
                to="/"
                style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "24px",
                    fontWeight: "bold"
                }}
            >
                🐶 AnimalCompanion
            </Link>

            <div
                style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "center"
                }}
            >

                <Link
                    to="/"
                    style={{
                        color: "white",
                        textDecoration: "none"
                    }}
                >
                    Inicio
                </Link>

                <Link
                    to="/mascotas"
                    style={{
                        color: "white",
                        textDecoration: "none"
                    }}
                >
                    Mascotas
                </Link>

                {
                    autenticado && (

                        <Link
                            to="/registrar-mascota"
                            style={{
                                color: "white",
                                textDecoration: "none"
                            }}
                        >
                            Registrar
                        </Link>

                    )
                }

                {
                    autenticado && (

                        <Link
                            to="/perfil"
                            style={{
                                color: "white",
                                textDecoration: "none"
                            }}
                        >
                            Perfil
                        </Link>

                    )
                }

                {

                    autenticado ? (

                        <>

                            <span>

                                👋 {usuario?.nombre}

                            </span>

                            <button
                                onClick={cerrarSesion}
                            >
                                Cerrar sesión
                            </button>

                        </>

                    ) : (

                        <>

                            <Link
                                to="/login"
                                style={{
                                    color: "white",
                                    textDecoration: "none"
                                }}
                            >
                                Login
                            </Link>

                            <Link
                                to="/register"
                                style={{
                                    color: "white",
                                    textDecoration: "none"
                                }}
                            >
                                Registro
                            </Link>

                        </>

                    )

                }

            </div>

        </nav>

    );

};

export default Navbar;