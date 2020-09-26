import React from "react";
import { Nav, NavbarContainer } from "./Navbar.elements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavLogo to="/">
						<NavIcon />
						Vinylly
					</NavLogo>
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default Navbar;
