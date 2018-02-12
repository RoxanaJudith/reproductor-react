import React from 'react';
//import ReactDOM from 'react-dom';
import {render} from 'react-dom';
//import Media from './src/playlist/components/media.js';
//import Playlist from './src/playlist/components/playlist';
import Home from '../pages/containers/home';
import data from '../api.json';

const homeContainer = document.getElementById('home-container')
// const holaMundo=<h1>Hola Mundo...!</h1>;
// ReactDOM.render(que voy a renderizar, donde lo haré);
//ReactDOM.render(holaMundo, app);

//ReactDOM.render(<Media/>,app);
//render(<Media/>,app);     METODO HARD
//render(<Media title="¿Que es responsive Desing?" autor="RoxanaJudith" image="./images/covers/responsive.jpg" type="video"/>,app);
//render(<Media title={25} autor={()=>{}} image="./images/covers/responsive.jpg"/>,app);//ejemplo para numeros y funciones
//render(<Playlist data={data}/>, app)
render(<Home data={data}/>, homeContainer)

