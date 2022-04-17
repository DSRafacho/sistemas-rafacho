import { motion } from "framer-motion";
import { ScheduleResponseInterface } from "../../interfaces/ResponseApi.interface";


export function Pagination(
    props: { data: ScheduleResponseInterface, setFilters: Function, refetch: Function }
) {
    return (
        <div className="flex justify-end mt-1">
            <div>
                <span>Página X de Y</span>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-amber-600 text-white p-2 rounded-lg ml-7"
                    onClick={() => {
                        if( props.data.previous ) {
                            const previousUrl = props.data.previous.split('schedules')[1]
                            props.setFilters(previousUrl)
                            props.refetch()

                            return
                        }

                        alert("Não existe previousUrl")
                    }}
                >Anterior</motion.button>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-amber-600 text-white p-2 rounded-lg ml-5"
                    onClick={() => {
                        if( props.data.next ) {
                            const nextUrl = props.data.next.split('schedules')[1]
                            props.setFilters(nextUrl)
                            props.refetch()

                            return
                        }

                        alert("Não existe nextUrl")
                    }}
                >Próximo</motion.button>

            </div>
        </div>
    )
}