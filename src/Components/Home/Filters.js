import { Listbox } from '@headlessui/react'
import React from 'react'
import { useState } from 'react'
import CategoriesData from '../Data/CategoriesData'




const YearData = [
    { title: "Sort By Year" },
    { title: "1700-1800" },
    { title: "1800-1900" },
    { title: "1900-2000" },
    { title: "2000-2010" },
    { title: " 2010-2030" },

]
const TimesData = [
    { title: "Sort By Hours" },
    { title: "1 - 5 Hours" },
    { title: "5 - 10 Hours" },
    { title: "10 - 15 Hours" },
    { title: "15 - 20 Hours" },
]

const RatesData = [
    { title: "Sort By Rates" },
    { title: "1 Star" },
    { title: "2 Star" },
    { title: "3 Star" },
    { title: "4 Star" },
    { title: "5 Star" },
]

function Filters() {
    const [catergory, setCatergory] = useState({ title: "category " });
    const [year, setYear] = useState(YearData[0]);
    const [time, setTime] = useState(TimesData[0]);
    const [rate, setRate] = useState(RatesData[0]);

    const Filter = [
        {
            value: catergory,
            onchange: setCatergory,
            items: CategoriesData,
        },
        {
            value: year,
            onchange: setYear,
            items: YearData,
        },
        {
            value: time,
            onchange: setTime,
            items: TimesData,
        },
        {
            value: rate,
            onchange: setRate,
            items: RatesData,
        }
    ]
    return (
        <div className='my-6 bg-dry border text-dryGray border-gray-800 grid md:grid-cols-4 grid-cols-2 lg:gap-12 gap-2 rounded p-6'>
            {
                Filter.map((item, index) => (
                    <Listbox key={index} value={item.value} onChange={item.onchange}>
                        <div className="relative">
                            <Listbox.Button className="relative w-full  text-white border border-gray-800 bg-main rounded-lg shadow-sm cursor-default py-4 pl-6 pr-10 text-left text-sm">
                                <span className="block truncate">{item.value.title}</span>
                            </Listbox.Button>
                        </div>
                    </Listbox>
                ))
            }
        </div>
    )
}

export default Filters