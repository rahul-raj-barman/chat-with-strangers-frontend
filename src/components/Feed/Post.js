import React, { useState } from "react";
import { FaRegComment } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";



function Post() {

    const [liked, setLiked] = useState(true);
    const [following, setFollowing] = useState(false);

    let toggleLike = () => {
        setLiked(!liked)
    }

    let toggleFollowing = () => {
        setFollowing(!following)
    }


  return (
    <div className="bg-gray-300 h-[100vh] flex justify-center align-center">
      <div className="border border-sky-500 p-2 h-[94%] bg-gray-100">
        <div className="flex w-100 justify-between mb-3 mt-2">
          <div className="flex justify-start">
            <div className="">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6LXNJFTmLzCoExghcATlCWG85kI8dsnhJng&s"
                alt=""
                className="w-11 h-11 border border-gray-900 rounded-full"
              />
            </div>

            <div className="h-100 flex justify-center items-center ms-2">
              <div className="">RahulRaj</div>
            </div>
          </div>

        <div className="border border-blue-400 flex items-center justify-center w-[20%] text-blue-400 cursor-pointer" onClick={() => toggleFollowing()}>
          <div>{following ? "Following" : "Follow"}</div>
        </div>

        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1726955179505-556d5e51c192?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-[55vw] h-[63vh] max-w-[500px]"
          />
        </div>

        <div
          className="likes-and-comments flex
       justify-start p-2 text-2xl"
        >
          <div className="m-3 ms-1 cursor-pointer" onClick={() => toggleLike()}>
            {
                liked ? <FaHeart className="text-red-600"/> : <FaRegHeart/>
            }
          </div>

          <div className="m-3 cursor-pointer">
            <FaRegComment />
          </div>
        </div>

         <div className="flex justify-start items-center ms-3 -mt-2">
            <div><FaHeart className={`text-red-600`}/></div>
            <div className="ms-2">Lorem Ipsum and 100 others</div>
        </div>

        <div className="ms-1 mt-2 font-bold">
        The beauty of nature is unbeatable</div>

      </div>

    </div>
  );
}

export default Post;
