import './portfolio.scss'
import PortfolioList from '../portfolioList/PortfolioList' 
import { useState } from 'react'
import {featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio} from "../../data"
import { useEffect } from 'react'

const Portfolio = () => {
  const [selected, setSelected]=useState("featured");
  const [data, setData]=useState([]); 

const list=[
  {
    id: "featured", title:"Featured",
  },
  {
    id: "web", title:"Web App",
  },
  {
    id: "mobile", title:"Mobile App",
  },
  {
    id: "design", title:"Design",
  },
  {
    id: "content", title:"Content "
  }
]
  useEffect(()=>{
    if (selected=="featured") {
      setData(featuredPortfolio);
    }
    else if (selected=="web") {
      setData(webPortfolio);
    }
    else if (selected=="mobile") {
      setData(mobilePortfolio);
    }
    else if (selected=="design") {
      setData(designPortfolio);
    }
    else if (selected=="content") {
      setData(contentPortfolio);
    }
    else{
      setData(featuredPortfolio)
    }
  }, [selected])


  return (
    <div className='portfolio' id='portfolio'>
    <h1>Portfolio</h1>
    <ul>
      {list.map(item=>(
        <PortfolioList title={item.title} active={selected==item.id} setSelected={setSelected} id={item.id}/>
      ))}
    </ul>      
    <div className="container">
    {data.map((d)=>(

      <div className="item">
        <img src={d.img} alt="" />
        <h3>{d.title}</h3>
      </div>
    ))}
    </div>
    </div>
  )
}

export default Portfolio
