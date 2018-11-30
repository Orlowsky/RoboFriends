import React, {Component} from 'react';
import CardList from '../components/CardList';
//import { robots } from './robots'; <<korzystamy z internetowej bazy
import SearchBox from '../components/SearchBox';
import './App.css'
import Scroll from '../components/Scroll'



class App extends Component{
    constructor(){
        super();
        this.state = {
            robots: [],  //w naszym przypadku robots ogólnie []
            searchfield: ''
        }
        //console.log('constructor');   <<<<test
    }

componentDidMount(){ //<<pobieranie informacji ze strony i przekształcanie na czytelna fomrme?
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>{
        return response.json()})
    .then(users =>{
        this.setState({robots: users})
    })
   // console.log('componentDidMount'); <<<test
}

onSearchChange = (event) =>{ // to wywołujemy pod wpływem eventu w Searchbox
    //console.log(event.target.value);
    this.setState({searchfield: event.target.value})
    
}


    render(){
        const {robots, searchfield} = this.state; // destructuring, normally would be this state next to const
        const filterRobots = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        //console.log(filterRobots);
       // console.log('render'); <<<<test
       if(!robots.length){   //robots.length === 0
           return <h1>Loading</h1>
       }else
       {

        return(
            <div className = 'tc'>
            <h1 className = 'f1'>RoboFriends</h1>
            <SearchBox searchChange = {this.onSearchChange} /> {/*  własciwosci searchchange jest onsearchchange ktore zostaje wykonane */}
             <Scroll>
             <CardList robots = { filterRobots } />
             </Scroll>
            </div>
        )
       }
    }



}
export default App;

//everytime onchange event trigerred, call searchchange function, but its prop of 
//searchbox so it make function on searchchange 