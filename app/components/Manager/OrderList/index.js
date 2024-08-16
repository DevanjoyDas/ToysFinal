/**
 *
 * OrderList
 *
 */

import React from 'react';

import { Link } from 'react-router-dom';

import { formatDate } from '../../../utils/date';

const OrderList = props => {
  const { orders } = props;

  const renderFirstItem = order => {
    if (order.products) {
      const product = order.products[0].product;
      return (
        <img
          className='item-image'
          src={`${product && product?.imageUrl
            ? product?.imageUrl
            : '/images/logo.png'
            }`}
        />
      );
    } else {
      return <img className='item-image' src='/images/placeholder-image.png' />;
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className='order-list'>
        {orders.map((order, index) => (
          <div key={index} className='order-box'>
            <Link to={`/order/${order._id}`} className='d-block box-link'>
              <div className='d-flex flex-column flex-lg-row mb-3'>
                <div className='order-first-item p-lg-3'>
                  {renderFirstItem(order)}
                </div>
                <div className='d-flex flex-column flex-xl-row justify-content-between flex-1 ml-lg-2 mr-xl-4 p-3'>
                  <div className='order-details'>
                    <div className='mb-1'>
                      <span className='text-white'>Status</span>
                      {order?.products ? (
                        <span className='order-label order-status' style={{ color: 'gold' }}>{` ${order?.products[0].status}`}</span>
                      ) : (
                        <span className='order-label order-status'>{` Unavailable`}</span>
                      )}
                    </div>
                    <div className='mb-1'>
                      <span className='text-white'>Order #</span>
                      <span className='order-label' style={{ color: 'gold' }}>{` ${order._id}`}</span>
                    </div>
                    <div className='mb-1'>
                      <span className='text-white'>Ordered on</span>
                      <span className='order-label text-white'>{` ${formatDate(
                        order.created
                      )}`}</span>
                    </div>
                    <div className='mb-1'>
                      <span className='text-white'>Total Price</span>
                      <span className='order-label' style={{ color: 'gold' }}>{` $${order?.totalWithTax ? order?.totalWithTax : 0
                        }`}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>

  );
};

export default OrderList;
