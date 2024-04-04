import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import SearchPageComponent from '../../Pages/SearchPageComponent/SearchPageComponent'

const SearchRouteComponent = () => {

    const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
       <SearchPageComponent/> 
    </QueryClientProvider>
  )
}

export default SearchRouteComponent
