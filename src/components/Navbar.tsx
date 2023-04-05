import React, {useEffect, useState} from 'react';
import HamburgerSVG from '../../public/menu-hamburger-svgrepo-com.svg';
import NavSection from './NavSection';

const Navbar = () => {
	const [isToggeled, setIsToggeled] = useState(false);
	const [showNavbar, setShowNavbar] = useState(false);
	const fadeIn = {
		animation: 'fade-in 1000ms forwards',
	};
	const fadeOut = {
		animation: 'fade-out 1000ms forwards',
	};

	const handleTransition = (): void => {
		if (isToggeled) {
			setIsToggeled(false);
		} else {
			setIsToggeled(true);
		}
	};

	return (
		<>
			<button
				style={isToggeled ? fadeOut : fadeIn}
				className='absolute p-6 buttonFadeIn'
				onClick={handleTransition}><HamburgerSVG/>
			</button>
			<div style={isToggeled ? fadeIn : fadeOut}>
				<NavSection
					handleTransition={handleTransition}/>
			</div>
		</>
	);
};

export default Navbar;
