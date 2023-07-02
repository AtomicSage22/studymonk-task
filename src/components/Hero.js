import heroIllustration from '../assets/illustration4.svg'

const Hero = () =>{
    return (
        <section className='flex justify-between items-center py-36 p-20' >
            <div>
                <h2 className='text-8xl text-[#2F2E41] font-bold'>
                Transforming Recruitment: 
                </h2>
                <h3 className='text-5xl text-[#3F3D56] font-semibold w-[36rem]'>
                Unlock the Power of Streamlined Recruitment
                </h3>
            </div>
            <img className='h-[35rem]' src={heroIllustration} alt='hero-illustration'></img>
        </section>
    )
}

export default Hero