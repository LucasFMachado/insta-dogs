import React, { useEffect, useState } from 'react'
import { VictoryPie, VictoryChart, VictoryBar } from 'victory'

import styles from './styles.module.css'

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setGraph(data.map(({ title, acessos }) => {
      return { x: title, y: Number(acessos) }
    }))

    setTotal(data.length > 0
      ? data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b)
      : 0
    )
  }, [data])

  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={`${styles.total} ${styles.graphItem}`}>
        <p>Acessos: {total}</p>
      </div>
      {graph.length > 0
        ? (
          <>
            <div className={styles.graphItem}>
              <VictoryPie
                data={graph}
                innerRadius={50}
                padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
                style={{
                  data: {
                    fillOpacity: 0.9,
                    stroke: '#fff',
                    strokeWidth: 2
                  },
                  labels: {
                    fontSize: 14,
                    fill: '#333'
                  }
                }}
              />
            </div>
            <div className={styles.graphItem}>
              <VictoryChart>
                <VictoryBar data={graph} alignment="start" />
              </VictoryChart>
            </div>
          </>
          )
        : null
      }
    </section>
  )
}

export default UserStatsGraphs
