import { useState } from "react";
import { useNavigate } from "react-router";

export function Login() {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const navigation = useNavigate()

    return (
        <div id="main-content" className="h-full flex flex-wrap justify-center content-center p-5">

            <div id="login-banner" className="xs:w-full md:w-3/5 xs:h-96 text-white bg-slate-700 border-4 border-solid border-white rounded-lg p-10">
                <div id="login-content" className="">

                    <div id="login-logo" className="center rounded-lg p-2">
                        <span className="text-2xl font-medium">Login</span>
                    </div>

                    <div className="h-full border-2 border-solid border-white my-2" />

                    <div id="login-form" className="centerlize">
                        <div className="flex flex-col gap-15">
                            <div className="my-2">
                                <label htmlFor="email" className="block">Email</label>
                                <input type="email" id="email" placeholder="exemplo@exemplo.com" className="input text-gray-900 font-medium" value={email} onChange={e => setEmail(e.target.value)} />
                            </div>

                            <div className="my-2">
                                <label htmlFor="password" className="block">Senha</label>
                                <input type="password" id="password" placeholder="••••••••••••••••" className="input text-gray-900 font-medium" value={password} onChange={e => setPassword(e.target.value)} />
                            </div>
                        </div>
                    </div>

                    <div className="center mt-5">
                        <button onClick={ () => navigation('/console') }>Login</button>
                    </div>

                </div>
            </div>

        </div>
    )
}