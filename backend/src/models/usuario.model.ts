import mongoose, { Schema, Document } from "mongoose";

export interface IUsuario extends Document {

  nombre: string;
  apellido: string;
  correo: string;
  password: string;
  telefono: string;
  foto: string;
  rol: string;

}

const usuarioSchema = new Schema<IUsuario>(
  {

    nombre: {
      type: String,
      required: true
    },

    apellido: {
      type: String,
      required: true
    },

    correo: {
      type: String,
      required: true,
      unique: true
    },

    password: {
      type: String,
      required: true
    },

    telefono: {
      type: String,
      default: ""
    },

    foto: {
      type: String,
      default: ""
    },

    rol: {
      type: String,
      default: "usuario"
    }

  },
  {
    timestamps: true
  }
);

export default mongoose.model<IUsuario>(
  "Usuario",
  usuarioSchema
);