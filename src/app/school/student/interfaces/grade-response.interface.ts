export interface GradeResponse {
    Success: boolean;
    Data:    GradeRes[];
    Mensaje: string;
}

export interface GradeRes {
    Student_id: number;
    Name: string,
    Espanol: number,
    Matematica: number,
    Sociales: number,
    Naturales: number
}
