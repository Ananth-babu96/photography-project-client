import React, { useEffect, useState } from "react";
import "./Gallery.scss";
import axios from "axios";
import { FaTimesCircle } from "react-icons/fa";
const Gallery = () => {
   const [profile, setProfile] = useState([]);
   const [openFullScreen, setOpenFullScreen] = useState(false);
   const [image, setImage] = useState(0);
   const [data, setData] = useState([]);
   //const data = useSelector((state) => state.data.dataList);

   useEffect(() => {
      axios
         .get("https://photography-project-7b9q.onrender.com")
         .then((res) => setData(res.data));
      window.scrollTo(0, 0);
   }, []);

   const OpenFullScreen = (id) => {
      setOpenFullScreen(true);
      const image = data.find((item) => item.id === id);
      setImage(image);
   };
   return (
      <div className="contailer gallery">
         <div className="gallery_title">
            <h1>Gallery</h1>
         </div>
         <div
            className={`gallery_fullscreen_image ${
               openFullScreen ? "show" : ""
            } `}
         >
            <p onClick={() => setOpenFullScreen(false)}>
               <FaTimesCircle />
            </p>
            <img
               src={`https://photography-project-7b9q.onrender.com/images/${image.image}`}
               alt=""
            />
         </div>
         <div className="gallery_section">
            {data?.map((item, index) => {
               return (
                  <div onClick={() => OpenFullScreen(item.id)}>
                     <img
                        src={`https://photography-project-7b9q.onrender.com/images/${item.image}`}
                     />
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default Gallery;
