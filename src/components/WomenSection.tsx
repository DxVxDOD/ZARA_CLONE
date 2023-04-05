import Link from 'next/link';
import React, {useState} from 'react';
import HomeSection from './HomeSection';

const WomenSection = () => {
	const [toggleHome, setToggleHome] = useState(false);
	const handleHomeToggle = () => {
		if (toggleHome) {
			setToggleHome(false);
		} else {
			setToggleHome(true);
		}
	};

	return (
		<nav className='flex flex-col gap-4 p-6 w-max' >
			<Link href='/Categories/Women/New' >NEW</Link>
			<Link href='/Categories/Women/DressTime' >DRESS TIME</Link>
			<Link href='/Categories/Women/SpringMustHaves' >SPRING MUST HAVES</Link>
			<Link href='/Categories/Women/Cargo' >CARGO | PARACHUTES</Link>
			<Link href='/Categories/Women/Blazers' >BLAZERS | WAISTCOATS</Link>
			<Link href='/Categories/Women/Jackets' >JACKETS | TRENCH COATS</Link>
			<Link href='/Categories/Women/Dresses' >DRESSES | JUMPSUITS</Link>
			<Link href='/Categories/Women/Kintwear' >KINTWEAR</Link>
			<Link href='/Categories/Women/Shirts' >SHIRTS</Link>
			<Link href='/Categories/Women/Tshirts' >T-SHIRTS</Link>
			<Link href='/Categories/Women/Tops' >TOPS</Link>
			<Link href='/Categories/Women/Sweatshirts' >SWEATSHIRTS</Link>
			<Link href='/Categories/Women/Skirts' >SKIRTS</Link>
			<Link href='/Categories/Women/Trousers' >TROUSERS</Link>
			<Link href='/Categories/Women/Jeans' >JEANS</Link>
			<Link href='/Categories/Women/Shorts' >SHORTS | SKORTS</Link>
			<Link href='/Categories/Women/Coats' >COATS</Link>
			<Link href='/Categories/Women/Shoes' >S H O E S</Link>
			<Link href='/Categories/Women/Bags' >B A G S</Link>
			<Link href='/Categories/Women/Swimwear' >SWIMWEAR</Link>
			<Link href='/Categories/Women/Accessories' >ACCESORIES</Link>
			<Link href='/Categories/Women/Lingerie' >LINGERIE</Link>
			<Link href='/Categories/Women/Beauty' >BEAUTY</Link>
			<Link href='/Categories/Women/Perfumes' >PERFUMES</Link>
			<Link href='/Categories/Women/Basics' >BASICS</Link>
			<Link href='/Categories/Women/CoOrdSets' >CO-ORD SETS</Link>
			<Link href='/Categories/Women/Suits' >SUITS</Link>
			<Link href='/Categories/Women/SpecialPrices' className='text-pink-400 ' ><i>SPECIAL PRICES</i></Link>
			<button
				onClick={handleHomeToggle}
				className='w-max' >HOME
			</button>
			{toggleHome ? <HomeSection/> : null}
			<Link href='/Categories/Women/SpecialEdition' >S P E C I A L  E D I T I O N</Link>
			<Link href='' >GIFT CARD</Link>
			<Link href='' className='py-4' >JOIN LIFE</Link>
			<Link href='' className='py-4' >CAREERS</Link>
		</nav>
	);
};

export default WomenSection;
