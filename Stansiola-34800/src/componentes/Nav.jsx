import Boton from "../componentes/Boton";
import Anchor from "../componentes/Anchor";
import { Link } from "react-router-dom";


const  Nav=()=>{
    return(
        <nav className="shadow px-24">

            <div className="flex mx-11 max-h-36">
                <div className="inline-block align-middle w-40 px-4 mt-8">
                    
                        <Link to='/'><img src="./src/assets/mcdonalds-logo.png" alt="Mac-Logo" className=""/></Link>
                    
                </div>

                <div className="flex flex-wrap">
                    <div className="flex flex-grow space-x-64">
                        
                        <div className="grid grid-cols-2 items-center text-sm mr-10 mt-4">
                            <Anchor
                                link={'/Work'}
                                texto={"Trabajo con nosotros"}
                            />
                            <div >
                            <Anchor
                                link={'/Contact'}
                                texto={"Contacto"}
                            />
                            </div>
                        </div>



                        <div className="flex items-center">
                            <Boton
                            link={'/cart'}
                                icono={'./src/assets/icono2.png'}
                                texto={"Carrito"}
                            />
                            <Boton
                            link={'/TakeAway'}
                                icono={'./src/assets/icono1.png'}
                                texto={"Pedi y Retira"}
                            />
                        </div>

                    </div>


                    
                    
                    <div className="flex items-stretch text-lg"  >
                    <Anchor
                    link={'/producto'}
                    texto={"Productos"}
                    /> 
                    <Anchor
                    link={'/locales'}
                    texto={"Locales"}
                    /> 
                    <Anchor
                    link={'/family'}
                    texto={"En familia"}
                    /> 
                    <Anchor
                    link={'/nosotros'}
                    texto={"Nosotros"}
                    /> 
                    </div>
                     
                    
                    


                </div>
            </div>

        </nav>
        
    )
    
}

export default Nav