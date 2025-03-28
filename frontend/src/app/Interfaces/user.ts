export interface Empleados {
    CI: number | null;  
    Nombre: string | null;
    Apellido: string | null;
    IdEtnia?: number | null;
    IdCivil?: number | null;
    IdColorPelo?: number | null;
    IdUbicacion?: number | null;
    IdContrato?: number | null;
    IdCargo?: number | null;
    IdEstado?: number | null;
}

export interface User{
    CI?: number | null;  // Añade CI aquí para que sea compartido
    ctipou?: number;
    descripcion?: string;
    estado?: string;
  }

