import React, { useState, useRef } from 'react';

const ProductDetails = ({ product, onBack }) => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const [showZoom, setShowZoom] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const imageRef = useRef(null);
  
    const handleMouseMove = (e) => {
      if (imageRef.current) {
        const { left, top, width, height } = imageRef.current.getBoundingClientRect();
        const x = ((e.pageX - left) / width) * 100;
        const y = ((e.pageY - top) / height) * 100;
        setMousePosition({ x, y });
      }
    };

  return (
    <div>
      <div onClick={onBack} className="mb-6 text-blue-600">← Back to Products</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
      <>
            <div className="flex space-x-2 overflow-x-auto" style={{display:"flex", flexDirection:"column", backgroundColor:"white"}}>
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 border-2 overflow-hidden
                  ${selectedImage === index ? 'border-pink-500' : 'border-none'}`}
                  style={{backgroundColor:"#fff"}}
              >
                <img
                  src={image}
                  alt={`View ${index + 1}`}
                  className="w-16 h-16 object-cover"
                />
              </button>
            ))}
          </div></>
      <div className="space-y-4" style={{display:"flex", flexDirection:"row", justifyContent:"space-around", marginLeft:"-100px"}}>
          <div 
            className="relative border rounded-lg overflow-hidden"
            onMouseEnter={() => setShowZoom(true)}
            onMouseLeave={() => setShowZoom(false)}
            onMouseMove={handleMouseMove}
          >
            <img 
              ref={imageRef}
              src={product.images[selectedImage]} 
              alt={product.name} 
              className="w-full object-cover h-[500px]"
              style={{height:"80vh"}}
            />
            {showZoom && (
              <div 
                className="absolute top-0 left-full ml-4 border bg-white w-[500px] h-[500px] overflow-hidden z-50"
              >``
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="absolute w-[200%] h-[200%] object-cover"
                  style={{
                    transform: `translate(-${mousePosition.x}%, -${mousePosition.y}%)`
                  }}
                />
              </div>
            )}
          </div>

        </div>
        
        <div style={{maxWidth:"25%"}}>
          <div className="border-b pb-4">
            <h1 className="text-xl mb-1">{product.name}</h1>
            <p className="text-sm text-blue-600">{product.brand}</p>
          </div>

          <div className="py-4">
            <div className="flex items-baseline space-x-2">
              <span className="text-xl">₹{product.price}&nbsp;&nbsp;</span>
              <span className="text-gray-500 line-through text-sm">₹{product.originalPrice}</span>&nbsp;&nbsp;
              <span className="text-white text-sm font-medium" style={{backgroundColor:"#f97316", borderRadius:"20px", padding:"5px"}}>&{product.discount}</span>
            </div>
            <p className="text-xs text-gray-600">inclusive of all taxes</p>
          </div>

          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Select Size</span>
              
            </div>
            <>
            <div className="px-4 py-1 border border-pink-500 text-sm rounded" style={{borderRadius:"10px"}}>2-3 YEA...</div>
            <div className="text-pink-500 text-sm">SIZE CHART</div></>
          </div>

          <div className="flex space-x-4 py-4 mt-4">
            <div className="flex-1 px-6 py-2 border border-pink-500 text-pink-500 rounded-md hover:bg-pink-50">
              Add To Cart
            </div>
            <div className="flex-1 px-6 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600">
              Buy Now
            </div>
          </div>

          <div className="space-y-4">
            <div className="border-t pt-4">
              <h2 className="font-medium mb-2">Product Description</h2>
              <p className="text-sm text-gray-600">{product.description}</p>
            </div>

            <div className="border-t pt-4">
              <h2 className="font-medium mb-2">Product Details</h2>
              <div className="grid grid-cols-2 gap-y-4 text-sm">
                <div>
                  <p className="text-gray-600">Color</p>
                  <p>White</p>
                </div>
                <div>
                  <p className="text-gray-600">Gender</p>
                  <p>Unisex</p>
                </div>
                <div>
                  <p className="text-gray-600">Fabric Material</p>
                  <p>Cotton Blend</p>
                </div>
                <div>
                  <p className="text-gray-600">Variant Name</p>
                  <p>Size</p>
                </div>
                {showMore && (
                  <>
                    <div>
                      <p className="text-gray-600">Month Year Of Manufacture/Packing</p>
                      <p>10/2020</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Imported Product Country Of Origin</p>
                      <p>Ind</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Manufacturer Name</p>
                      <p>Bgn Apparels,676 Pace City 2,Sector 37,Gurgaon</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Customer Support Phone</p>
                      <p>9212692228</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Cancellable</p>
                      <p>Yes</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Returnable</p>
                      <p>Yes</p>
                    </div>
                  </>
                )}
              </div>
              <div 
                onClick={() => setShowMore(!showMore)}
                className="flex items-center text-blue-600 mt-4"
              >
                {showMore ? 'See Less' : 'See More'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;