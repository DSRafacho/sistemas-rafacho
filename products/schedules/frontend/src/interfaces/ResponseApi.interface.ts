export interface ScheduleResponseInterface {
    "count": number
    "next": null | string
    "previous": null | string
    "results": [
        {
            "id": number
            "uuid": string
            "is_active": boolean
            "created_date": string
            "created_time": string
            "time": string
            "date": string
            "service": string
        }
    ]
}


export interface GenericResponseApiInterface<Data> {
    "count": number
    "next": null | string
    "previous": null | string
    "results": [
        data: Data
    ]
}
export interface ScheduleInterface {
    "id": number
    "uuid": string
    "is_active": boolean
    "created_date": string
    "created_time": string
    "time": string
    "date": string
    "service": string
}