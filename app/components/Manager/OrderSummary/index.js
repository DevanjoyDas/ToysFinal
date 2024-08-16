/**
 *
 * OrderSummary
 *
 */

import React, { useState } from 'react';

import { Col } from 'reactstrap';
import Button from '../../Common/Button';

const OrderSummary = props => {
  const { order } = props;

  const [showInvoice, setShowInvoice] = useState(false);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

      {<Button variant='primary' text={`${showInvoice === false ? 'Show Invoice' : 'Hide Invoice'}`} onClick={() => {
        setShowInvoice(!showInvoice);
      }} />}

      {
        showInvoice && (
          <Col className='order-summary pt-3 mt-3'>
            <h2 className='text-white'>Invoice</h2>
            <div className='d-flex align-items-center summary-item'>
              <p className='summary-label text-white'>ID</p>
              <p className='summary-value ml-auto'>{order._id}</p>
            </div>
            <div className='d-flex align-items-center summary-item'>
              <p className='summary-label text-white'>Items</p>
              <p className='summary-value ml-auto'>{order.total}</p>
            </div>
            <div className='d-flex align-items-center summary-item'>
              <p className='summary-label text-white'>Price</p>
              <p className='summary-value ml-auto'>${order.total}</p>
            </div>


            <div className='d-flex align-items-center summary-item'>
              <p className='summary-label text-white'>Delivery Fee</p>
              <p className='summary-value ml-auto'>Free</p>
            </div>

            <hr />
            <div className='d-flex align-items-center summary-item'>
              <p className='summary-label text-white'>Total</p>
              <p className='summary-value ml-auto'>${order.totalWithTax}</p>
            </div>
          </Col>
        )
      }


    </div>

  );
};

export default OrderSummary;
