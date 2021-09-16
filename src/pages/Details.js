import { useSelector } from 'react-redux';
// import countries from '../components/countriesData';

const Details = () => {
  const details = useSelector((store) => store.details);
  console.log(details);

  return (
    <>
      {/* {details.map((obj) => ( */}
      <div key={1}>
        <div>Details page</div>
        <div>DETAILS</div>
        {/* <div>{obj.list}</div> */}
      </div>
      {/* ))} */}
    </>
  );
};

export default Details;
