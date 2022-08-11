
const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
        {/* Card */}
        <div className="rounded-xl relative">

            {/* Overlay */}
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                <p className="font-bold text-2xl px-2 pt-4">Upto 50% Off</p>
                <p className="px-2">On Your First Order</p>
                <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
            </div>

            <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="dish1" />

        </div>

        {/* Card */}
        <div className="rounded-xl relative">

            {/* Overlay */}
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                <p className="font-bold text-2xl px-2 pt-4">New Restaurants</p>
                <p className="px-2">Added Daily</p>
                <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
            </div>

            <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="dish2" />

        </div>

        {/* Card */}
        <div className="rounded-xl relative">

            {/* Overlay */}
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                <p className="font-bold text-2xl px-2 pt-4">Free Delivery</p>
                <p className="px-2">Upto 7KM Radius</p>
                <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
            </div>

            <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="dish3" />

        </div>

    </div>
  )
}

export default HeadlineCards