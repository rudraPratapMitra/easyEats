function ResInfoShimmer(){
    return (
        <div className="flex flex-col items-center justify-center mx-2 my-2 space-y-2">
            <div className="w-100 h-10 bg-gray-200"></div>
            <div className="w-80 h-10 bg-gray-200"></div>
            <div className="w-80 h-10 bg-gray-200"></div>
            {Array(5).fill(0).map((_,index)=>{
                return(
                    <div key={index} className="w-300 h-30  m-2 bg-gray-200"></div>
                )
            })}
        </div>
    )
}
export default ResInfoShimmer;