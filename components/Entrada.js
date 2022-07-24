import React from 'react'
import {formatearFecha} from '../helpers';
import styles from '../styles/Entrada.module.css';
import Link from 'next/link'; 
import Image from 'next/image';

function Entrada({entrada}) {
    const {id} = entrada;
    const {titulo, resumen, descripcion, publishedAt, imagen, urlEntrada} = entrada.attributes
    // const {attributes} = imagen??.data[0] : '';
    // const {url} = attributes ?? '';
  return (
    <article>
        {/* <Image
          src={url}
          alt="Imagen del blog"
          width={400}
          height={250}
          layout="fixed"
        /> */}
        <div className={styles.contenido}>
            <h3>{titulo}</h3>
            <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
            <p className={styles.resumen}>{resumen}</p>
            <Link href={`/blog/${id}`}><a className={styles.boton}>Leer Entrada</a></Link>
        </div>
    </article>
  )
}

export default Entrada