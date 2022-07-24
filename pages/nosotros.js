
import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/Nosotros.module.css';
import Image from 'next/image';
function Nosotros() {
  return (
    <>
        <Layout
            pagina="Nosotros"
        >
          <main className='contenedor'>
            <h2 className='heading'>Nosotros</h2>
            <div className={styles.contenido}>
              <div>
                <Image
                  src="/img/nosotros.jpg"
                  alt="Imagen nosotros"
                  layout="fixed" 
                  width={600}
                  height={450}
                />
              </div>
              <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae lobortis ante, ut eleifend est. Fusce fringilla arcu at facilisis dictum. Sed pretium nisl et vestibulum porttitor. Nam consequat egestas posuere. Curabitur lobortis nisl ac orci luctus tincidunt. Vestibulum semper nibh ut dapibus gravida. Maecenas a leo nunc. Sed mattis dolor dolor, sed eleifend metus gravida vitae. Maecenas accumsan tempus arcu, id efficitur turpis sagittis in. Ut vitae tellus massa.

                  </p>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae lobortis ante, ut eleifend est. Fusce fringilla arcu at facilisis dictum. Sed pretium nisl et vestibulum porttitor. Nam consequat egestas posuere. Curabitur lobortis nisl ac orci luctus tincidunt. Vestibulum semper nibh ut dapibus gravida. Maecenas a leo nunc. Sed mattis dolor dolor, sed eleifend metus gravida vitae. Maecenas accumsan tempus arcu, id efficitur turpis sagittis in. Ut vitae tellus massa.
                    
                  </p>
              </div>
            </div>
          </main>
        </Layout>
    </>
  )
}

export default Nosotros;