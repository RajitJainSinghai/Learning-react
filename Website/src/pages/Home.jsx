import { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from '../components/LoginModal';
import './Home.css';

const cars = [
  { id: 1, name: 'Lamborghini', image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 2, name: 'Ferrari', image: 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 3, name: 'Porsche', image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 4, name: 'Tesla', image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 5, name: 'Mercedes', image: 'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 6, name: 'BMW', image: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 7, name: 'Audi', image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 8, name: 'Mustang', image: 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 9, name: 'Bugatti', image: 'https://images.pexels.com/photos/248687/pexels-photo-248687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
];

const Home = ({ isLoggedIn, setIsLoggedIn }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const handleCarClick = (car) => {
    if (!isLoggedIn) {
      setSelectedCar(car);
      setShowModal(true);
    }
  };

  return (
    <div className="home-container">
      <h1>Explore Cars</h1>
      <div className="car-grid">
        {cars.map(car => (
          isLoggedIn ? (
            <Link key={car.id} to={`/car/${car.id}`} className="car-item">
              <img src={car.image} alt={car.name} />
              <p>{car.name}</p>
            </Link>
          ) : (
            <div key={car.id} className="car-item" onClick={() => handleCarClick(car)}>
              <img src={car.image} alt={car.name} />
              <p>{car.name}</p>
            </div>
          )
        ))}
      </div>

      {showModal && (
        <LoginModal 
          setLoggedIn={setIsLoggedIn} 
          onClose={() => setShowModal(false)} 
          selectedCar={selectedCar}
        />
      )}
    </div>
  );
};

export default Home;
