import React from "react"
import styled from "@emotion/styled"
import MailchimpSubscribe from "react-mailchimp-subscribe"

const Subscribe = styled("div")`
  box-shadow: 0px 9px 24px rgb(0 0 0 / 6%);
  max-width: 550px;
  margin: 90px auto 0;
  padding: 24px;
  h4 {
    padding: 12px;
  }
  button {
    background-color: #73abff;
    border: none;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    margin: 12px;
    outline: none;
    padding: 1em 2em;
    width: 100%;

    &:focus {
      outline: auto 5px -webkit-focus-ring-color;
    }
  }
  input {
    width: 100%;
    border: none;
    border-bottom: 1px solid #ccc;
    margin: 12px;
    font-size: 1rem;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    > div {
      display: block;
      width: 100%;
      margin: 12px;
    }
  }
`

const url =
  "https://juanmurillo.us20.list-manage.com/subscribe/post?u=8099ac62ba887740228d614c1&id=1ffbb498a4"

const Newsletter = ({ body }) => (
  <Subscribe>
    <h4>{body}</h4>
    <MailchimpSubscribe url={url} />
  </Subscribe>
)

export default Newsletter
