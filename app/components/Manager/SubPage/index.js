/**
 *
 * SubPage
 *
 */

import React from 'react';

import Button from '../../Common/Button';

const SubPage = props => {
  const { title, actionTitle, handleAction, children } = props;

  return (
    <div className='sub-page'>
      <div className='subpage-header'>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h3 className='mb-0 text-uppercase text-center p-2' style={{ display: 'inline', backgroundColor: 'white', borderRadius: '5px' }}>{title}</h3>
        </div>
        {/* <h3 className='mb-0'>{title}</h3> */}
        {actionTitle && (
          <div className='action'>
            <Button
              variant='none'
              size='sm'
              text={actionTitle}
              onClick={handleAction}
            />
          </div>
        )}
      </div>
      <div className='subpage-body'>{children}</div>
    </div>
  );
};

export default SubPage;
