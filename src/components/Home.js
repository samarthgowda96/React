import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../App.css'
import Nav from '../components/Nav'
import Footer from './Footer'
import Items from'../Items'

class Home extends Component {
    state = {
        posts: Items
    }
    
    render() {


       
        const postList = this.state.posts.map(post => {
                return (
                    
                    <div className="card" key={post.id}>
                        <div className="content">
                            
                        <img style={{width: "900px", height:"500px"}} src={post.img} /><br></br>
                            <Link to={'/' + post.id}>
                                <span className="card-title"> {post.title}</span> </Link>
                                <p> <p> {post.front} </p></p>
                                <div>
                               
                            </div>
                           
                           
                        </div>
                    </div>
                )
            })
        
        return (
            <div>

            
            <div className="container">
            <div className="flexContainer">
                <div className="rightChild">
                {postList}
                </div>
                <div className="leftChild">
                <Nav style={{width: "350px"}}/>
                </div>
            </div>
            
    
           
        </div>
        <Footer/>
        </div>

        )
    }
}






export default Home