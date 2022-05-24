
import { useState } from "react";

function Card({ prop }) {
  const [editable, setEditable] = useState(false);
  const handleClick = () => {
    setEditable(!editable);
  };
  return (
    <>
    <div class="bg-white">
  <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Customers also purchased</h2>

    <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <div class="group relative">
        <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=" alt="Avatar" />
        </div>
        <div class="mt-4 flex justify-between">
          <div>
            <h3 class="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" class="absolute inset-0"></span>
                Basic Tee
              </a>
            </h3>
            <p class="mt-1 text-sm text-gray-500">Black</p>
          </div>
          <p class="text-sm font-medium text-gray-900">$35</p>
        </div>
      </div>
    </div>
  </div>
</div>
      <div onClick={handleClick} className="flex">
        <div className={editable ? 'opacity-0' : 'opacity-800'}>{prop}</div>
        <div className="text-sm cursor-pointer text-gray-500">{editable ? 'close | update' : 'edit'}</div>

        <input className="text-sm w-15 bg-slate-100" type={!editable && "hidden"} value={prop} />
      </div>

</>
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