// components/Contador.js
import { useState, useEffect } from 'react';
import { db } from '../firebase/db';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

function Contador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const obtenerContador = async () => {
      const docRef = doc(db, 'contador', 'valor');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setContador(docSnap.data().valor);
      } else {
        // Inicializar el contador en Firebase si no existe
        await updateDoc(docRef, { valor: 0 });
      }
    };
    obtenerContador();
  }, []);

  const incrementarContador = async () => {
    const docRef = doc(db, 'contador', 'valor');
    const docSnap = await getDoc(docRef);
  
    // verifica si el documento existe y tiene datos
    if (docSnap.exists()) {
      const data = docSnap.data(); 
      const nuevoValor = (data.valor || 0) + 1; // Si valor es undefined, tomamos 0 como valor inicial
  
      await updateDoc(docRef, { valor: nuevoValor });
      setContador(nuevoValor); 
    } else {
      // El documento no existe, lo creamos con valor inicial 0
      await setDoc(docRef, { valor: 1 }); // Usamos setDoc para crear el documento si no existe
      setContador(1);
    }
  };

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={incrementarContador}>Incrementar</button>
    </div>
  );
}

export default Contador;




