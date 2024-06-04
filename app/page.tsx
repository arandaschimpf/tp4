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
      <div className='p-10 bg-white rounded-lg shadow-lg w-full h-full sm:w-3/4 lg:w-auto sm:h-3/4 lg:h-auto'>
      <Counter counter={counterValue}/>
      </div>
    </main>
  );
}
