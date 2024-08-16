/**
 *
 * Shop
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { Row, Col, Container } from 'reactstrap';

import actions from '../../actions';
import { sortOptions } from '../../utils/store';

import ProductsShop from '../ProductsShop';
import BrandsShop from '../BrandsShop';
import CategoryShop from '../CategoryShop';

import Page404 from '../../components/Common/Page404';
import ProductFilter from '../../components/Store/ProductFilter';
import Pagination from '../../components/Common/Pagination';
import SelectOption from '../../components/Common/SelectOption';
import Button from '../../components/Common/Button';
import { CloseIcon } from '../../components/Common/Icon';
import { FaFilter } from 'react-icons/fa';

class Shop extends React.PureComponent {
  componentDidMount() {
    document.body.classList.add('shop-page');
  }

  componentWillUnmount() {
    document.body.classList.remove('shop-page');
  }

  toggleMenu() {
    this.props.toggleMenu();
  }

  render() {
    const { products, advancedFilters, filterProducts, toggleMenu, isMenuOpen } = this.props;
    const { totalPages, currentPage, count, limit, order } = advancedFilters;
    const displayPagination = totalPages > 1;
    const totalProducts = products.length;
    const left = limit * (currentPage - 1) + 1;
    const right = totalProducts + left - 1;

    return (
      <div className='shop'>
        <div className='header-links' style={{ display: 'flex', justifyContent: 'flex-end', marginLeft: '10px' }}>
          <Button
            borderless
            variant='primary'
            ariaLabel='open the menu'
            icon={<FaFilter />}
            onClick={() => this.toggleMenu()}
          />
        </div>
        <Row xs='12'>
          <Col
            xs={{ size: 12, order: 2 }}
            sm={{ size: 12, order: 2 }}
            md={{ size: 12, order: 2 }}
            lg={{ size: 12, order: 1 }}
          >
            {/* <Row className='align-items-center mx-0 mb-4 mt-4 mt-lg-0 py-3 py-lg-0 shop-toolbar'>
              <Col
                xs={{ size: 12, order: 1 }}
                sm={{ size: 12, order: 1 }}
                md={{ size: 5, order: 1 }}
                lg={{ size: 6, order: 1 }}
                className='text-center text-white text-md-left mt-3 mt-md-0 mb-1 mb-md-0'
              >
                <span>Showing: </span>
                {totalProducts > 0
                  ? `${left}-${right} products of ${count} products`
                  : `${count} products`}
              </Col>

              <Col
                xs={{ size: 12, order: 2 }}
                sm={{ size: 12, order: 2 }}
                md={{ size: 2, order: 2 }}
                lg={{ size: 2, order: 2 }}
                className='text-right pr-0 d-none d-md-block'
              >
                <span>Sort by</span>
              </Col>
              <Col
                xs={{ size: 12, order: 2 }}
                sm={{ size: 12, order: 2 }}
                md={{ size: 5, order: 2 }}
                lg={{ size: 4, order: 2 }}
              >
                <SelectOption
                  name={'sorting'}
                  value={{ value: order, label: sortOptions[order].label }}
                  options={sortOptions}
                  handleSelectChange={(n, v) => {
                    filterProducts('sorting', n.value);
                  }}
                />
              </Col>
            </Row> */}
            <Switch>
              <Route exact path='/shop' component={ProductsShop} />
              <Route path='/shop/category/:slug' component={CategoryShop} />
              <Route path='/shop/brand/:slug' component={BrandsShop} />
              <Route path='*' component={Page404} />
            </Switch>


            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'center' }}>
              {totalProducts > 0
                ? <div><span style={{ color: 'gold' }}>{left}-{right}</span> Toys of <span style={{ color: 'gold' }}>{count}</span> Toys</div>
                : `${count} products`}


              {displayPagination && (
                <div className='d-flex justify-content-center text-center mt-4'>
                  <Pagination
                    totalPages={totalPages}
                    onPagination={filterProducts}
                  />
                </div>
              )}
            </div>


          </Col>


        </Row>

        <div
          className={isMenuOpen ? 'mini-menu-open' : 'hidden-mini-menu'}
          aria-hidden={`${isMenuOpen ? false : true}`}
        >
          <div className='mini-menu'>
            <div className='navigation-menu'>
              <div className='menu-header'>
                <div style={{ marginLeft: '5px', fontSize: '25px' }}>Product Filters</div>
                {isMenuOpen && (
                  <Button
                    borderless
                    variant='primary'
                    ariaLabel='close the menu'
                    icon={<CloseIcon />}
                    onClick={toggleMenu}
                  />
                )}
              </div>
              <div className='menu-body'>
                <Container>

                  <div>Sort By</div>
                  <SelectOption
                    name={'sorting'}
                    value={{ value: order, label: sortOptions[order].label }}
                    options={sortOptions}
                    handleSelectChange={(n, v) => {
                      filterProducts('sorting', n.value);
                    }}
                  />
                  <ProductFilter filterProducts={filterProducts} />

                </Container>

              </div>
            </div>
          </div>
          <div
            className={
              isMenuOpen ? 'drawer-backdrop dark-overflow' : 'drawer-backdrop'
            }
            onClick={toggleMenu}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    advancedFilters: state.product.advancedFilters,
    products: state.product.storeProducts,
    isMenuOpen: state.navigation.isMenuOpen
  };
};

export default connect(mapStateToProps, actions)(Shop);
