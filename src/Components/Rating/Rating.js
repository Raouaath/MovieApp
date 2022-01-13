import { Rate } from 'antd';


const Rating = ({ isFilter, rating, value, setValue }) => {


  const handleChange = x => {
    setValue(x);
  };

  return (
    isFilter ?
      <Rate onChange={handleChange} value={value} />
      :
      <Rate disabled value={rating} />
  );

}




export default Rating