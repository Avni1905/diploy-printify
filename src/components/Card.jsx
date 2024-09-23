import higherprofits from '../assets/higher-profits.svg';
import robustscaling from '../assets/robust-scaling.svg';
import bestselection from '../assets/best-selection.svg';
import { motion } from 'framer-motion';

const PictureCard = () => {
  const features = [
    {
      image: higherprofits,
      title: "CREATE",
      subtitle: "custom products",
      description: "Easily add your designs to a wide range of products using our free tools"
    },
    {
      image: robustscaling,
      title: "SELL",
      subtitle: "on your terms",
      description: "You choose the products, sale price, and where to sell"
    },
    {
      image: bestselection,
      title: "WE HANDLE",
      subtitle: "fulfillment",
      description: "Once an order is placed, we automatically handle all the printing and delivery logistics"
    }
  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8 mb-40">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white px-5 py-10 text-center flex flex-col justify-center items-center gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              variants={cardVariants}
            >
              <img 
                src={feature.image} 
                alt={feature.title} 
                className="w-20 h-20 rounded-full object-contain p-3 bg-slate-200 mx-auto" // Added mx-auto for centering
              />
              <p className="text-xl font-semibold">{feature.title} {feature.subtitle}</p>
              <p className="text-sm text-black/80">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PictureCard;