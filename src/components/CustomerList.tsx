import React from 'react';

interface Customer {
  id: number;
  name: string;
  title: string;
  address: string,
}

interface CustomerListProps {
  customers: Customer[];
  onSelectCustomer: (customer: Customer) => void;
  selectedCustomerId: number | null;
}

const CustomerList: React.FC<CustomerListProps> = ({ customers, onSelectCustomer, selectedCustomerId }) => {
  return (
    <div className="customer-list">
      {customers.map(customer => (
        <div
          key={customer.id}
          className={`customer-card ${selectedCustomerId === customer.id ? 'selected' : ''}`}
          onClick={() => onSelectCustomer(customer)}
        >
          <h3 className="customer-name">{customer.name}</h3>
          <p className="customer-title">{customer.title}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomerList;
