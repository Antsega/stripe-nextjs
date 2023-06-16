import { checkout } from '../checkout.js'

const BuyButton: React.FC = () => {
    const handleBuyClick = () => {
      checkout({
        lineItems: [
          {
            price: "price_1NJVBrLHfJ4xcrkjN7QcK9DC",
            quantity: 1
          }
        ]
      });
    };
  
    return (
      <button onClick={handleBuyClick}>BUY!</button>
    );
  };

export default BuyButton;