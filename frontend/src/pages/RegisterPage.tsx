import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthService from "../services/auth.service";

const RegisterPage = () => {

    const navigate = useNavigate();

    const [usuario, setUsuario] = useState({
        nombre: "",
        apellido: "",
        correo: "",
        password: "",
        telefono: ""
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {

        const { name, value } = e.target;

        setUsuario({
            ...usuario,
            [name]: value
        });

    };

    const registrar = async (
        e: React.FormEvent
    ) => {

        e.preventDefault();

        try {

            await AuthService.register(usuario);

            alert("Usuario registrado correctamente");

            navigate("/login");

        } catch (error) {

            console.error(error);

            alert("No fue posible registrar el usuario");

        }

    };

    return (

        <div className="container">

            <div
                className="card"
                style={{
                    maxWidth: "600px",
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
                    📝 Crear Cuenta
                </h1>

                <form onSubmit={registrar}>

                    <label>Nombre</label>

                    <input
                        type="text"
                        name="nombre"
                        value={usuario.nombre}
                        onChange={handleChange}
                        required
                    />

                    <label>Apellido</label>

                    <input
                        type="text"
                        name="apellido"
                        value={usuario.apellido}
                        onChange={handleChange}
                        required
                    />

                    <label>Correo electrónico</label>

                    <input
                        type="email"
                        name="correo"
                        value={usuario.correo}
                        onChange={handleChange}
                        required
                    />

                    <label>Contraseña</label>

                    <input
                        type="password"
                        name="password"
                        value={usuario.password}
                        onChange={handleChange}
                        required
                    />

                    <label>Teléfono</label>

                    <input
                        type="text"
                        name="telefono"
                        value={usuario.telefono}
                        onChange={handleChange}
                    />

                    <div
                        style={{
                            marginTop: "25px",
                            textAlign: "center"
                        }}
                    >

                        <button type="submit">

                            📝 Crear Cuenta

                        </button>

                    </div>

                </form>

                <p
                    style={{
                        textAlign: "center",
                        marginTop: "25px"
                    }}
                >
                    ¿Ya tienes cuenta?{" "}

                    <Link
                        to="/login"
                        style={{
                            color: "#2563eb",
                            fontWeight: "600"
                        }}
                    >
                        Iniciar sesión
                    </Link>

                </p>

            </div>

        </div>

    );

};

export default RegisterPage;