import React from 'react';
import Link from 'next/link';

const MenSection = () => (
	<nav className='flex flex-col gap-4 p-6 w-max' >
		<Link href='/Categories/Men/New' >NEW</Link>
		<Link href='/Categories/Men/ZaraOrigins' >ZARA ORIGINS</Link>
		<Link href='/Categories/Men/ZaraAthleticz' ><b>ZARA ATHLETICZ</b></Link>
		<Link href='/Categories/Men/Basics' >BASICS</Link>
		<Link href='/Categories/Men/Trousers' >TROUSERS</Link>
		<Link href='/Categories/Men/Cargo' >CARGO | PARACHUTE</Link>
		<Link href='/Categories/Men/Jeans' >JEANS</Link>
		<Link href='/Categories/Men/Jackets' >JACKETS | OVERSHIRTS</Link>
		<Link href='/Categories/Men/Hoodies' > HOODIES | SWEATSHIRTS</Link>
		<Link href='/Categories/Men/Tshirts' >T-SHIRTS</Link>
		<Link href='/Categories/Men/Shirts' >SHIRTS</Link>
		<Link href='/Categories/Men/PoloShirts' >POLO SHIRTS</Link>
		<Link href='/Categories/Men/Shorts' >SHORTS</Link>
		<Link href='/Categories/Men/Sweaters' >SWEATERS | CARDIGANS</Link>
		<Link href='/Categories/Men/Suits' >SUITS</Link>
		<Link href='/Categories/Men/TrenchCoats' >TRENCH COATS</Link>
		<Link href='/Categories/Men/Blazers' >BLAZERS</Link>
		<Link href='/Categories/Men/Sandals' >SANDALS | ESPADRILLIES</Link>
		<Link href='/Categories/Men/Shoes' >S H O E S</Link>
		<Link href='/Categories/Men/Bags' >B A G S | B A G P A C K S</Link>
		<Link href='/Categories/Men/Accessories' >ACCESSORIES</Link>
		<Link href='/Categories/Men/Perfumes' >PERFUMES</Link>
		<button className='w-max' >HOME</button>
		<Link href='/Categories/Men/Beauty' >BEAUTY</Link>
		<Link href='/Categories/Men/SpecialPrices' className='text-pink-400' ><i>SPECIAL PRICES</i></Link>
		<Link href='/Categories/Men/SpecialEdition' >S P E C I A L  E D I T I O N</Link>
		<Link href='/Categories/Men/ZaraRhugi' >ZARA RHUGI</Link>
		<Link href='' >GIFT CARD</Link>
		<Link href='' >JOIN LIFE</Link>
		<Link href='' >CAREERS</Link>
	</nav>
);

export default MenSection;
