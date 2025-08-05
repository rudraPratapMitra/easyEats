function DiscountedResCard(ResturantCard){   
    return function wrapResCard({discountInfo,...restProps}){
        const {header,subHeader}=discountInfo
        return(
            <div className="relative">
                <div className="m-2 p-4 absolute bg-black text-white px-6 py-1 text-sm font-bold">{header} {subHeader}</div>
                <ResturantCard {...restProps}/>
            </div>
        )
    }

    
}
export default DiscountedResCard;