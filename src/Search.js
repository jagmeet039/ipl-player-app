import React, {useState} from "react"
import data from "./data"

const Search = ()=> {
    const [filter,setFilter] = useState('')
    
    const searchText = (event)=>{
        setFilter(event.target.value)
    }
    
    const handleClick = (country)=>{
        setFilter(country)
    }
    
    let dataSearch = data.cardData.filter(item =>{
        return Object.keys(item).some(key => 
        item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        )
    })
    
    let uniqueCountry = [...new Set(data.cardData.map((menu)=>{
        return menu.country
    }))]  
    
    let uniqueSkill = [...new Set(data.cardData.map((menu)=>{
        return menu.skill
    }))] 
    
	return(
		<section className="py-4 container">
            <div className="row justify-content-center">
            
            <div className="col-12 mb-5"> 
                <div className="mb-2 text-center navbar bg-light p-2">
                    <input type="text" className="from-control input-box shadow" value={filter} onChange={searchText.bind(this)} placeholder="🔍 Search"/>&ensp;
                    {uniqueCountry.map((country,index)=>{
                        return(
                             <button key={index} onClick={()=>handleClick(country)} className="badge bg-success m-2 border">{country}</button>
                        )           
                    })}
                    {uniqueSkill.map((skill,index)=>{
                        return(
                             <button key={index} onClick={()=>handleClick(skill)} className="badge bg-danger m-2 border">{skill.toUpperCase()}</button>
                        )           
                    })}
                </div>
            </div>      
            
            {dataSearch.map((item,index)=>{
                console.log(item.img)
                return(
                    <div key={index} className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                        <div className="card p-2 overflow-hidden h-100 shadow">                  
                            <img src={item.img} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h4 className="card-title text-center">{item.name}</h4>
                                <span className="badge bg-danger rounded-pill w-100"> {item.skill} </span>
                                <span className="badge bg-success rounded-pill w-100"> {item.country} </span>                
                            </div>
                            <table className="text-center border">
                                <thead>
                                    <tr>
                                        <th>Runs</th>
                                        <th>100's</th>
                                        <th>50's</th>
                                        <th>Catches</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{item.stats.runs}</td>
                                        <td>{item.stats.hundreds}</td>
                                        <td>{item.stats.fifty}</td>
                                        <td>{item.stats.catches}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <table className="text-center border">
                                <thead>
                                    <tr>
                                        <th>Runs</th>
                                        <th>100's</th>
                                        <th>50's</th>
                                        <th>Catches</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{item.stats.runs}</td>
                                        <td>{item.stats.hundreds}</td>
                                        <td>{item.stats.fifty}</td>
                                        <td>{item.stats.catches}</td>
                                    </tr>
                                </tbody>
                            </table>             
                        </div>
                    </div>
                )
                
            })}
            
            </div>
        </section>
	)
}

export default Search