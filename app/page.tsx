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
      
      <Counter counter={counterValue}/>
    </main>
  );
}
