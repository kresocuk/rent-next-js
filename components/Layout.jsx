import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import Navigation from './Navigation';
import Footer from './Footer';


const Layout = ( {children} ) => (
    <>
     <Head>
         <title>Real Estate</title>
     </Head>
     <Box maxWidth="1280px" m="auto">
         <header>
            <Navigation />
         </header>
         <main>
             {children}
         </main>
         <footer>
             <Footer />
         </footer>
     </Box>
    </>
)

export default Layout;