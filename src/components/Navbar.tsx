import Link from 'next/link';
import React, {useState} from 'react';
import XSVG from '../../public/x-thin-svgrepo-com.svg';
import WomenSection from './WomenSection';
import MenSection from './MenSection';
import HomeSection from './HomeSection';
import PreOwnedSection from './PreOwnedSection';
import BeautySection from './BeautySection';
import KidsSeaction from './KidsSeaction';

const Navbar = () => {
	const [category, setCategory] = useState('');
	return (
		<nav className='flex flex-col h-screen text-xs bg-stone-100 text-stone-900 lg:w-2/5' >
			<button className='p-6' >
				<XSVG/>
			</button>
			<div className='flex justify-between p-6'>
				<button onClick={() => {
					setCategory('women');
				}} >WOMEN</button>
				<button onClick={() => {
					setCategory('men');
				}} >MEN</button>
				<button onClick={() => {
					setCategory('kids');
				}}>KIDS</button>
				<button onClick={() => {
					setCategory('home');
				}} >HOME</button>
				<button onClick={() => {
					setCategory('beauty');
				}} >BEAUTY</button>
				<button onClick={() => {
					setCategory('preOwned');
				}} >ZARA PRE-OWNED</button>
			</div>
			<div>
				{category === 'women' ? <WomenSection/> : null}
				{category === 'men' ? <MenSection/> : null}
				{category === 'home' ? <HomeSection/> : null}
				{category === 'kids' ? <KidsSeaction/> : null}
				{category === 'beauty' ? <BeautySection/> : null}
				{category === 'preOwned' ? <PreOwnedSection/> : null}
			</div>
		</nav>
	);
};

export default Navbar;
