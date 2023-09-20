export default function Footer() {
	let info = "Peringatan Risiko:";
	info +=
		"Trading Forex dan CFD melibatkan risiko yang signifikan terhadap modal yang Anda investasikan. Harap baca dan pastikan anda sepenuhnya memahami Pengungkapan Risiko kami.";

	const copyrightLabel = "Copyright © 2023 by iLimits Invest. All Rights Reserved.";

	return (
		<>
			<p className="subtext text-left">{info}</p>
			<p className="subtext text-left">{copyrightLabel}</p>
		</>
	);
}
