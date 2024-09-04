import { useState } from "react";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
const Form = ({ itemList, setItemList }) => {
  const handleForm = (e) => {
    e.preventDefault();
    if (itemName === "") {
      toast.error("Nie możesz dodać pustego elementu");
      return;
    }
    const newItemList = [
      ...itemList,
      { id: nanoid(), name: itemName, marked: false },
    ];
    setItemList(newItemList);
    toast.success(`Dodałeś ${itemName} do Listy`);
    setItemName("");
  };

  const [itemName, setItemName] = useState("");
  return (
    <form onSubmit={handleForm}>
      <h4>Lista Zakupów</h4>
      <section className="form-control">
        <input
          type="text"
          name="item"
          id="item"
          className="form-input"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <button className="btn" type="submit">
          Dodaj Produkt
        </button>
      </section>
    </form>
  );
};
export default Form;
