import{react} from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Img from './codigo.png';
import { Link } from 'react-router-dom';
import './Install.css';


const Install = () => {

    const imagem = <img src={Img} alt ='imagem aleatoria' width={900} height={500}/>
  
    return(
        <div className='install_body'>
            <h1 id='install_titulo'> Instalação e Uso</h1>
           
            <ol>
                <li><b>Instale a biblioteca utilizando o codigo: npm install @mui/material @emotion/react @emotion/styled</b></li>
                <li><b>Faca o importacao sempre que for usa um componente, exemplo: import AddIcon from '@mui/icons-material/Add'</b></li>
                <li><b>Depois da importação carregue seu componete como se cria uma tag exemplo:</b> </li>
            </ol>
            <div id='install_ex'>
                    <span id='install_span'> <DeleteIcon /></span>
                   <span id='install_span'><Button variant='contained'>Botão</Button></span>  
            </div>
                
            <div id='install_image'>
                {imagem}
            </div>
            <Button variant="contained" id='install_botao'><Link to='/' id='install_link'> <b>Voltar pra Home</b></Link></Button>
            <Button variant="contained" id='install_botao'><Link to='/Exemplo' id='install_link'> <b>Ir para Exemplo</b></Link></Button>
            
        </div>
    )
        
    
}
export default Install;