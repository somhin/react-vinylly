import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	HamburgerMenu,
	NavMenu,
	NavItem,
	NavLinks,
} from "./Navbar.elements";

const Navbar = () => {
	const [click, setClick] = useState(false);

	// handle navbar click
	const handleClick = () => setClick(!click);

	return (
		<>
			<IconContext.Provider value={{ color: "#F3EFE4" }}>
				<Nav>
					<NavbarContainer>
						<NavLogo to="/">
							<NavIcon />
							Vinylly
						</NavLogo>

						<HamburgerMenu onClick={handleClick}>
							{click ? <FaTimes /> : <FaBars />}
						</HamburgerMenu>
						{/* Menu list start here */}
						<NavMenu onClick={handleClick} click={click}>
							<NavItem>
								<NavLinks to="/">home</NavLinks>
							</NavItem>

							<NavItem>
								<NavLinks to="/products">vinyl</NavLinks>
							</NavItem>

							<NavItem>
								<NavLinks to="/about">about</NavLinks>
							</NavItem>
						</NavMenu>
					</NavbarContainer>
				</Nav>
			</IconContext.Provider>
		</>
	);
};

export default Navbar;
