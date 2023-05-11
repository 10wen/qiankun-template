import { Link, useNavigate } from "react-router-dom"

const MainLayout = ({children}) => {
    const navigate = useNavigate()

    return (
        <div>
            <Link to="/home">home</Link>
            <Link to="/about">about</Link>
            { children }
        </div>
    )
}

export default MainLayout