import { Component } from 'react';
import Card from 'react-bootstrap/Card';

export default class BioCard extends Component {
  render() {
    return (
      <Card style={{ 
        display: 'flex',
        marginTop: '20px',
        marginLeft: 'auto',
        marginRight: 'auto'
        }}>
        <Card.Img variant='top' src={this.props.img} alt={this.props.name} 
        style={{
          alignSelf: 'center',
          width: '17em',
          height: '17em'
        }}/>
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
          <Card.Text>{this.props.bio}</Card.Text>
          <Card.Link href={this.props.linkedin}>
            LinkedIn
          </Card.Link>
          <Card.Link href={this.props.github}>
            GitHub
          </Card.Link>
        </Card.Body>
      </Card>
    )
  }
}