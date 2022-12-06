export interface StudentResponse {
    Success: boolean;
    Data:    StudentRes[];
    Mensaje: string;
}

export interface StudentRes {
    Student_id:       number;
    Student_name:     string;
    Student_lastname: string;
    Gender:           string;
    Age:              number;
    Status:           string;
}
