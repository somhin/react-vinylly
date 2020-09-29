import React from "react";
import {
	FaFacebook,
	FaInstagram,
	FaYoutube,
	FaLinkedinIn,
	FaGithub,
} from "react-icons/fa";
import {
	FooterContainer,
	FooterSubHeading,
	FooterSubscription,
	FooterSubText,
	Form,
	FormInput,
	FooterLinkContainer,
	FooterLinkWrapper,
	FooterLinkItems,
	FooterLinkTitle,
	FooterLink,
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
	WebsiteRights,
	SocialIcon,
	SocialIcons,
	SocialIconLink,
} from "./Footer.elements";
import { Button } from "../../globalStyles";

const Footer = () => {
	return (
		<FooterContainer>
			<FooterSubscription>
				<FooterSubHeading>
					Join our exclusive membership to receive the latest news and trends
				</FooterSubHeading>
				<FooterSubText>You can unsubscribe at any time.</FooterSubText>

				<Form>
					<FormInput name="email" type="email" placeholder="Your Email" />
					<Button fontBig>Subscribe</Button>
				</Form>
			</FooterSubscription>

			<FooterLinkContainer>
				<FooterLinkWrapper>
					<FooterLinkItems>
						<FooterLinkTitle>About Us</FooterLinkTitle>
						<FooterLink to="/sign-up">How it works</FooterLink>
						<FooterLink to="/">Testimonials</FooterLink>
						<FooterLink to="/">Careers</FooterLink>
						<FooterLink to="/">Terms of Service</FooterLink>
					</FooterLinkItems>

					<FooterLinkItems>
						<FooterLinkTitle>Contact Us</FooterLinkTitle>
						<FooterLink to="/sign-up">How it works</FooterLink>
						<FooterLink to="/">Testimonials</FooterLink>
						<FooterLink to="/">Careers</FooterLink>
						<FooterLink to="/">Terms of Service</FooterLink>
					</FooterLinkItems>
				</FooterLinkWrapper>
				<FooterLinkWrapper>
					<FooterLinkItems>
						<FooterLinkTitle>Vinyls</FooterLinkTitle>
						<FooterLink to="/sign-up">How it works</FooterLink>
						<FooterLink to="/">Testimonials</FooterLink>
						<FooterLink to="/">Careers</FooterLink>
						<FooterLink to="/">Terms of Service</FooterLink>
					</FooterLinkItems>

					<FooterLinkItems>
						<FooterLinkTitle>Social Media</FooterLinkTitle>
						<FooterLink to="/sign-up">How it works</FooterLink>
						<FooterLink to="/">Testimonials</FooterLink>
						<FooterLink to="/">Careers</FooterLink>
						<FooterLink to="/">Terms of Service</FooterLink>
					</FooterLinkItems>
				</FooterLinkWrapper>
			</FooterLinkContainer>

			<SocialMedia>
				<SocialMediaWrap>
					<SocialLogo to="/">
						<SocialIcon />
						Vinylly
					</SocialLogo>
					<WebsiteRights>Vinylly © 2020</WebsiteRights>
					<SocialIcons>
						<SocialIconLink href="/" target="_blank" aria-label="Facebook">
							<FaFacebook />
						</SocialIconLink>

						<SocialIconLink href="/" target="_blank" aria-label="Instagram">
							<FaInstagram />
						</SocialIconLink>

						<SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
							<FaLinkedinIn />
						</SocialIconLink>

						<SocialIconLink href="/" target="_blank" aria-label="GitHub">
							<FaGithub />
						</SocialIconLink>
					</SocialIcons>
				</SocialMediaWrap>
			</SocialMedia>
		</FooterContainer>
	);
};

export default Footer;
