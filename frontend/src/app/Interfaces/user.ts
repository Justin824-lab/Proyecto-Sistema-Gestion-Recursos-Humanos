export interface Empleados {
    CI?: number | null;  
    Nombre?: string | null;
    Apellido?: string | null;
    IdEtnia?: number | null;
    IdCivil?: number | null;
    IdColorPelo?: number | null;
    IdUbicacion?: number | null;
    IdContrato?: number | null;
    IdCargo?: number | null;
    IdEstado?: number | null;
    estado?: string;
}

export interface EstadoCivil{
    IdCivil?: number | null;
    EstadoCivil?: string | null;
    estado?: string;
}
export interface Cargo {
    IdCargo?: number | null; 
    IdNoResolucion?: number | null;
    IdGrupoEscala?: number | null;
    IdCatOcupacional?: number | null;
    estado?: string;
}
export interface Etnia {
    IdEtnia?: number | null; 
    Nombre?: string | null;
    estado?: string;
}

export interface User{
    CI?: number | null; 
    ctipou?: number;
    descripcion?: string;
    estado?: string;
  }

