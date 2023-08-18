const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter, RouterProvider} = require('react-router-dom');


const HomePage = require('./pages/home');
const NuevoMusicoPage = require('./pages/nuevo-musico');
const NuevoInstrumentoPage = require('./pages/nuevo-instrumento');
const VerInstrumentoPage = require('./pages/ver-instrumento');
const VerMusicoPage = require('./pages/ver-musico');



const router = createBrowserRouter([
	{path: '/', element: <HomePage />},
	{path: '/ver-instrumento/:id', element: <VerInstrumentoPage />},
	{path: '/ver-musico/:id', element: <VerMusicoPage />},
	{path: '/nuevo-musico', element: <NuevoMusicoPage />},
	{path: '/nuevo-instrumento', element: <NuevoInstrumentoPage />},

])

ReactDOM.render(
				<React.StrictMode>
					<RouterProvider router={router} />
				</React.StrictMode>
				, document.getElementById('react'))