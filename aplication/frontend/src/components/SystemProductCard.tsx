import {AdditionalFeatures} from "./AdditionalFeatures";

export interface DadosSistema {
    uuid: string;
    name: string;
    description: string;

    id?: string;
    created_date?: string;
    created_time?: string;
}

export const CardSistema = (item: DadosSistema) => {
    return (
        <div key={item.uuid} style={{ minHeight: "68em" }}
             className="xsm:w-full md:w-2/5 7 lg:w-5/12 big:w-3/12 xsm:h-fit bg-gray-200 p-4 my-5 rounded-lg text-black border-2 border-sky-900">

            <p className="xsm:text-xl text-center border-b-4 border-b-sky-900 pl-4 text-sky-900 font-bold mt-2">{item.name}</p>
            {/*<p className="xsm:text-xl border-l-2 border-l-sky-300 pl-4 text-sky-900 ml-4 mt-2">{item.name}</p>*/}

            <div className="p-2">

                <div className="xsm:w-full border-2 border-sky-700 h-64 mt-4">CARROSEL COM AS TELAS</div>

                <span className="block mt-6 font-bold border-b-2 border-b-sky-700">Sobre o sistema</span>

                <p className="mt-6">
                    {item.description}
                </p>

                <span className="block mt-6 font-bold border-b-2 border-b-sky-700 mb-4">Plataformas</span>
                <ul>
                    <li className="flex mb-3 gap-2">
                        <span>Web</span> <div className="w-full border-2 h-1 border-green-500 mt-3" /> <i className="fa-solid fa-circle-check text-2xl text-green-500" />
                    </li>
                    <li className="flex mb-3 gap-2">
                        <span>Desktop</span> <div className="w-full border-2 h-1 border-red-600 mt-3" /> <i className="fa-solid fa-circle-xmark text-2xl text-red-600" />
                    </li>
                    <li className="flex mb-3 gap-2">
                        <span>Mobile</span> <div className="w-full border-2 h-1 border-green-500 mt-3" /> <i className="fa-solid fa-circle-check text-2xl text-green-500" />
                    </li>
                </ul>

                <AdditionalFeatures texts={['Temporizador', 'Cronômetro',]} />

            </div>

        </div>
    )
}
