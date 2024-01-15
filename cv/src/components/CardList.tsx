import React, { useContext } from 'react'
import Cards from './Cards'
import { DataContext } from '../contexts/dataContext'

const CardList = () => {
  const {list} = useContext(DataContext)
  return (
    <div className='container'>
    <div className='row py-4'>
    <div className="col-12 py-2">
        <h4>These are some of my projects. You can hover over the cards and see a small description about the projects. By clicking on the cards you'll be sent off to a webpage and also you can access each individual branches!</h4>
    </div>
    </div>
    <div className="row">
      {
        list.map((l)=> {
          return <Cards key={l.id} {...l}/>
        })
      }
    
    </div>
    </div>
    
  )
}

export default CardList
