
import Link from 'next/link';
import Layout from '../components/Layout';
import Listado from '../components/Listado';

function Tienda({guitarras}) {
  return (
    <>
        <Layout
            pagina="Tienda"
        >
          <div className='contenedor'>
            <h1 className='heading'>Nuesta Colección</h1>
            <Listado 
              guitarras={guitarras}
            />
          </div>
        </Layout>
    </>
  )
}
export async function getServerSideProps(){
  const url = `${process.env.API_URL}/guitarras?fields=*&populate=imagen`; 
  const consulta = await fetch(url);
  const guitarras = await consulta.json();
  return{
    props:{
      guitarras: guitarras.data
    }
  }
}
export default Tienda