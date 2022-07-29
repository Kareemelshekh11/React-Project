import { Component } from "react";
import Movies from "./movies";
import Tv from "./tv";


class Home extends Component{

    render(){

        return <div>
          <Movies/>
          <Tv/>
        </div>
    }
}

export default Home;