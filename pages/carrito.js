import Layout from "../components/Layout"
import Image from 'next/image';
import {useState, useEffect} from 'react';

import styles from '../styles/Carrito.module.css';
function Carrito({carrito, actualizarCantidad, eliminarProducto}) {
  const [total, setTotal] = useState(0);

  useEffect(()=>{
    const calculoTotal = carrito.reduce((total, articulo) => total + (articulo.cantidad * articulo.precio), 0);
    setTotal(calculoTotal);
  },[carrito])
  return (
    <Layout pagina="Carrito de Compras">
        <h1 className="heading">Desde Carrito</h1>
        <main className={`contenedor ${styles.contenido}`}>
            <div className={styles.carrito}>
              <h2>Artículos</h2>
                {carrito.length === 0 ? 'Carrito Vacío' : (
                  carrito.map(producto => (
                    <div key={producto.id} className={styles.producto}>
                      <div>
                        <Image 
                          src={producto.imagen}
                          width={200}
                          height={400}
                          alt={`Imagen Guitarra ${producto.nombre}`}
                        />
                      </div>
                        
                      <div>
                        <p className={styles.nombre}>{producto.nombre}</p>
                        <div className={styles.cantidad}>
                          <p >Cantidad: </p>
                          <select className={styles.select} value={producto.cantidad} onChange={(e) => actualizarCantidad({cantidad: e.target.value, id: producto.id})}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </select>
                        </div>
                        <p className={styles.precio}><span>${producto.precio}</span></p>
                        <p className={styles.subtotal}>Subtotal: <span>${producto.precio * producto.cantidad}</span></p>
                      </div>
                      <button  onClick={ () => eliminarProducto(producto)} type="button" className={styles.eliminar}>X</button>
                    </div>
                  ))
                )}
            </div>

            <div className={styles.resumen}>
              {total > 0 ? (
                <>
                  <h3>Resumen del Pedido</h3>
                  <p>Total a pagar ${total}</p>
                </>
              ): (
                <>
                  <p>El carrito está vacío</p>
                </>
              )}
            </div>
        </main>
    </Layout>
  )
}

export default Carrito