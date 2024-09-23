const platforms = [
  { name: "Shopify", logo: "src/assets/shopify.svg", top: "85%", left: "51%" },
  { name: "Wix", logo: "src/assets/Wix.svg", top: "9%", left: "75%", size: "w-16 h-20 md:w-25 md:h-30" },
  { name: "printify", logo: "src/assets/logo.png", top: "40%", left: "45%", size: "w-24 h-30 md:w-40 md:h-50" },
  { name: "Etsy", logo: "src/assets/Etsy.svg", top: "70%", left: "75%" },
  { name: "Squarespace", logo: "src/assets/squarespace.svg", top: "20%", left: "60%" },
  { name: "WooCommerce", logo: "src/assets/woocommerce.svg", top: "45%", left: "70%", size: "w-16 h-24 md:w-20 md:h-30" },
  { name: "API", logo: "src/assets/api.svg", top: "60%", left: "20%" },
  { name: "BigCommerce", logo: "src/assets/bigcommerce.svg", top: "20%", left: "40%", size: "w-16 h-24 md:w-20 md:h-30" },
  { name: "AddMore", logo: "src/assets/addmore.svg", top: "78%", left: "43%", size: "w-16 h-24 md:w-20 md:h-30" },
  { name: "PrestaShop", logo: "src/assets/prestashop.svg", top: "50%", left: "35%" },
];

const lines = [
  { from: { top: "50%", left: "50%" }, to: { top: "85%", left: "52%" } },
  { from: { top: "50%", left: "50%" }, to: { top: "10%", left: "75%" } },
  { from: { top: "50%", left: "50%" }, to: { top: "70%", left: "75%" } },
  { from: { top: "50%", left: "50%" }, to: { top: "20%", left: "60%" } },
  { from: { top: "50%", left: "50%" }, to: { top: "45%", left: "70%" } },
  { from: { top: "50%", left: "50%" }, to: { top: "60%", left: "20%" } },
  { from: { top: "50%", left: "50%" }, to: { top: "20%", left: "40%" } },
  { from: { top: "50%", left: "50%" }, to: { top: "78%", left: "43%" } },
  { from: { top: "50%", left: "50%" }, to: { top: "50%", left: "35%" } },
];

    const App = () => {
      return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-4xl font-bold mb-2">Connect your store</h1>
        <h4 className="text-sm md:text-base text-gray-400">Printify easily integrates with major e-commerce platforms and marketplaces</h4>
      </div>
      <div className="relative w-full h-[300px] md:h-[600px]">
        <svg className="absolute w-full h-full">
          {lines.map((line, index) => (
            <line
              key={index}
              x1={`calc(${line.from.left})`}
              y1={`calc(${line.from.top})`}
              x2={`calc(${line.to.left})`}
              y2={`calc(${line.to.top})`}
              stroke="lightgrey"
              strokeWidth="0.5"
            />
          ))}
        </svg>

        {platforms.map((platform, index) => (
          <div
            key={index}
            style={{ top: platform.top, left: platform.left }}
            className={`absolute ${platform.size || 'w-12 h-16 md:w-20 md:h-24'} shadow-lg rounded-lg p-2 md:p-4 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer overflow-hidden`}
          >
            <img
              src={platform.logo}
              alt={platform.name}
              className="w-full h-full object-contain rounded-[20px]"
            />
          </div>
        ))}
      </div>

      {/* Custom Solutions Banner */}
      <div className="w-full max-w-5xl mt-12 bg-gradient-to-r from-green-50 to-green-500 rounded-3xl overflow-hidden shadow-lg">
        <div className="flex flex-row items-center justify-between p-4 md:p-6">
          <div className="text-green-800">
            <h2 className="text-lg md:text-xl font-semibold">Are you a large business looking for custom solutions?</h2>
          </div>
          <button className="bg-white text-green-600 text-sm font-semibold py-2 px-4 rounded-lg hover:bg-green-50 transition-colors duration-300 shadow-sm">
            Talk to sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;