import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
}
`;

export const Container = styled.div`
	z-index: 1;
	width: 100%;
	max-width: 1300px;
	margin-right: auto;
	margin-left: auto;
	padding-right: 50px;
	padding-left: 50px;

	/* Responsive media query */
	@media screen and (max-width: 991px) {
		padding-right: 30px;
		padding-left: 30px;
	}
`;

export const ButtonForNav = styled.button`
	border-radius: 4px;
	background: ${({ primary }) => (primary ? "#00A676" : "#E01A4F")};
	color: #0c0f0a;
	white-space: nowrap;
	padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
	font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
	outline: none;
	border: none;
	cursor: pointer;
	font-weight: bold;

	&:hover {
		transition: all 0.3s ease-out;
		background: #fff;
		color: #f3efe4;
		background: ${({ primary }) => (primary ? "#dd403a" : "#00A676")};
	}

	@media screen and (max-width: 960px) {
		width: 100%;
		font-weight: normal;
		background: #36413e;
		color: #f3efe4;
	}
`;

export const Button = styled.button`
	border-radius: 4px;
	background: ${({ primary }) => (primary ? "#00A676" : "#DD403A")};
	color: #0c0f0a;
	white-space: nowrap;
	padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
	font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
	outline: none;
	border: none;
	cursor: pointer;
	font-weight: bold;

	&:hover {
		transition: all 0.3s ease-out;
		background: #fff;
		color: #f3efe4;
		background: ${({ primary }) => (primary ? "#DD403A" : "#00A676")};
	}

	@media screen and (max-width: 960px) {
		width: 100%;
	}
`;

export default GlobalStyle;
