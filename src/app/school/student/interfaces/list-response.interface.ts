export interface ListStudentResponse {
    Success: boolean;
    Data:    ListRes[];
    Mensaje: string;
}

export interface ListRes {
  Student_id: number
  Student: string
  Present: string
}
