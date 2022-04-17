import axios from "axios";

export function useBackend() {
    const fetchBackend = axios.create({
        baseURL: 'http://127.0.0.1:8000/api/v1/',
        timeout: 2000,
    });

    const getAllSchedules = (filters:string) =>
        fetchBackend.get(`schedules${filters}`)
            .then(response => response.data)
            .catch(error => console.log(error))


    const getAllSchedule = (id: number | string) =>
        fetchBackend.get(`schedules/${id}`)
            .then( response => response.data )
            .catch( error => console.log(error) )


    return {
        getAllSchedules,
        getAllSchedule
    }
}