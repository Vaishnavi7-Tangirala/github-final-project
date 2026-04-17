import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

function ProductList() {
  const dispatch = useDispatch();

  const plants = [
    {
      id: 1,
      name: "Aloe Vera",
      price: 10,
      image: "https://images.unsplash.com/photo-1587502537104-0c5a64c6b7f5",
      category: "Indoor"
    },
    {
      id: 2,
      name: "Snake Plant",
      price: 15,
      image: "https://images.unsplash.com/photo-1598887142487-7c7c5e9d7e3d",
      category: "Indoor"
    },
    {
      id: 3,
      name: "Peace Lily",
      price: 20,
      image: "https://images.unsplash.com/photo-1616627988543-ec3d0e8d3d4c",
      category: "Indoor"
    },
    {
      id: 4,
      name: "Rose",
      price: 12,
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
      category: "Outdoor"
    },
    {
      id: 5,
      name: "Tulip",
      price: 18,
      image: "https://images.unsplash.com/photo-1524594154908-edd1e9b7a45b",
      category: "Outdoor"
    },
    {
      id: 6,
      name: "Sunflower",
      price: 14,
      image: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde",
      category: "Outdoor"
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem({ ...plant, quantity: 1 }));
  };

  const categories = ["Indoor", "Outdoor"];

  return (
    <div>
      <h2>Plant Categories</h2>

      {categories.map((category) => (
        <div key={category}>
          <h3>{category} Plants</h3>

          <div style={{ display: "flex", gap: "20px" }}>
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div key={plant.id}>
                  <img src={plant.image} alt={plant.name} width="100" />
                  <h4>{plant.name}</h4>
                  <p>₹{plant.price}</p>

                  <button onClick={() => handleAddToCart(plant)}>
                    Add to Cart
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
