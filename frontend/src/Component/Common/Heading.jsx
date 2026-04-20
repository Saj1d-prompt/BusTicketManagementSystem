import React from 'react'
import logo from '../../Image/bmslogo.png'
import style from '../../Style/Heading.module.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Heading = () => {
    const navigate = useNavigate();
    return (
        <div>
            <nav className="border-bottom " >
                <div className="d-flex justify-content-around align-items-center " style={{ height: "80px", width: "auto" }}>

                    <Link to="/"><img src={logo} alt="Logo" style={{ height: "80px", width: "auto" }} /></Link>

                    <ul className={style.navLinks}>
                        <li><a href="#features" className={style.link}>Features</a></li>
                        <li><a href="#about" className={style.link}>About</a></li>
                        <li><a href="#contact" className={style.link}>Contact</a></li>
                    </ul>

                    <div className="d-flex gap-4">
                        <button className="btn btn-outline-danger" onClick={() => navigate('/login')}>Login</button>
                        <button className="btn btn-danger" onClick={() => navigate('/register')}>Register</button>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Heading
