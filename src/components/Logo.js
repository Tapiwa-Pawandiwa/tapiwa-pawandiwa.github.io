import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import {motion} from 'framer-motion';
import logo from '../../public/images/personal_logo.png';
const MotionLink = motion(Link);

const Logo = () => {
  return (
    <motion.div className='flex items-center justify-center mt-2'>
        
        <MotionLink href="/" className='w-20 h-20 bg-dark rounded-full items-center justify-center'
            whileHover={{ 
                scale: 1.1
            
            }}
        >
            <Image src={logo} width={100} height={100} alt='logo' />
        </MotionLink>
        
    </motion.div>
  )
}

export default Logo