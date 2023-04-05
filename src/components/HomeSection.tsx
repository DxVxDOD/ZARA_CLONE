import Link from 'next/link';
import React, {useState} from 'react';
import HomeKids from './HomeKids';

const HomeSection = () => {
	const [toggleHome, setToggleHome] = useState(false);
	const handleHomeToggle = () => {
		if (toggleHome) {
			setToggleHome(false);
		} else {
			setToggleHome(true);
		}
	};

	return (
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
			<button
				onClick={handleHomeToggle}
				className='w-max' >HOME KIDS
			</button>
			{toggleHome ? <HomeKids/> : null}
			<Link href={''} ><i>VINCENT VAN DUYSEN</i></Link>
			<Link href={''} className='pb-6 text-pink-400' ><i>SPECIAL PRICES</i></Link>
			<Link href={''} >JOIN LIFE</Link>
			<Link href={''} >CAREERS</Link>
		</nav>
	);
};

export default HomeSection;
