import Car from "./Car";


// JSON for the list of cars
const Cars = () => {
  const carData = [
    {
      model: 'Toyota Camry',
      serviceFee: 250,
      chargePerKm: 0.09,
      capacity: 5,
      image: 'toyota_camry.png'
    },
    {
      model: 'Toyota Model S',
      serviceFee: 500,
      chargePerKm: 0.11,
      capacity: 5,
      image: 'tesla_model_s.png',
    },
    {
      model: 'Toyota Prius',
      serviceFee: 350,
      chargePerKm: 0.10,
      capacity: 4,
      image: 'toyota_prius.png',
    },
  ];

  // map iterates through the list of cars
  return (
    <div className="car-list">
      {carData.map((car, index) => {
        return <Car key={index} {...car} />
      })}
    </div>
    
  );
};

export default Cars;
