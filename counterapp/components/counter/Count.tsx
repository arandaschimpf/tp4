'use client'

import {useState} from "react";
import {decrement} from "@/components/counter/Decrement";
import {increment} from "@/components/counter/Increment";

export function Count() {

     function minus(){
        setCount(count - 1)
        decrement()
    }


     function plus(){
        setCount(count + 1)
        increment()
    }

    const [count,setCount] = useState(0)
    return <div>
        <p className={"text-center m-2"}>Diff: {count}</p>

        <div className={'flex'}>
            <form action={minus}>
                <button type="submit"
                        className={'px-4 m-4 py-2 hover:bg-neutral-600 bg-neutral-800 rounded-xl'}>Decrement
                </button>
            </form>
            <form action={plus}>
                <button type="submit"
                        className={'px-4 m-4 py-2 hover:bg-neutral-600 bg-neutral-800 rounded-xl'}>Increment
                </button>
            </form>
        </div>
    </div>
}