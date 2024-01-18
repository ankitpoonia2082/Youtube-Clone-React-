
const ShimmerCard = () => (
    <div className="flex flex-wrap">
        {
        Array(10).fill("")
        .map((index) => (<div key={index} className="rounded-lg m-3 object-cover bg-slate-300 w-60 h-60"></div>
        ))
    }
    </div>
);

export default ShimmerCard;