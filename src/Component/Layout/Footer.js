import { Link } from "react-router-dom";
const date = new Date().getFullYear()


const Footer = ()=> (
    <div  className="p-4 text-center" style={{'background':'#eee'}}>
        <p style={{'color':'#888'}}>Copyright&copy; Euro Foods&trade; {date}</p>
    </div>
)

export default Footer;