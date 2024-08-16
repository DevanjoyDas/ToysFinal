/**
 *
 * ProductFilter
 *
 */

import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { RiBearSmileFill } from "react-icons/ri";
import RangeSlider from '../../Common/RangeSlider';
import { FaBook, FaCar, FaPaintBrush, FaPuzzlePiece } from 'react-icons/fa';

const priceMarks = {
  1: { label: <p className='fw-normal text-white'>$1</p> },
  5000: { label: <p className='fw-normal text-white'>$5000</p> }
};

const rateMarks = {
  0: {
    label: (
      <span>
        <span className='mr-1 text-white'>5</span>
        <i
          className='fa fa-star fa-1x'
          style={{ display: 'contents' }}
          aria-hidden='true'
        ></i>
      </span>
    )
  },
  20: {
    label: (
      <span>
        <span className='mr-1 text-white'>4</span>
        <i className='fa fa-star fa-1x' aria-hidden='true'></i>
      </span>
    )
  },
  40: {
    label: (
      <span>
        <span className='mr-1 text-white'>3</span>
        <i className='fa fa-star fa-1x' aria-hidden='true'></i>
      </span>
    )
  },
  60: {
    label: (
      <span>
        <span className='mr-1 text-white'>2</span>
        <i className='fa fa-star fa-1x' aria-hidden='true'></i>
      </span>
    )
  },
  80: {
    label: (
      <span>
        <span className='mr-1 text-white'>1</span>
        <i className='fa fa-star fa-1x' aria-hidden='true'></i>
      </span>
    )
  },
  100: { label: <span className='text-white'>All</span> }
};

const rating = v => {
  switch (v) {
    case 100:
      return 0;
    case 80:
      return 1;
    case 60:
      return 2;
    case 40:
      return 3;
    case 20:
      return 4;
    default:
      0;
      return 5;
  }
};

const ProductFilter = props => {
  const { filterProducts } = props;

  return (
    <div className='product-filter'>
      <Card className='mb-4 mt-4' style={{ backgroundColor: '#fff0', border: 'none' }}>
        {/* <CardHeader tag='h3'>Price</CardHeader> */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ padding: '1px 2px', backgroundColor: 'white', borderRadius: '5px', textAlign: 'center', padding: '5px' }} className='text-dark'>Filter By Price</div>
        </div>
        <CardBody >
          <div className='mx-2 mb-3'>
            <RangeSlider
              marks={priceMarks}
              defaultValue={[1, 2500]}
              max={5000}
              onChange={v => {
                filterProducts('price', v);
              }}
            />
          </div>
        </CardBody>
      </Card>

      <Card style={{ backgroundColor: '#fff0', border: 'none' }}>
        {/* <CardHeader tag='h3'>Rating</CardHeader> */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ padding: '1px 2px', backgroundColor: 'white', borderRadius: '5px', textAlign: 'center', padding: '5px' }} className='text-dark'>Filter By Rating</div>
        </div>
        <CardBody>
          <div className='mx-2 mb-4'>
            <RangeSlider
              type='slider'
              marks={rateMarks}
              step={20}
              defaultValue={[100]}
              onChange={v => {
                filterProducts('rating', rating(v));
              }}
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductFilter;
