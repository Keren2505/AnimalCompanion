export interface Mascota {
  _id?: string;
  id?: string;

  nombre: string;
  especie: string;
  raza: string;
  edad: number;

  sexo?: string;
  peso?: number;
  descripcion?: string;
  foto?: string;
}