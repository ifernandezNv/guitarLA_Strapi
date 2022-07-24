import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Guitarra.module.css';

function Guitarra({guitarra}) {
    const {descripcion, imagen, nombre, precio, urlGuitarral} = guitarra.attributes;
    const {id} = guitarra;
  return (
    <div className={styles.card}>
        <Image
            width={150}
            height={350}
            src={imagen.data.attributes.url}
            alt={`Imagen Guitarra ${nombre}`}
        />
        <div className={styles.contenido}>
            <h3 className={styles.nombre}>{nombre}</h3>
            <p className={styles.descripcion}>{descripcion}</p>
            <p className={styles.precio}>${precio}</p>
            <Link href={`/guitarras/${id}`}><a className={styles.boton}>Ver Guitarra</a></Link>
        </div>
    </div>
  )
}

export default Guitarra