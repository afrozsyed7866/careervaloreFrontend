// components/ArticleCard.js
export default function ArticleCard() {
    return (
      <div className="flex   border border-gray-300 rounded-lg shadow-md" style={{backgroundColor:"pink",display:"flex",alignItems:"center",overflow:"hidden",border:"1px solid black" }}>
              {/* Image Section */}
      <div style={{  width: "200px",marginRight:"20px" }}>
        <img
          src="https://th.bing.com/th/id/OIP.rdjcE1nb7OBB5ARWZgEB3AHaHa?rs=1&pid=ImgDetMain"
          alt="Digital Marketing"
          className="rounded-lg"
        style={{maxWidth:"100%",objectFit:"cover"}}
        />
      </div>
        {/* Text Section */}
        <div className="w-2/3" >
          <h3 className="text-lg font-semibold text-gray-900">
            Importance of Digital Marketing   
          </h3>
          <p className="text-sm text-gray-600 mt-1">December 21, 2024</p>
        </div>
      </div>
    );
  }
  