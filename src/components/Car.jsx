import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Car = ({ model, serviceFee, chargePerKm, capacity, image }) => {
    const navigate = useNavigate();
    const [trigger, setTrigger] = useState(false);
    const handleClick = () => {
        setTrigger(true);
        setTimeout(() => navigate('/location'), 3000);
    }

    {/*bootstrap card styling*/}
    return (
        <Card style={{ width: '50%', margin: 'auto', textAlign: 'center', marginTop: '10px' }}>
            <Card.Body>
                <Card.Title>{model}</Card.Title>
                <Card.Img variant='top' src={`/images/${image}`} style={{ width: '400px' }} />
                <Card.Text>
                    <p>
                        <span>{`Service Fee: ${serviceFee}`}</span>
                        <br />
                        <span>{`$/km: ${chargePerKm}`}</span>
                        <br />
                        <span>{`Capacity: ${capacity}`}</span>
                    </p>
                </Card.Text>
            </Card.Body>

            <Button variant='primary' onClick={handleClick}>Book now</Button>
            {/*clicking the button sets this trigger to true*/}
            {trigger && <Alert key='info' variant='info'>This car is now available in 3 locations. Pick it up now!</Alert>}
        </Card>
    );
}

export default Car;