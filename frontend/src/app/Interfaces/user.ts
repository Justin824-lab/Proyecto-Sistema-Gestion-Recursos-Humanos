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
    Estado?: string;
}

export interface EstadoCivil{
    IdCivil?: number | null;
    Estado?: string | null;
    EstadoRegistro?: string;
}
export interface Cargo {
    IdCargo?: number | null; 
    IdNoResolucion?: number | null;
    IdGrupoEscala?: number | null;
    IdCatOcupacional?: number | null;
    Estado?: string;
}
export interface Etnia {
    IdEtnia?: number | null; 
    Nombre?: string | null;
    Estado?: string;
}

export interface User{
    CI?: number | null; 
    ctipou?: number;
    descripcion?: string | null | undefined;
    estado?: string;
}

// Editado por Jose 

export interface NivelDeUtilizacion {
    IdNivelUtilizacion?: number | null;
    Descripcion?: string | null | undefined;
    Estado?: string;
}

export interface OtrosPagos {
    IdPagos?: number | null;
    Monto?: number | null;
    Descripcion?: string | null;
    Estado?: string;
}

export interface NoResolucion {
    IdNoResolucion?: number | null;
    Descripcion?: string | null;
    Estado?: string;
}

export interface CatOcupacional {
    IdCatOcupacional?: number | null;
    Nombre?: string | null;
    Estado?: string;
}

export interface CFTPrincipales {
    IdFTPrincipales?: number | null;
    Descripcion?: string | null;
    Estado?: string;
}

export interface Contrato {
    IdContrato?: number | null;
    TipoContrato?: string | null;
    Duracion?: number | null;
    Estado?: string;
}

export interface ColorPelo {
    IdColorPelo?: number | null;
    Color?: string | null;
    Estado?: string;
}

export interface Ubicacion {
    IdUbicacion?: number | null;
    Direccion?: string | null;
    Estado?: string;
}

export interface Estado {
    IdEstado?: number | null;
    NombreEstado?: string | null;
    Estado?: string;
}

export interface Departamento {
    IdDpto?: number | null;
    Nombre?: string | null;
    Estado?: string;
}

export interface ReqConocimientos {
    IdReqConoc?: number | null;
    Descripcion?: string | null;
    Estado?: string;
}

export interface GrupoEscala {
    IdGrupoEscala?: number | null;
    Escala?: string | null;
    Estado?: string;
}

export interface TrabajaEn {
    CI?: number | null;
    IdDpto?: number | null;
    FechaAlta?: Date | null;
    Estado?: string;
}

export interface Plantilla {
    IdCargo?: number | null;
    IdDpto?: number | null;
    Estado?: string;
}

export interface CargoRequisitos {
    IdCargo?: number | null;
    IdReqConoc?: number | null;
    Estado?: string;
}

export interface CargoNivelUtilizacion {
    IdCargo?: number | null;
    IdNivelUtilizacion?: number | null;
    Estado?: string;
}

export interface OtrosPagosEmpleados {
    CI?: number | null;
    IdPagos?: number | null;
    Estado?: string;
}

export interface Tlaboral {
    CI?: number | null;
    IdCargo?: number | null;
    Estado?: string;
}

export interface CargoFunciones {
    IdCargo?: number | null;
    IdFTPrincipales?: number | null;
    Estado?: string;
}
