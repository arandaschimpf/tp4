//El subdominio en vercel es: https://tp4-roan.vercel.app/
"use client"
import { incrementarN, resetN } from "@/services/number";
import { useState } from "react";

function Contador() {
  const [but, setBut] = useState(0)

  async function incrementar() {
    let x = await incrementarN();
    setBut(x)
  }
  async function reset() {
    let x = await resetN();
    setBut(x)
  }
  return (
    <div className=" p-6 justify-center items-center flex flex-col">
      <button     

        onClick={incrementar}    
      >
        Contador: {but}
      </button>
      <button
      onClick={reset}   
      >
      Resetear
      </button>

   </div>
    
  );
}

export default Contador;
