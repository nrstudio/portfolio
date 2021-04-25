import * as React from "react";

import DesktopNav from './desktopnav.js';
import MobileNav from './mobilenav.js';

const Header = () => {
	return (
		<React.Fragment>
			<DesktopNav />
			<MobileNav />
		</React.Fragment>
	)
}

export default Header
