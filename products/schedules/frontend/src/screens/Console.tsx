import { Main } from "../components/Grid/Main"
import {Footer} from "../components/Others/Footer";
import React from "react";

export function Console() {
    return (
        <div className="h-full w-full text-white">

            <div className="flex">


                <div id="grid-content" className="w-full p-8">
                    <span className="w-full text-3xl font-bold center mb-5">Agendamentos</span>

                    <Main />

                </div>
            </div>

            <Footer />
        </div>
    )
}