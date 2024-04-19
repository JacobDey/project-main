const Home = () => {
  return (
    <div className="home-container" style={{
      backgroundImage: `url("/images/rental.jpeg")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%', // Adjust the width as needed
      height: '100vh', // Adjust the height as needed
    }}>
      <h1>Welcome to Rental Car Service</h1>
      <p>Find the perfect car for your next adventure!</p>
    </div>
  );
};

export default Home;