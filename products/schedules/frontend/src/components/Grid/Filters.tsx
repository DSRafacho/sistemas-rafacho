import {useState} from "react";

export function Filters() {
    const [ today, setToday ] = useState(true)
    const [ thisWeek, setThisWeek ] = useState(false)
    const [ thisMonth, setThisMonth ] = useState(false)
    const [ thisYear, setThisYear ] = useState(false)
    const [ other, setOther ] = useState(false)


    function checkOne(e: any) {
        const setStateOfEachInput = {
            "today": setToday,
            "this-week": setThisWeek,
            "this-month": setThisMonth,
            "this-year": setThisYear,
            "other": setOther
        }

        const mainSetter = setStateOfEachInput[ e.target.id as keyof typeof setStateOfEachInput ]
        mainSetter(!!e.target.checked)
        delete setStateOfEachInput[ e.target.id as keyof typeof setStateOfEachInput ]

        for(const setState in setStateOfEachInput )
            setStateOfEachInput[ setState as keyof typeof setStateOfEachInput ](false)
    }

    return (
        <div className="flex w-2/4 h-8 gap-12 pl-12 mt-2">

            <div className="flex gap-3 mt-1">
                <label className="cursor-pointer" htmlFor="today">Dia de hoje</label>
                <input id="today" type="checkbox" className="mt-1.5 cursor-pointer" checked={today} onChange={checkOne} />
            </div>

            <div className="flex gap-3 mt-1">
                <label className="cursor-pointer" htmlFor="this-week">Essa semana</label>
                <input id="this-week" type="checkbox" className="mt-1.5 cursor-pointer" checked={thisWeek} onChange={checkOne} />
            </div>

            <div className="flex gap-3 mt-1">
                <label className="cursor-pointer" htmlFor="this-month">Esse mês</label>
                <input id="this-month" type="checkbox" className="mt-1.5 cursor-pointer" checked={thisMonth} onChange={checkOne} />
            </div>

            <div className="flex gap-3 mt-1">
                <label className="cursor-pointer" htmlFor="this-year">Esse ano</label>
                <input id="this-year" type="checkbox" className="mt-1.5 cursor-pointer" checked={thisYear} onChange={checkOne} />
            </div>

            <div className="flex gap-3 mt-1">
                <label className="cursor-pointer" htmlFor="other">Outro</label>
                <input id="other" type="checkbox" className="mt-1.5 cursor-pointer" checked={other} onChange={checkOne} />
            </div>

        </div>
    )
}