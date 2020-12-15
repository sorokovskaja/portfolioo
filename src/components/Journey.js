import React from 'react';
import $ from "jquery";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import { Chart } from 'react-charts'

export default class Journey extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            usdprice: 0.00,
            gbpPrice: 0.00,
            eurPrice: 0.00,
            lastFetch: "",
            history: []
        }
    }
    componentDidMount() {
        this.fetch();
        this.hifetch();
    }
    fetch() {
        var context = this;

        window.setTimeout(function () {
            $.ajax({
                url: "https://api.coindesk.com/v1/bpi/currentprice.json",
                dataType: "json",
                method: "GET",
                success: function (response) {
                    context.setState({
                        usdprice: response.bpi.USD.rate,
                        gbpPrice: response.bpi.GBP.rate,
                        eurPrice: response.bpi.EUR.rate,
                        lastFetch: response.time.updated
                    });
                }
            });
        }, 1000);
    }
    hifetch() {
        debugger
        var context = this;
        window.setTimeout(function () {
            $.ajax({
                url: "https://api.coindesk.com/v1/bpi/historical/close.json",
                dataType: "json",
                method: "GET",
                success: function (response) {
                    let bpi = response.bpi
                    let tmp = []
                    tmp.push(bpi)
                    context.setState({
                        history: tmp
                    })
                }
                
            })
                // .then((data) => {
                //     let tmpArray = []
                //     for (var i = 0; i < data.results.length; i++) {
                //         tmpArray.push(data.results[i].NeededInfo)
                //     }
                //     context.setState({
                //         history: tmpArray
                //     })
                // })

        }, 1000);
    }
    render() {
        return (
            <div>
                <br></br>
                <Container>
                    <Row>
                        <Col>
                        {/* className="bg-dark text-white" */}
                            <Card style={{ width: '18rem'}}  >
                                <Card.Header as="h2">Bitcon Price</Card.Header>
                                <Card.Body>
                                    <Card.Title>BTC Price: ${this.state.usdprice}</Card.Title>
                                    <Card.Text>
                                        As of: {this.state.lastFetch}</Card.Text>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            </Card>
                            <br></br>
                            <Card style={{ width: '18rem' }}>
                                <Card.Header as="h2">Bitcon Price</Card.Header>
                                <Card.Body>
                                    <Card.Title>BTC Price: £{this.state.gbpPrice}</Card.Title>
                                    <Card.Text action variant="dark">
                                        As of: {this.state.lastFetch}</Card.Text>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            </Card>
                            <br></br>
                            <Card style={{ width: '18rem' }} >
                                <Card.Header as="h2">Bitcon Price</Card.Header>
                                <Card.Body>
                                    <Card.Title>BTC Price: €{this.state.eurPrice}</Card.Title>
                                    <Card.Text>
                                        As of: {this.state.lastFetch}</Card.Text>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card >
                                <Card.Body>
                                    <Card.Header as="h2">Bitcon Data</Card.Header>
                                    <Card.Text action variant="dark"> previous 31 days</Card.Text>
                                    <MyChart />
                                </Card.Body>
                            </Card>
                            <Card >
                                <Card.Body>
                                    <Card.Header as="h2">Bitcon Data</Card.Header>
                                    <Card.Text action variant="dark" >
                                    {/* {
                                        this.state.history.map(function(val){
                                            return <td>{val}</td>;
                                          })
                                    } */}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}

function MyChart() {
    const data = React.useMemo(
        () => [
            {
                label: 'Series 1',
                data: [{ x: 1, y: 10 }, { x: 2, y: 10 }, { x: 3, y: 10 }]
            },
            {
                label: 'Series 2',
                data: [{ x: 1, y: 10 }, { x: 2, y: 10 }, { x: 3, y: 10 }]
            },
            {
                label: 'Series 3',
                data: [{ x: 1, y: 10 }, { x: 2, y: 10 }, { x: 3, y: 10 }]
            }
        ],
        []
    )

    const axes = React.useMemo(
        () => [
            { primary: true, type: 'linear', position: 'bottom' },
            { type: 'linear', position: 'left' }
        ],
        []
    )

    return (
        <div
            style={{
                width: '400px',
                height: '300px'
            }}
        >
            <Chart data={data} axes={axes} />
        </div>
    )
}



