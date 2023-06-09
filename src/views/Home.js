import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";


class Home extends React.Component {
    state={
        skills : [
            {
                id : 1,
                name : "JavaScript",
                description : "desc JS",
                image : require ("../images/js.png")
            },
            {
                id : 2,
                name : "React",
                description : "desc React",
                image : require ("../images/react.png")
            },
            {
                id : 3,
                name : "Vue",
                description : "desc Vue",
                image : require ("../images/vue.png")
            },
            {
                id : 4,
                name : "Angular",
                description : "desc Angular",
                image : require ("../images/angular.png")
            },

        ]
    }

    render () {
        const {skills} = this.state
        return (
            <div>
                <Navbar/>
                <h1 style={{paddingLeft:"6rem"}} >Home Page</h1>
                <div style={container} >
                    { skills.map(item =>
                    <div key={item.id} style={card} > 
                        <img src={item.image} alt={item.name} style={img}/>
                        <h3> {item.name} </h3>
                    </div>
                    )}
                </div>
                <Footer/>
            </div>
        )
    }
}


export default Home

const container = {
    display : "flex",
    padding : "0 6rem",
    justifyContent : "space-between"
}

const card = {
    width : "20%",
    height : "15rem"
}

const img = {
    width : "100%",
    height : "100%"
}