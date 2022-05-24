
import { useState } from "react";

function Card({ prop }) {
  const [editable, setEditable] = useState(false);
  const handleClick = () => {
    setEditable(!editable);
  };
  return (
    <div
      className="
        flex
        justify-center
        text-3xl md:text-7xl
        p-6 w-50 h-50 bg-slate-300 md:p-10 md:w-60 md:h-60 md:bg-green-300
        items-center
        drop-shadow-md
        rounded-md"
    >
      <div onClick={handleClick} className="flex">
        <div className={editable ? 'opacity-0' : 'opacity-800'}>{prop}</div>
        <div className="text-sm cursor-pointer text-gray-500">{editable ? 'close | update' : 'edit'}</div>

        <input className="text-sm w-15 bg-slate-100" type={!editable && "hidden"} value={prop} />
      </div>
    </div>
  );
}

export default Card;
/*   <div className="card">
  <img src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=" alt="Avatar" />
  <div className="container">
    <h4><b>John Doe</b></h4>
    <p>Architect & Engineer</p>
  </div>
  </div>); */