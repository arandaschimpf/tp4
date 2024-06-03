// Define tus tipos antes de usarlos en AppProps
type Contador = {
  id: number;
  valor: number;
  // Otros campos necesarios...
};

// Define AppProps usando Contador
export type AppProps = {
  contadores: Contador[];
  contador: Contador;
  cantidad: number;
};

// Asegúrate de que tu componente App use correctamente los props
export default function App(props: AppProps) {
  const { contadores, contador, cantidad } = props;
  
  // Aquí va el resto de tu lógica del componente

  return (
    <div>
      {/* Renderiza tu componente usando los props */}
    </div>
  );
}