import { useQuery } from "react-query";
import {CardSistema, DadosSistema} from "./components/CardSistema";

function fetchApi() {
    return fetch('http://127.0.0.1:8000/systems/').then( res => res.json())
}

function App() {
    const { data, status }: { data: unknown, status: string } = useQuery('products', fetchApi)

    const novoDadosSistema = data as DadosSistema[]

    if( status === "error" )
        return (
            <div>
                <h1>Error</h1>
            </div>
        )

    if( status === "loading" || !data )
        return (
            <div>
                <h1>Loading</h1>
            </div>
        )

    const cardsSistemas = novoDadosSistema.length &&
        novoDadosSistema.map(
            sistema => <CardSistema key={sistema.uuid} uuid={sistema.uuid} name={sistema.name} description={sistema.description} />
        )

    return (
        <div className="bg-gray-500 h-screen xsm:p-5 md:p-8 lg:p-8">

            <div className="w-full flex xsm:flex-col md:flex-row md:justify-center md:flex-wrap xsm:gap-9 md:gap-9 lg:gap-8">

                {
                    cardsSistemas
                }

            </div>

        </div>
    )

}


export default App;
