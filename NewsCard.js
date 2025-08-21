import React, { useState } from 'react';

function NewsCard({ news }) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col justify-between h-[350px]">
      <img src={news.image} alt={news.title} className="w-full h-40 object-cover rounded-lg mb-3" />
      <h2 className="text-lg font-semibold mb-2">{news.title}</h2>
      <p className="text-sm text-gray-600 flex-grow">{news.description}</p>
      <div className="flex justify-between items-center mt-4">
        <button onClick={() => setLikes(likes + 1)} className="px-3 py-1 text-black rounded-lg">👍 {likes}</button>
        <button onClick={() => setDislikes(dislikes + 1)} className="px-3 py-1 text-black rounded-lg">👎 {dislikes}</button>
        <button onClick={() => navigator.clipboard.writeText(window.location.href)} className="px-3 py-1 text-black rounded-lg">🔗 Compartir</button>
      </div>
    </div>
  );
}

export default NewsCard;
