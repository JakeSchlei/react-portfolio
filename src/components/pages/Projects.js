import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import sphinxPhoto from '../../assets/project photos/Sphinx.PNG'
import brewPhoto from '../../assets/project photos/Brew.PNG'
import weatherPhoto from '../../assets/project photos/Weather.PNG'
import employeePhoto from '../../assets/project photos/Employee.png'
import readMePhoto from '../../assets/project photos/Read.PNG'
import quizPhoto from '../../assets/project photos/Quiz.PNG'
import globoPhoto from '../../assets/project photos/Capture.PNG'

function Projects() {
    return (
        <Container className="projects d-flex justify-content-center mt-5 xs">
            <Row>
            <Card style={{ width: '18rem', margin: '25px', }}>
                <Card.Img variant="top" src={globoPhoto} />
                <Card.Body>
                    <Card.Title>Globo Gains</Card.Title>
                        <Card.Text>
                            Globo Gains is a fitness app that is made with the GARMEN stack!
                        </Card.Text>
                   
                    <Button as="a" href="https://globogains.herokuapp.com/" target="_blank" variant="dark">View App</Button>
                    <Button as="a" href="https://github.com/palminski/perfidious-gains-goblins" target="_blank" variant="dark">View Repo</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin: '25px'  }}>
                <Card.Img variant="top" src={brewPhoto} />
                <Card.Body>
                    <Card.Title>Ultimate Brew Master</Card.Title>
                        <Card.Text>
                           A frontend project to locate breweries in any area! We used 2 different third party APIs to fetch information!
                        </Card.Text>
                        <Button as="a" href="https://palminski.github.io/ultimate-brew-master-brewery-finder/" target="_blank" variant="dark">View App</Button>
                    <Button as="a" href="https://github.com/palminski/ultimate-brew-master-brewery-finder" target="_blank" variant="dark">View Repo</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin: '25px', }}>
                <Card.Img variant="top" src={sphinxPhoto} />
                <Card.Body>
                    <Card.Title>Lair of the Sphinx</Card.Title>
                        <Card.Text>
                            Lair of the Sphinx is an interactive riddle game made with handlebars and express!
                        </Card.Text>
                   
                    <Button as="a" href="https://the-lair-of-the-sphinx.herokuapp.com/" target="_blank" variant="dark">View App</Button>
                    <Button as="a" href="https://github.com/Dodgemech/The-Lair-of-the-Sphinx" target="_blank" variant="dark">View Repo</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin: '25px'  }}>
                <Card.Img variant="top" src={brewPhoto} />
                <Card.Body>
                    <Card.Title>Ultimate Brew Master</Card.Title>
                        <Card.Text>
                           A frontend project to locate breweries in any area! We used 2 different third party APIs to fetch information!
                        </Card.Text>
                        <Button as="a" href="https://palminski.github.io/ultimate-brew-master-brewery-finder/" target="_blank" variant="dark">View App</Button>
                    <Button as="a" href="https://github.com/palminski/ultimate-brew-master-brewery-finder" target="_blank" variant="dark">View Repo</Button>
                </Card.Body>
            </Card>
            </Row>
            <Row>
            <Card style={{ width: '18rem', margin: '25px'  }}>
                <Card.Img  variant="top" src={weatherPhoto} />
                <Card.Body>
                    <Card.Title>Rain or Shine!</Card.Title>
                        <Card.Text>
                            A weather app that shows current weather in a specific city and a 5 day forecast! I used the OpenWeather API to pull all the information.
                        </Card.Text>
                        <Button as="a" href="https://jakeschlei.github.io/Rain-or-shine/" target="_blank" variant="dark">View App</Button>
                    <Button as="a" href="https://github.com/JakeSchlei/Rain-or-shine" target="_blank" variant="dark">View Repo</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin: '25px'  }}>
                <Card.Img variant="top" src={employeePhoto} />
                <Card.Body>
                    <Card.Title>Employee Tracker</Card.Title>
                        <Card.Text>
                        This is a CLI application that uses SQL to store information. In this application you can view employees, add employees, update employee information, add roles and add departments.
                        </Card.Text>
                        <Button variant="dark">Not Deployed</Button>
                    <Button as="a" href="https://github.com/JakeSchlei/employee_tracker" target="_blank"  variant="dark">View Repo</Button>
                </Card.Body>
            </Card>
            </Row>
            <Row>
            <Card style={{ width: '18rem', margin: '25px'  }}>
                <Card.Img variant="top" src={readMePhoto} />
                <Card.Body>
                    <Card.Title>Professional ReadMe Generator</Card.Title>
                        <Card.Text>
                        The README Generator is a CLI app that was built with node.js and Inquirer from the npm library. The apps intention is to capture user input from the command line.
                        </Card.Text>
                        <Button variant="dark">Not Deployed</Button>
                    <Button as="a" href="https://github.com/JakeSchlei/ReadMe-Generator" target="_blank" variant="dark">View Repo</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin: '25px'  }}>
                <Card.Img variant="top" src={quizPhoto} />
                <Card.Body>
                    <Card.Title>Javascript Quiz</Card.Title>
                        <Card.Text>
                        This is a javascript front end quiz application. It utilizes local storage to save high scores. There is also a timer that will deduct time for incorrect answers.
                        </Card.Text>
                        <Button as="a" href="https://jakeschlei.github.io/Fundamentals-Of-JavaScript-Quiz/" target="_blank" variant="dark">View App</Button>
                    <Button as="a" href="https://github.com/JakeSchlei/Fundamentals-Of-JavaScript-Quiz" target="_blank" variant="dark">View Repo</Button>
                </Card.Body>
            </Card>
            </Row>
        </Container>
    )
};

export default Projects;