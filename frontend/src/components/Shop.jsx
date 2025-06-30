import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/common/Layout';
import { allProductsData } from '../data/products';
import ProductCard from './common/ProductCard';

const Shop = () => {
  const { category, subcategory } = useParams();

  // Define the category structure to mirror the navbar
  const categoryStructure = {
    womens: ['new-arrivals', 'clothing', 'dresses', 'shoes', 'accessories', 'sale'],
    mens: ['new-arrivals', 'clothing', 'shoes', 'accessories', 'sale'],
    kids: ['boys', 'girls', 'baby', 'shoes', 'sale']
  };

  // State for filters and sorting
  const [products, setProducts] = useState(allProductsData);
  const [price, setPrice] = useState(500);
  const [sortBy, setSortBy] = useState('latest');
  const [openCategory, setOpenCategory] = useState(category || null);
  const [selectedSubcategories, setSelectedSubcategories] = useState(subcategory ? [subcategory] : []);

  // Handler to clear all active filters
  const handleClearFilters = () => {
    setSelectedSubcategories([]);
    setPrice(500); // Reset to max price
    // Optionally reset sorting as well
    // setSortBy('latest');
  };

  // Handler for subcategory checkbox changes
  const handleSubcategoryChange = (e) => {
    const { name, checked } = e.target;
    setSelectedSubcategories(prev =>
      checked ? [...prev, name] : prev.filter(c => c !== name)
    );
  };

  // Effect to apply filters and sorting whenever dependencies change
  useEffect(() => {
    let filtered = allProductsData;

    // URL-based category filtering (initial filter)
    if (category) {
      filtered = filtered.filter(p => p.mainCategory === category);
    }

    // Checkbox-based subcategory filtering
    if (selectedSubcategories.length > 0) {
      filtered = filtered.filter(p => selectedSubcategories.includes(p.subCategory));
    }

    // Price filtering
    filtered = filtered.filter(p => {
      const productPrice = parseFloat(p.price.replace('$', ''));
      return productPrice <= price;
    });

    // Sorting logic
    const sorted = [...filtered].sort((a, b) => {
      const priceA = parseFloat(a.price.replace('$', ''));
      const priceB = parseFloat(b.price.replace('$', ''));
      
      if (sortBy === 'price-asc') return priceA - priceB;
      if (sortBy === 'price-desc') return priceB - priceA;
      return b.id - a.id; // 'latest'
    });

    setProducts(sorted);
  }, [category, selectedSubcategories, price, sortBy]);
  
  // Update open category and selected subcategories when URL changes
  useEffect(() => {
    setOpenCategory(category || null);
    setSelectedSubcategories(subcategory ? [subcategory] : []);
  }, [category, subcategory]);

  // Helper to format text
  const formatText = (text) => text ? text.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) : '';

  return (
    <Layout>
      <div className="container py-5">
        {/* Breadcrumbs */}
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
          {/* Filters Sidebar */}
          <div className='col-lg-3'>
            <div className='filter-sidebar'>
              <div className="filter-header">
                <h4 className="filter-main-title">Filters</h4>
                <button onClick={handleClearFilters} className="btn-clear-filters">Clear All</button>
              </div>
              
              {/* Accordion Category Filter */}
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
                    <div 
                      className={`accordion-collapse collapse ${openCategory === mainCat ? 'show' : ''}`}
                    >
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
                            <label className="form-check-label" htmlFor={subCat}>
                              {formatText(subCat)}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Filter */}
              <div className="filter-group mt-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="filter-title mb-0">Price</h5>
                  <span className="price-display">${price}</span>
                </div>
                <input 
                  type="range" 
                  className="form-range" 
                  min="0" 
                  max="500" 
                  id="priceRange"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
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
            <div className="d-flex justify-content-between align-items-center mb-4">
              <p className="mb-0 text-muted">Showing {products.length} products</p>
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

            <div className='row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4'>
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
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Shop;