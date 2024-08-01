import React from "react";

function BookSection({ data }) {

  return (
    <div className=" d-flex flex-wrap justify-content-around align-items-center">
      {data &&
        data.books.map((item, index) => (
          
              <div
                className="card text-center mb-5 "
                style={{
                  width: "160px",
                  height: "290px",
                  margin: "20px",
                  // background: "rgba(230, 11, 208,.4)",
                }}
              >
                <div className="d-flex justify-content-center">
                  <img
                    style={{
                      height: "180px",
                      width: "160px",
                      marginBottom: "10px",
                    }}
                    src={item.image}
                    alt="/"
                  />
                </div>
                <div
                  style={{
                    fontWeight: "bolder",
                    fontSize: "13px",
                    padding: "0px",
                    fontFamily: "arial",
                    background: "white",
                    marginInline: "5px",
                    borderRadius: "5px",
                  }}
                >
                  {item.bookname}
                </div>
                <div
                  style={{
                    fontWeight: "bolder",
                    fontSize: "13px",
                    padding: "0px",
                    fontFamily: "arial",
                    // background: "white",
                    marginInline: "5px",
                    borderRadius: "5px",
                    marginBlock: "5px",
                  }}
                >
                  Price = Rs {item.price}
                </div>
                <div className="d-flex mb-2">
                  <button
                    style={{
                      width: "80px",
                      fontSize: "10px",
                      background: "rgba(45, 129, 224,.5)",
                      marginInline: "5px",
                      fontWeight: "bolder",
                      borderRadius: "5px",
                      float: "end",
                    }}
                  >
                    UPDATE
                  </button>
                  <button
                    style={{
                      width: "80px",
                      fontSize: "10px",
                      background: "red",
                      marginInline: "5px",
                      fontWeight: "bolder",
                      borderRadius: "5px",
                    }}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            
          
        ))}
    </div>
    // </div>
    // </div>
  );
}

export default BookSection;
