const Card = ({ title, content }) => {
  return (
    <div className="card bg-neutral text-neutral-content w-[14rem] h-[14rem] md:w-[24rem] md:h-[24rem] border-white border-2">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
