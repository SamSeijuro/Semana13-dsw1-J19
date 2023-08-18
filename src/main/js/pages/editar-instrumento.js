const React = require('react');
const {useState} = require('react');
const { Link,useParams } = require('react-router-dom');
const client = require('../client');



const EditarInstrumentoPage = ()=>{

    const [instrumento, setInstrumento] = React.useState({})
    let { id } =useParams();

    client({
        method: 'GET',
        path: '/api/instrumento/'+id
    }).done((response)=>setInstrumento(response.entity))

    useEffect(()=>{
        client({
            method: 'GET',
            path: ''
        })
    })


    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'PATCH',
            path: '/api/instrumento/'+id,
            entity: instrumento,
            headers: {'Content-Type': 'application/json'}
        }).done(()=>window.location = '/')
    }


    return(
        <>
            <h1>Editar Instrumento</h1>

            <form>
                <label>Nombre</label>
                <input type="text" id="nombre" name="nombre" value={instrumento.nombre} onChange={
                    (e)=>setInstrumento({...instrumento, nombre: e.target.value})}/><br />
                <label>Categoria</label>
                <input type="text" id="categoria" name="categoria" value={instrumento.categoria} onChange={
                    (e)=>setInstrumento({...instrumento, categoria: e.target.value})}br />
                <label>Descripcion</label>
                <input type="text" id="descripcion" name="descripcion" value={instrumento.descripcion} onChange={
                    (e)=>setInstrumento({...instrumento, descripcion: e.target.value})}/><br />

                <input type="submit" value="Editar Instrumento" />

            </form>
        
        </>
    )
}

module.exports = EditarInstrumentoPage;