import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import MascotaService from "../services/mascota.service";
import { Mascota } from "../types/mascota";

const MascotasPage = () => {

    const [mascotas, setMascotas] = useState<Mascota[]>([]);

    const cargarMascotas = () => {

        MascotaService.listar()
            .then(setMascotas)
            .catch(console.error);

    };

    useEffect(() => {

        cargarMascotas();

    }, []);

    const eliminar = async (id: string) => {

        if (!confirm("¿Eliminar esta mascota?")) return;

        try {

            await MascotaService.eliminar(id);

            cargarMascotas();

        } catch (error) {

            console.error(error);

            alert("Error eliminando mascota");

        }

    };

    return (

        <div className="container">

            <h1
                style={{
                    color:"#1e3a8a",
                    marginBottom:"30px"
                }}
            >
                🐶 Mis Mascotas
            </h1>

            <div
                style={{
                    display:"grid",
                    gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))",
                    gap:"25px"
                }}
            >

                {mascotas.map((m)=>(
                    
                    <div
                        key={m.id}
                        className="card"
                    >

                        <img
                            src={
                                m.foto && m.foto.trim() !== ""
                                    ? m.foto
                                    : "https://placehold.co/600x350?text=Mascota"
                            }
                            alt={m.nombre}
                            style={{
                                width:"100%",
                                height:"220px",
                                objectFit:"cover",
                                borderRadius:"12px",
                                marginBottom:"15px"
                            }}
                        />

                        <h2
                            style={{
                                color:"#1e3a8a"
                            }}
                        >
                            {m.nombre}
                        </h2>

                        <p>

                            <strong>Especie:</strong> {m.especie}

                        </p>

                        <p>

                            <strong>Raza:</strong> {m.raza}

                        </p>

                        <p>

                            <strong>Edad:</strong> {m.edad} años

                        </p>

                        <p>

                            <strong>Peso:</strong> {m.peso ?? 0} kg

                        </p>

                        <p>

                            {m.descripcion}

                        </p>

                        <div
                            style={{
                                display:"flex",
                                justifyContent:"space-between",
                                marginTop:"20px"
                            }}
                        >

                            <Link
                                to={`/editar-mascota/${m.id}`}
                            >

                                <button>

                                    ✏️ Editar

                                </button>

                            </Link>

                            <button
                                onClick={()=>eliminar(m.id!)}
                                style={{
                                    background:"#dc2626"
                                }}
                            >

                                🗑 Eliminar

                            </button>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

};

export default MascotasPage;