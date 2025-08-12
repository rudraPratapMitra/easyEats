const ShimmerResCard=()=>{
    return (
        <div className="flex flex-wrap m-4 p-4">
            {Array(8).fill(0).map((i)=>{
                return (
                    <div key={i} className="w-70 h-70  m-2 bg-gray-200"></div>
                ) 
            })
            }
          
        </div>
    )
}
export default ShimmerResCard;
