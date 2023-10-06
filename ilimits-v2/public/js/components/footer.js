const SITE_MENU_DATA = [
	{
		id: "851032",
		title: "ABOUT US",
		listMenu: [
			{
				id: "124234",
				name: "About",
				href: "/aboutUs/",
			},
			{
				id: "234567",
				name: "Advantages",
				href: "#",
			},
			{
				id: "345678",
				name: "News",
				href: "#",
			},
			{
				id: "456789",
				name: "Global",
				href: "#",
			},
			{
				id: "567890",
				name: "Regulation",
				href: "#",
			},
			{
				id: "678901",
				name: "Contact Us",
				href: "#",
			},
		],
	},
	{
		id: "430183",
		title: "TRADING",
		listMenu: [
			{
				id: "124234",
				name: "Instruments",
				href: "#",
			},
			{
				id: "234567",
				name: "Accounts",
				href: "#",
			},
			{
				id: "345678",
				name: "Conditions",
				href: "#",
			},
			{
				id: "456789",
				name: "Platform",
				href: "#",
			},
		],
	},
];

const footerInfoMessage = [
	`<h5 class="font-bold">Risk Warning:</h5>`,
	`<p>Forex and CFD trading involves a significant risk to your invested capital. Please read and ensure you fully understand our Risk Disclosure.</p>`,
	`<br/>`,
	`<h5 class="font-bold">Restricted Regions:</h5>`,
	`<p>iLimits Invest Limited does not provide Forex Trading services for the residents of certain countries, such as New Zealand.</p>`,
	`<br/>`,
	`<p>iLimits does not direct its website and services to any individual in any country in which the use of its website and services are prohibited by local laws or regulations. When accessing this website from a country in which its use may or may not be prohibited, it is the user's responsibility to ensure that any use of the website or services adhere to local laws or regulations. iLimits does not affirm that the information on its website is suitable to all jurisdictions.</p>`,
].join("");

const copyrightText = "Copyright © 2023 by iLimits Invest. All Rights Reserved.";

const companyLicenseInfo =
	"iLimits Investment Limited Liability Company (trading name : iLimits) is incorporated in Dubai (Registered No. 2083540) with licenses No (1237919)";

function getSocialMediaIcons() {
	return [
		`<div class="flex flex-row gap-3 items-center">`,
		` <a href="#"><img src="/assets/img/icons/social-icon-facebook.svg" /></a>`,
		` <a href="#"><img src="/assets/img/icons/social-icon-linkedin.svg" /></a>`,
		` <a href="#"><img src="/assets/img/icons/social-icon-twitter.svg" /></a>`,
		` <a href="#"><img src="/assets/img/icons/social-icon-youtube.svg" /></a>`,
		`</div>`,
	].join("");
}

function getSiteMenu() {
	const menu = [];

	SITE_MENU_DATA.map((item) => {
		menu.push(`<div class="flex flex-col gap-2">`);
		menu.push(`<h6 class="font-medium text-gray-500">${item.title}</h6>`);

		item.listMenu.map((itemMenu) => {
			menu.push(
				`<a href="${itemMenu.href}" class="font-semibold text-gray-600 text-base">${itemMenu.name}</a>`
			);
		});
		menu.push("</div>");
	});
	return menu.join("");
}

function getCompanyInfo() {
	return [
		`<div class="flex flex-col gap-8 mb-12">`,
		` <div>`,
		`   <img src="/assets/img/logo.svg" alt="Image of iLimits Logo" />`,
		` </div>`,
		` <h6 class="text-gray-500 text-base md:text-sm font-normal">${companyLicenseInfo}</h6>`,
		` ${getSocialMediaIcons()}`,
		`</div>`,
	].join("");
}

function getFooterInfo(footerInfo) {
	return [
		`<div class="flex flex-col justify-between py-8 border-t border-gray-300 text-gray-500">`,
		`${footerInfo}`,
		`</div>`,
	].join("");
}

function getCopyrightSection(copyrightText) {
	return [
		`<div class="flex py-8 border-t border-gray-300 justify-center text-gray-500">`,
		` <p">${copyrightText}</p>`,
		`</div>`,
	].join("");
}

document.addEventListener("DOMContentLoaded", () => {
	const infoWarning = document.getElementById("infoWarning");
	infoWarning.innerHTML = getFooterInfo(footerInfoMessage);

	const copyrightSection = document.getElementById("copyright");
	copyrightSection.innerHTML = getCopyrightSection(copyrightText);

	const companyInfo = document.getElementById("companyInfo");
	companyInfo.innerHTML = getCompanyInfo();

	const siteMenu = document.getElementById("siteMenu");
	siteMenu.innerHTML = getSiteMenu();
});
