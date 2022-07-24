import Link from 'next/link';
import Layout from "../components/Layout";
import styles from '../styles/NoEncontrado.module.css';

function NoEncontrado() {
  return (
    <Layout
        pagina="Página no encontrada"
    >
        <div className={styles.no_encontrado}>
            <h1 className='heading'>Página no encontrada</h1>
            <Link href="/">Volver al inicio</Link>
        </div>
    </Layout>
  )
}

export default NoEncontrado