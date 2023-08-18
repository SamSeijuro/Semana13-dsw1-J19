const React = require('react');
const { Link, useParams } = require('react-router-dom');
const {useState} = require('react');
const client = require('../client');


const VerInstrumentoPage = () => {

    let { id } =useParams();
    const [instrumento, setInstrumento] = useState({});

    client({
        method: 'GET',
        path: '/api/instrumentos/' + id
    }).done(response=>setInstrumento(response.entity));

    return (
        <>
            <h1>Ver Instrumento</h1>

            <table>
                <tr>
                    <th>Nombre</th>
                    <td>{instrumento.nombre}</td>
                </tr>
                <tr>
                    <th>Categoría</th>
                    <td>{instrumento.categoria}</td>
                </tr>
                <tr>
                    <th>Descripción</th>
                    <td>{instrumento.descripcion}</td>
                </tr>
            </table>

            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = VerInstrumentoPage;