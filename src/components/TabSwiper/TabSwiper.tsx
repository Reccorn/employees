import { useRef } from "react";
import styles from "./tabswiper.module.scss";
import { Swiper as SwiperType, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Link, useLocation } from "react-router-dom";
import { EIcons, Icon } from "../Icon";

const slides = [
	{
		href: "/#forms",
		text: "База анкет сотрудников",
	},
	{
		href: "/",
		text: "Общая база сотрудников",
	},
	{
		href: "/#database",
		text: "База сотрудников",
	},
	{
		href: "/#calendar",
		text: "Календарь сотрудников",
	},
	{
		href: "/#more",
		text: "Что-то ещё",
	},
];

export function TabSwiper() {
	const location = useLocation();

	const swiperRef = useRef<SwiperType>();

	function itemCheck(href: string) {
		if (location.hash.length > 0) {
			return location.hash === href.replace("/", "");
		} else {
			return location.pathname === href;
		}
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.nav}>
				<button onClick={() => swiperRef.current?.slidePrev()}>
					<Icon name={EIcons.nav} />
				</button>
				<button onClick={() => swiperRef.current?.slideNext()}>
					<Icon name={EIcons.nav} />
				</button>
			</div>
			<Swiper
				className={styles.container}
				modules={[Navigation]}
				spaceBetween={40}
				slidesPerView={"auto"}
				onBeforeInit={(swiper) => {
					swiperRef.current = swiper;
				}}
				slideToClickedSlide={true}
			>
				{slides.map((slide, index) => {
					return (
						<SwiperSlide
							className={
								styles.item +
								" " +
								(itemCheck(slide.href) ? styles.active : "")
							}
							key={index}
						>
							<Link to={slide.href}>{slide.text}</Link>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
}
