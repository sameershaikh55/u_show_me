import React from "react";
import Slider from "react-slick";
import eye from "../assets/images/eye.svg";
import { Swiper, SwiperSlide } from "swiper/react";

const News = ({ dataHome }) => {
	const { news } = dataHome;

	const data = [
		{
			i: "https://cdn.demium.com/wp-content/uploads/2021/08/12105648/USHOWME-co-founders-1.png",
			t: (
				<p className="text-white f14 mb-0">
					UShowMe Raises €100K Pre-seed Investment Round from Think Bigger
					Capital
				</p>
			),
			l: "https://demium.com/ushowme-raises-e100k-pre-seed-investment-round-from-think-bigger-capital/",
		},
		{
			i: "https://media-manager.noticiasaominuto.com/1920/naom_5edf5030d0b32.jpg?crop_params=eyJsYW5kc2NhcGUiOnsiY3JvcFdpZHRoIjoyMzk5LCJjcm9wSGVpZ2h0IjoxMzUwLCJjcm9wWCI6NjYsImNyb3BZIjoyMTV9fQ==",
			t: (
				<p className="text-white f14 mb-0">
					Eis as 15 startups escolhidas para integrar o 'Acelerador 5G'
				</p>
			),
			l: "https://www.noticiasaominuto.com/tech/1748875/eis-as-15-startups-escolhidas-para-integrar-programa-de-inovacao-em-5g",
		},
		{
			i: "https://jornaleconomico.sapo.pt/wp-content/uploads/2021/03/leitor_604288bf857cc_5g_7.png?w=730&h=456&q=60&compress=auto,format&fit=crop",
			t: (
				<p className="text-white f14 mb-0">
					NOS e Amazon Web Services escolhem 15 startups para o programa de
					inovação em 5G
				</p>
			),
			l: "https://jornaleconomico.sapo.pt/noticias/nos-e-amazon-web-services-escolhem-15-startups-para-o-programa-de-inovacao-em-5g-735958",
		},
		{
			i: "https://jornaleconomico.sapo.pt/wp-content/uploads/2021/03/leitor_604288bf857cc_5g_7.png?w=730&h=456&q=60&compress=auto,format&fit=crop",
			t: (
				<p className="text-white f14 mb-0">
					NOS e Amazon Web Services escolhem 15 startups para o programa de
					inovação em 5G
				</p>
			),
			l: "https://jornaleconomico.sapo.pt/noticias/nos-e-amazon-web-services-escolhem-15-startups-para-o-programa-de-inovacao-em-5g-735958",
		},
		{
			i: "https://jornaleconomico.sapo.pt/wp-content/uploads/2021/03/leitor_604288bf857cc_5g_7.png?w=730&h=456&q=60&compress=auto,format&fit=crop",
			t: (
				<p className="text-white f14 mb-0">
					NOS e Amazon Web Services escolhem 15 startups para o programa de
					inovação em 5G
				</p>
			),
			l: "https://jornaleconomico.sapo.pt/noticias/nos-e-amazon-web-services-escolhem-15-startups-para-o-programa-de-inovacao-em-5g-735958",
		},
		{
			i: "https://jornaleconomico.sapo.pt/wp-content/uploads/2021/03/leitor_604288bf857cc_5g_7.png?w=730&h=456&q=60&compress=auto,format&fit=crop",
			t: (
				<p className="text-white f14 mb-0">
					NOS e Amazon Web Services escolhem 15 startups para o programa de
					inovação em 5G
				</p>
			),
			l: "https://jornaleconomico.sapo.pt/noticias/nos-e-amazon-web-services-escolhem-15-startups-para-o-programa-de-inovacao-em-5g-735958",
		},
	];

	return (
		<div className="news_container ps-4 ps-md-5">
			<div className="w-100">
				{/* <div className="container-fluid px-0">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto"> */}
				<p className="text-white f18 mb-0 NeueMachina">
					U<span className="color3">SHOW</span>ME
				</p>
				<h1 className="text-white NeueMachina fw-bold f50 underlineAbout pb-4 mt-2">
					{news}
				</h1>

				{/* DESKTOP SCREEN START */}
				<div className="newsSliderContainer">
					<div className="w-100">
						<div>
							<Swiper
								breakpoints={{
									1800: {
										slidesPerView: 4.2,
									},
									1400: {
										slidesPerView: 4,
									},
									1200: {
										slidesPerView: 3.3,
									},
									1000: {
										slidesPerView: 2.8,
									},
									700: {
										slidesPerView: 2.1,
									},
									500: {
										slidesPerView: 1.8,
									},
									300: {
										slidesPerView: 1.2,
									},
								}}
								slidesPerView={4}
								spaceBetween={1}
								freeMode={true}
								className="mySwiper"
							>
								{data.map((prev, ind) => {
									const { i, t, l } = prev;
									return (
										<SwiperSlide>
											<div className="news_card mt-5 pe-3" key={ind}>
												<img className="thumbnail w-100" src={i} alt="" />
												<div className="mt-3">
													<span className="spaceMono">{t}</span>
													<a
														target="blank"
														className="text-decoration-none"
														href={l}
													>
														<button className="mt-2 purpleBg px-2 NeueMachina text-white d-flex align-items-center border-0 f16 py-1 px-3 mt-3">
															<img src={eye} alt="" className="me-2" /> Read the
															Full Article
														</button>
													</a>
												</div>
											</div>
										</SwiperSlide>
									);
								})}
							</Swiper>
						</div>
					</div>
				</div>
				{/* DESKTOP SCREEN END */}
				{/* </div>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default News;
