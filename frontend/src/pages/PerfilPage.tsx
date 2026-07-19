import AuthService from "../services/auth.service";

const PerfilPage = () => {

    const usuario = AuthService.obtenerUsuario();

    return (

        <div className="container">

            <div
                className="card"
                style={{
                    maxWidth: "700px",
                    margin: "auto",
                    textAlign: "center"
                }}
            >

                <img
                    src="https://placehold.co/150x150?text=👤"
                    alt="Perfil"
                    style={{
                        width: "150px",
                        height: "150px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        marginBottom: "20px"
                    }}
                />

                <h1
                    style={{
                        color: "#1e3a8a"
                    }}
                >
                    👤 Mi Perfil
                </h1>

                <br />

                <h2>

                    {usuario?.nombre} {usuario?.apellido}

                </h2>

                <br />

                <p>

                    <strong>Correo:</strong> {usuario?.correo}

                </p>

                <br />

                <p>

                    <strong>Teléfono:</strong> {usuario?.telefono}

                </p>

                <br />

                <p>

                    <strong>Rol:</strong> {usuario?.rol}

                </p>

            </div>

        </div>

    );

};

export default PerfilPage;