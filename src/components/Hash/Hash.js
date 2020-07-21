import React from "react"
import { useState, useEffect } from "react"
import { fetchHash } from "../../API/Function"
import classes from "./Hash.module.scss"
import { CopyToClipboard } from "react-copy-to-clipboard"

const Hash = () => {
  const [names, newName] = useState({ name: "" })
  const [hash, updateHash] = useState({ data: [] })
  const { data } = hash
  const [title, updateTitle] = useState("Copy")

  useEffect(() => {
    fetchHash("trending", updateHash)
    console.log(names)
  }, [])

  function handle(e) {
    const name = e.target.value
    newName({ name })
  }
  function handleSubmit(e) {
    e.preventDefault()
    fetchHash(names.name, updateHash)
  }

  const handleTitle = () => {
    updateTitle("Copied")
  }
  const handleResetTitle = () => {
    updateTitle("Copy")
  }

  const app = data.slice(0, 30).map(home => "#" + home.tag + " ")

  console.log(app)

  return (
    <div className={classes.container}>
      <div>
        <form className="search-bar">
          <input
            type="text"
            name="name"
            placeholder="Search Tags"
            value={names.name}
            onChange={handle}
          />
          <button type="submit" onClick={handleSubmit}>
            <img
              className={classes.icon}
              src="https://img.icons8.com/metro/26/000000/search.png"
            />
          </button>
        </form>
      </div>
      <CopyToClipboard
        text={app}
        onCopy={handleTitle}
        onMouseLeave={handleResetTitle}
      >
        <div className={classes.boxdata}>
          <div className={classes.boxtop}>{app}</div>
          <div className={classes.boxbottom}>
            <p>Top 30 Hashtags</p>
            <p>{title}</p>
          </div>
        </div>
      </CopyToClipboard>

      <div className={classes.onebyone}>
        {data.slice(0, 30).map(home => (
          <CopyToClipboard text={`#${home.tag}`}>
            <>
              <div key={home.tag} className={classes.tagcover}>
                <div className={classes.tagname}>{`#${home.tag}`}</div>
                <div className={classes.count}>{home.posts}</div>
              </div>
              {/* <p>Click to copy</p> */}
            </>
          </CopyToClipboard>
        ))}
      </div>
    </div>
  )
}

export default Hash
