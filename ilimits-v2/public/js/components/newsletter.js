function getNewsLetterSection() {
	return [
		`<div class="flex bg-slate-100 py-8 px-4 lg:px-20 justify-between">`,
		` <div class="flex flex-col space-y-2 w-1/2">`,
		`   <h4 class="underline text-link">Join our newsletter</h4>`,
		`   <p class="text-gray-600">Subscribe to our weekly Newsletter.</p>`,
		` </div>`,
    ` <div class="flex flex-col gap-2 w-1/2">`,
    `   <div class="flex gap-2">`,
    `     <input type="email" placeholder="Email" class="w-1/2 p-2 border border-gray-300" />`,
    `     <button class="bg-baseGreen text-white font-semibold h-10 w-1/2">Subscribe</button>`,
    `   </div>`,
    `   <p class="text-gray-600 text-xs">Provide your email address to subscribe. For e.g abc@xyz.com</p>`,
    ` </div>`,
		`</div>`,
	].join("");
}

document.addEventListener("DOMContentLoaded", () => {
	const newsletter = document.getElementById("newsletter");
	newsletter.innerHTML = getNewsLetterSection();
});
