export interface UserResponse {
    Success: boolean
    Data: User
    Mensaje: any
  }
  
  export interface User {
    Username: string
    Password: string
  }