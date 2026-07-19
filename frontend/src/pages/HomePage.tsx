import { useEffect, useState } from "react";

const HomePage = () => {

    const [latitud, setLatitud] = useState<number | null>(null);

    const [longitud, setLongitud] = useState<number | null>(null);

    const [error, setError] = useState("");

    useEffect(() => {

        if (!navigator.geolocation) {

            setError("Tu navegador no soporta geolocalización.");

            return;

        }

        const watchId = navigator.geolocation.watchPosition(

            (position) => {

                setLatitud(position.coords.latitude);

                setLongitud(position.coords.longitude);

            },

            (err) => {

                console.error(err);

                setError("No fue posible obtener tu ubicación.");

            },

            {

                enableHighAccuracy: true,

                timeout: 10000,

                maximumAge: 0

            }

        );

        return () => {

            navigator.geolocation.clearWatch(watchId);

        };

    }, []);

    return (

        <div
            className="container"
            style={{
                maxWidth: "900px",
                margin: "auto"
            }}
        >

            <div
                className="card"
                style={{
                    textAlign: "center",
                    padding: "40px"
                }}
            >

                <h1
                    style={{
                        color: "#1e3a8a",
                        fontSize: "42px"
                    }}
                >
                    🐶 AnimalCompanion
                </h1>

                <p
                    style={{
                        fontSize: "18px",
                        marginTop: "15px"
                    }}
                >
                    Bienvenido a tu plataforma para administrar y cuidar a tus mascotas.
                </p>

            </div>

            <div
                className="card"
                style={{
                    marginTop: "30px",
                    textAlign: "center",
                    padding: "30px"
                }}
            >

                <h2
                    style={{
                        color: "#1e3a8a"
                    }}
                >
                    📍 Mi ubicación en tiempo real
                </h2>

                {

                    error ? (

                        <p
                            style={{
                                color: "red"
                            }}
                        >
                            {error}
                        </p>

                    ) :

                    latitud !== null && longitud !== null ? (

                        <>

                            <h3
                                style={{
                                    color: "green"
                                }}
                            >
                                ✅ Ubicación obtenida correctamente
                            </h3>

                            <p>

                                <strong>Latitud:</strong>

                                {" "}

                                {latitud.toFixed(6)}

                            </p>

                            <p>

                                <strong>Longitud:</strong>

                                {" "}

                                {longitud.toFixed(6)}

                            </p>

                            <br />

                            <a

                                href={`https://www.google.com/maps?q=${latitud},${longitud}`}

                                target="_blank"

                                rel="noopener noreferrer"

                            >

                                <button>

                                    📍 Abrir en Google Maps

                                </button>

                            </a>

                        </>

                    ) :

                    (

                        <p>

                            📡 Obteniendo ubicación...

                        </p>

                    )

                }

            </div>

        </div>

    );

};

export default HomePage;