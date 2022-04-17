import React from 'react';

import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from 'react-query'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {Login} from "./screens/Login";
import {Console} from "./screens/Console";

import './App.css';
import {Footer} from "./components/Others/Footer";

function App() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: true,
                refetchOnReconnect: true,
            },
        },
    })
    return (
        <BrowserRouter>
            <div className="min-h-screen h-fit bg-gray-900">
                <QueryClientProvider client={queryClient} >

                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/console" element={<Console />} />
                        <Route path="*" element={<><h1>404</h1></>} />
                    </Routes>

                </QueryClientProvider>
            </div>
        </BrowserRouter>
    );
}

export default App;
