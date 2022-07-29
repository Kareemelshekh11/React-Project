import axios from "axios";
import { Component } from "react";


class Movies extends Component{

    state ={movies:[]};
   async componentDidMount(){
    let {data}=await axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=52bbcddeda849047525b51d6f8a12361")

    this.setState({movies:data.results})
   }


    render(){

        return <div>
        <div className="container">
             <div className="row">
                <div className="col-md-3">
                    <div className="w-50 brdr"></div>
                   <h2>Trending<br/>Movies <br/>To watch now</h2>
                   <p className="secondFontColor">Most watched movies by days</p>
                   <div className="w-100 brdr"></div>
                </div>

                {
                    this.state.movies.map((value,index)=>{
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

export default Movies;