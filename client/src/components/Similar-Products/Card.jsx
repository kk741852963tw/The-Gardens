

export default function Card({ card }) {
/*   const [editable, setEditable] = useState(false);
  const handleClick = () => {
    setEditable(!editable);
  }; */
  return (
    <>
      <div className="group relative">
        <div
          className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img src={card.url} alt="Front of men&#039;s Basic Tee in black."
              className="w-full h-full object-center object-cover lg:w-full lg:h-full">
                </img>

        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0"></span>
                {card.name}
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{card.category}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">{card.price}</p>
        </div>
      </div>
    </>
  );
}

/*   <div className="card">
  <img src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=" alt="Avatar" />
  <div className="container">
    <h4><b>John Doe</b></h4>
    <p>Architect & Engineer</p>
  </div>
  </div>); */