import React from "react"
import Navbar from "../Navbar/Navbar"
import classes from "./Layout.module.scss"
import Footer from "../Footer/Footer"

const Layout = props => {
  return (
    <>
      <Navbar />
      <div className={classes.Container}>
        <div className={classes.Box}>{props.children}</div>
      </div>
      <Footer />
    </>
  )
}

export default Layout
