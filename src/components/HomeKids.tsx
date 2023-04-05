import React from 'react';
import Link from 'next/link';

const HomeKids = () => (
	<nav className='flex flex-col gap-4 p-6'>
		<Link href={''} className='pt-6' >NEW</Link>
		<Link href={''} className='pb-6' >VEIW ALL</Link>
		<Link href={''} >NEW BORN</Link>
		<Link href={''} >BEDROOM</Link>
		<Link href={''} >TOYS</Link>
		<Link href={''} >RUGS | FURNITURE</Link>
		<Link href={''} >DECORATIVE ACCESSORIES</Link>
		<Link href={''} >DINNING ROOM</Link>
		<Link href={''} >BATHROOM</Link>
		<Link href={''} className='pb-6' >SHOES | LONGEWEAR</Link>
		<Link href={''} ><i>MICKEY MOUSE @ DISENY</i></Link>
		<Link href={''} ><i>STUDIO COLLECTION</i></Link>
		<Link href={''} className='text-pink-400' ><i>SPECIAL PRICES</i></Link>
	</nav>
);

export default HomeKids;
