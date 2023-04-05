import Link from 'next/link';
import React, {useState} from 'react';
import HomeKids from './HomeKids';

const KidsSeaction = () => {
	const [toggleHome, setToggleHome] = useState(false);
	const handleHomeToggle = () => {
		if (toggleHome) {
			setToggleHome(false);
		} else {
			setToggleHome(true);
		}
	};

	return (
		<nav className='flex flex-col gap-4 p-6' >
			<Link href={''} >EVENT PREMUIM COLLECTION</Link>
			<Link href={''} >GIRL | 6-14 YEARS</Link>
			<Link href={''} >BOY | 6-14 YEARS</Link>
			<Link href={''} >BABY GIRL | 9 MONTHS - 6 YEARS</Link>
			<Link href={''} >BABY BOY | 9 MONTHS - 6 YEARS</Link>
			<Link href={''} >NEWBORN | 0-12 MONTHS</Link>
			<Link href={''} >ACCESSORIES | SHOES</Link>
			<Link href={''} >EDITED</Link>
			<button
				onClick={handleHomeToggle}
				className='w-max' >HOME KIDS
			</button>
			{toggleHome ? <HomeKids/> : null}
			<Link href={''} className='pt-6' >JOIN LIFE</Link>
		</nav>
	);
};

export default KidsSeaction;
