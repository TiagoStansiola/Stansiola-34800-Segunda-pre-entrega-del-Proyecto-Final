import { Link } from "react-router-dom"

const Boton =({texto,icono})=>{
    return(
        <Link to='/cart'><button className="flex items-center rounded bg-amber-400 h-12 p-6 m-2 font-sans">
            <div className="mr-5">
                <img src={icono} alt="icono" />

            </div>
            <div>
                <p className="text-sm text-slate-700">{texto}</p>
            </div>
        </button></Link>
    )
}
export default Boton