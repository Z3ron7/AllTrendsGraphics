import {React, useState} from 'react';
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

const ServicesItem = ({ activeSection }) => {
  // Data for each category of items
  const products = {
    website: [
      {
        id: 1,
        imageSrc: Single,
        imageAlt: 'Website Single User',
        name: 'Single User',
        color: '500 GB Storage',
        price: '$149',
      },
      // Add more items for the website category here if needed
    ],
    book: [
      {
        id: 2,
        imageSrc: Double,
        imageAlt: 'Book Double User',
        name: 'Double User',
        color: '1 TB Storage',
        price: '$199',
      },
      // Add more items for the book category here if needed
    ],
    photo: [
      {
        id: 3,
        imageSrc: Triple,
        imageAlt: 'Photo Triple User',
        name: 'Triple User',
        color: '2 TB Storage',
        price: '$249',
      },
      // Add more items for the photo category here if needed
    ],
  };

  // Get the items for the active section
  const activeProducts = products[activeSection] || [];

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

  return (
    <div className={`bg-white transition-max-h duration-1000 delay-200 ${activeSection ? 'max-h-[500px]' : 'max-h-0'} overflow-hidden`}>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {activeProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-50 w-50 object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-white p-4 rounded-lg max-w-md">
            {/* Content for the modal */}
            <img src={selectedProduct.imageSrc} alt={selectedProduct.imageAlt} className="w-56 h-56 object-cover rounded-lg" />
            <h1 className="text-2xl font-medium mt-4">{selectedProduct.name}</h1>
            <p className="text-lg font-bold mt-2">{selectedProduct.price}</p>
            {/* Add more product details here as needed */}
            <button className="mt-4 bg-violet-600 text-white py-2 px-4 rounded-md" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesItem;
