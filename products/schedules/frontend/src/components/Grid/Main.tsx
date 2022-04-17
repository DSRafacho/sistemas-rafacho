import { motion } from "framer-motion";
import {useQuery} from "react-query";
import {useBackend} from "../../hooks/useBackend";
import { Filters } from "./Filters";
import { ScheduleResponseInterface, ScheduleInterface } from "../../interfaces/ResponseApi.interface";
import {Pagination} from "./Pagination";
import {useState} from "react";
import {queryKeys} from "../../utils/queryKeys";


export function Main() {
    const [ filters, setFilters ] = useState('')
    const { getAllSchedules } = useBackend()
    const { data, isLoading, isError, refetch } = useQuery( [queryKeys.schedules, filters], () => getAllSchedules(filters) )

    const schedulesResponse: ScheduleResponseInterface = data

    if( isLoading )
        return <div>Loading...</div>

    else if( isError )
        return <div>Ocorreu um erro no servidor...</div>

    try {
        return (
            <div className="w-full h-screen text-white text-center">

                <div className="flex justify-between content-center">
                    <Filters />

                    <Pagination
                        data={ schedulesResponse }
                        refetch={ refetch }
                        setFilters={ setFilters }
                    />
                </div>

                <div className="mt-5 h-fit bg-amber-500 rounded-lg p-5">
                    <div id="head" className="flex w-full h-8 flex bg-black divide-x-2 divide-amber-200 rounded-2xl">
                        <div className="basis-1/5 mt-1">Pessoa</div>
                        <div className="basis-1/5 mt-1">Telefone</div>
                        <div className="basis-1/5 mt-1">Dia</div>
                        <div className="basis-1/5 mt-1">Horário</div>
                        <div className="basis-1/5 mt-1">Serviço</div>
                    </div>

                    <br/>

                    <div className="flex flex-col flex-wrap justify-center items-center h-fit bg-amber-600 rounded-lg">
                        {schedulesResponse.results.map((schedule: ScheduleInterface) => (
                            <motion.div whileHover={{ scale: 1.010, backgroundColor: "#222" }} key={ schedule.uuid } className="flex w-full h-8 flex divide-x-2 divide-amber-200">
                                <div className="basis-1/5 mt-1">schedule.user.full_name</div>
                                <div className="basis-1/5 mt-1">schedule.user.cellphone</div>
                                <div className="basis-1/5 mt-1">{ schedule.date.split('-').reverse().join('/') }</div>
                                <div className="basis-1/5 mt-1">{ schedule.time }</div>
                                <div className="basis-1/5 mt-1">{ schedule.service }</div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        )
    }
    catch (error: any) {
        return (
            <div className="w-full h-screen text-white text-center p-5">

                <span className="text-5xl">Ocorreu um erro</span>
                <br/>
                <span className="text-5xl">{error.message}</span>
            </div>
        )
    }
}
