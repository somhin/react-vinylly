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

export const Button = styled.button`
	border-radius: 4px;
	background: ${({ primary }) => (primary ? "#8EB1C7" : "#E01A4F")};
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
		background: ${({ primary }) => (primary ? "#dd403a" : "#8EB1C7")};
	}

	@media screen and (max-width: 960px) {
		width: 100%;
		font-weight: normal;
		background: #fff;

		&:hover {
			color: #f3efe4;
		}
	}
`;

export default GlobalStyle;
