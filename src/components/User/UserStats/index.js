import React, { lazy, Suspense, useEffect } from 'react'

import useFetch from '../../../hooks/useFetch'
import { STATS_GET } from '../../../services/api'
import Error from '../../Helpers/Error'
import Head from '../../Helpers/Head'
import Loading from '../../Helpers/Loading'

const UserStatsGraphs = lazy(() => import('../UserStatsGraphs'))

const UserStats = () => {
  const { data, error, loading, request } = useFetch()

  useEffect(() => {
    async function getData () {
      const { url, options } = STATS_GET()
      await request(url, options)
    }
    getData()
  }, [request])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error message={error} />
  }

  if (!data) {
    return null
  }

  return (
    <Suspense fallback={<Loading />}>
      <Head title="Estatísticas" />
      <UserStatsGraphs data={data} />
    </Suspense>
  )
}

export default UserStats
