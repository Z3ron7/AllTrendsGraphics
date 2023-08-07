import React, { useState, useRef, useEffect } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const ServicesItem = ({ activeSection }) => {
  // Data for each category of items
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);
  const componentMounted = useRef(true);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch('http://localhost:3001/api/books');
      if (componentMounted.current) {
        const data = await response.json();
        setProducts(data);
        setFilter(data);
        setLoading(false);
      }

      return () => {
        componentMounted.current = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return <div>Loading...</div>;
  };

  const filterProduct = (cat) => {
    const updateList = products.filter((x) => x.category === cat);
    setFilter(updateList);
  };

    //  const activeProducts = products[activeSection] || [];
    useEffect(() => {
      // Filter products based on the active section
      if (activeSection === 'website') {
        setFilter(products.filter((product) => product.imageALT === 'website'));
      } else if (activeSection === 'book') {
        setFilter(products.filter((product) => product.imageALT === 'book'));
      } else if (activeSection === 'photo') {
        setFilter(products.filter((product) => product.imageALT === 'photo'));
      } else {
        setFilter(products); // Show all products if no section is active
      }
    }, [activeSection, products]);

    // State to manage modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
  
    const openModal = (product) => {
      setSelectedProduct(product);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    const handleModalClick = (event) => {
      // Check if the click occurred outside the form (modal content)
      if (event.target.classList.contains('modal-background')) {
        closeModal();
      }
    };
  
  return (
    <div className={`bg-white transition-max-h duration-1000 delay-200 ${activeSection ? 'max-h-[500px]' : 'max-h-0'} overflow-hidden`}>
      <div className="flex justify-center mb-5 pb-5">
      <button className="border border-black text-black px-4 py-2 font-bold mr-2" onClick={() => setFilter(products)}>
        All books
      </button>
      <button className="border border-black text-black px-4 py-2 font-bold mr-2" onClick={() => filterProduct('PREMADE')}>
        Premade
      </button>
      <button className="border border-black text-black px-4 py-2 font-bold" onClick={() => filterProduct('SOLD COVERS')}>
        Sold Covers
      </button>
      </div>
      {loading ? ( // Show the loading indicator when data is being fetched
        <div className="flex justify-center items-center">
          <Loading />
        </div>
      ) : (
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {filter.map((product) => (
            <div key={product.id} className="group " >
              {/* The onClick event is added above */}
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden shadow-xl rounded-lg bg-gray-200 
              xl:aspect-h-8 xl:aspect-w-7 group-hover:scale-105 duration-500">
                <img
                  src={product.image}
                  alt={product.imageALT}
                  className="h-50 w-50 object-cover object-center cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(product);
                  }}
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">$ {product.price}</p>
            </div>
          ))}
        </div>
      </div>
       )}
      {/* Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 modal-background transition-opacity duration-300 ease-in-out delay-150" onClick={handleModalClick}>
          <div className="flex font-sans max-w-2xl bg-white rounded-lg">
            {/* Image */}
            <div className="flex w-80 relative ">
              <img src={selectedProduct.image} alt={selectedProduct.imageALT} className="absolute inset-0 w-full h-full" loading="lazy" onClick={() => openModal(selectedProduct)} />
            </div>
            {/* Form */}
            <form className="flex-auto p-6 relative">
                <button
                    className="bg-transparent border-0 text-black 
                    absolute top-0 right-1 flex justify-center items-center w-7 h-7 mt-0"
                    onClick={closeModal}
                  >
                    <span className="text-black opacity mx-auto text-xl btn">
                     x 
                    </span>
                  </button>
              <div className="flex flex-wrap">
                <h1 className="flex-auto font-medium text-slate-900 text-xl">
                  {selectedProduct.name}
                </h1>
                <div className="w-full flex-none mt-2 order-1 text-3xl font-bold text-violet-600">
                  $ {selectedProduct.price}
                </div>
                
                <div className="font-medium text-slate-400">
                  {selectedProduct.status}
                </div>
                
              </div>
              <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                
              </div>
              <div class="flex space-x-4 mb-5 text-sm font-medium ">
                <div class="flex-auto flex space-x-4 justify-center items-center">
                  <PayPalScriptProvider options={{ clientId: "test" }}>
                    <PayPalButtons />
                  </PayPalScriptProvider>
                </div>
              </div>
              <p class="text-sm text-slate-500">
                Free shipping on all continental US orders.
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesItem;