import React, {Fragment} from 'react'

export default (props) => (
  <Fragment>
    <div style={{position: "relative"}}>
      <h3 style={{ display: "inline" }}>{props.sprintName}</h3>
      <span style={{position: "absolute", right: "0", bottom: "0"}}>2019/7/14 〜 2019/7/28</span>

    </div>
  </Fragment>
)
