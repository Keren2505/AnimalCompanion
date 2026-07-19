import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthService from "../services/auth.service";

const LoginPage = () => {

    const navigate = useNavigate();

    const [correo, setCorreo] = useState("");

    const [password, setPassword] = useState("");

    const iniciarSesion = async (e: React.FormEvent) => {

        e.preventDefault();

        try {

            await AuthService.login(correo, password);

            alert("Bienvenido");

            navigate("/");

        } catch (error) {

            console.error(error);

            alert("Correo o contraseña incorrectos");

        }

    };

    return (

        <div className="container">

            <div
                className="card"
                style={{
                    maxWidth: "500px",
                    margin: "60px auto"
                }}
            >

                <h1
                    style={{
                        textAlign: "center",
                        color: "#1e3a8a",
                        marginBottom: "30px"
                    }}
                >
                    🔐 Iniciar Sesión
                </h1>

                <form onSubmit={iniciarSesion}>

                    <label>Correo electrónico</label>

                    <input
                        type="email"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        required
                    />

                    <label>Contraseña</label>

                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <div
                        style={{
                            marginTop: "25px",
                            textAlign: "center"
                        }}
                    >

                        <button type="submit">

                            🔑 Iniciar Sesión

                        </button>

                    </div>

                </form>

                <p
                    style={{
                        textAlign: "center",
                        marginTop: "25px"
                    }}
                >
                    ¿No tienes cuenta?{" "}

                    <Link
                        to="/register"
                        style={{
                            color: "#2563eb",
                            fontWeight: "600"
                        }}
                    >
                        Regístrate
                    </Link>

                </p>

            </div>

        </div>

    );

};

export default LoginPage;