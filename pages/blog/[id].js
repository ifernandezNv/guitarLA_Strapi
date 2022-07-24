import { useRouter } from 'next/router';
import { formatearFecha } from '../../helpers';
import Image from 'next/image';
import Layout from '../../components/Layout';
import styles from '../../styles/Entrada.module.css';
function EntradaBlog({entrada}) {
    const router = useRouter();
    const id = router.query.id
    const {titulo, descripcion, imagen, publishedAt} = entrada.data.attributes;
    const {attributes} = imagen.data[0];
  return (
    <Layout
      pagina={titulo}
    >
      <main className='contenedor'>
        <h3 className='heading'>{titulo}</h3>
        <article className={styles.entrada}>
          <Image
            layout="fixed"
            width={600}
            height={400}
            alt={`Imagen de la entrada ${titulo}`}
            src={attributes.url}
          />
          <div className={styles.contenido}>
            <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
            <p className={styles.texto}>{descripcion}</p>
          </div>
        </article>
      </main>
    </Layout>
  )
}

export async function getServerSideProps({query: {id}}){
    const url = `${process.env.API_URL}/blogs/${id}?fields=*&populate=imagen`;
    const consulta = await fetch(url);
    const entrada = await consulta.json();
    return{
        props: {
            entrada
        }
    }
}

export default EntradaBlog