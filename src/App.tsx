import React, { useState } from 'react';
import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetails';
import { customers } from './constants/MOCK_DATA';

const App: React.FC = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(customers[0]);

  return (
    <div className="app">
      <header>
        <h1 className="heading">Customer Details Portal</h1>
      </header>
      <div className="content">
        <CustomerList
          customers={customers}
          onSelectCustomer={setSelectedCustomer}
          selectedCustomerId={selectedCustomer.id}
        />
        <CustomerDetails key={selectedCustomer.id} customer={selectedCustomer} />
      </div>
    </div>
  );
};

export default App;
