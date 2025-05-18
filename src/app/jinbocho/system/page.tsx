import SystemPage, { SystemConfig } from '@/components/system/system';
import { jinbochoMetadata } from "@/lib/metadata/jinbocho";

export const metadata = jinbochoMetadata;

const config: SystemConfig = {
	shisha: {
		image: {
			src: "/img/jinbocho/shisha.jpg",
			alt: "Color Drink",
			width: 300,
			height: 300,
		},
		items: [
			{ label: "シーシャ", price: "¥1,800" },
			{ label: "ドリンク", price: "¥500〜" },
			{ label: "チャージ", price: "¥700" },
			{ label: "シェア", price: "¥1,000" },
		],
		note: "1台につき2名様まで",
	},
	options: {
		image: {
			src: "/img/jinbocho/shishaTop.jpg",
			alt: "Color Drink",
			width: 300,
			height: 300,
		},
		items: [
			{ label: "トップ替え", price: "¥1,500" },
			{ label: "アイスホース", price: "¥300" },
			{ label: "ジュースボトル", price: "¥700" },
			{ label: "アルコールボトル", price: "¥1,000" },
		],
	},
	wifi: {
		ssid: "Holojinbocho_5G",
		password: "5EEVK33762",
	},
	notes: ["※ フードのみ持ち込み可能 ※シーシャ機材にはお手を触れないようお願い致します。", "※ ボトルやトップ等機材の破損の場合、実費を頂きます。", "※ 混雑時のみお席2時間制となります。"],
};

const Homepage = () => {
	return (
		<SystemPage 
			config={config} 
			page="jinbocho" 
			title="神保町ホロホロシーシャ"
		/>
	);
};

export default Homepage;
