import React, { useEffect, useState } from 'react';

interface CustomerDetailsProps {
  customer: {
    id: number;
    name: string;
    title: string;
    address: string;
  };
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  const [photos, setPhotos] = useState<string[]>([]);
  
  
  useEffect(() => {
    const fetchPhotos = async () => {
      // const queries = ['nature', 'technology', 'city', 'people'];
      // const query = queries[Math.floor(Math.random() * queries.length)];
      // const response = await fetch(
      //   `https://api.unsplash.com/photos/random?count=9&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}&w=150&h=150&query=${query}`
      // );
      const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=9');
      
      const data = await response.json();
      setPhotos(data.map((photo: any) => photo.url));
      // setPhotos(data.map((photo: any) => photo.urls.small));
    };

    fetchPhotos();
    const intervalId = setInterval(fetchPhotos, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="customer-details">
      <h2 className='grid-customer-name'>{customer.name}</h2>
      <h3 className='grid-customer-title'>{customer.title}</h3>
      <p className='grid-customer-address'>{customer.address}</p>
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <img key={index} src={photo} alt="customer" />
        ))}
      </div>
    </div>
  );
};

export default CustomerDetails;