import supportIllustration from '../assets/illustration2.svg'

const HeroSupport = () =>{
    return(
        <section className='h-[45rem] bg-[#BCEAD5] rounded-[4rem] flex items-center justify-between p-10'>
            <img className='h-[35rem]' src={supportIllustration} alt="support-illustration"/>
            <p className='text-3xl text-[#2F2E41] w-2/5 font-bold'>
                Leave behind the complexities of traditional recruitment methods and embrace a streamlined process.<br/>
                Effortlessly manage your candidate pipeline and collaborate seamlessly with your team.<br/>
                Maximize productivity and eliminate bottlenecks with our seamless integration and workflow tools.<br/>
                Experience the freedom to hire with confidence, knowing you have the best tools at your disposal.<br/>
            </p>
        </section>
    )
}

export default HeroSupport