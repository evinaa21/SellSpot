import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/common/Layout';
import { allProductsData } from '../data/products';
import ProductCard from './common/ProductCard';

const Shop = () => {
  const { category, subcategory } = useParams();

  const categoryStructure = {
    womens: ['new-arrivals', 'clothing', 'dresses', 'shoes', 'accessories', 'sale'],
    mens: ['new-arrivals', 'clothing', 'shoes', 'accessories', 'sale'],
    kids: ['boys', 'girls', 'baby', 'shoes', 'sale']
  };

  // State for filters, sorting, and pagination
  const [products, setProducts] = useState([]);
  const [filteredProductCount, setFilteredProductCount] = useState(0);
  const [price, setPrice] = useState(500);
  const [sortBy, setSortBy] = useState('latest');
  const [openCategory, setOpenCategory] = useState(category || null);
  const [selectedSubcategories, setSelectedSubcategories] = useState(subcategory ? [subcategory] : []);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9);
  const [isFilterVisible, setIsFilterVisible] = useState(false);


  // Handler to clear all active filters
  const handleClearFilters = () => {
    setSelectedSubcategories([]);
    setPrice(500);
    setCurrentPage(1); // Reset to first page
  };

  // Handler for subcategory checkbox changes
  const handleSubcategoryChange = (e) => {
    const { name, checked } = e.target;
    setSelectedSubcategories(prev =>
      checked ? [...prev, name] : prev.filter(c => c !== name)
    );
    setCurrentPage(1); // Reset to first page on filter change
  };

  // Effect to apply filters and sorting
  useEffect(() => {
    let filtered = allProductsData;

    if (category) {
      filtered = filtered.filter(p => p.mainCategory === category);
    }
    if (selectedSubcategories.length > 0) {
      filtered = filtered.filter(p => selectedSubcategories.includes(p.subCategory));
    }
    filtered = filtered.filter(p => parseFloat(p.price.replace('$', '')) <= price);

    const sorted = [...filtered].sort((a, b) => {
      const priceA = parseFloat(a.price.replace('$', ''));
      const priceB = parseFloat(b.price.replace('$', ''));
      if (sortBy === 'price-asc') return priceA - priceB;
      if (sortBy === 'price-desc') return priceB - priceA;
      return b.id - a.id;
    });

    setFilteredProductCount(sorted.length);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    setProducts(sorted.slice(indexOfFirstProduct, indexOfLastProduct));

  }, [category, selectedSubcategories, price, sortBy, currentPage, productsPerPage]);
  
  useEffect(() => {
    setOpenCategory(category || null);
    setSelectedSubcategories(subcategory ? [subcategory] : []);
    setCurrentPage(1);
  }, [category, subcategory]);

  const formatText = (text) => text ? text.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) : '';

  // Pagination Component
  const Pagination = ({ totalProducts, productsPerPage, paginate }) => {
    const pageNumbers = [];
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    if (totalPages <= 1) return null; // Don't render pagination if only one page

    return (
      <nav className="d-flex justify-content-center mt-5">
        <ul className="pagination">
          {pageNumbers.map(number => (
            <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
              <a onClick={() => paginate(number)} href="#!" className="page-link">
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  return (
    <Layout>
      <div className="container py-4 py-md-5">
        <nav aria-label='breadcrumb' className='mb-4'>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item'><Link to='/'>Home</Link></li>
            <li className='breadcrumb-item'><Link to='/shop'>Shop</Link></li>
            {category && !subcategory && <li className='breadcrumb-item active' aria-current='page'>{formatText(category)}</li>}
            {category && subcategory && <li className='breadcrumb-item'><Link to={`/shop/${category}`}>{formatText(category)}</Link></li>}
            {subcategory && <li className='breadcrumb-item active' aria-current='page'>{formatText(subcategory)}</li>}
          </ol>
        </nav>

        <div className='row'>
          {/* Mobile Filter Toggle */}
          <div className="col-12 d-lg-none mb-4">
            <button 
              className="btn btn-light w-100 d-flex justify-content-between align-items-center"
              onClick={() => setIsFilterVisible(!isFilterVisible)}
            >
              <span className="fw-bold">Filters</span>
              <i className={`fas fa-chevron-down transition-transform ${isFilterVisible ? 'rotate-180' : ''}`}></i>
            </button>
          </div>

          {/* Filters Sidebar */}
          <div className={`col-lg-3 ${isFilterVisible ? 'd-block' : 'd-none'} d-lg-block`}>
            <div className='filter-sidebar mb-4'>
              <div className="filter-header">
                <h4 className="filter-main-title">Filters</h4>
                <button onClick={handleClearFilters} className="btn-clear-filters">Clear All</button>
              </div>
              
              <div className="accordion filter-accordion" id="categoryAccordion">
                {Object.keys(categoryStructure).map(mainCat => (
                  <div className="accordion-item" key={mainCat}>
                    <h2 className="accordion-header">
                      <button 
                        className={`accordion-button ${openCategory !== mainCat ? 'collapsed' : ''}`} 
                        type="button" 
                        onClick={() => setOpenCategory(openCategory === mainCat ? null : mainCat)}
                      >
                        {formatText(mainCat)}
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${openCategory === mainCat ? 'show' : ''}`}>
                      <div className="accordion-body">
                        {categoryStructure[mainCat].map(subCat => (
                          <div className="form-check" key={subCat}>
                            <input 
                              className="form-check-input" 
                              type="checkbox"
                              name={subCat}
                              id={subCat}
                              checked={selectedSubcategories.includes(subCat)}
                              onChange={handleSubcategoryChange}
                            />
                            <label className="form-check-label" htmlFor={subCat}>{formatText(subCat)}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="filter-group mt-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="filter-title mb-0">Price</h5>
                  <span className="price-display">${price}</span>
                </div>
                <input 
                  type="range" className="form-range" min="0" max="500" id="priceRange"
                  value={price} onChange={(e) => setPrice(e.target.value)}
                />
                <div className="d-flex justify-content-between text-muted mt-2">
                  <small>$0</small>
                  <small>$500</small>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className='col-lg-9'>
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
              <p className="mb-2 mb-md-0 text-muted">Showing {products.length} of {filteredProductCount} products</p>
              <select 
                className="form-select sort-by-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="latest">Sort by latest</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>

            <div className='row row-cols-1 row-cols-sm-2 row-cols-xl-3 g-4'>
              {products.length > 0 ? (
                products.map(product => (
                  <div className="col" key={product.id}>
                    <ProductCard product={product} />
                  </div>
                ))
              ) : (
                <div className="col-12 text-center py-5">
                  <p className="text-muted">No products found matching your criteria.</p>
                </div>
              )}
            </div>

            <Pagination 
              productsPerPage={productsPerPage}
              totalProducts={filteredProductCount}
              paginate={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Shop;