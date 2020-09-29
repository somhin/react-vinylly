import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaCompactDisc } from "react-icons/fa";

export const FooterContainer = styled.div`
	background-color: #0c0f0a;
	padding: 4red 0 2red 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const FooterSubscription = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 24px;
	padding: 24px;
	color: #f3efe4;
`;

export const FooterSubHeading = styled.p`
	font-font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
		"Lucida Sans", Arial, sans-serif;
	margin-bottom: 24px;
	font-size: 24px;
`;

export const FooterSubText = styled.p`
	margin-bottom: 24px;
	font-size: 20px;
`;

export const Form = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 820px) {
		flex-direction: column;
		width: 80%;
	}
`;

export const FormInput = styled.input`
	padding: 10px 20px;
	border-radius: 2px;
	margin-right: 10px;
	outline: none;
	border: none;
	font-size: 16px;
	border: 1px solid #fff;

	&::placeholder {
		color: #242424;
	}

	@media screen and (max-width: 820px) {
		width: 100%;
		margin: 0 0 16px 0;
	}
`;

export const FooterLinkContainer = styled.div`
	width: 100%;
	max-width: 1000px;
	display: flex;
	justify-content: center;

	@media screen and (max-width: 820px) {
		padding-top: 32px;
	}
`;

export const FooterLinkWrapper = styled.div`
	display: flex;

	@media screen and (max-width: 820px) {
		flex-direction: column;
	}
`;

export const FooterLinkItems = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin: 16px;
	text-align: left;
	width: 160px;
	box-sizing: border-box;
	color: #f3efe4;

	@media screen and (max-width: 420px) {
		margin: 0;
		padding: 10px;
		width: 100%;
	}
`;

export const FooterLinkTitle = styled.h2`
	margin-bottom: 16px;
	border-bottom: 2px solid #dd403a;
`;

export const FooterLink = styled(Link)`
	color: #f3efe4;
	text-decoration: none;
	margin-bottom: 0.5rem;

	&:hover {
		color: #00a676;
		transition: 0.3s ease-out;
	}
`;

export const SocialMedia = styled.section`
	max-width: 1000px;
	width: 100%;
`;

export const SocialMediaWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 90%;
	max-width: 1000px;
	margin: 40px auto 0 auto;

	@media screen and (max-width: 820px) {
		flex-direction: column;
	}
`;

export const SocialLogo = styled(Link)`
	color: #f3efe4;
	justify-self: start;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align_items: center;
	margin-bottom: 16px;
`;

export const SocialIcon = styled(FaCompactDisc)`
	margin-right: 10px;
`;

export const WebsiteRights = styled.small`
	color: #f3efe4;
	margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 240px;
`;

export const SocialIconLink = styled.a`
	color: #f3efe4;
	font-size: 24px;
`;
