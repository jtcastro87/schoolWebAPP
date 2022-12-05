export interface StudentResponse {
    Success: boolean;
    Data:    Student[];
    Mensaje: string;
}

export interface Student {
    Student_id:       number;
    Student_name:     string;
    Student_lastname: string;
    Genere:           string;
    Age:              number;
    Status:           string;
}
