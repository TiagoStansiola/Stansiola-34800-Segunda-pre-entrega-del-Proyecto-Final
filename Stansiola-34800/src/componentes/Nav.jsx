import Boton from "../componentes/Boton";
import Anchor from "../componentes/Anchor";


const  Nav=()=>{
    return(
        <nav className="shadow px-24">

            <div className="flex mx-11 max-h-36">
                <div className="inline-block align-middle w-40 px-4 mt-8">
                    
                        <img src="./src/assets/mcdonalds-logo.png" alt="Mac-Logo" className=""/>
                    
                </div>

                <div className="flex flex-wrap">
                    <div className="flex flex-grow space-x-64">
                        
                        <div className="grid grid-cols-2 items-center text-sm mr-10 mt-4">
                            <Anchor
                                texto={"Trabajo con nosotros"}
                            />
                            <div >
                            <Anchor
                                texto={"Contacto"}
                            />
                            </div>
                        </div>



                        <div className="flex items-center">
                            <Boton
                                icono={'./src/assets/icono2.png'}
                                texto={"Carrito"}
                            />
                            <Boton
                                icono={'./src/assets/icono1.png'}
                                texto={"Pedi y Retira"}
                            />
                        </div>

                    </div>


                    
                    
                    <div className="flex items-stretch text-lg"  >
                    <Anchor
                    texto={"Productos"}
                    /> 
                    <Anchor
                    texto={"Locales"}
                    /> 
                    <Anchor
                    texto={"En familia"}
                    /> 
                    <Anchor
                    texto={"Nosotros"}
                    /> 
                    </div>
                     
                    
                    


                </div>
            </div>

        </nav>
        
    )
    
}

export default Nav