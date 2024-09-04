import Grocery from "./Grocery";
import { toast } from "react-toastify";
const Groceries = ({ itemList, setItemList }) => {
  const removeItem = (id) => {
    setItemList(itemList.filter((item) => item.id !== id));
    toast.success("Pomyślnie usunąłeś produkt z listy");
  };

  return (
    <div className="items">
      {itemList.map((item) => {
        return (
          <Grocery
            key={item.id}
            {...item}
            removeItem={removeItem}
            setItemList={setItemList}
          />
        );
      })}
    </div>
  );
};
export default Groceries;
