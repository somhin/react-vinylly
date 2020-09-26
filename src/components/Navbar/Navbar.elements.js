import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaCompactDisc } from "react-icons/fa";
import { Container } from "../../globalStyles";

export const Nav = styled.nav`
	background: #0c0f0a;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	position: sticky;
	top: 0;
	z-index: 999;
`;

export const NavbarContainer = styled(Container)`
	display: flex;
	justify-content: space-between;
	height: 80px;

	${Container};
`;

export const NavLogo = styled(Link)`
	color: #f3efe4;
	justify-self: flex-start;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align-items: center;

	&:hover {
		border-bottom: 5px solid #dd403a;
		margin-bottom: -8px;
	}
`;

export const NavIcon = styled(FaCompactDisc)`
	margin-right: 0.5rem;
`;

export const HamburgerMenu = styled.div`
	display: none;

	@media screen and (max-width: 960px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;

	@media screen and (max-width: 960px) {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 90vh;
		position: absolute;
		top: 80px;
		left: ${({ click }) => (click ? 0 : "-100%")};
		opacity: 1;
		transition: all 0.5s ease;
		background: #3fbc97;
	}
`;

export const NavItem = styled.li`
	height: 80px;
	border-bottom: 2px solid transparent;

	&:hover {
		border-bottom: 5px solid #dd403a;
		margin-bottom: -7px;
	}

	@media screen and (max-width: 960px) {
		width: 100%;

		&:nth-child(1) {
			background: #00a676;
		}
		&:nth-child(2) {
			background: #17ae82;
		}
		&:nth-child(3) {
			background: #2cb58d;
		}

		&:hover {
			border: none;
		}
	}
`;

export const NavLinks = styled(Link)`
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1.2rem;
	height: 100%;
	color: #f3efe4;

	@media screen and (max-width: 960px) {
		color: #0c0f0a;
		text-align: center;
		padding: 2rem;
		width: 100%;
		display: table;

		&:hover {
			color: #f3efe4;
			transition: all 0.3s ease;
		}
	}
`;

export const NavItemBtn = styled.li`
	@media screen and (max-width: 960px) {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 120px;
	}
`;

export const NavBtnLink = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	padding: 8px 16px;
	height: 100%;
	width: 100%;
	border: none;
	outline: none;
`;
