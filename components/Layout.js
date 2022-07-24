import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

function Layout({children, pagina, guitarra}) {
  return (
    <>
        <Head>
            <title>GuitarLA - {pagina} </title>
            <meta name="description" content="Sitio web de venta de guitarras" />
        </Head>

        <Header
          guitarra={guitarra}
        />
        
        {children}


        <Footer/>
        
    </>
  )
}
Layout.defaultProps={
  guitarra: null
}
export default Layout