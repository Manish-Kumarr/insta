export async function fetchHash(info, setState) {
  const req = await fetch(
    `https://www.instagram.com/web/search/topsearch/?context=blended&count=10&query=%23${info}`
  )
  const res = await req.json()
  try {
    const hashtag = res.hashtags.map(hash => ({
      tag: hash.hashtag.name,
      posts: hash.hashtag.search_result_subtitle,
      count: hash.hashtag.media_count,
    }))
    setState({ data: hashtag })
    return hashtag
  } catch (e) {
    return null
  }
}

export async function fetchProfile(info, setState) {
  const req = await fetch(`https://www.instagram.com/${info}/?__a=1`)
  const res = await req.json()
  try {
    const user = {
      username: res.graphql.user.username,
      fullname: res.graphql.user.full_name,
      dpSrc: res.graphql.user.profile_pic_url_hd,
      verified: res.graphql.user.is_verified,
      followers: res.graphql.user.edge_followed_by.count,
      following: res.graphql.user.edge_follow.count,
      bio: res.graphql.user.biography,
    }
    setState({ data: user })
    return user
  } catch (e) {
    return null
  }
}

export async function fetchUsers(info, setState) {
  try {
    const req = await fetch(
      `https://www.instagram.com/web/search/topsearch/?context=blended&count=10&query=${info}&rank_token=5&include_reel=true`
    )
    const res = await req.json()
    if (res.users.length === 0) throw new Error("Not Found")
    const users = res.users
      .map(hash => ({
        username: hash.user.username,
        fullname: hash.user.full_name,
        dpsrc: hash.user.profile_pic_url,
        verified: hash.user.is_verified,
      }))
      .sort((a, b) => b.count - a.count)

    setState({ data: users })
    // console.log(users)
  } catch (e) {
    return null
  }

  return
}
