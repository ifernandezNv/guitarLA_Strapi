import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../styles/Header.module.css';
function Header({guitarra}) {
    const router = useRouter();
  return (
    <header className={styles.header}>
        <div className="contenedor">
            <div className={styles.barra}>
                <Link href="/">
                    <a>
                        <Image
                        
                            src="/img/logo.svg"
                            width={400}
                            height={100}
                            alt="Imagen del header"
                        />
                    </a>
                </Link> 
                <nav className={styles.navegacion}>
                    <Link href="/">Inicio</Link>
                    <Link href="/nosotros">Nosotros</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/tienda">Tienda</Link>
                    <Link href="/carrito"><a><Image src="/img/carrito.png" width={30} height={25} alt="Carrito"/></a></Link>
                </nav>
            </div>
            {guitarra &&(
                <div className={styles.modelo}>
                    <h2>Modelo {guitarra.attributes.nombre}</h2>
                    <p>{guitarra.attributes.descripcion}</p>
                    <p className={styles.precio}>${guitarra.attributes.precio}</p>
                    <Link href={`/guitarras/${guitarra.id}`}><a className={styles.boton}>Ver Producto</a></Link>
                </div>
            )}
        </div>
        {router.pathname === '/' &&(
            <div className={styles.guitarra}>
                <Image src='/img/header_guitarra.png' alt="Imagen Guitarra" width={600} height={1200}/>
            </div>
            
        )}
    </header>
  )
}

Header.defaultProps={
    guitarra: null
}
export default Header