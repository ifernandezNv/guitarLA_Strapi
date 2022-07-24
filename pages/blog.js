
import Link from 'next/link';
import Layout from '../components/Layout';
import BlogC from '../components/BlogC';
import styles from '../styles/Blog.module.css';

function Blog({entradas}) {
  return (
    <Layout
        pagina="Blog"
    >      
        <main  className='contenedor'>
          <h2 className="heading">Blog</h2>
          <BlogC
            entradas={entradas}
          />
        </main>
        
    </Layout>
  )
}
export async function getServerSideProps(){

  const url = `${process.env.API_URL}/blogs?fields=*&populate=imagen`;
  const consulta = await fetch(url);
  const entradas = await consulta.json();

  return {
    props:{
      entradas: entradas.data
    }
  }
}
export default Blog