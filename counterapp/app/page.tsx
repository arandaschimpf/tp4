
import { load } from "@/components/counter/LoadCount";
import { increment } from "@/components/counter/Increment";
import { decrement } from "@/components/counter/Decrement";


export default function Index() {
  let data = load()
  return <div className={'m-4 rounded-xl border-2 p-2 align-middle content-center justify-center'}>
      <h1 className={"text-center m-4 text-xl font-bold"}>Counter</h1>
      <p className={"text-center m-2"}>{data}</p>
      <div className={'flex'}>
          <form action={decrement}>
              <button type="submit" className={'px-4 m-4 py-2 hover:bg-neutral-600 bg-neutral-800 rounded-xl'}>decrement
              </button>
          </form>
          <form action={increment}>
              <button type="submit" className={'px-4 m-4 py-2 hover:bg-neutral-600 bg-neutral-800 rounded-xl'}>Increment
              </button>
          </form>
      </div>
      <p className={"text-center m-2"}>Refresh after changing the variable</p>
  </div>
}
