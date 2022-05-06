import React, { useState } from "react";
import { connect } from "react-redux";
import { AddProduct } from "../Actions";
import { RemoveProduct } from "../Actions";

function Card({ products, AddProduct, RemoveProduct }) {
  const [item, setItem] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    if (item !== "") {
      await AddProduct({ name: item });
      setItem("");
    }
    // setItem("");
  }
  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="card mt-3" style={{ width: "18rem" }}>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={item}
                  className="mt-3 mb-2"
                  onChange={(e) => setItem(e.target.value)}
                  name=""
                  placeholder="Add Products"
                />{" "}
                <button className="btn btn-success mb-4" type="submit">
                  Add Product
                </button>
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="item mb-3 border border-info p-2 fw-bold"
                    style={{ cursor: "pointer", width: "14rem" }}
                  >
                    {product.name}
                    <span
                      onClick={() => RemoveProduct(product.name)}
                      className="badge square-pill bg-danger fs-7"
                      style={{ float: "right", padding: "6px 10px 6px 10px" }}
                    >
                      X
                    </span>
                  </div>
                ))}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state,
});

export default connect(mapStateToProps, { AddProduct, RemoveProduct })(Card);
