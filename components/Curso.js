import Imagen from 'next/image';
import styles from '../styles/Curso.module.css';

function Curso({curso}) {
    const {titulo, contenido, imagen} = curso.attributes;
    const {url} = imagen.data.attributes;
  return (
    <section >
        <div className={`contenedor ${styles.grid}`}>
            <div className={styles.contenido}>
                <h2 className='heading'>{titulo}</h2>
                <p>{contenido}</p>
                <a className={styles.boton} href="">Más información</a>
            </div>
        </div>
        <style jsx>{`
            section{
                padding: 10rem 0;
                margin-top: 10rem;
                background-image: linear-gradient(to right, rgb(0 0 0 /.65), rgb(0 0 0 / .7)), url(${url});
                background-size: cover;
                background-position: 50%;
            }
        `}
        </style>
    </section>
  )
}

export default Curso