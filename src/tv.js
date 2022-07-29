import axios from "axios";
import { Component } from "react";


class Tv extends Component{

    state ={tv:[]};
   async componentDidMount(){
    let {data}=await axios.get("https://api.themoviedb.org/3/trending/tv/day?api_key=52bbcddeda849047525b51d6f8a12361")

    this.setState({tv:data.results})
   }


    render(){

        return <div>
        <div className="container">
             <div className="row">
                <div className="col-md-3">
                    <div className="w-50 brdr"></div>
                   <h2>Trending<br/>Tv <br/>To watch now</h2>
                   <p className="secondFontColor">Most watched tv by days</p>
                   <div className="w-100 brdr"></div>
                </div>

                {
                    this.state.tv.map((value,index)=>{
                     return (<div key={index} className="col-md-3">
                       <img src={"https://image.tmdb.org/t/p/original"+value.poster_path}/>
                       <p>{value.title}</p>
                     </div>
                     )
                    })
                }
             </div>
           </div>
        </div>
    }
}

export default Tv;