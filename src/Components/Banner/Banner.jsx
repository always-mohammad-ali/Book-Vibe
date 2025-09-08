import potter from '../../assets/harry.png'

const Banner = () => {
    return (
        <section className='flex justify-evenly w-4/5 rounded-2xl mx-auto items-center bg-gray-100 '>
            <div className='text-black ml-20'>
                <h1 className='text-6xl font-semibold'>Books to Freshen Up</h1>
                <h1 className='text-6xl font-semibold my-5'>Your Bookshelf</h1>
                <button className='bg-[#51e839] px-4 py-2 font-semibold text-xl rounded-xl'>View The Lists</button>
            </div>

            <div className=''>
                <img src={potter} alt="" />
            </div>
        </section>
    );
};

export default Banner;