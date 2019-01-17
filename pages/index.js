import React, { Component, Fragment } from "react";
import Link from "next/link";

export default class Index extends Component {
  state = {};
  componentDidMount = () => {};
  render() {
    return (
      <Fragment>
        <h1>{process.env.PORT}</h1>
        <Link href="/about">
          <a className="btn btn-light">About us</a>
        </Link>
      </Fragment>
    );
  }
}
