import { useEffect, useState } from "react";
import MascotaService from "../services/mascota.service";
import { Mascota } from "../types/mascota";

const DashboardPage = () => {

  const [mascotas, setMascotas] = useState<Mascota[]>([]);

  useEffect(() => {

    MascotaService.listar()
      .then(setMascotas)
      .catch(console.error);

  }, []);

  const totalMascotas = mascotas.length;

  const promedioEdad =
    mascotas.length > 0
      ? (
          mascotas.reduce((a, b) => a + (b.edad ?? 0), 0) /
          mascotas.length
        ).toFixed(1)
      : "0";

  const promedioPeso =
    mascotas.length > 0
      ? (
          mascotas.reduce((a, b) => a + (b.peso ?? 0), 0) /
          mascotas.length
        ).toFixed(1)
      : "0";

  const especies = new Set(
    mascotas.map((m) => m.especie)
  ).size;

  return (

    <div
      style={{
        padding: "30px"
      }}
    >

      <h1>📊 Dashboard</h1>

      <p>
        Bienvenido a Animal Companion
      </p>

      <br />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px"
        }}
      >

        <Card
          icono="🐶"
          titulo="Mascotas"
          valor={totalMascotas}
        />

        <Card
          icono="🎂"
          titulo="Edad Promedio"
          valor={promedioEdad}
        />

        <Card
          icono="⚖"
          titulo="Peso Promedio"
          valor={promedioPeso}
        />

        <Card
          icono="🐾"
          titulo="Especies"
          valor={especies}
        />

      </div>

      <br />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "25px"
        }}
      >

        <div
          style={{
            background: "white",
            borderRadius: "15px",
            padding: "25px",
            boxShadow: "0 6px 15px rgba(0,0,0,.08)"
          }}
        >

          <h2>🐾 Últimas Mascotas Registradas</h2>

          <br />
                    {mascotas.length === 0 ? (

            <p>No hay mascotas registradas.</p>

          ) : (

            mascotas
              .slice()
              .reverse()
              .slice(0, 5)
              .map((m) => (

                <div
                  key={m._id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "12px 0",
                    borderBottom: "1px solid #e5e7eb"
                  }}
                >

                  <div>

                    <strong>{m.nombre}</strong>

                    <br />

                    <small>
                      {m.especie} • {m.raza}
                    </small>

                  </div>

                  <div>

                    {m.edad} años

                  </div>

                </div>

              ))

          )}

        </div>

        <div
          style={{
            background: "white",
            borderRadius: "15px",
            padding: "25px",
            boxShadow: "0 6px 15px rgba(0,0,0,.08)"
          }}
        >

          <h2>📈 Resumen</h2>

          <br />

          <p>
            🐶 Total de mascotas: <strong>{totalMascotas}</strong>
          </p>

          <br />

          <p>
            🎂 Edad promedio: <strong>{promedioEdad}</strong>
          </p>

          <br />

          <p>
            ⚖ Peso promedio: <strong>{promedioPeso} kg</strong>
          </p>

          <br />

          <p>
            🐾 Especies registradas: <strong>{especies}</strong>
          </p>

        </div>

      </div>

    </div>

  );

};

interface CardProps {

  icono: string;

  titulo: string;

  valor: number | string;

}

const Card = ({ icono, titulo, valor }: CardProps) => (

  <div
    style={{
      background: "#ffffff",
      borderRadius: "18px",
      padding: "30px",
      textAlign: "center",
      boxShadow: "0 6px 18px rgba(0,0,0,.08)"
    }}
  >

    <div
      style={{
        fontSize: "45px",
        marginBottom: "10px"
      }}
    >
      {icono}
    </div>

    <h3
      style={{
        color: "#6b7280",
        marginBottom: "10px"
      }}
    >
      {titulo}
    </h3>

    <h1
      style={{
        color: "#2563eb",
        margin: 0
      }}
    >
      {valor}
    </h1>

  </div>

);

export default DashboardPage;