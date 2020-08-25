import React from 'react';
import Brick from '../Brick/Brick.js'
import './style.css';
class Wall extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bricks: []
        }
    }

    addMoreBricks = ()=>{
        
        const newBrickArray =[...this.state.bricks];
        newBrickArray.push(newBrickArray.length+1)
        this.setState({
            bricks:newBrickArray
        })
    }
    clearBricks=()=>{
        this.setState({
            bricks:[]
        })
    }

    //render method is a function which is used to display on the browser
    render = () => {

        return (
            <div className="wall-container">
            <p className="heading">Number of walls: {this.state.bricks.length}</p>
            {
                this.state.bricks.map((brick)=>{
                    return <Brick key={brick}  name={brick}/>
                })
            }

              <button onClick={this.addMoreBricks} className="button">Add More</button>
              <button onClick={this.clearBricks} className="clear">Clear Bricks</button>

            </div>
        )

    }

} 

export default Wall;