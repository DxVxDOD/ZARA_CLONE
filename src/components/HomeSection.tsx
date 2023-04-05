import Link from 'next/link';
import React from 'react';

const HomeSection = () => (
	<nav className='flex flex-col gap-4 p-6'>
		<Link href={''} >NEW</Link>
		<Link href={''} >LIVING | DECO</Link>
		<Link href={''} >DINING ROOM</Link>
		<Link href={''} >KITCHEN</Link>
		<Link href={''} >BEDROOM</Link>
		<Link href={''} >BATHROOM</Link>
		<Link href={''} >FRAGRANCES</Link>
		<Link href={''} >SHOES BAGS LOUNGEWEAR</Link>
		<Link href={''} >LAUNDRY & CLEANING</Link>
		<Link href={''} className='py-6' >HOME KIDS</Link>
		<Link href={''} ><i>VINCENT VAN DUYSEN</i></Link>
		<Link href={''} className='pb-6 text-pink-400' ><i>SPECIAL PRICES</i></Link>
		<Link href={''} >JOIN LIFE</Link>
		<Link href={''} >CAREERS</Link>
	</nav>
);

export default HomeSection;
