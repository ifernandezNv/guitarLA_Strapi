
import Entrada from './Entrada';
import styles from '../styles/Blog.module.css';

function BlogC({entradas}) {
  return (
    <div className={`contenedor ${styles.contenido} ${styles.blog}`}>
        {entradas.map(entrada => (
            <Entrada
            key={entrada.id}
            entrada={entrada}
            />
        ))}
    </div>
  )
}

  
export default BlogC