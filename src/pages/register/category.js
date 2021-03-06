import React from 'react';
import PageBase from '../../components/PageBase'
import { Link } from 'react-router-dom';

function Category () {
    return (
        <PageBase>
            <h1>Cadastro de Categoria.</h1>

            <form>

                <label>
                Nome da Categoria:
                <input
                    type="text"
                />
                </label>

                <button>
                Cadastrar
                </button>
            </form>

            <Link to='/'>
                Home
            </Link>
        </PageBase>
    )
}

export default Category;
