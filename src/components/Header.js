import React, { useState, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import TypeAcessEnum from "../enums/type-access"

export default function Header(props) {
  const [headers, setterHeaders] = useState([]);

  useLayoutEffect(() => {
    defineHeaders();
  }, []);

    const defineHeaders = () => {
        props.type === TypeAcessEnum.PUBLIC ? 
        setterHeaders(
                <>
                <Link to='/tasks'>Tarefas</Link>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
                </>
            ) :
            setterHeaders(
                <>
                    <Link to='/home'>Home</Link>
                    <Link to='/tasks/new'>Nova Tarefa</Link>
                    <Link to='/logoff'>Logoff</Link>
                </>
            )        
    }

    return(
        <header id='header'>
            <div className='inner'>
                <nav id='nav'>
                    {headers}
                </nav>
                <a href='#nav' className='navPanelToggle'><span className='fa fa-bars'></span></a>
            </div>
        </header>
    )
}