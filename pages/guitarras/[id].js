import {useState} from 'react';
import Image from 'next/image';
import Layout from '../../components/Layout';
import styles from '../../styles/Guitarra.module.css';

function Producto({guitarra, agregarCarrito}) {
    const [cantidad, setCantidad] = useState(1);

    const {id} = guitarra.data;
    const {nombre, descripcion, precio, imagen} = guitarra.data.attributes;
    const {url} = imagen.data.attributes;
    function handleSubmit(e){
        e.preventDefault();
        if(cantidad < 1){
            alert('Cantidad no válida');
            return;
        }

        //Agregando la guitarra al carrito
        const guitarraSeleccionada = {
            id,
            imagen: url,
            nombre,
            precio, 
            cantidad
        }
        agregarCarrito(guitarraSeleccionada);
    }
  return (
    <Layout
        pagina={nombre}
    >
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
                <form className={styles.formulario} onSubmit={handleSubmit}>
                    <label>Cantidad:</label>
                    <select value={cantidad} onChange={(e) => setCantidad(parseInt(e.target.value))}>
                        <option value="0">-- Seleccione --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                    </select>
                    <input type='submit' value="Agregar al Carrito"/>
                </form>
            </div>
        </div>
    </Layout>
  )
}
export async function getServerSideProps({query: {id}}){
    const url = `${process.env.API_URL}/guitarras/${id}?fields=*&populate=imagen`;
    const consulta = await fetch(url);
    const guitarra = await consulta.json();

    return{
        props: {
            guitarra
        }
    }
}
export default Producto