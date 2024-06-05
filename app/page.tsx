import Counter from '../components/counter'
import {getValor} from './actions'

export default async function Home() {
  const value = async () => {
    const res = await getValor();
    return res;
  }
  const counterValue = await value();
  console.log(counterValue)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='p-10 bg-red-600 rounded-lg shadow-lg w-full h-1/4 sm:w-3/4 lg:w-auto'>
      <Counter counter={counterValue}/>
      </div>
    </main>
  );
}
