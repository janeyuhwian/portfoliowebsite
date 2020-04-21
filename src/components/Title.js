import React from "react"
import styled from "styled-components"
const Title = ({ title, subtitle, className }) => {
  return (
    <div className={className}>
      <h4>
        <span className="title">{title}</span>
        <span>{subtitle}</span>
      </h4>
    </div>
  )
}

export default styled(Title)`
  font-size: 2.3rem;
  margin-bottom: 2rem;
  h4 {
    text-align: center;
    letter-spacing: 5px;
    color: #000007;
  }
  .title {
    color: #000007;
  }
  span {
    display: block;
  }
  @media (min-width: 576px) {
    span {
      display: inline-block;
      margin: 0 0.35rem;
    }
  }
`
