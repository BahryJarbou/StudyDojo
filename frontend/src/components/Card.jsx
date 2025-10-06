import axios from "axios";

const Card = ({ title, content, id, setCards }) => {
  const deleteCard = () => {
    axios
      .delete(`http://localhost:3000/flashcards/${id}`)
      .then((res) => setCards((pv) => pv.filter((card) => card._id !== id)))
      .catch(console.error)
      .finally(() => null);
  };
  return (
    <div className="card bg-neutral text-neutral-content w-[14rem] h-[14rem] md:w-[24rem] md:h-[24rem] border-white border-2">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-md md:tex-2xl">{title}</h2>
        <p className="whitespace-pre-wrap text-xs md:text-md">{content}</p>
        <div>
          <button
            onClick={deleteCard}
            className="btn btn-soft btn-warning border-1 border-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
