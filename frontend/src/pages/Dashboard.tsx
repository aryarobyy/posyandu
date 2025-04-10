import MyBanner from '../components/Banner'

const Dashboard = () => {
    const imageList: string[] = [
        "/assets/image2.jpg",
    ];

    return (
        <div className="pt-20 bg-[#f5faff]">
            <div className="container mx-auto px-6 flex justify-between items-center gap-6 m-10">
                <div className="w-1/2">
                    <p className="text-3xl font-bold text-gray-800">Posyandoe</p>
                    <p className="text-lg text-gray-700 mt-1">Jl Rambutan</p>
                    <p className="italic text-sm font-light text-gray-600 mt-4 leading-relaxed">
                        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe commodi mollitia quae ipsum nulla deserunt molestias pariatur"
                    </p>
                </div>
                <div className="w-1/2">
                    <img src="/assets/image1.png" alt="Posyandu Mangga" className="rounded-xl shadow-lg" />
                </div>
            </div>
            <MyBanner images={imageList} />
        </div>
    )
}

export default Dashboard;
