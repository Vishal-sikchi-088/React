import '../App.css'
const Card = (props) => {
    const { title, description, imageUrl, buttonText } = props
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-2">
        <img className="w-full h-48 object-cover" src={imageUrl} alt="Card" />
        <div className="px-6 py-4">
          <h2 className="font-bold text-xl mb-2">{title}</h2>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            {buttonText}
          </button>
        </div>
      </div>
    );
  };

export default Card