import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import MascotaService from "../services/mascota.service";
import { Mascota } from "../types/mascota";

const EditarMascotaPage = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const [mascota, setMascota] = useState<Mascota>({
        nombre: "",
        especie: "",
        raza: "",
        edad: 0,
        sexo: "",
        peso: 0,
        descripcion: "",
        foto: ""
    });

    useEffect(() => {

        if (id) {

            MascotaService.obtener(id)
                .then(setMascota)
                .catch(console.error);

        }

    }, [id]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {

        const { name, value } = e.target;

        setMascota({

            ...mascota,

            [name]:

                name === "edad" || name === "peso"

                    ? (value === "" ? 0 : Number(value))

                    : value

        });

    };

    const actualizar = async (

        e: React.FormEvent

    ) => {

        e.preventDefault();

        if (!id) return;

        try {

            await MascotaService.actualizar(id, mascota);

            alert("Mascota actualizada correctamente");

            navigate("/mascotas");

        } catch (error) {

            console.error(error);

            alert("No fue posible actualizar la mascota");

        }

    };

    return (

        <div className="container">

            <div
                className="card"
                style={{
                    maxWidth: "700px",
                    margin: "auto"
                }}
            >

                <h1
                    style={{
                        color: "#1e3a8a",
                        textAlign: "center",
                        marginBottom: "30px"
                    }}
                >
                    ✏️ Editar Mascota
                </h1>

                <form onSubmit={actualizar}>

                    <label>Nombre</label>

                    <input
                        type="text"
                        name="nombre"
                        value={mascota.nombre}
                        onChange={handleChange}
                        required
                    />

                    <label>Especie</label>

                    <input
                        type="text"
                        name="especie"
                        value={mascota.especie}
                        onChange={handleChange}
                        required
                    />

                    <label>Raza</label>

                    <input
                        type="text"
                        name="raza"
                        value={mascota.raza}
                        onChange={handleChange}
                        required
                    />

                    <label>Edad</label>

                    <input
                        type="number"
                        name="edad"
                        value={mascota.edad ?? ""}
                        onChange={handleChange}
                        required
                    />

                    <label>Sexo</label>

                    <input
                        type="text"
                        name="sexo"
                        value={mascota.sexo}
                        onChange={handleChange}
                    />

                    <label>Peso</label>

                    <input
                        type="number"
                        step="0.1"
                        name="peso"
                        value={mascota.peso ?? ""}
                        onChange={handleChange}
                    />

                    <label>Descripción</label>

                    <textarea
                        name="descripcion"
                        value={mascota.descripcion}
                        onChange={handleChange}
                    />

                    <label>Foto (URL)</label>

                    <input
                        type="text"
                        name="foto"
                        value={mascota.foto ?? ""}
                        onChange={handleChange}
                    />

                    <div
                        style={{
                            marginTop: "25px",
                            textAlign: "center"
                        }}
                    >

                        <button type="submit">

                            💾 Guardar Cambios

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

};

export default EditarMascotaPage;