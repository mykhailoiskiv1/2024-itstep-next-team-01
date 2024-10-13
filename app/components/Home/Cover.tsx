import Image from 'next/image'
import cover_image from '@/public/cover-main.png'
import { inter, frankRuhlLibre, mrsSaintDelafield } from '../../fonts'
import { Button } from '../button'

export default function Cover() {

    return (
        <div className={`relative w-full medium overflow-hidden md:p-32 p-10`}>
            <Image
                src={cover_image}
                alt='cover image'
                layout="fill"
                objectFit="cover"
                priority
                className="z-0"
            />
            <div className="absolute inset-0 z-10" />
            <div className="relative z-20 flex flex-col items-start justify-start h-full  md:w-6/12">
                <label className='text-specialText font-script text-3xl'>
                    Sami's  flowers
                </label>
                <h1 className="text-3xl md:text-5xl text-primaryText mb-4 font-serif">
                    Beautiful Flowers for any Occasion
                </h1>
                <hr className='text-hrColor w-2/12 border-2 my-3'/>
                <p className="text-xl md:text-2xl text-secondaryText">
                    Most elegant, freshly cut floral arrangements.
                </p>
                <Button variant='secondary' className='mt-5'>LEARN MORE</Button>
            </div>
        </div>
    )
}