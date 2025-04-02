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
    descripcion?: string | null | undefined;
    estado?: string;
}

// Editado por Jose 

export interface NivelDeUtilizacion {
    idNivelUtilizacion?: number | null;
    descripcion?: string | null | undefined;
    estado?: string;
}

export interface OtrosPagos {
    idPagos?: number | null;
    monto?: number | null;
    descripcion?: string | null;
    estado?: string;
}

export interface NoResolucion {
    idNoResolucion?: number | null;
    descripcion?: string | null;
    estado?: string;
}

export interface CatOcupacional {
    idCatOcupacional?: number | null;
    nombre?: string | null;
    estado?: string;
}

export interface CFTPrincipales {
    idFTPrincipales?: number | null;
    descripcion?: string | null;
    estado?: string;
}

export interface Contrato {
    idContrato?: number | null;
    tipoContrato?: string | null;
    duracion?: number | null;
    estado?: string;
}

export interface ColorPelo {
    idColorPelo?: number | null;
    color?: string | null;
    estado?: string;
}

export interface Ubicacion {
    idUbicacion?: number | null;
    direccion?: string | null;
    estado?: string;
}

export interface Estado {
    idEstado?: number | null;
    nombreEstado?: string | null;
    estado?: string;
}

export interface Departamento {
    idDpto?: number | null;
    nombre?: string | null;
    estado?: string;
}

export interface ReqConocimientos {
    idReqConoc?: number | null;
    descripcion?: string | null;
    estado?: string;
}

export interface GrupoEscala {
    idGrupoEscala?: number | null;
    escala?: string | null;
    estado?: string;
}

export interface TrabajaEn {
    CI?: number | null;
    IdDpto?: number | null;
    FechaAlta?: Date | null;
    estado?: string;
}

export interface Plantilla {
    idCargo?: number | null;
    idDpto?: number | null;
    estado?: string;
}

export interface CargoRequisitos {
    idCargo?: number | null;
    idReqConoc?: number | null;
    estado?: string;
}

export interface CargoNivelUtilizacion {
    idCargo?: number | null;
    idNivelUtilizacion?: number | null;
    estado?: string;
}

export interface OtrosPagosEmpleados {
    ci?: number | null;
    idPagos?: number | null;
    estado?: string;
}

export interface Tlaboral {
    ci?: number | null;
    idCargo?: number | null;
    estado?: string;
}

export interface CargoFunciones {
    idCargo?: number | null;
    idFTPrincipales?: number | null;
    estado?: string;
}
