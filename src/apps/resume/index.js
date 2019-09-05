import React, { Component } from 'react'
import { Card, CardBody, CardHeader, CardSubtitle, CardTitle, Row, Col } from 'reactstrap'
import ReactJson from 'react-json-view'
import maboi from '../../images/maboi.jpg'

class Resume extends Component {

    setResume(myJson) {
        this.setState({
            resume_json: myJson
        });
    }

    constructor(props) {
        
        super(props);
            this.state = ({
                food_json: {}
            })
            this.setResume = this.setResume.bind(this);
    }
    componentDidMount(){
        fetch('https://raw.githubusercontent.com/largerock/lifestyle/master/resume.json')
        .then(function(response) {
          return response.json();
        }).then(this.setResume)
    }

    render () {
        return(
            <Row>
                <Col>
                    <Card>
                        <CardHeader>
                        <CardTitle><h1>Resume</h1></CardTitle>
                        <CardSubtitle>sub title</CardSubtitle>
                        </CardHeader>
                        <CardBody>
                        <ReactJson src={this.state.resume_json}/>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Row>
                        <img src={maboi} alt="MABOI"/ >
                    </Row>
                    <Row>
                        <img src={maboi} alt="MABOI"/ >
                    </Row>
                </Col>
            </Row>
        )
    }
}

export default Resume