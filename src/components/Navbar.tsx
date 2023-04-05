import React, {useState} from 'react';
import HamburgerSVG from '../../public/menu-hamburger-svgrepo-com.svg';
import NavSection from './NavSection';

const Navbar = () => {
	const [isToggeled, setIsToggeled] = useState(true);
	const fadeIn = {
		animation: 'fade-in 1250ms forwards',
	};
	const fadeOut = {
		animation: 'fade-out 1250ms forwards',
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
				style={isToggeled ? fadeIn : fadeOut}
				className='absolute p-6 buttonFadeIn'
				onClick={handleTransition}><HamburgerSVG/>
			</button>
			<div style={isToggeled ? fadeOut : fadeIn}>
				<NavSection
					handleTransition={handleTransition}/>
			</div>
		</>
	);
};

export default Navbar;
