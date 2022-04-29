
export const  Link = ()=>{
    var arr = [{tittle:"services"},{tittle:"Project"},{tittle:"About"}];
    return(<div className="container">
        {arr.map((e)=>{
            return <div  className="link">{e.tittle}</div>
        })}
        
        </div>)
    
} 