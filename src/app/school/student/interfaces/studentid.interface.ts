export interface StudentIDResponse {
    Success: boolean;
    Data:    StudentID;
    Mensaje: string;
}

export interface StudentID {
    Id: number;
    Name:string;
    Lastname:string;
    Gender: string;
    Age:number;
}