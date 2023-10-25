import team from '../../../assets/icons/group.svg'
import themeDelivery from '../../../assets/icons/deliveryt.svg'
import support from '../../../assets/icons/person.svg'
import equipment from '../../../assets/icons/Wrench.svg'
import guranty from '../../../assets/icons/check.svg'

const WhyChooseUs = () => {
    return (
        <div>
            <div className='max-w-xl text-center mx-auto'>
                <p className='text-5 text-orange-700 font-bold'>Core Features</p>
                <h1 className='text-4xl font-bold py-4'>Why Choose Us</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className='flex justify-between my-5'>
            <div className='border border-[#E8E8E8] rounded-lg px-16 py-8 hover:bg-[#FF3811] hover:text-white'>
                <img className='text-center flex mx-auto py-6' src={team} alt="" />
                <p className=''>Expert Team</p>
                </div>
            <div className='border border-[#E8E8E8] rounded-lg p-12 px-16 hover:bg-[#FF3811] hover:text-white'><img className='text-center flex mx-auto py-6' src={themeDelivery} alt="" />
            <p>Theme Delivery</p>
            </div>
            <div className='border border-[#E8E8E8] rounded-lg p-12 px-16 hover:bg-[#FF3811] hover:text-white'><img className='text-center flex mx-auto py-6' src={support} alt="" />
            <p>24/7 Support</p>
            </div>
            <div className='border border-[#E8E8E8] rounded-lg p-12 px-16 hover:bg-[#FF3811] hover:text-white'><img className='text-center flex mx-auto py-6' src={equipment} alt="" />
            <p>Best Equipment</p>
            </div>
            <div className='border border-[#E8E8E8] rounded-lg p-12 px-16 hover:bg-[#FF3811] hover:text-white'><img className='text-center flex mx-auto py-6' src={guranty} alt="" />
            <p>100% Guranty</p>
            </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;