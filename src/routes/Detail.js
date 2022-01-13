import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail({ toDos }) {
  const id = parseInt(useParams().id);
  const toDo = toDos.find((toDo) => toDo.id === id);
  return (
    <>
      <h1>{toDo.text}</h1>
      <h5>created by {toDo.id}</h5>
    </>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
}

export default connect(mapStateToProps)(Detail);
