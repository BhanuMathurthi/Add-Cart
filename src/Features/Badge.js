import React from "react";
import { connect } from "react-redux";

function Badge({ products }) {
  return (
    <div className="mt-5">
      <button type="button" className="btn btn-primary position-relative">
        Total Products
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {products.length}
          <span className="visually-hidden">Unread Messages</span>
        </span>
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state,
  };
};

export default connect(mapStateToProps)(Badge);
