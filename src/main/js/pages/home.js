const React = require('react');
const client = require('../client');
const {Link} = require('react-router-dom');


class HomePage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {instrumentos: [], musicos: []};
	}

	componentDidMount() {
		client({method: 'GET', path: '/api/instrumentos'}).done(response => {
			this.setState({instrumentos: response.entity._embedded.instrumentos});
		});


		client({method: 'GET', path: '/api/musicos'}).done(response => {
			this.setState({musicos: response.entity._embedded.musicos});
		});
	}

	render() {
		return (
			<>
			<h1>Como es posible este suceso..!!!</h1>
   			<h2>PIPIPIPIPIPI..!!</h2>
			<Titulo entidad="Instrumentos" emoji="🎸"/>
			<InstrumentoList instrumentos={this.state.instrumentos}/>
			<Link to="/nuevo-instrumento">Nuevo Instrumento</Link>
			<Titulo entidad="Musicos" emoji="👨‍🎤"/>
			<MusicoList musicos={this.state.musicos}/>
            <Link to="/nuevo-musico">Nuevo Músico</Link>
 			</>
		)
	}
}

const Titulo = (props) => {
	return (
		<>
			<hr />
			<h2>{props.entidad} - {props.emoji}</h2>
			<hr />
			Lista completa de {props.entidad.toLowerCase()}
		</>
	)
} // arrow function




class InstrumentoList extends React.Component{
	render() {
		const instrumentos = this.props.instrumentos.map(instrumento =>
			<Instrumento key={instrumento._links.self.href} instrumento={instrumento}/>
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Categoria</th>
						<th>Descripcion</th>
					</tr>
					{instrumentos}
				</tbody>
			</table>
		)
	}
}


class MusicoList extends React.Component{
	render() {
		const musicos = this.props.musicos.map(musico =>
			<Musico key={musico._links.self.href} musico={musico}/>
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Acciones</th>
					</tr>
					{musicos}
				</tbody>
			</table>
		)
	}
}


class Instrumento extends React.Component{
	render() {
		const id = this.props.instrumento._links.self.href.split("/").slice(-1)
		return (
			<tr>
				<td>{this.props.instrumento.nombre}</td>
				<td>{this.props.instrumento.categoria}</td>
				<td>
					<Link to={"/ver-instrumento/" + id}>Ver</Link>
				</td>
			</tr>
		)
	}
}

class Musico extends React.Component{
	render() {
			const id = this.props.musico._links.self.href.split("/").slice(-1)
			return (
				<tr>
					<td>{this.props.musico.nombre}</td>
					<td>
							<Link to={"/ver-musico/" + id}>Ver</Link>
					</td>
				</tr>
			)
	}
}


module.exports = HomePage;