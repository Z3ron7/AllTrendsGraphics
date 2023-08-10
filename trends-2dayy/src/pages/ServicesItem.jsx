import React, { useState } from 'react';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import PaypalPayment from '../components/PaypalPayment';
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
 
   const handleModalClick = (event) => {
     // Check if the click occurred outside the form (modal content)
     if (event.target.classList.contains('modal-background')) {
       closeModal();
     }
   };
   
   const initialOptions = {
    clientId: "AUSts69xR-7CcCvde1bKq9QtLK7s-X0ULPpSLOa4rHprQL5D2lJBEM1Z2OOHGnvXwBugiYDF4EMutkum",
    currency: "USD",
    intent: "capture",
};

   return (
     <div className={`bg-white transition-max-h duration-1000 delay-200 ${activeSection ? 'max-h-[500px]' : 'max-h-0'} overflow-hidden`}>
       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
         <h2 className="sr-only">Products</h2>
 
         <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
           {activeProducts.map((product) => (
             <div key={product.id} className="group" >
               {/* The onClick event is added above */}
               <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                 <img
                   src={product.imageSrc}
                   alt={product.imageAlt}
                   className="h-50 w-50 object-cover object-center cursor-pointer"
                   onClick={() => openModal(product)}
                 />
               </div>
               <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
               <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
               <button
                 className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
                 onClick={() => openModal(product)} // Open the PayPal modal on button click
               >
                 Buy Now
               </button>
             </div>
           ))}
         </div>
       </div>
       
       {/* Modal */}
       {isModalOpen && selectedProduct && (
         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 modal-background" onClick={handleModalClick}>
           <div className="flex font-sans max-w-2xl bg-white rounded-lg">
             {/* Image */}
             <div className="flex w-80 relative">
               <img src={selectedProduct.imageSrc} alt={selectedProduct.imageAlt} className="absolute inset-0 w-full h-full" loading="lazy" onClick={() => openModal(selectedProduct)} />
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
                 <h1 className="flex-auto font-medium text-slate-900">
                   {selectedProduct.name}
                 </h1>
                 <div className="w-full flex-none mt-2 order-1 text-3xl font-bold text-violet-600">
                   {selectedProduct.price}
                 </div>
                 
                 <div className="text-sm font-medium text-slate-400">
                   In stock
                 </div>
                 
               </div>
               <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                 
               </div>
               <div class="flex space-x-4 mb-5 text-sm font-medium">
               <div class="flex-auto flex space-x-4 justify-center items-center">
                  <PayPalScriptProvider options={initialOptions}>
                    <PaypalPayment products={products}/>
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