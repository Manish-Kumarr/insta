import React from "react"
import { Link } from "gatsby"
import classes from "./Navbar.module.scss"
import "../../style/global.scss"

const navbar = () => {
  return (
    <div className={classes.Navbar}>
      <div className={classes.Logo}>InstaGram</div>
      <div className={classes.Link}>
        <Link to="/" activeClassName="active" activeStyle={{ color: "white" }}>
          Hashtag Downloader
        </Link>
        <Link
          to="/download"
          activeClassName="active"
          activeStyle={{ color: "white" }}
        >
          Profile Download
        </Link>
      </div>
    </div>
  )
}

export default navbar
