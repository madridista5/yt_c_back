export interface UserResponse {
    id: string,
    name: string,
    email: string,
    password: string,
    subscribes: number,
    subscribeUsers: string[],
    createdAt: string,
    updatedAt: string,
    __v: number,
}