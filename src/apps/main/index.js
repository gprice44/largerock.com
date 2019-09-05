import React, { Component } from 'react'
import { Card, CardBody, CardHeader, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import '../../style/main.css'

class Main extends Component {
    render () {
        return(
            <Card>
                <CardHeader>
                <CardTitle><h1>Title</h1></CardTitle>
                <CardSubtitle>sub title</CardSubtitle>
                </CardHeader>
                
                <CardBody class="newmod">
                    <CardText>
                        <p>body</p>
                    </CardText>
                </CardBody>
            </Card>
        )
    }
}

export default Main