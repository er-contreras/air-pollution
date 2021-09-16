import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { getAQIThunk } from '../components/apiManager';
// import countries from '../components/countriesData';

const Details = () => {
  const dispatch = useDispatch();
  const details = useSelector((store) => store.details);
  // const coordenates = details.coord;

  useEffect(() => {
    dispatch(getAQIThunk());
  }, []);

  console.log(details);

  return (
    <div>
      {details.map((obj) => (
        <ul key={uuidv4()}>
          <li>Details page</li>
          <li>DETAILS</li>
          <li>{obj.coord}</li>
        </ul>
      ))}
    </div>
  );
};

export default Details;
