import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { ButtonForNav } from "../../globalStyles";
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	HamburgerMenu,
	NavMenu,
	NavItem,
	NavLinks,
	NavItemBtn,
	NavBtnLink,
} from "./Navbar.elements";

const Navbar = () => {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	// handle navbar click
	const handleClick = () => setClick(!click);
	// handle navlink button
	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showButton();
	}, []);

	window.addEventListener("resize", showButton);

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

							<NavItemBtn>
								{button ? (
									<NavBtnLink to="/sign-up">
										<ButtonForNav primary>Sign up</ButtonForNav>
									</NavBtnLink>
								) : (
									<NavBtnLink to="/sign-up">
										<ButtonForNav fontBig primary>
											Sign up
										</ButtonForNav>
									</NavBtnLink>
								)}
							</NavItemBtn>
						</NavMenu>
					</NavbarContainer>
				</Nav>
			</IconContext.Provider>
		</>
	);
};

export default Navbar;
