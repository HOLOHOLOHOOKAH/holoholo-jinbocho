import SystemPage, { SystemConfig } from "@/components/system/system";
import { holoHoloMetadata } from "@/lib/metadata/holoHolo";

export const metadata = holoHoloMetadata;

const config: SystemConfig = {
	shisha: {
		image: {
			src: "/img/okachimachi/shisha.jpg",
			alt: "Color Drink",
			width: 300,
			height: 300,
		},
		items: [
			{ label: "シーシャ", price: "¥1,800" },
			{ label: "ドリンク", price: "¥500〜" },
			{ label: "チャージ", price: "¥700" },
			{ label: "深夜チャージ", price: "¥500" },

			{ label: "シェア", price: "¥1,000" },
		],
		note: "1台につき2名様まで",
	},
	options: {
		image: {
			src: "/img/okachimachi/shishaTop.jpg",
			alt: "Color Drink",
			width: 300,
			height: 300,
		},
		items: [
			{ label: "トップ替え", price: "¥1,500" },
			{ label: "アイスホース", price: "¥300" },
			{ label: "ジュースボトル", price: "¥500" },
			{ label: "アルコールボトル", price: "¥1,000" },
		],
	},
	wifi: {
		ssid: "HOLO HOLO",
		password: "smokebase1",
	},
	notes: ["※ シーシャ機材にはお手を触れないようにお願い致します。", "※ ボトルやトップ破損の場合実費を頂きます。", "※ フードのみ持ち込み可能です。"],
};

const Homepage = () => {
	return <SystemPage config={config} page="okachimachi" title="湯島ホロホロシーシャ 上野・御徒町店" />;
};

export default Homepage;
