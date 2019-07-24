import React, { Component } from 'react'
import { Card, CardBody, CardHeader, CardSubtitle, CardText, CardTitle } from 'reactstrap'

class Main extends Component {
    render () {
        return(
            <Card>
                <CardHeader>
                <CardTitle><h1>Title</h1></CardTitle>
                <CardSubtitle>sub title</CardSubtitle>
                </CardHeader>
                
                <CardBody>
                    <CardText>
                        <p>body</p>
                    </CardText>
                </CardBody>
            </Card>
        )
    }
}

export default Main