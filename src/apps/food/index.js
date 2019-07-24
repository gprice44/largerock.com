import React, { Component } from 'react'
import { Card, CardBody, CardHeader, CardSubtitle, CardTitle } from 'reactstrap'
import ReactJson from 'react-json-view'


    

class Food extends Component {

    setFood(myJson) {
        this.setState({
            food_json: myJson
        });
    }

    constructor(props) {
        
        super(props);
            this.state = ({
                food_json: {}
            })
            this.setFood = this.setFood.bind(this);
    }
    componentDidMount(){
        fetch('https://raw.githubusercontent.com/largerock/lifestyle/master/food.json')
        .then(function(response) {
          return response.json();
        }).then(this.setFood)
    }

        
    render() {
        return(
            <Card>
                <CardHeader>
                <CardTitle><h1>Food</h1></CardTitle>
                <CardSubtitle>sub title</CardSubtitle>
                </CardHeader>
                
                <CardBody>
                <ReactJson src={this.state.food_json}/>
                </CardBody>
            </Card>
        )
    }
}

export default Food