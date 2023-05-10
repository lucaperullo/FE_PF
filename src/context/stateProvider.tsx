import { ReactNode, createContext, useContext, useReducer } from "react"

type StateType = {
  users: Array<any>
  filters: Array<any>
  orders: Array<any>
}

export const StateContext = createContext<StateType | any>(null)

// We wrap our app and provide the Data layer
export const StateProvider = ({
  reducer,
  initialState,
  children,
}: {
  //reducer: ()
  reducer: any

  initialState: {
    isLoading: boolean
    users: Array<{
      id: number
      name: string
      gender: string
      status: string
      email: string
    }>
    filter: string
    genderFilter: string | null
  }
  //children: React.ReactNode;
  children: ReactNode
}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext)
