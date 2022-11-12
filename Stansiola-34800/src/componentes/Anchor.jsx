import { Link } from 'react-router-dom';
const Anchor =({texto,link})=>{
    return(
        <div className="col font-sans mx-3 text-gray-700  mt-2 mb-6 ">
            
            <Link to={link}>{texto}</Link>
        </div>
    )
}
export default Anchor