import mongoose, { Schema, Document } from "mongoose";

export interface IMascota extends Document {
  nombre: string;
  especie: string;
  raza: string;
  edad: number;
  sexo?: string;
  peso?: number;
  descripcion?: string;
  foto?: string;
}

const mascotaSchema = new Schema<IMascota>(
  {
    nombre: {
      type: String,
      required: true,
    },

    especie: {
      type: String,
      required: true,
    },

    raza: {
      type: String,
      required: true,
    },

    edad: {
      type: Number,
      required: true,
    },

    sexo: {
      type: String,
      default: "",
    },

    peso: {
      type: Number,
      default: 0,
    },

    descripcion: {
      type: String,
      default: "",
    },

    foto: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IMascota>("Mascota", mascotaSchema);