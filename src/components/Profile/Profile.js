import React, { useState, useEffect } from "react"
import { fetchProfile, fetchUsers } from "../../API/Function"
import classes from "./Profile.module.scss"

const Profile = () => {
  const [names, newName] = useState({ name: "" })
  const [profile, updateProfile] = useState({ data: {} })
  const [user, updateUser] = useState({ data: [] })
  const { data } = profile

  useEffect(() => {
    fetchProfile("instagram", updateProfile)
    fetchUsers("", updateUser)
  }, [])

  function handle(e) {
    const name = e.target.value
    newName({ name })
    fetchUsers(name, updateUser)
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetchProfile(names.name, updateProfile)
  }

  // function handleUser(e) {
  //   e.preventDefault()
  //   fetchUsers("i", updateUser)
  // }

  return (
    <div>
      <form className="search-bar">
        <input
          type="text"
          value={names.name}
          onChange={handle}
          placeholder="Search User"
        />

        <button type="submit" onClick={handleSubmit}>
          <img
            className={classes.icon}
            src="https://img.icons8.com/metro/26/000000/search.png"
          />
        </button>
      </form>
      <div className={classes.box}>
        <div className={classes.uv}>
          <div className={classes.username}>{data.username}</div>
          <div className={classes.verify}>
            {data.verified ? (
              <img src="https://img.icons8.com/color/48/000000/verified-badge.png" />
            ) : null}
          </div>
        </div>
        <div className={classes.fullname}> {data.fullname}</div>
        <div className={classes.status}>
          <div className={classes.followers}>
            Followers
            <br /> {data.followers}
          </div>
          <div className={classes.following}>
            Following
            <br /> {data.following}
          </div>
        </div>
        <div className={classes.bio}>{data.bio}</div>
        <div>
          <div className={classes.bigImg}>
            <img src={data.dpSrc} alt="" />
            <div className={classes.btn}>
              <a href={data.dpSrc}>Download Image</a>
            </div>
          </div>
        </div>
      </div>

      {/* {user.data.map(d => (
        <div>{d.username}</div>
      ))} */}
    </div>
  )
}

export default Profile
