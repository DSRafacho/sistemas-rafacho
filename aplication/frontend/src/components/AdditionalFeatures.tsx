import {FeatureItem} from "./FeatureItem";
import React from "react";

interface Props {
    texts: string[]
}

export const AdditionalFeatures = (props: Props) => (
    <div className="md:w-full xsm:w-full">

            {/*<p className="text-2xl font-bold text-center mt-3 border-b-2 border-b-gray-500 pb-3" />*/}
            <p className="block mt-6 border-b-2 border-b-sky-700 mb-4 font-bold text-black">Acréscimos</p>
            <div>
                <ul className="text-black">
                    {
                        props.texts.map(
                            text => <FeatureItem key={text} text={text} />
                        )
                    }
                </ul>
            </div>

    </div>
)
