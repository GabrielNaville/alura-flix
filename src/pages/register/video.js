import React from 'react';
import PageBase from '../../components/PageBase'
import { Link } from 'react-router-dom';

function Video () {
    return (
        <PageBase>
            <h1>Cadastro de Video.</h1>

            <Link to='/category'>
                Cadastrar Categoria
            </Link>
        </PageBase>
    )
}

export default Video;
