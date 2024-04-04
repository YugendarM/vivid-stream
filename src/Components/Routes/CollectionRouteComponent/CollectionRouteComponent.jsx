import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import CollectionPageComponent from '../../Pages/CollectionPageComponent/CollectionPageComponent'

const CollectionRouteComponent = () => {
    const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
        <CollectionPageComponent/>
    </QueryClientProvider>
  )
}

export default CollectionRouteComponent
