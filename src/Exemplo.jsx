import {react} from 'react';
import Link from '@mui/material/Link';
import { red } from '@mui/material/colors';
import ImgExemplo from './exemplo.png';
import {Link as Liq} from 'react-router-dom';
import './Exemplo.css';
import Button from '@mui/material/Button'
const Exemplo = () => {  
    const Ex = <img src={ImgExemplo} alt='EX codigo' width={800} height={800}/>;
    return(
        <div>
        <h1 id='exemplo_titulo'> Exemplo de codigo do uso do MUI</h1>
        <p id='exemplo_texto'> <b>Para ver a lista de icons e mais componetes que pode usar, acesse a documentação no link.</b></p>
        <div id='ex_div_doc'>
        <Link href='https://mui.com/material-ui/getting-started/' underline='aways' id='exemplo_link'><b>Documentação</b>  </Link>
        </div>
        
        <div>
            {Ex}
        </div>
        <div id='ex_image'>
        <Button variant='contained'><Liq to='/' id='exemplo_link'> <b>Voltar pra Home</b></Liq></Button>
        </div>
       
        </div>
    )
}
export default Exemplo;