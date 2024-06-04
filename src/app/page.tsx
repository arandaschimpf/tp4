//El subdominio en vercel es: https://tp4-despliegue.vercel.app/
import Contador from '@/contador/contador';

async function Principal() {

  return (
    <main className="flex flex-col justify-center items-center h-80 bg-gray-200">
      <h1 className="text-3xl font-bold mb-4">Contador</h1>
      <div className=" bg-slate-400 p-7 text-white rounded-md hover:bg-slate-600 ">
      <Contador  /* starting={starting ?? 0}  *//* incrementar={incrementar()} reset= {reset()} *//>
      </div>

     
    </main>
  );
}

export default Principal;
