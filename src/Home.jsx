import{react} from 'react';
import BackHandIcon from '@mui/icons-material/BackHand';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import './Home.css';



const Home = () => {

  
    return(
        <div id='home_body'>
            <h1 id='Titulo'> MUI biblioteca para react.</h1>
            <h3 id='intro'> Intro</h3>
            <p id='home_texto'><b>
            Material UI é uma biblioteca de componentes React de código aberto que implementa o Material Design do Google .

            Inclui uma coleção abrangente de componentes pré-construídos que estão prontos para uso na produção assim que saem da caixa.

            O Material UI tem um design bonito e apresenta um conjunto de opções de personalização que facilitam a implementação de seu 
            próprio sistema de design personalizado sobre nossos componentes.  </b> 
            </p>
            <div id='div_ex_body'>
                <h3>Alguns exemplos que irei mostrar:</h3>
                <div id='div_ex'>
                <h3 id='icones'> icones</h3>
                  <AddIcon />
                  <BackHandIcon />
                  <DeleteIcon />
                </div>
                <div id='div_ex'>
                <h3 id='botoes'> botoes</h3>
                    <Button variant="text">Text</Button>
                    <Button variant="contained">Contained</Button>
                    <Button variant="outlined">Outlined</Button>
                </div>

            </div>
            <div id='home_div_botao'>
            <Button variant="contained"><Link to='/Install' id='home_botao'><b>Ir para Instalação </b></Link></Button>
            </div>
            

        </div>
    )
        
    
}
export default Home;