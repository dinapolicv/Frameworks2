import './App.css';
import { Component } from 'react';
import { Cabecalho } from './Components/Cabecalho';
import { Busca } from './Components/Busca';
import { Lista } from './Components/Lista';
import { Rodape } from './Components/Rodape'

class App extends Component{
  state = {
    busca: '',
    odas: []
  }

  componentDidMount(){
    this.carregaODAs();
  }

  carregaODAs(){
    const {busca} = this.state;
    fetch('https://www.bocaweb.com.br/apibocaweb?nome='+busca)
    .then(response => response.json())
    .then(odas => this.setState({odas}))
  }

  buscaODA = (evento) => {
    this.setState({busca: evento.target.value});
    this.carregaODAs()
  }

  render() {
    const {busca, odas} = this.state;

    return (
      <section className='container'>
        <div className='top'>
          <Cabecalho/>
          <Busca
            busca={this.state.busca}
            buscaODA={this.buscaODA}
          />
        </div>
        <p>{odas.length} odas</p>
        <div className='cont'>
          <div className='temp'> 
            {odas.map(oda =>(
              <Lista
                key={oda._id}
                nome={oda.nome}
                usuario={oda.usuario}
                descricao={oda.descricao}
                data={oda.data_inclusao}
                palavras_chave={oda.palavras_chave}
              />
            ))}
          </div>
        </div>
          <Rodape/>
      </section>
    );
  }
}
export default App;
