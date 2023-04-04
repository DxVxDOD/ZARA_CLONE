import React, {useState, useRef, useEffect, useMemo} from 'react';
import HamburgerSVG from '../../public/menu-hamburger-svgrepo-com.svg';
import NavSection from './NavSection';
import {gsap} from 'gsap';

const Navbar = () => {
	const [isToggeled, setIsToggeled] = useState(false);

	const handleTransition = (): void => {
		if (isToggeled) {
			setIsToggeled(false);
		} else {
			setIsToggeled(true);
		}
	};

	useEffect(() => {
		const timeline = gsap.timeline({
			paused: true,
			defaults: {duration: 1.5},
		}).fromTo('.openNav', {opacity: 0}, {opacity: 1, ease: 'sine'});

		const toggleTransition = () => timeline.restart();

		toggleTransition();
	}, [handleTransition]);

	return (
		<div>
			{isToggeled
				? <div className='openNav' >
					<NavSection
						handleTransition={handleTransition}/>
				</div>
				: <button
					className='p-6 openNav'
					onClick={handleTransition}><HamburgerSVG/></button>}
		</div>
	);
};

export default Navbar;
