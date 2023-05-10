import { loadOnlyUsers, loadUsers } from "utility"

export const resolveUsersAndReturnInitialState = async () => {
  const users = await loadUsers()
  const filterableUsers = await loadOnlyUsers({ page: 1, perPage: 19 })
  let initialState = {
    isLoading: true,
    users: users,
    filterableUsers: filterableUsers,
    filteredUsers: null,
    filter: "All",
    genderFilter: null,
    query: null,
  }

  return initialState
}

export const reducer = (
  state = resolveUsersAndReturnInitialState(),
  action: {
    type: string
    payload: any
  }
) => {
  console.log(action)
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      }
    case "SET_USERS":
      return {
        ...state,
        users: action.payload,
      }
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      }
    case "SET_FILTERABLE_USERS":
      return {
        ...state,
        filterableUsers: action.payload,
      }
    case "SET_FILTERED_USERS":
      return {
        ...state,
        filteredUsers: action.payload,
      }
    case "SET_QUERY":
      return {
        ...state,
        query: action.payload,
      }

    default:
      return state
  }
}
