import { useParams } from 'react-router-dom';

const CarDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Car Details</h2>
      <p>Details about car ID: {id}</p>
    </div>
  );
};

export default CarDetail;
