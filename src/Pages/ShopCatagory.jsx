import React, { useState, useEffect } from 'react';
import './CSS/ShopCatagory.css';
import all_product from '../Components/Assests/all_product';
import Item from '../Components/Item/Item';

function ShopCatagory(props) {
  const itemsPerPage = 12;
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (props.category === 'allproducts') {
      // Shuffle the items when the category is 'allproducts'
      const shuffledProducts = shuffleArray(all_product);
      setDisplayedProducts(shuffledProducts);
    } else {
      // Filter products based on the specified category
      const filteredProducts = all_product.filter(item => item.category === props.category);
      setDisplayedProducts(filteredProducts);
    }
    setCurrentPage(1); // Reset current page when category changes
  }, [props.category]);

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const totalItems = displayedProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedSlice = displayedProducts.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row mt-5">
          <img src={props.banner} alt="" />
        </div>
        <div className="row mt-5">
          <div className="col-lg-4 m-auto text-center">
            <div className="shop_catagory_index_sort">
              <p className="text-center">
                <span>Showing {startIndex + 1}-{Math.min(endIndex, totalItems)}</span> out of {totalItems} Products
              </p>
              <div className="shop-catagory-sort">
  <span style={{ display: 'inline-block' }}>Sort By</span>
  <button className='dropdown_button' style={{ display: 'inline-block' }}>🔽</button>
</div>

            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-3">
          {displayedSlice.map((item, i) => (
            <div key={i} className='col-lg-4 d-flex justify-content-center mt-5'>
              <Item
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            </div>
          ))}
        </div>
        {totalPages > 1 && (
          <div className="row mt-3">
            <div className="col-lg-6 text-center m-auto justify-content-center">
              <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                  {[...Array(totalPages).keys()].map(page => (
                    <li key={page} className={`page-item ${currentPage === page + 1 ? 'active' : ''}`}>
                      <button className="page-link" onClick={() => handlePageChange(page + 1)}>
                        {page + 1}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShopCatagory;
