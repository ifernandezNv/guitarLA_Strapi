import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import BlogC from '../components/BlogC';
import Curso from '../components/Curso';
import Layout from '../components/Layout';
import Listado from '../components/Listado';

export default function Home({guitarras, curso, entradas}) {
  return (
    <div>
      <Layout
        pagina='Inicio'
        guitarra={guitarras[0]}
      >
        <main className='contenedor'>
          <h2 className='heading'>Nuestra Colección</h2>
          <Listado
            guitarras={guitarras}
          />
        </main>
        <Curso 
          curso={curso}
        />
        <h2 className='heading'>Blog</h2>
        <BlogC
          entradas={entradas}
          cantidad={3}
        />
        
      </Layout>
      
    </div>
  )
}

export async function getServerSideProps(){
  const urlGuitarras = `${process.env.API_URL}/guitarras?fields=*&populate=imagen`; 
  const urlCursos = `${process.env.API_URL}/curso?fields=*&populate=imagen`; 
  const urlBlog = `${process.env.API_URL}/blogs?pagination[start]=0&pagination[limit]=3`;
  const [resGuitarras, resCursos, resEntradas] = await Promise.all([
    fetch(urlGuitarras), 
    fetch(urlCursos),
    fetch(urlBlog)
  ]);
  const [guitarras, curso, entradas] = await Promise.all([
    resGuitarras.json(), 
    resCursos.json(),
    resEntradas.json(),
  ])
  return{
    props:{
      guitarras: guitarras.data,
      curso: curso.data,
      entradas: entradas.data,
    }
  }
}