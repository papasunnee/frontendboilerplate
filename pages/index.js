import React, { Component, Fragment } from "react";
import Link from "next/link";
import Title from "../components/Styled/Title";

export default class Index extends Component {
  state = {};
  componentDidMount = () => {};
  render() {
    return (
      <Fragment>
        <Title>Sunday</Title>
        <h1>{process.env.PORT}</h1>
        <Link href="/about">
          <a className="btn btn-light">About us</a>
        </Link>
      </Fragment>
    );
  }
}
