import { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from '../components/LoginModal';
import './Home.css';

const cars = [
  { id: 1, name: 'Lamborghini', image: 'https://images.hindustantimes.com/auto/img/2022/06/15/1600x900/Lamborghini_Aventador_Ultimae_Roadster_1655282971884_1655282978599.jpeg' },
  { id: 2, name: 'Ferrari', image: 'https://robbreport.com/wp-content/uploads/2024/02/laferrari.jpg?w=1024' },
  { id: 3, name: 'Porsche', image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/39232/911-exterior-right-front-three-quarter-154382.jpeg?isig=0&wm=1&q=80' },
  { id: 4, name: 'Tesla', image: 'https://img.etimg.com/thumb/width-1200,height-1200,imgsize-38072,resizemode-75,msid-96544962/tech/technology/tesla-used-car-price-bubble-pops-weighs-on-new-car-demand.jpg' },
  { id: 5, name: 'Mercedes', image: 'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 6, name: 'BMW', image: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 7, name: 'Audi', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQclbmeBysyPCoP6LpM8BnW3wF9uXm7o_5WFw&s' },
  { id: 8, name: 'Mustang', image: 'https://imgd.aeplcdn.com/664x374/cw/ec/23766/Ford-Mustang-Exterior-126883.jpg?wm=0&q=80' },
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
            <Link key={car.id} to={`/car/${car.id}`} state={car} className="car-item">
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
