import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
const APPID = "907498fc39d4b4c886e27622f8f196a0";

class Nav extends Component {
  state = {
    isLoading: true,
    temp: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined
}

async componentDidMount() {
    try {
        setInterval(async() => {
            const reponse = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=New York,usa&appid=${APPID}&units=metric`)
            const data = await reponse.json()
            console.log(data)


            this.setState({
                isLoading: false,
                temp: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description
            })
        }, 5000);
    } catch (e) {
        console.log(e);
    }
}


render() {
    return (

        <nav style = {{ color: "Blue" }} >

        <Link to = "/" > < h3 > Forecast < /h3></Link > { console.log(this.state.city) } {this.state.isLoading ? < h1 > Live Weather Report Loading... < /h1> : 
        < div >
                <h1 > { this.state.city } </h1> 
                <h1 style = {{ color: "Red" }} > { this.state.temp } </h1> <h1 style = {{ color: "black" }} > { this.state.description } </h1> 
                </div >
        } 
         </nav>


    )
}
}

export default Nav