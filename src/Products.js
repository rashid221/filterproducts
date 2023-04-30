import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendData } from "./redux/actions/productsAction";

const Products = () => {
  const selectedData = useSelector((state) => state.productReducer);
  const datas = selectedData.products;
  const filtered = selectedData.filteredProducts;
  const dispatch = useDispatch();
  return (
    <div>
      <h4
        style={{
          textAlign: "center",
          backgroundColor: "#212A3E",
          padding: "1rem",
          color: "white",
          margin: 0,
        }}
      >
        Products Availability
      </h4>

      <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
        {
          <div style={{ flex: 1 }}>
            <h4
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "1rem 0.5rem",
                margin: 0,
              }}
            >
              Search by filter
            </h4>
            {datas.map((item) => (
              <ul key={item.id} style={{ listStyleType: "none" }}>
                <li
                  className="li-hover"
                  onClick={() => dispatch(sendData(item.category))}
                >
                  {item.category}
                </li>
              </ul>
            ))}
          </div>
        }

        {filtered.length === 0 ? (
          <div className="cards-main">
            {datas.map((item) => (
              <div className="cards">
                <img
                  key={item.id}
                  src={item.image}
                  alt=""
                  style={{ width: "5rem" }}
                />
                <h5>{item.title}</h5>
                <h5>Price: ₹ {item.price}</h5>
                <h5>Rating <span className="span-rate">{item.rating.rate} ★</span></h5>
              </div>
            ))}
          </div>
        ) : (
          <div className="cards-main">
            {filtered.map((ite) =>
              ite.map((im) => (
                <div className="cards">
                  <img
                    key={im.id}
                    src={im.image}
                    alt=""
                    style={{ width: "5rem" }}
                  />
                  <h5>{im.title}</h5>
                  <h5>Price: ₹ {im.price}</h5>
                  <h5>Rating <span className="span-rate">{im.rating.rate} ★</span></h5>
                </div>
              ))
              // <img src={ite.image} alt="" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
