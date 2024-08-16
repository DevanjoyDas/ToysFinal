/**
 *
 * Add
 *
 */

import React, { useState } from 'react';

import { Row, Col } from 'reactstrap';

import SelectOption from '../../Common/SelectOption';
import Input from '../../Common/Input';
import Button from '../../Common/Button';

const recommedableSelect = [
  { value: 1, label: 'Yes' },
  { value: 0, label: 'No' }
];

const Add = props => {
  const { reviewFormData, reviewChange, reviewFormErrors, addReview } = props;

  const handleSubmit = event => {
    event.preventDefault();
    addReview();
  };

  const [openReviewForm, setOpenReviewForm] = useState(false);



  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

      {!openReviewForm &&
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <h1 className='text-white'>
            We Would love to hear from you!
          </h1>
          <Button onClick={() => {
            setOpenReviewForm(!openReviewForm)
          }} variant='primary' text='Add Review' />
        </div>
      }

      {
        openReviewForm &&

        <div className='p-4 box-shadow-primary add-review border'>
          <form onSubmit={handleSubmit} noValidate>

            <Row>
              <Col xs='12' md='12'>
                <Input
                  type={'text'}
                  error={reviewFormErrors['title']}
                  label={'Short Heading'}
                  name={'title'}
                  placeholder={'Example : Good Toy'}
                  value={reviewFormData.title}
                  onInputChange={(name, value) => {
                    reviewChange(name, value);
                  }}
                />
              </Col>
              <Col xs='12' md='12'>
                <Input
                  type={'textarea'}
                  error={reviewFormErrors['review']}
                  label={'Comment'}
                  name={'review'}
                  placeholder={'Write Review'}
                  value={reviewFormData.review}
                  onInputChange={(name, value) => {
                    reviewChange(name, value);
                  }}
                />
              </Col>
              <Col>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                  <Input
                    type={'stars'}
                    error={reviewFormErrors['rating']}
                    label={'Rating'}
                    name={'rating'}
                    value={reviewFormData.rating}
                    onInputChange={(name, value) => {
                      reviewChange(name, value);
                    }}
                  />


                  <SelectOption
                    error={reviewFormErrors['isRecommended']}
                    label={'Should Others Buy This Product?'}
                    name={'isRecommended'}
                    value={reviewFormData.isRecommended}
                    options={recommedableSelect}
                    handleSelectChange={value => {
                      reviewChange('isRecommended', value);
                    }}
                  />

                </div>
              </Col>

            </Row>
            <div className='mt-4' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Button variant='primary' type='submit' text='Submit' />
              <Button onClick={() => {
                setOpenReviewForm(!openReviewForm)
              }} variant='danger' text='Cancel' />
              {/* <span onClick={() => {
                setOpenReviewForm(!openReviewForm)
              }} className='mb-3 text-white' style={{ backgroundColor: 'red', text: 'white', padding: '5px', width: 'content', borderRadius: '5px', cursor: 'pointer' }}>Cancel</span> */}
            </div>
          </form>
        </div>
      }
    </div>

  );
};

export default Add;
