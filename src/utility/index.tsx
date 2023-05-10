import { User } from "types/User"

export const mixArrays = (users: any, groups: any) => {
  const result = []
  //add a group every 3 or 4 users
  for (let i = 0; i < users.length; i++) {
    if (i % 4 === 0) {
      result.push(groups[Math.floor(Math.random() * groups.length)])
    }
    result.push(users[i])
  }

  return result
}

export const getRandomJob = () => {
  const jobs = [
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
    "UI/UX Designer",
    "Product Manager",
    "Project Manager",
    "Data Scientist",
    "Data Analyst",
    "Data Engineer",
    "DevOps Engineer",
    "QA Engineer",
    "Software Engineer",
    "Software Developer",
    "Software Architect",
    "Technical Writer",
    "Desosigner",
    "Product Designer",
  ]
  return jobs[Math.floor(Math.random() * jobs.length)]
}
export const getRandomTopic = () => {
  const topics = [
    "React",
    "Angular",
    "PostgreSQL",
    "GraphQL",
    "Design",
    "UI/UX",
    "Frontend",
    "Backend",
    "Fullstack",
  ]
  return topics[Math.floor(Math.random() * topics.length)]
}
export const getRandomGroupName = () => {
  const groupNames = [
    "React Developers",
    "Angular Developers",
    "PostgreSQL Developers",
    "GraphQL Developers",
    "Designers",
    "UI/UX Designers",
    "Frontend Developers",
    "Backend Developers",
    "Fullstack Developers",
  ]
  return groupNames[Math.floor(Math.random() * groupNames.length)]
}
export const loadUsers = async () => {
  const data = await fetch(
    "https://gorest.co.in/public/v2/users?page=1&per_page=50"
  )
  const users = await data.json()

  //insert group spread randomly in the users array
  const generateRandomGroups = () => {
    const groups = []
    for (let i = 0 + 1; i < 20; i++) {
      groups.push({
        id: i,
        type: "group",
        status: "active",
        name: getRandomGroupName(),
        topic: getRandomTopic(),
        userImage0: `https://xsgames.co/randomusers/assets/avatars/male/${
          Math.floor(Math.random() * 70) + 1
        }.jpg`,
        userImage1: `https://xsgames.co/randomusers/assets/avatars/female/${
          Math.floor(Math.random() * 70) + 1
        }.jpg`,
        userImage2: `https://xsgames.co/randomusers/assets/avatars/male/${
          Math.floor(Math.random() * 70) + 1
        }.jpg`,
      })
    }
    return groups
  }

  if (users?.length > 0) {
    const usersWithJobs = users.map((user: any) => {
      return {
        ...user,
        job: getRandomJob(),

        userImage: `https://xsgames.co/randomusers/assets/avatars/${
          user.gender
        }/${Math.floor(Math.random() * 70) + 1}.jpg`,
      }
    })
    let groups = generateRandomGroups()
    //now insert the groups in the users array randomly

    return mixArrays(usersWithJobs, groups)
  } else {
    return []
  }
}
export const loadOnlyUsers = async ({
  page,
  perPage,
}: {
  page?: number
  perPage?: number
}) => {
  const data = await fetch(
    `https://gorest.co.in/public/v2/users?page=${page}&per_page=${perPage}`
  )
  const users = await data.json()
  if (users?.length > 0) {
    const usersWithJobs = users.map((user: User) => {
      return {
        ...user,
        job: getRandomJob(),

        userImage: `https://xsgames.co/randomusers/assets/avatars/${
          user.gender
        }/${Math.floor(Math.random() * 70) + 1}.jpg`,
      }
    })
    console.log("usersWithJobs", usersWithJobs)
    return usersWithJobs
  } else {
    return []
  }
}
