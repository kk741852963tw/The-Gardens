import React from 'react';


const SocialWidget = () => {
  return (
    <div className="py-4">

      <a href='https://www.facebook.com/'>
        <i className="px-2 fa-brands fa-facebook-square text-gray-900 text-4xl"></i>
      </a>

      <a href="https://twitter.com/?lang=en">
        <i className="px-2 fa-brands fa-twitter-square text-gray-900 text-4xl"></i>
      </a>

      <a href='https://www.pinterest.com/'>
        <i className="px-2 fa-brands fa-pinterest-square text-gray-900 text-4xl"></i>
      </a>

      <a href='https://www.instagram.com/'>
        <i className="px-2 fa-brands fa-instagram-square text-gray-900 text-4xl"></i>
      </a>

    </div>
  )
};

export default SocialWidget;