import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MascotaService from "../services/mascota.service";
import { Mascota } from "../types/mascota";

const RegistrarMascotaPage = () => {

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

    const guardar = async (e: React.FormEvent) => {

        e.preventDefault();

        try {

            await MascotaService.crear(mascota);

            alert("Mascota registrada correctamente");

            navigate("/mascotas");

        } catch (error: any) {

            console.error("========== ERROR ==========");
            console.error(error);

            console.error("STATUS:");
            console.error(error.response?.status);

            console.error("DATA:");
            console.error(error.response?.data);

            console.error("MESSAGE:");
            console.error(error.message);

            alert("No fue posible registrar la mascota");

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
                    🐶 Registrar Mascota
                </h1>

                <form onSubmit={guardar}>

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

                            💾 Guardar Mascota

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

};

export default RegistrarMascotaPage;