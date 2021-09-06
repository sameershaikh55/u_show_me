import { Link } from "react-router-dom";
import asterik from "../assets/images/asterik.svg";

export const data = [
	{
		EN: {
			home: {
				// HERO START
				hero: "It's All About Your Experience",
				hero2: "FULL SCREEN VIDEO GENERAL SHORT AUTOPLAY NO SOUND",
				heroBtn: "Go to Shows",
				// HERO END

				// ABOUT START
				aboutH: "About Us",
				aboutL:
					"UshowMe is an interactive live stream and video-on-demand platform to help Artists, Event producers, such as Venues and Festivals evolve to hybrid shows with global reach, deliver new experiences, multiple revenue streams and give brands and digital audiences new ways of engagement.",
				aboutR1: "BUILDING FOR ANY MODERN DEVICES",
				aboutR2: (
					<p>
						UshowMe’s responsive design is tailored to deliver the best
						experiences and interactions to your audience, no matter what modern
						device they use
						<img src={asterik} alt="" className="asterik_up" />.
					</p>
				),
				aboutR3: (
					<p className="text-white mb-0 spaceMono">
						see list of supported devices on the{" "}
						<span className="purpleBg px-1">FAQ</span> page.
					</p>
				),
				// ABOUT END

				// HYBRID START
				hybH: "Why Hybrid is the Future?",
				hybP: [
					"More than singing those favorite songs with your “Tribe” and interacting with the artists, shows are all about living shared experiences and expressing our emotions, creating long lasting memories of a great time together.",
					"Hybrid amplifies those and remove the brick-and-mortar limitations that leave many fans out, while adding more revenue streams and new engagement that can be measured.",
					"UshowMe is built in a modular way to maximize your specific needs.",
					"Start by selecting who are U below.",
				],
				// HYBRID END

				// SIDEBAR START
				sideBar: [
					{ t: "ABOUT US" },
					{ t: "FEATURED SHOWS" },
					{ t: "HYBRID IS THE FUTURE" },
					{ t: "HOW IT WORKS" },
					{ t: "WHO ARE U?" },
					{ t: "FAQ" },
				],
				// SIDEBAR END

				// SIDEBAR START
				sideBar2: [
					{ t: "ABOUT US" },
					{ t: "HYBRID IS THE FUTURE" },
					{ t: "WHO ARE U?" },
					{ t: "FEATURED SHOWS" },
					{ t: "HOW IT WORKS" },
					{ t: "FAQ" },
				],
				// SIDEBAR END

				// WHO START
				who1: "START BY SELECTING",
				who2: "Who are U?",
				// WHO END

				// FEATURE START
				feature1: "Featured Shows",
				feature2: "View all Shows",
				// FEATURE END

				// FEATURE START
				itsAll1: "It’s all about FUN!",
				itsAll2: "View Full Video",
				// FEATURE END

				// NEWS START
				news: "On the News",
				// NEWS END

				// PARTNER START
				partner1: "PARTNERS",
				partner2: "Become a Partner",
				partner3: "Lead the future for hybrid shows.",
				// PARTNER END

				// NEWSLETTER START				newsletter1: "Subscribe Newsletter",
				newsletter1: "Subscribe Newsletter:",
				newsletterBtn: "Send",
				// NEWSLETTER END

				// WHO END
				who1under: "I’m a",
				present: "Get in Touch:",
				present2: "Subscribe Newsletter:",
				send: "Send",
				slide1T: "Artist/ Label",
				slide1T2: "Reach and interact with global audiences",
				slide1D:
					"Never have to leave your fans out again. With UshowMe, count on including and interacting with everyone, increasing revenue via multiple streams for both the live stream and video-on-demand versions and also bring your own sponsors onboard.",
				slide2T: "Producer/ Venue",
				slide2T2: "Scale Shows beyond your venue/location",
				slide2D:
					"With UshowMe, you as a Producer and/or Venue, can evolve to hybrid and reach your audiences beyond physical limitations, monetize with multiple streams and bring sponsors already present on your physical venue/festival into digital.",
				slide3T: "Brand",
				slide3T2: "Sponsor shows and measure engagements",
				slide3D:
					"Your Brand finally have the power to maximize awareness and new ways of engagement with digital audiences. UshowMe provides you tools for your brand to get the highlight it deserves with measurable results. UshowMe offers full integration capabilities.",
				slide4T: "Fan",
				slide4T2: "Have fun with new interactions",
				slide4D:
					"UshowMe gives you more access to your favorite artists than if you were there in person. Connect your camera, express emotions and your best moves on the Top Fans Stage. Speak with everybody on the chat and engage with artists on excitants Meet & Greets.",
				newLet: "Subscribe Newsletter:",
				// WHO END

				// FOOTER START
				footer: [
					{
						t: "How it Works",
						l: "/howItWorks",
					},
					{
						t: "FAQ",
						l: "/faq",
					},
					{
						t: "Jobs",
						l: "/jobs",
					},
					{
						t: "Contact Us",
						l: "",
					},
					{
						t: "Media",
						l: "",
					},
					{
						t: "Privacy Policy",
						l: "/privacyPolicy",
					},
					{
						t: "Terms & Conditions",
						l: "/termsConditions",
					},
				],
				footerBtn: "View all Shows",
				// FOOTER END
			},
			hiw: {
				// HERO START
				heroBtn: "Engage & Control Video",
				// HERO END

				// SIDEBAR START
				sideBar: [
					{ t: "ABOUT US" },
					{ t: "FEATURED SHOWS" },
					{ t: "HYBRID IS THE FUTURE" },
					{ t: "HOW IT WORKS" },
					{ t: "WHO ARE U?" },
					{ t: "FAQ" },
				],
				// SIDEBAR END

				// SIDEBAR START
				sideBar2: [
					{ t: "ABOUT US" },
					{ t: "HYBRID IS THE FUTURE" },
					{ t: "WHO ARE U?" },
					{ t: "FEATURED SHOWS" },
					{ t: "HOW IT WORKS" },
					{ t: "FAQ" },
				],
				// SIDEBAR END

				// FOOTER START
				footer: [
					{
						t: "How it Works",
						l: "/howItWorks",
					},
					{
						t: "FAQ",
						l: "/faq",
					},
					{
						t: "Jobs",
						l: "/jobs",
					},
					{
						t: "Contact Us",
						l: "",
					},
					{
						t: "Media",
						l: "",
					},
					{
						t: "Privacy Policy",
						l: "/privacyPolicy",
					},
					{
						t: "Terms & Conditions",
						l: "/termsConditions",
					},
				],
				footerBtn: "View all Shows",
				// FOOTER END

				// NEWSLETTER START				newsletter1: "Subscribe Newsletter",
				newsletter1: "Subscribe Newsletter:",
				newsletterBtn: "Send",
				// NEWSLETTER END

				// HIW BODY START
				h1: "How it Works",
				h2: "From Pre-production to Analysis",
				hwiData: [
					{
						t: "Create & Costumise",
						d: [
							"Create your show through our platform, module by module. Start with show details. ",
							"Then, select the revenue streams you want to make available for your audience. ",
							"Insert the overlayed banners and logos, CTA’s, videos and invite your moderation team, and you’re good to go.",
						],
					},
					{
						t: "Engage & Control",
						d: [
							"While the show is happening, engage with your audience on the live chat and Q & A. Artists can also view and interact with digital audiences during the show on stage.",
							"Finish on top with excitants Meet & Greets.",
							"By using our powerful Moderation Tools available,you can ensure that the experience remains positive to all at all times.",
						],
					},
					{
						t: "Keep monetizing",
						d: [
							"Activate the VOD (video-on-demand) option on setup, to keep monetizing the same content over and over.",
							"Fans that missed the Live Stream or want to re-watch their interactions will love you for thinking about them.",
						],
					},
					{
						t: "Measure & Analyse",
						d: [
							"You will have access to a detailed report, where you measure and analyse the Quality of Delivered Experience (QoDE).",
							"These powerful insights enable you to know exactly who your audience is and what they want.",
						],
					},
				],
				cBtn: "Contact us to access",
				// HIW BODY END
			},
			privacyPolicy: {
				// HERO START
				hero: "Privacy Policy",
				// HERO END

				// SIDEBAR START
				sideBar: [
					{ t: "ABOUT US" },
					{ t: "FEATURED SHOWS" },
					{ t: "HYBRID IS THE FUTURE" },
					{ t: "HOW IT WORKS" },
					{ t: "WHO ARE U?" },
					{ t: "FAQ" },
				],
				// SIDEBAR END

				// SIDEBAR START
				sideBar2: [
					{ t: "ABOUT US" },
					{ t: "HYBRID IS THE FUTURE" },
					{ t: "WHO ARE U?" },
					{ t: "FEATURED SHOWS" },
					{ t: "HOW IT WORKS" },
					{ t: "FAQ" },
				],
				// SIDEBAR END

				// FOOTER START
				footer: [
					{
						t: "How it Works",
						l: "/howItWorks",
					},
					{
						t: "FAQ",
						l: "/faq",
					},
					{
						t: "Jobs",
						l: "/jobs",
					},
					{
						t: "Contact Us",
						l: "",
					},
					{
						t: "Media",
						l: "",
					},
					{
						t: "Privacy Policy",
						l: "/privacyPolicy",
					},
					{
						t: "Terms & Conditions",
						l: "/termsConditions",
					},
				],
				footerBtn: "View all Shows",
				// FOOTER END

				// NEWSLETTER START				newsletter1: "Subscribe Newsletter",
				newsletter1: "Subscribe Newsletter:",
				newsletterBtn: "Send",
				// NEWSLETTER END

				// PRIVACY BODY START
				h1: "Last updated: June 10, 2021",
				topPs: [
					{
						p: (
							<p>
								UshowMe is a property of USMLive, Lda, located at Rua António
								Santos Serrador 88, R/C Dto, 2415-399 Leiria, (“us”, “we”, or
								“our”) operates the{" "}
								<a
									target="blank"
									href="https://ushowme.tv"
									className="text-decoration-none text-dark"
								>
									https://ushowme.tv
								</a>{" "}
								and{" "}
								<a
									target="blank"
									href="https://app.ushowme.tv"
									className="text-decoration-none text-dark"
								>
									{" "}
									https://app.ushowme.tv{" "}
								</a>{" "}
								domains (hereinafter referred to as the “Service”).
							</p>
						),
					},
					{
						p: (
							<p>
								This page informs you of our policies regarding the collection,
								use and disclosure of personal data when you use our{" "}
								<span className="fw-bold">Service</span> and the choices you
								have associated with that data.
							</p>
						),
					},
					{
						p: (
							<p>
								We use your data to provide and improve the{" "}
								<span className="fw-bold">Service.</span>
							</p>
						),
					},
					{
						p: (
							<p>
								By using the <span className="fw-bold"> Service </span>, you
								agree to the collection and use of information in accordance
								with this policy.
							</p>
						),
					},
					{
						p: (
							<p>
								Unless otherwise defined in this Privacy Policy, the terms used
								in this Privacy Policy have the same meanings as in our Terms
								and Conditions, accessible from{" "}
								<Link
									className="purpleBg text-white text-decoration-none px-1"
									to="termsConditions"
								>
									here
								</Link>
								.
							</p>
						),
					},
				],

				mainData: [
					{
						t: "Service:",
						d: (
							<p>
								<span className="fw-bold">Service</span> is the
								<a
									target="blank"
									href="https://ushowme.tv"
									className="text-decoration-none text-dark"
								>
									{" "}
									https://ushowme.tv{" "}
								</a>{" "}
								and{" "}
								<a
									target="blank"
									href="https://ap.ushowme.tv"
									className="text-decoration-none text-dark"
								>
									{" "}
									https://ap.ushowme.tv{" "}
								</a>{" "}
								domains operated by UshowMe.
							</p>
						),
					},
					{
						t: "Personal Data:",
						d: (
							<p>
								Personal Data means data about a living individual who can be
								identified from those data (or from those and other information
								either in our possession or likely to come into our possession).
							</p>
						),
					},
					{
						t: "Usage Data:",
						d: (
							<p>
								Usage Data is data collected automatically either generated by
								the use of the Service or from the{" "}
								<span className="fw-bold"> Service </span> infrastructure itself
								(for example, the duration of a page visit).
							</p>
						),
					},
					{
						t: "Cookies:",
						d: (
							<p>
								Cookies are small files stored on your device (computer or
								mobile device).
							</p>
						),
					},
					{
						t: "Data Controller:",
						d: (
							<p>
								Data Controller means the natural or legal person who (either
								alone or jointly or in common with other persons) determines the
								purposes for which and the manner in which any personal
								information are, or are to be, processed. For the purpose of
								this Privacy Policy, we are a Data Controller of your Personal
								Data.
							</p>
						),
					},
					{
						t: "Data Processors (or Service Providers):",
						d: (
							<p>
								Data Processor (or Service Provider) means any natural or legal
								person who processes the data on behalf of the Data Controller.
								We may use the services of various Service Providers in order to
								process your data more effectively.
							</p>
						),
					},
					{
						t: "Data Subject (or User):",
						d: (
							<p>
								Data Subject is any living individual who is using our Service
								and is the subject of Personal Data Information Collection and
								Use. We collect several different types of information for
								various purposes to provide and improve our Service to you.
							</p>
						),
					},
				],

				collectData: {
					h2: "Types of Data Collected:",
					innerData: [
						{
							t: "Personal Data:",
							d: (
								<div>
									<p>
										While using our Service, we may ask you to provide us with
										certain personally identifiable information that can be used
										to contact or identify you (“Personal Data”).
									</p>
									<p>
										Personally identifiable information may include, but is not
										limited to:
									</p>
									<ul>
										<li>Email address</li>
										<li>First name and last name</li>
										<li>Profile picture</li>
										<li>Cookies and Usage Data.</li>
									</ul>
									<p>
										We may use your Personal Data to contact you with
										newsletters, marketing or promotional materials and other
										information that may be of interest to you. You may opt out
										of receiving any, or all, of these communications from us by
										following the unsubscribe link or the instructions provided
										in any email we send.
									</p>
								</div>
							),
						},
						{
							t: "Usage Data:",
							d: (
								<div>
									<p>
										We may also collect information on how the Service is
										accessed and used (“Usage Data”).
									</p>
									<p>
										This Usage Data may include information such as your
										computer’s Internet Protocol address (e.g. IP address),
										browser type, browser version, user agent, the pages of our
										Service that you visit, the time and date of your visit, the
										time spent on those pages, unique device identifiers and
										other diagnostic data.
									</p>
								</div>
							),
						},
						{
							t: "Tracking & Cookies Data:",
							d: (
								<div>
									<p>
										We use cookies and similar tracking technologies to track
										the activity on our Service and we hold certain
										information.Cookies are files with a small amount of data
										which may include an anonymous unique identifier. Cookies
										are sent to your browser from a website and stored on your
										device. Other tracking technologies are also used such as
										beacons, tags and scripts to collect and track information
										and to improve and analyse our Service.You can instruct your
										browser to refuse all cookies or to indicate when a cookie
										is being sent. However, if you do not accept cookies, you
										may not be able to use some portions of our Service.
									</p>
									<p className="mb-3">Examples of Cookies we use:</p>
									<ul className="list-unstyled">
										<li className="mb-0">Session Cookies.</li>
										<li>We use Session Cookies to operate our Service.</li>
										<li className="mt-4">Preference Cookies.</li>
										<li>
											We use Preference Cookies to remember your preferences and
											various settings.
										</li>
										<li className="mt-4">Security Cookies.</li>
										<li>We use Security Cookies for security purposes.</li>
									</ul>

									<p>
										Use of UshowMe websites uses the collected data for various
										purposes:
									</p>
									<ul>
										<li>To provide and maintain our Service.</li>
										<li>To notify you about changes to our Service.</li>
										<li>
											To allow you to participate in interactive features of our
											Service when you choose to do so.
										</li>
										<li>To provide customer support.</li>
										<li>
											To gather analysis or valuable information so that we can
											improve our Service.
										</li>
										<li>To monitor the usage of our Service.</li>
										<li>To detect, prevent and address technical issues.</li>
										<li>
											To provide you with news, special offers and general
											information about other goods, services and events which
											we offer that are similar to those that you have already
											purchased or enquired about unless you have opted not to
											receive such information.
										</li>
									</ul>
								</div>
							),
						},
						{
							t: "Legal Basis for Processing Personal Data under the General Data Protection Regulation (GDPR):",
							d: (
								<div>
									<p>
										If you are from the European Economic Area (EEA), UshowMe
										legal basis for collecting and using the personal
										information described in this Privacy Policy depends on the
										Personal Data we collect and the specific context in which
										we collect it.
									</p>
									<p>UshowMe may process your Personal Data because:</p>

									<ul>
										<li>We need to perform a contract with you.</li>
										<li>You have given us permission to do so.</li>
										<li>
											The processing is in our legitimate interests and it is
											not overridden by your rights.
										</li>
										<li>For payment processing purposes.</li>
										<li>To comply with the law.</li>
									</ul>

									<p>
										We also may obtain information, including personal
										information, from third parties such as social media or
										social network platforms for which you have explicitly
										connected with Us . When you access the UshowMe Service
										through social media or social networks you are authorizing
										UshowMe to collect, store and use such information and
										content in accordance with this Privacy Policy.
									</p>
								</div>
							),
						},
						{
							t: "Retention of Data:",
							d: (
								<div>
									<p>
										UshowMe will retain your Personal Data only for as long as
										is necessary for the purposes set out in this Privacy
										Policy. We will retain and use your Personal Data to the
										extent necessary to comply with our legal obligations (for
										example, if we are required to retain your data to comply
										with applicable laws), resolve disputes and enforce our
										legal agreements and policies.
									</p>
									<p>
										UshowMe will also retain Usage Data for internal analysis
										purposes. Usage Data is generally retained for a shorter
										period of time, except when this data is used to strengthen
										the security or to improve the functionality of our Service,
										or we are legally obligated to retain this data for longer
										periods.
									</p>
								</div>
							),
						},
						{
							t: "Transfer of Data:",
							d: (
								<div>
									<p>
										Your information, including Personal Data, may be
										transferred to – and maintained on – computers located
										outside of your state, province, country or other
										governmental jurisdiction where the data protection laws may
										differ from those of your jurisdiction.If you are located
										outside Moldova and choose to provide information to us,
										please note that we transfer the data, including Personal
										Data, to Portugal and process it there.
									</p>
									<p>
										Your consent to this Privacy Policy followed by your
										submission of such information represents your agreement to
										that transfer.
									</p>
									<p>
										UshowMe will take all the steps reasonably necessary to
										ensure that your data is treated securely and in accordance
										with this Privacy Policy and no transfer of your Personal
										Data will take place to an organisation or a country unless
										there are adequate controls in place including the security
										of your data and other personal information.
									</p>
								</div>
							),
						},
						{
							t: "Disclosure of Data:",
							d: (
								<div>
									<p className="fw-bold">
										We do not sell Your Personal Information Data.
									</p>
									<p>
										However, We may share Your personal information in the
										following situations:·
									</p>

									<ul>
										<li className="mb-0">With Service Providers:</li>
										<p>
											{" "}
											We may share Your personal information with Service
											Providers to monitor and analyze the use of Our Services.
										</p>
										<li className="mb-0">For business transfers:</li>
										<p>
											We may share or transfer Your personal information in
											connection with, or during negotiations of, any merger or
											acquisition of all or a portion of Our business to another
											company.·
										</p>
										<li className="mb-0">
											With Affiliates: We may share Your information with Our
											affiliates, in which case we will require those affiliates
											to honor this Privacy Policy.
										</li>
										<p>
											Affiliates include Our parent company and any other
											subsidiaries, joint venture partners or other companies
											that We control or that are under common control with Us.·
										</p>
										<li>
											With business partners: We may share Your information with
											Our business partners to offer You certain products,
											services or promotions, and we will ask for Your
											permission first.
										</li>
										<li>With other users:</li>
										<p>
											when You share personal information or otherwise interact
											in the public areas with other users, such information may
											be viewed by all users and may be publicly distributed
											outside. If You interact with other users may see Your
											name, profile, pictures and video from your camera.
											Similarly, other users will be able to view Your name,
											video from your camera and Your profile.·
										</p>
										<li>
											With Your consent: We may disclose Your personal
											information for any other purpose with Your consent.
										</li>
										<li>Disclosure for Law Enforcement</li>
										<p>
											Under certain circumstances, UshowMe may be required to
											disclose your Personal Data if required to do so by law or
											in response to valid requests by public authorities (e.g.
											a court or a government agency).
										</p>
									</ul>
								</div>
							),
						},
						{
							t: "Legal Requirements:",
							d: (
								<div>
									<p className="mb-0">
										UshowMe may disclose your Personal Data in the good faith
										belief that such action is necessary to:
									</p>
									<ul>
										<li>To comply with a legal obligation.</li>
										<li>
											To protect and defend the rights or property of UshowMe.
										</li>
										<li>
											To prevent or investigate possible wrongdoing in
											connection with the Service.
										</li>
										<li>
											To protect the personal safety of users of the Service or
											the public.
										</li>
										<li>To protect against legal liability.</li>
									</ul>
								</div>
							),
						},
						{
							t: "Security of Data:",
							d: (
								<div>
									<p>
										The security of your data is important to us but remember
										that no method of transmission over the Internet or method
										of electronic storage is 100% secure. While we strive to use
										commercially acceptable means to protect your Personal Data,
										we cannot guarantee its absolute security.
									</p>
									<p className="mb-0">
										Your Data Protection Rights under the General Data
										Protection Regulation (GDPR)If you are a resident of the
										European Economic Area (EEA), you have certain data
										protection rights. UshowMe aims to take reasonable steps to
										allow you to correct, amend, delete or limit the use of your
										Personal Data.
									</p>
									<p>
										If you wish to be informed about what Personal Data we hold
										about you and if you want it to be removed from our systems,
										please contact us.
									</p>
									<p>
										In certain circumstances, you have the following data
										protection rights:
									</p>
									<ul>
										<li>
											The right to access, update or delete the information we
											have on you.
										</li>
									</ul>
									<p>
										{" "}
										Whenever made possible, you can access, update or request
										deletion of your Personal Data directly within your account
										settings section. If you are unable to perform these actions
										yourself, please contact us to assist you.
									</p>
									<ul>
										<li>
											The right of rectification. You have the right to have
											your information rectified if that information is
											inaccurate or incomplete.
										</li>
										<li>
											The right to object. You have the right to object to our
											processing of your Personal Data.
										</li>
										<li>
											The right of restriction. You have the right to request
											that we restrict the processing of your personal
											information.
										</li>
										<li>
											The right to data portability. You have the right to be
											provided with a copy of the information we have on you in
											a structured, machine-readable and commonly used format.
										</li>
										<li>
											The right to withdraw consent. You also have the right to
											withdraw your consent at any time where UshowMe relied on
											your consent to process your personal information, by
											simply delete your account. When You create your account
											via Social log in, you must remove UshowMe app permissions
											on such platform.
										</li>
									</ul>

									<p>
										Please note that we may ask you to verify your identity
										before responding to such requests.
									</p>
									<p>
										You have the right to complain to a Data Protection
										Authority about our collection and use of your Personal
										Data.
									</p>
									<p className="mb-0">
										For more information, please contact your local data
										protection authority in the European Economic Area
										(EEA).Service ProvidersWe may employ third party companies
										and individuals to facilitate our Service (“Service
										Providers”), provide the Service on our behalf, perform
										Service-related services or assist us in analysing how our
										Service is used.
									</p>
									<p>
										These third parties have access to your Personal Data only
										to perform these tasks on our behalf and are obligated not
										to disclose or use it for any other purpose.
									</p>
								</div>
							),
						},
						{
							t: "Analytics:",
							d: (
								<div>
									<p>
										We may use third-party Service Providers to monitor and
										analyse the use of our Service.
									</p>
									<ul>
										<li>Google Analytics</li>
										<p className="mb-0">
											{" "}
											Google Analytics is a web analytics service offered by
											Google that tracks and reports website traffic. Google
											uses the data collected to track and monitor the use of
											our Service. This data is shared with other Google
											services. Google may use the collected data to
											contextualise and personalise the ads of its own
											advertising network.
										</p>
										<p>
											For more information on the privacy practices of Google,
											please visit the Google Privacy & Terms web page:
											<a
												target="blank"
												className="text-decoration-none text-dark"
												href="https://policies.google.com/privacy?hl=en"
											>
												https://policies.google.com/privacy?hl=en{" "}
											</a>
										</p>
										<li>Amazon Web Services (AWS)</li>
										<p>
											For more information on the privacy practices of AWS,
											please visit the AWS Privacy Notice web page:
											<a
												target="blank"
												className="text-decoration-none text-dark"
												href="https://aws.amazon.com/privacy/?nc1=h_ls"
											>
												https://aws.amazon.com/privacy/?nc1=h_ls{" "}
											</a>
										</p>
										<li>Payments</li>
										<p>
											We may provide paid products and/or services within the
											Service. In that case, we use third-party services for
											payment processing (e.g. payment processors).
											<br />
											We will not store or collect your payment card details.
											That information is provided directly to our third-party
											payment processors whose use of your personal information
											is governed by their Privacy Policy. These payment
											processors adhere to the standards set by PCI-DSS as
											managed by the PCI Security Standards Council, which is a
											joint effort of brands like Visa, MasterCard, American
											Express and Discover. PCI-DSS requirements help ensure the
											secure handling of payment information.
										</p>

										<p className="mt-4">
											The payment processor available on UshowMe’s websites and
											domains is: Stripe
										</p>
										<p>
											Their Privacy Policy can be viewed at
											<a
												target="blank"
												className="text-decoration-none text-dark"
												href="https://stripe.com/en-pt/privacy"
											>
												https://stripe.com/en-pt/privacy
											</a>
										</p>
									</ul>
								</div>
							),
						},
						{
							t: "Links to Other Sites:",
							d: (
								<div>
									<p>
										Our Service may contain links to other sites that are not
										operated by us. If you click a third party link, you will be
										directed to that third party’s site. We strongly advise you
										to review the Privacy Policy of every site you visit.We have
										no control over and assume no responsibility for the
										content, privacy policies or practices of any third party
										sites or services.
									</p>
								</div>
							),
						},
						{
							t: "Children’s Privacy:",
							d: (
								<div>
									<p>
										Our Service does not address anyone under the age of 13
										(“Children”).
									</p>
									<p>
										We do not knowingly collect personally identifiable
										information from anyone under the age of 13.
									</p>
									<p>
										If you are a parent or guardian and you are aware that your
										Child has provided us with Personal Data, please contact us.
										If we become aware that we have collected Personal Data from
									</p>
									<p>
										children without verification of parental consent, we will
										take the necessary steps to remove that information from our
										servers.
									</p>
								</div>
							),
						},
						{
							t: "Changes to This Privacy Policy:",
							d: (
								<div>
									<p>
										We may update our Privacy Policy from time to time. We will
										notify you of any changes by posting the new Privacy Policy
										on this page.
									</p>
									<p>
										We will let you know via email and/or a prominent notice on
										our Service, prior to the change becoming effective and
										update the “effective date” at the top of this Privacy
										Policy.You are advised to review this Privacy Policy
										periodically for any changes. Changes to this Privacy Policy
										are effective when they are posted on this page.
									</p>
								</div>
							),
						},
						{
							t: "Contact Us:",
							d: (
								<div>
									<p>
										If you have any questions about this Privacy Policy, please
										contact us by email: legal@ushowme.tv
									</p>
								</div>
							),
						},
					],
				},
				// PRIVACY BODY END
			},
			terms: {
				// HERO START
				hero: "Terms & Conditions",
				// HERO END

				// SIDEBAR START
				sideBar: [
					{ t: "ABOUT US" },
					{ t: "FEATURED SHOWS" },
					{ t: "HYBRID IS THE FUTURE" },
					{ t: "HOW IT WORKS" },
					{ t: "WHO ARE U?" },
					{ t: "FAQ" },
				],
				// SIDEBAR END

				// SIDEBAR START
				sideBar2: [
					{ t: "ABOUT US" },
					{ t: "HYBRID IS THE FUTURE" },
					{ t: "WHO ARE U?" },
					{ t: "FEATURED SHOWS" },
					{ t: "HOW IT WORKS" },
					{ t: "FAQ" },
				],
				// SIDEBAR END

				// FOOTER START
				footer: [
					{
						t: "How it Works",
						l: "/howItWorks",
					},
					{
						t: "FAQ",
						l: "/faq",
					},
					{
						t: "Jobs",
						l: "/jobs",
					},
					{
						t: "Contact Us",
						l: "",
					},
					{
						t: "Media",
						l: "",
					},
					{
						t: "Privacy Policy",
						l: "/privacyPolicy",
					},
					{
						t: "Terms & Conditions",
						l: "/termsConditions",
					},
				],
				footerBtn: "View all Shows",
				// FOOTER END

				// NEWSLETTER START				newsletter1: "Subscribe Newsletter",
				newsletter1: "Subscribe Newsletter:",
				newsletterBtn: "Send",
				// NEWSLETTER END

				// BODY START
				h1: "Last updated: June 10, 2021",

				topData: [
					{
						p: <h4 className="fw-bold mt-5">Your Agreement</h4>,
					},
					{
						p: (
							<p className="mt-5">
								Thank you for showing interest in using our web application.
							</p>
						),
					},
					{
						p: (
							<p>
								This is a binding legal agreement between USMLive, Lda, located
								at Rua António Santos Serrador 88 R/C dto, 2415-399 Leiria,
								referred on these Terms & Conditions as “UshowMe” or “Company”,
								an interactive video streaming service provider and you as an
								individual and, if applicable, the company or other legal entity
								you represent (“You”).These Terms & Conditions (“T&C”), govern
								your access and use of the services, content and functionalities
								available, so please read them carefully before using the
								services. UshowMe reserves the right to limit or terminate your
								access to the services or terminate or suspend your registration
								or account for failure to comply with these T&C for any reason
								at any time. Access to certain features or part of the services
								may not be available to all users.
							</p>
						),
					},
				],

				list: {
					t: "Content:",
					nList: [
						"Acceptance",
						"Accounts",
						"Services",
						"Event Creation",
						"Content Monetization",
						"Fees",
						"User Generated Content (UGC)",
						"License Grant: Intellectual Property for Streamer Accounts",
						"UshowMe Content Intellectual Property",
						"Confidentiality",
						"Disclaimers and Limitations of Liability",
						"Modifications to these Terms & Conditions",
					],
				},

				bodyList: [
					{
						t: "1. Acceptance",
						d: (
							<div>
								<h5>A) Beta Version</h5>
								<p>
									You understand and agree that UshowMe and it’s services are
									being provided as a “beta” version and made available on an
									“as is” basis. UshowMe services may contain bugs, errors, and
									other problems.However, we will work as fast as possible to
									fix, patch or update our services in order to make them as
									stable and functional as possible, so if you find any bugs,
									errors or other problems, we kindly ask you to report back to
									us by using the e-mail: bugs@ushowme.tv
								</p>

								<h5>B) Software Updates</h5>
								<p>
									UshowMe may from time to time in its sole discretion develop
									and provide Software Updates (“Updates”). Updates may include,
									upgrades, patches, bug fixes, and other modifications to
									improve the performance and stability of our system and the
									services. Updates may also modify or delete in their entirety
									certain features and functionalities previously available. You
									agree that UshowMe has no obligation to provide any Updates or
									to continue to provide or enable any particular features or
									functionalities. If you do not want such Updates, the entire
									or portion of services may not be available. You acknowledge
									that you may be required to install Updates to use the
									services and you agree to promptly install any Updates
									provided as soon as possible. Your continued use of the
									services is your agreement to these Terms of Service.
								</p>

								<h5>C) Downtime and service suspensions</h5>
								<p>
									You acknowledge that: From time to time, we may conduct
									scheduled downtime, to allow us to perform maintenance and/or
									make modifications to our services and to the extent that we
									are able, we shall endeavor to provide you a prior e-mail
									notice of any service suspensions and scheduled downtime and
									to post updates on the UshowMe’s site regarding resumption of
									services following any such suspension, but shall have no
									liability for the manner in which we may do so or if we fail
									to do so.
								</p>
								<p>
									Your access to and use of the services may be suspended for
									the duration of any unanticipated or unscheduled downtime or
									unavailability of any portion or all of the services for any
									reason, and that services are subject to interruptions and
									failures for a variety of reasons beyond UshowMe’s control
									including:
								</p>

								<ul>
									<li>
										{" "}
										Wi-Fi and Mobile Data reception, service providers,
										carriers, and others, that may cause failure or delay of
										services.
									</li>
									<li>
										Power outages, system failures or other interruptions, and
										we shall also be entitled, without any liability to you, to
										suspend access to any portion or all of the services at any
										time.
									</li>
									<li>
										In the event of an attack on the service or other event that
										we determine, in our sole discretion, that may pose a risk
										to the service, to you or to any of our other customers.
									</li>
									<li>
										if the service were not suspended, or in the event that we
										determine, in our sole discretion that it is necessary or
										prudent to do so for legal or regulatory reasons.
									</li>
								</ul>

								<p>
									We shall have no liability whatsoever for any damage,
									liabilities, losses (including any loss of data or profits) or
									any other consequences that you may incur as a result of any
									service suspension.
								</p>

								<h5>D) Security</h5>
								<p>
									We strive to keep Your account and content secure but cannot
									guarantee that we shall be successful at doing so, given the
									nature of the Internet. You acknowledge that you bear sole
									responsibility for using adequate security for protecting your
									account and content and we strongly encourage you, to use
									encryption technology to protect your account and content from
									unauthorized access.
								</p>
							</div>
						),
					},
					{
						t: "2. Accounts",
						d: (
							<div>
								<h5>2.1. Registration.</h5>
								<p>
									To access the resources that UshowMe offers, you may be asked
									to create an account (“Account”) by e-mail, or log in via
									social, and share certain registration details or other
									information. You may only create one (1) Account per email
									address, with the exception of our Linked Accounts on Streamer
									Accounts on section 2.5. below. It is a condition to use Our
									interactive Services and information. You provide that all
									information is correct, current, and complete. You agree that
									all information that you provide is governed by our Privacy
									Policy, and that you consent to all actions that we take with
									respect to your information consistent with our Privacy
									Policy. If you do not agree to, or cannot comply with, any of
									these Terms, do not use or access the Services.
								</p>

								<h5>2.2. Eligibility & Children’s Privacy.</h5>
								<p>
									You must be at least 13 years old to create an Account or use
									our services. Individuals under the applicable age must at all
									times use our services only in conjunction with and under the
									supervision of a parent or legal guardian who is at least 18
									years of age. In all cases, such parent or legal guardian is
									the user and is responsible for any and all activities under
									the Account.
								</p>
								<p>
									Our Service does not address anyone under the age of 13
									(“Children”). We do not knowingly collect personally
									identifiable information from children under 13. If you are a
									parent or guardian and you learn that your Children have
									provided us with Personal Information, please contact us. If
									we become aware that we have collected Personal Information
									from a child under age 13 without verification of parental
									consent, we take steps to remove that information from our
									servers.
								</p>

								<h5>
									2.3. Activating your account (that do not use Social log in
									authentication).
								</h5>

								<p>
									When you register with us, we will send you an e-mail for the
									same e-mail address you have provided us, containing
									instructions to activate your account. Only after your Account
									is registered and active, you may use the services fully.
								</p>

								<h5>2.4. Individual Accounts (“Event-Goer Accounts”)</h5>
								<p>
									If you register for the services as an Event-Goer, you warrant
									that the registration information that you provide is, and
									shall remain throughout the Term, accurate and complete, and
									to maintain the accuracy of such information.
								</p>

								<h5>2.5. Event Creator Accounts (“Streamer Accounts”)</h5>
								<p>
									If you register for the services as a Streamer, you warrant
									that the registration information that you provide is, and
									shall remain throughout the Term, accurate and complete. In
									order to stream with us, you must create a Streamer account
									and after providing the necessary details and approved by our
									team, you are permitted to live stream video content from your
									live performances. If you work for a label, agency, theater,
									venue or any other company, you warrant that you are duly
									authorized to operate in behalf of that company or brand and
									your employees, officers, representatives and other agents
									accessing the services are duly authorized to access the
									services and to legally bind you to this Agreement and all
									transactions conducted under your Account. Additional
									information may be required by our services. If you are a
									performer such as artist, band, DJ or other, and want to
									stream with us, you also need a Streamer Account. For those
									that already created an Event-Goer Account, may request
									account linking, in order to use only one (1) e-mail account
									for both type of Accounts.
								</p>

								<h5>
									2.6. Actions under your Account (Event-Goer and Streamer
									accounts)
								</h5>
								<p>
									You are the only fully responsible for all activities that
									happen under your Account. You agree to notify us immediately
									of any unauthorized use of your Account, or if your Account
									credentials are otherwise lost or stolen or any other breach
									of security. You may be held liable for losses incurred by
									UshowMe or any other user of the services due to the use of
									your Account by another person. UshowMe is not liable for any
									loss or damage arising from your failure to comply with the
									above obligations.
								</p>

								<h5>2.7. Code of Conduct (affecting all Accounts)</h5>
								<p>
									In order to create positive experiences to all, we have
									created the following code of conduct that you warrant to
									respect.
								</p>
								<p>It is prohibited to:</p>

								<ul>
									<li>
										Using the services to harass, intimidate, bully, or any type
										of discrimination;
									</li>
									<li>
										Post pornographic or sexually explicit content, or content
										containing nudity;
									</li>
									<li>
										Using the services to threaten or promote hate-speech,
										violence or self-harm, illegal or dangerous activities;
									</li>
									<li>
										Using the services to upload, distribute, or transmit
										viruses, worms, trojans, or other malicious or harmful
										materials;
									</li>
									<li>
										Using the services in a way to undermine the purpose or
										integrity of the services;
									</li>
									<li>
										Uploading or posting the personal or private information of
										any third party on the services;
									</li>
									<li>
										Uploading or posting unauthorized advertising, promotional
										materials, spam, or other solicitations, including religious
										and/or political content;
									</li>
									<li>
										Uploading or posting any material that infringes copyright,
										trademark, or other intellectual property right or another
										person or entity;
									</li>
									<li>
										Impersonating any person or entity or your affiliation with
										any person or entity;
									</li>
									<li>Providing false or misleading information;</li>
									<li>
										Creating copies, modifications, disassembling, reverse
										engineering, or creating derivative works of the services or
										any content therein;
									</li>
									<li>
										Using the services for commercial purposes without our prior
										written consent or otherwise distributing, selling, or
										licensing or sub-licensing the services;
									</li>
									<li>
										Incorporating the services, or any part of the services,
										into any other software, product or services, without our
										prior written consent;
									</li>
									<li>
										Interfering with or disrupting the services or bypassing any
										security measures or restrictions that we have put in place;
									</li>
									<li>
										Using automated scripts to collect information from the
										services;
									</li>
									<li>
										Using the services in any way that UshowMe, in its sole and
										exclusive judgment, deems offensive or objectionable, or
										that exposes UshowMe, the services, or other users to
										liability or harm.
									</li>
								</ul>
							</div>
						),
					},
					{
						t: "3.Services",
						d: (
							<div>
								<p>
									The Services We provide interactive live streaming services
									for music shows and artistic and cultural performances.
								</p>
								<p>
									3.1. Subject to your compliance with these Terms and
									Conditions, UshowMe will provide you with access to and use of
									the UshowMe Services. The UshowMe Services may be accessed
									only through UshowMe’s designated web-based interface or other
									tools provided by UshowMe, as applicable.
								</p>
								<p>
									3.2. The Services shall enable Event-Goers and Streamers to
									access certain features, functionalities, information and
									services provided by us and/or our affiliates, which may
									include, without limitation, providing registered User
									Accounts with the ability to:
								</p>
								<p>
									A) access, view and embed certain audio- visual content
									(including, without limitation, certain music videos and live
									performance video);
								</p>
								<p>
									B) access personalized information and content regarding
									music, artists and bands, such as recommendations, suggestions
									and notifications regarding audio-visual content, tickets, and
									other related products and services.
								</p>
							</div>
						),
					},
					{
						t: "4. Event Creation",
						d: (
							<p>
								For the creation of events, UshowMe needs to authenticate and
								validate the Streamer Accounts. Only the creators of events and
								artists associated with Streamer Accounts validated may have
								access to the creation of events. To this end UshowMe will
								require more information, and we have in place a validation
								process that may take up to 24 (twenty four) hours. UshowMe
								reserves the right to reject or cancel any Streamer Account or
								event created at any time without notice, if they do not comply
								with these terms.
							</p>
						),
					},
					{
						t: "5. Content Monetization",
						d: (
							<div>
								<p>
									Streamer accounts may monetize their events and grant access
									to Content and Interactions in multiple ways, such as tickets,
									donations/tips and/or any other forms available.
								</p>
								<p>
									5.1. Business Partners – Some of these content monetization
									services may be provided by our Business Partners and not us,
									which we will be informed you and place a redirection link to
									their website(s)/App(s) for You to make business with them. In
									some form, we may need to share some details of your Account
									information, and they can request more necessary information
									in order for the services to work (ie: You are buying a ticket
									to access a paid event which is serviced by our Business
									Partners, like a ticketing platform and they request billing
									<br />
									information and associate the ticket access code with your
									e-mail account, so we can validate it on UshowMe’s platform).
								</p>
								<p>
									5.2. Any Business Partner that we conduct business with, is
									obliged to respect our Terms & Conditions and Privacy Policy,
									and will not use your information in any other way, other than
									to make the service available and functional to You and Us,
									however, by using our Business Partner’s services, you also
									abide to respect their Terms & Conditions and Privacy Policy.
								</p>
								<p>
									5.3. Tickets should only be used on the date of the event, or
									it will not be considered valid. This does not entitle you to
									any refund.
								</p>
								<p>
									5.4. It is your responsibility to check whether the event was
									canceled or rescheduled and it ́s new date and time. We will
									use all our efforts to inform you of the cancellation or
									rescheduling of an event but we do not guarantee it will be
									informed of such cancellation or rescheduling before the
									event.
								</p>
								<p>
									5.5. Reproduction, sale, resale or exchange of tickets is
									prohibited. In these situations, we and/or our Business
									Partners have the right to cancel the ticket and your account.
									Nevertheless, we support that you purchase tickets and offer
									them as a gift.
								</p>
								<p>
									5.6. The ticket(s) should not be used for advertising,
									promotions,contests or sweepstakes without our consent,
									Streamer Accounts associated with and/or our Business
									Partners.
								</p>
								<p>
									5.7. Additional Terms to tickets: Your ticket is owned by the
									Streamer Accounts and/or Business Partners or Us, being it a
									revocable personal license that may be withdrawn or refused
									its admission at any time, and made a refund of the visible
									price on the ticket.
								</p>
								<p>
									5.7.1. Our Streamer Accounts may prohibit us from making
									exchanges or refunds after the purchase is made, or in case of
									loss, theft, damage or total or partial destruction of the
									ticket. It <br />
									is your responsibility to keep your ticket safe.
								</p>
								<p>
									5.7.2. As UshowMe acts as an intermediary for ticket
									acquisition and ownership, we have no contractual liability to
									you regarding the event and tickets in question, unless there
									is from UshowMe, any negligent conduct, non-existing
									representation or if the violation of any relevant law occurs.
									For a small number of events, properly identified, UshowMe can
									act as principal and not as an intermediary title, meaning
									that the contract for the event and ticket acquisition is
									between You and UshowMe, and we will inform You of this
									special condition.
								</p>
							</div>
						),
					},
					{
						t: "6. Fees",
						d: (
							<div>
								<p>
									UshowMe charges for interactive streaming minutes and may
									facilitate payments for purchases of Content including digital
									Content made available via streaming and download through the
									Service (“Digital Content”), physical and online merchandise
									(“Merchandise”) and Artist (streamer Accounts) Subscriptions
									and other made available.
								</p>
								<p>6.1. Service Fees</p>
								<p>
									In consideration of your use of any of the Paid Services, you
									agree to pay the fees set forth on the applicable Service
									Description on the page Event Creation or any signed contract
									with Us.
								</p>
								<p>
									Fees for any Service or new Service feature shall be effective
									upon posting by us on the Site for the applicable Service. We
									may increase or add new fees for any existing Service or
									Service feature or implement a fee for any previously Free
									Service or Free Service feature, by giving you thirty (30)
									days’ advance notice. Such notice shall be posted on the Site
									on the Service Event Creation page for the affected.
								</p>
								<p>
									Service. You agree that you are responsible for checking the
									Site each month to confirm whether there are any new fees and
									their effective date(s). All fees payable by you are exclusive
									of applicable taxes and duties, including, without limitation,
									VAT and applicable sales tax. You shall provide such
									information to us as reasonably required determining whether
									we are obligated to collect VAT from you, including without
									limitation your VAT identification number.
								</p>
								<p>6.2. Payment</p>
								<p>
									We may specify the way you shall pay any fees, and any such
									payment shall be subject to our general accounts receivable
									policies from time to time in effect. All amounts payable by
									you under this Agreement shall be made without setoff or
									counterclaim and without deduction or withholding. If any
									deduction or withholding is required by applicable law, you
									shall notify us and shall pay such additional amounts to us as
									necessary to ensure that the net amount that we receive, after
									such deduction and withholding, equals the amount we would
									have received if no such deduction or withholding had been
									required. Additionally, you shall provide us with
									documentation evidencing that the withholding and deducted
									amounts have been paid to the relevant taxing authority.
								</p>
							</div>
						),
					},
					{
						t: "7. User Generated Content (UGC)",
						d: (
							<div>
								<p>
									The Service also provides users with the ability to add,
									upload, submit, distribute or post (“Submitting”) content,
									videos (including appearing on live stream on features such as
									the Top Fans and VIP Stage), written forum comments, data,
									text, photographs, graphics, or other information to the Site
									(collectively, the “User Submissions”). By Submitting User
									Generated Content on the Site or otherwise through the
									Service, you: acknowledge that by submitting any User
									Generated Content to the Site, you are publishing that
									submission, and that you may be identified publicly by your
									User ID or Account Name in association with any such User
									Generated Content;by submitting any User Generated Content
									through the Site or the Service, you hereby grant UshowMe a
									worldwide, non-exclusive, perpetual, irrevocable,
									royalty-free, fully paid, sublicensable and transferable
									license to use, edit, modify, reproduce, distribute, prepare
									derivative works of, publicly display, publicly perform
									(including on a through-to-the-audience basis and by means of
									a digital audio and video transmission), communicate to the
									public, synchronize and otherwise fully exploit the User
									Generated Content in connection with the Site, the Service and
									UshowMe’s (and its successors and assigns’) business,
									including without limitation for promoting and redistributing
									part or all of the Site (and derivative works thereof) or the
									Service in any media formats and through any media channels
									(including, without limitation, third party websites), whether
									now known or hereafter developed. You also hereby do and shall
									grant each registered user of the Site and/or the Service a
									non-exclusive license to access your User Generated Content
									through the Site and the Service, and to use, edit, modify,
									reproduce (on any and all devices owned or controlled by the
									user), distribute, prepare derivative works of, display and
									perform such User Generated Content for personal solely for
									personal and non-commercial use.
								</p>
								<p>
									For clarity, the foregoing license grant to UshowMe does not
									affect your other ownership or license rights in your User
									Generated Content, including the right to grant additional
									licenses to the material in your User Generated Content,
									unless otherwise agreed in writing; represent and warrant, and
									can demonstrate to UhshowMe’s full satisfaction upon request
									that you;
								</p>
								<p>
									A) own or otherwise control all rights to all content in your
									User Generated Content, or that the content in such User
									Generated Content is in the public domain or Direct Licensed,
								</p>
								<p>
									B) you have full authority to act on behalf of any and all
									owners of any right, title or interest in and to any content
									in your User Generated Content to use such content as
									contemplated by these Terms of Use and to grant the license
									rights set forth above,
								</p>
								<p>
									C) you have the permission the use the name and likeness of
									each identifiable individual person and to use such
									individual’s identifying or personal information as
									contemplated by these Terms & Conditions; and
								</p>
								<p>
									D) you are authorized to grant all of the aforementioned
									rights to the User Generated Content to UshowMe and all users
									of the Service; you agree to pay all royalties and other
									amounts owed to any person or entity, including any PROs, due
									to your submission of any User Generated Content to the
									Service; that the use or other exploitation of such User
									Generated Content by UshowMe and use or other exploitation by
									users of the Site and Service as contemplated by this
									Agreement will not infringe or violate the rights of any third
									party, including without limitation any privacy rights,
									publicity rights, copyrights, contract rights, or any other
									intellectual property or proprietary rights; and understand
									that UshowMe shall have the right to delete, edit, modify,
									reformat, excerpt, or translate any materials, content or
									information submitted by you; and that all information
									publicly posted or privately transmitted through the Site is
									the sole responsibility of the person from which such content
									originated and that UshowMe will not be liable for any errors
									or omissions in any content; and that UshowMe cannot guarantee
									the identity of any other users with whom you may interact in
									the course of using the Service. UshowMe does not endorse and
									has no control over any User Generated Content, however, we do
									offer Streamer Accounts with content moderation tools, in
									order to keep it a positive experience to all. UshowMe cannot
									guarantee the authenticity of any data which users may provide
									about themselves. You acknowledge that all Content accessed by
									you using the Service is at your own risk and you will be
									solely responsible for any damage or loss to any party
									resulting therefrom.
								</p>
							</div>
						),
					},
					{
						t: "8.License Grant: Intellectual Property for Streamer Accounts",
						d: (
							<div>
								<p>
									The Service provides Streamer Accounts with the ability to
									upload Digital Content owned or controlled by such Streamer
									Accounts to the Site, including but not limited to Live Stream
									content, Video recordings and videos synchronized with Sound
									Recordings and other audiovisual works, and the musical works
									embodied within Sound Recordings and Music Videos.
									<br />
									UshowMe will not have any ownership rights in any elements of
									an Streamer Accounts Content, however, UshowMe needs the
									following license to perform the Service. Each Streamer
									Account uploading Content to the Service grants UshowMe and
									its authorized sublicensees and distributors, if any, the
									worldwide, non-exclusive, royalty-free, right and license to:
								</p>
								<p>
									A) reproduce, distribute, publicly perform (including on a
									through-to-the-audience basis and by means of a digital audio
									and video transmission), publicly display, create derivate
									works of, communicate to the public, synchronize and otherwise
									exploit (1) the Streamer Account’s Content and perform the
									Service on the Streamer Account’s behalf (e.g., reproduce,
									transcode, copy and store the Streamer Account’s Content on
									computer servers owned and/or operated by or on behalf of
									UshowMe or its authorized sublicensees and distributors, and
									publicly perform, transmit, synchronize, stream, distribute,
									and playback the Streamer Account’s Content) using any
									technologies or methodologies now known or hereafter
									developed, and (2) Exploit all associated copyrightable works
									or metadata, including, without limitation, song lyrics and
									musical notations, album cover artwork, photographs, graphics,
									and descriptive text in connection with the Service);
								</p>
								<p>
									B) allow users of the Service to receive public performances
									and public displays of the Streamer Account’s Content and
									Artworks and to reproduce the Streamer Account’s Content and
									Artworks on any and all devices owned or controlled by the
									user for non-commercial purposes and receive performances and
									displays of same; and
								</p>
								<p>
									C) reproduce, use, and publish, and to permit others to
									reproduce, use and publish, the name(s), trademarks,
									likenesses, and personal and biographical materials of the
									Streamer Account, in connection with the provision of the
									Service. To enable Company to Exploit your Streamer Account
									Content pursuant to the above provisions, you hereby grant to
									UshowMe the worldwide, non-exclusive, royalty-free,
									sublicensable, and transferable right to use, distribute,
									reproduce, copy, and display your trademarks, service marks,
									slogans, logos or similar proprietary rights (collectively,
									the“Trademarks”) solely in connection with the Service or in
									the marketing, promotion or advertising of the service,
									including in all forms of marketing, promotion, and
									advertising materials now known or hereafter created. By
									uploading any Content or Artworks to the Site: you represent
									and warrant, and can demonstrate to UshowMe’s full
									satisfaction upon request, that
								</p>
								<p>
									D) you own or otherwise control all rights to your Music and
									Video Content and Artworks (or that such Music and Artworks
									are in the public domain or have otherwise been directly
									licensed to the Streamer Account in writing with a grant of
									rights sufficient to permit the Streamer Account to enter into
									this Agreement and to grant all of the rights with respect to
									the Streamer Account’s Content or Artworks as set forth in
									this Agreement);
								</p>
								<p>
									E) you have proof of purchase of Music and other Content you
									acquired to use it in a commercial way and conduct your
									business (e.g., you bought a music/song to play it to the
									public in platforms where the original Owner, grants you with
									a license for those Copyright rights);
								</p>
								<p>
									F) you have full authority to act on behalf of any and all
									owners of any right, title or interest in and to any Content
									you upload to the Service and to the Artworks;
								</p>
								<p>
									G) you have permission to use the name and likeness of each
									identifiable individual person whose name or likeness is
									contained or used within the Content and/or Artworks, and to
									use such individual’s identifying or personal information (to
									the extent such information is used or contained in the
									Content and/or Artworks) as contemplated by these Terms &
									Conditions, and
								</p>
								<p>
									H) you are authorized to grant all of the aforementioned
									rights to the Content and/or Artworks to UshowMe and all users
									of the Service. you represent and warrant that the use or
									other exploitation of your Content and/or Artworks by UshowMe
									and its authorized sublicensees and distributors and/or by
									users of the Site as contemplated by this Agreement will not
									infringe or violate the rights of any third party, including,
									without limitation, any privacy rights, publicity rights,
									copyrights, contract rights, or any other intellectual
									property or proprietary rights.you represent and warrant that,
									to the extent you are the Songwriter and/or Creator/Co-Creator
									of any or all of the Musical Works embodied in your Sound
									Recordings or Music Videos, whether in whole or in part (e.g.,
									as a co-writer), you have the full right, power, and authority
									to grant the rights set forth in this Agreement
									notwithstanding the provisions of any agreement you may have
									entered into with any performing rights organization, whether
									based in the United States or elsewhere, or any music
									publisher, and that you are solely responsible for taking all
									steps necessary to inform such music publisher of your grant
									of a royalty free license to UshowMe for the public
									performances and communications to the public of your Content
									Works, and that no fees or payments of any kind whatsoever
									shall be due to any music publisher for the public performance
									or communication to the public of your Content Works. You
									represent and warrant that no fees of any kind shall be due
									any third party, including, but not limited to, any union,
									guild, non-featured vocalist or musician, engineer or
									producer, for the use or re-use of your Content as authorized
									under this Agreement.
								</p>
							</div>
						),
					},
					{
						t: "9.UshowMe Content Intellectual Property",
						d: (
							<div>
								<p>
									From time to time we may make available to you, via the site
									and/or a developer portal, a variety of software, data and
									other content and printed and electronic documentation for
									your access, installation and/or use in connection with the
									Services (all such materials except those specifically made
									available by us under separate license terms, the “UshowMe
									Properties”). The UshowMe Properties may include without
									limitation: APIs; developer tools for use in connection with
									the APIs, such as sample source code and libraries; articles
									and documentation for use in connection with the use and
									implementation of the APIs (collectively, “Documentation” );
									specifications describing the operational and functional
									capabilities, use limitations, technical and engineering
									requirements, and testing and performance criteria relevant to
									the proper use of a Service and its related APIs and other
									technology, textual materials made available as part of the
									Service ( “Text Materials” ); and other forms of digital
									content, data, text, images, logos, user interface designs and
									other creative designs, audio and video (with the Text
									Materials, collectively, “UshowMe Content” ). These Terms &
									Conditions apply to your access, installation and use of the
									UshowMe Properties and UshowMe Content. Other than the limited
									rights and licenses expressly set forth in this Agreement, we
									reserve all right, title and interest (including all
									intellectual property and proprietary rights) in and to: (a)
									the Services, (b) the UshowMe Properties, (c) the Marks, and
									(d) any other technology and software that we provide or use
									to provide the Services and the UshowMe Properties, and all
									works derived from the foregoing. You do not, by virtue of
									this Agreement or otherwise, acquire any ownership interest or
									rights in any of the foregoing.
								</p>
							</div>
						),
					},
					{
						t: "10.Confidentiality",
						d: (
							<div>
								<p>
									You shall not disclose UshowMe Confidential Information during
									the Term or at any time during the two (2) year period
									following the end of the Term. As used in this Agreement,{" "}
									<span className="fw-bold">
										{" "}
										“UshowMe Confidential Information”{" "}
									</span>{" "}
									means all non-public information disclosed by us, our business
									partners or our or their respective agents or contractors that
									is designated as confidential or that, given the nature of the
									information or circumstances surrounding its disclosure,
									reasonably should be understood to be confidential. UshowMe
									Confidential Information includes, without limitation:
								</p>
								<p>
									A) non-public information relating to our or our business
									partners’ technology, customers, business plans, promotional
									and marketing activities, finances and other business affairs
									(including, but not limited to, any information about or
									involving one of our so-called beta tests or a beta test
									product that you obtain as a result of your participation in
									such beta test),
								</p>
								<p>
									B) third-party information that we are obligated to keep
									confidential, and
								</p>
								<p>
									C) the nature, content and existence of any discussions or
									negotiations between you and us. Confidential Information does
									not include any information information that you and us are
									required to disclose by law.
								</p>
								<p>10.1. Conflict with Separate Non-Disclosure Agreement</p>
								<p>
									If you and we are parties to a separate non-disclosure
									agreement ( “Stand-Alone NDA” ) and there is a conflict
									between the terms of the Stand-Alone NDA, the terms of the
									Stand-Alone NDA shall control.
								</p>
							</div>
						),
					},
					{
						t: "11. Disclaimers and Limitations of Liability",
						d: (
							<div>
								<p>
									Because UshowMe is not the buyer or seller in any actual
									Ticketing and Merchandise Transactions between Streamer
									Accounts and Event-Goers Accounts and is not the agent of
									either for any purpose, UshowMe does not have the duty to
									resolve and will not be involved in resolving any disputes
									between participants related to or arising out of any such
									Ticketing and Merchandise Transactions. Streamer Accounts are
									individually responsible for compliance with all consumer
									rights laws applicable to their Ticketing and Merchandise
									Transactions, including EU Consumer Rights Laws.
								</p>
								<p>
									Nothing in this Agreement is intended to or does create any
									type of joint venture, creditor-debtor, escrow, partnership or
									any employer/employee or fiduciary or franchise relationship
									between you and us.
								</p>
								<p>
									If any portion of this Agreement is held by a court of
									competent jurisdiction to be invalid or unenforceable, the
									remaining portions of this Agreement shall remain in full
									force and effect, and any invalid or unenforceable portions
									shall be construed in a manner that most closely reflects the
									effect and intent of the original language. If such
									construction is not possible, the provision shall be severed
									from this Agreement, and the rest of the Agreement shall
									remain in full force and effect.
								</p>
								<p className="fw-bold">
									In no event and TO THE FULLEST EXTENT PROVIDED BY LAW, shall
									UshowMe , nor its directors, employees, agents, partners,
									suppliers or content providers, be liable under contract,
									tort, strict liability, negligence or any other legal or
									equitable theory with respect to the Service;
								</p>
								<p>
									A) for any lost profits, data loss, cost of procurement of
									substitute goods or services, or special, indirect,
									incidental, punitive, or consequential damages of any kind
									whatsoever, substitute goods or services (however arising),
								</p>
								<p>
									B) for any bugs, viruses, trojan horses, or the like
									(regardless of the source of origination).
								</p>
								<p>11.1. Indemnification</p>
								<p>
									You shall defend, indemnify, and hold harmless UshowMe and its
									affiliates, authorized sublicensees and distributors, and each
									of their employees, contractors, directors, suppliers and
									representatives, from any and all liabilities, claims, and
									expenses, including reasonable attorneys’ fees and court
									costs, that arise from or relate to your use or misuse of, or
									access to, the Site, Service, Content or otherwise from your
									Streamer Account Content or User Generated Content
									Submissions, violation of these Terms & Conditions, or
									infringement by you, or any third party using your account, of
									any intellectual property or other right of any person or
									entity, and for breach of any of your representations and
									warranties in these Terms & Conditions. For the avoidance of
									doubt, you hereby agree to defend, indemnify, and hold
									harmless UshowMe from any and all claims by a third party
									owning, controlling or claiming any right in or to your Music
									or other Content, including claims for performance royalties,
									synchronization royalties, mechanical royalties, and use or
									re-use fees. UshowMe reserves the right to assume the
									exclusive defense and control of any matter otherwise subject
									to indemnification by you, in which event you will assist and
									cooperate with UshowMe in asserting any available defenses at
									your sole expense.
								</p>
								<p>11.2. Open-Source Disclaimers</p>
								<p>
									Certain of UshowMe’s services may include third-party code
									licensed to UshowMe for use and redistribution under
									open-source licenses. Below is a list of disclosures and
									disclaimers in connection with UshowMe’s incorporation of
									certain open-source licensed software into its services.
									Notwithstanding any of the terms and conditions of your
									agreement with UshowMe, the terms of certain open-source
									licenses may be applicable to your use of the UshowMe
									software, as set forth below.This list of open-source code was
									compiled with reference to third-party software incorporated
									into the services as of the date the list was generated. This
									list may be updated from time to time and may not be complete.
									ALL INFORMATION HERE IS PROVIDED “AS IS.” USHOWME MAKE NO
									REPRESENTATIONS OR WARRANTIES, EXPRESS OR IMPLIED, WITH REGARD
									TO THIS LIST OR ITS ACCURACY OR COMPLETENESS, OR WITH RESPECT
									TO ANY RESULTS TO BE OBTAINED FROM USE OR DISTRIBUTION OF THE
									LIST. BY USING OR DISTRIBUTING THIS LIST, YOU AGREE THAT IN NO
									EVENT SHALL USHOWME BE HELD LIABLE FOR ANY DAMAGES WHATSOEVER
									RESULTING FROM ANY USE OR DISTRIBUTION OF THIS LIST,
									INCLUDING, WITHOUT LIMITATION, ANY SPECIAL, CONSEQUENTIAL,
									INCIDENTAL OR OTHER DIRECT OR INDIRECT DAMAGES.
								</p>
								<p>11.2.-A WebRTC</p>
								<p>
									http://www.webrtc.org/Copyright © 2011 The WebRTC project
									authors. All rights reserved.Redistribution and use in source
									and binary forms, with or without modification, are permitted
									provided that the following conditions are met:
									Redistributions of source code must retain the above copyright
									notice, this list of conditions and the following
									disclaimer.Redistributions in binary form must reproduce the
									above copyright notice, this list of conditions and the
									following disclaimer in the documentation and/or other
									materials provided with the distribution.Neither the name of
									Google nor the names of its contributors may be used to
									endorse or promote products derived from this software without
									specific prior written permission.THIS SOFTWARE IS PROVIDED BY
									THE COPYRIGHT HOLDERS AND CONTRIBUTORS “AS IS” AND ANY EXPRESS
									OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
									IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
									PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
									COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
									INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
									DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
									SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
									OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
									LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
									(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF
									THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY
									OF SUCH DAMAGE.
								</p>
								<p>11.2.-B libvpx/libwebm</p>
								<p>
									http://www.webmproject.org/Copyright © 2010 Google Inc. All
									rights reserved.Software License Redistribution and use in
									source and binary forms, with or without modification, are
									permitted provided that the following conditions are
									met:Redistributions of source code must retain the above
									copyright notice, this list of conditions and the following
									disclaimer.Redistributions in binary form must reproduce the
									above copyright notice, this list of conditions and the
									following disclaimer in the documentation and/or other
									materials provided with the distribution.Neither the name of
									Google nor the names of its contributors may be used to
									endorse or promote products derived from this software without
									specific prior written permission.THIS SOFTWARE IS PROVIDED BY
									THE COPYRIGHT HOLDERS AND CONTRIBUTORS “AS IS” AND ANY EXPRESS
									OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
									IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
									PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
									COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
									INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
									DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
									SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
									OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
									LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
									(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF
									THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY
									OF SUCH DAMAGE. Additional IP Rights Grant (Patents) “These
									implementations” means the copyrightable works that implement
									the WebM codecs distributed by Google as part of the WebM
									Project. Google hereby grants to you a perpetual, worldwide,
									non-exclusive, no-charge, royalty-free, irrevocable (except as
									stated in this section) patent license to make, have made,
									use, offer to sell, sell, import, transfer, and otherwise run,
									modify and propagate the contents of these implementations of
									WebM, where such license applies only to those patent claims,
									both currently owned by Google and acquired in the future,
									licensable by Google that are necessarily infringed by these
									implementations of WebM. This grant does not include claims
									that would be infringed only as a consequence of further
									modification of these implementations. If you or your agent or
									exclusive licensee institute or order or agree to the
									institution of patent litigation or any other patent
									enforcement activity against any entity (including a
									cross-claim or counterclaim in a lawsuit) alleging that any of
									these implementations of WebM or any code incorporated within
									any of these implementations of WebM constitutes direct or
									contributory patent infringement, or inducement of patent
									infringement, then any patent rights granted to you under this
									License for these implementations of WebM shall terminate as
									of the date such litigation is filed.
								</p>
								<p>11.3.-C FFmpeg</p>
								<p>
									http://www.ffmpeg.org/Copyright © 2000 Fabrice BellardLicensed
									under the GNU General Public License version 2.1, or later,
									which is included below or available at
									http://www.gnu.org/licenses/lgpl-2.1.html. However, FFmpeg
									incorporates several optional parts and optimizations that are
									covered by the GNU General Public License version 2 or later,
									which is included below or available at
									http://www.gnu.org/licenses/old-licenses/gpl-2.0.html. If
									those parts get used, the GPL applies to all of FFmpeg. Read
									the license texts to learn how this affects programs built on
									top of FFmpeg or reusing FFmpeg. You may also wish to have a
									look at the GPL FAQ. Note that FFmpeg is not available under
									any other licensing terms, especially not
									proprietary/commercial ones, not even in exchange for payment.
								</p>
							</div>
						),
					},
					{
						t: "12. Modifications to these Terms & Conditions",
						d: (
							<div>
								<p>
									UshowMe reserves the right, at its sole discretion, to modify
									or replace any of the terms in these Terms & Conditions, or
									change, suspend, or discontinue the Service (including without
									limitation, the availability of any feature, database, or
									content) at any time by posting a notice on the Site or by
									sending you an e-mail. UshowMe may also impose limits on
									certain features and services or restrict your access to parts
									or all of the Service without notice or liability. It is your
									responsibility to check these Terms & Conditions periodically
									for changes. Your continued use of the Service following the
									posting of any changes to these Terms & Conditions constitutes
									acceptance of those changes. Notwithstanding the preceding
									sentences of this section, no modifications to these Terms &
									Conditions will apply to any dispute between you and UshowMe
									that arose prior to the date of such modification.
								</p>
								<p>
									For any doubts and/or queries, please contact us to:{" "}
									<a
										target="blank"
										className="text-decoration-none color3"
										href="mailto:legal@ushowme.tv"
									>
										legal@ushowme.tv
									</a>
								</p>
							</div>
						),
					},
				],
			},
			// BODY END
		},
		ES: {
			home: {
				// HERO START
				hero: "Se trata de tu experiencia",
				hero2:
					"VIDEO EN PANTALLA COMPLETA GENERAL CORTO REPRODUCCIÓN AUTOMÁTICA SIN SONIDO",
				heroBtn: "Ir a espectáculos",
				// HERO END

				// ABOUT START
				aboutH: "sobre nosotros",
				aboutL:
					"UshowMe es una plataforma interactiva de transmisión en vivo y video a pedido que ayuda a artistas, productores de eventos como lugares y festivales a evolucionar hacia espectáculos híbridos con alcance global, nuevas experiencias, múltiples fuentes de ingresos y marcas y audiencias digitales para ofrecer nuevas posibilidades para Interacción.",
				aboutR1: "EDIFICIO PARA CADA DISPOSITIVO MODERNO",
				aboutR2: (
					<p>
						El diseño receptivo de UshowMe está diseñado para Entregue las
						mejores experiencias e interacciones a su audiencia,
						independientemente del dispositivo moderno que esté usando
						<img src={asterik} alt="" className="asterik_up" />.
					</p>
				),
				aboutR3: (
					<p className="text-white mb-0 spaceMono">
						consulte la lista de dispositivos compatibles en el{" "}
						<span className="purpleBg px-1">Preguntas más frecuentes</span>
						-Página.
					</p>
				),
				// ABOUT END

				// HYBRID START
				hybH: "¿Por qué es híbrido el futuro?",
				hybP: [
					"Los espectáculos no se tratan solo de cantar esas canciones favoritas con tu 'tribu' e interactuar con los artistas, sino de compartir experiencias y expresar nuestras emociones para crear recuerdos duraderos de un gran momento juntos.",
					"Hybrid amplifica estos y elimina las limitaciones habituales que muchos fanáticos dejan fuera al tiempo que agrega más fuentes de ingresos y un nuevo compromiso medible.",
					"UshowMe es modular para maximizar sus necesidades específicas.",
					"Comience seleccionando quién es U a continuación.",
				],
				// HYBRID END

				// SIDEBAR START
				sideBar: [
					{ t: "SOBRE NOSOTROS" },
					{ t: "ESPECTÁCULOS SELECCIONADOS" },
					{ t: "HÍBRIDO ES EL FUTURO" },
					{ t: "CÓMO FUNCIONA" },
					{ t: "¿QUIÉN ERES TÚ?" },
					{ t: "Preguntas más frecuentes" },
				],
				// SIDEBAR END

				// SIDEBAR START
				sideBar2: [
					{ t: "SOBRE NOSOTROS" },
					{ t: "HÍBRIDO ES EL FUTURO" },
					{ t: "¿QUIÉN ERES TÚ?" },
					{ t: "ESPECTÁCULOS SELECCIONADOS" },
					{ t: "CÓMO FUNCIONA" },
					{ t: "Preguntas más frecuentes" },
				],
				// SIDEBAR END

				// WHO START
				who1: "EMPEZAR CON LA SELECCIÓN",
				who2: "¿Quién eres tú?",
				// WHO END

				// FEATURE START
				feature1: "Espectáculos de cadera",
				feature2: "Ver todos los programas",
				// FEATURE END

				// FEATURE START
				itsAll1: "¡Se trata de DIVERSIÓN!",
				itsAll2: "Ver video completo",
				// FEATURE END

				// NEWS START
				news: "En las noticias",
				// NEWS END

				// PARTNER START
				partner1: "PAREJA",
				partner2: "Conviértete en un compañero",
				partner3: "Lidere el futuro de los espectáculos híbridos.",
				// PARTNER END

				// PARTNER START
				newsletter1: "Suscríbete al boletín",
				newsletterBtn: "Enviar",
				// PARTNER END

				// WHO END
				who1under: "soy un",
				present: "Obtén la presentación:",
				present2: "Assine o Newsletter:",
				send: "Enviar",
				slide1T: "Artista / sello",
				slide1T2: "Llegue e interactúe con una audiencia global",
				slide1D:
					"Nunca más tendrás que dejar a tus fans afuera. Con UshowMe, puede estar seguro de que está participando e interactuando con todos, aumentando las ventas en múltiples transmisiones tanto para la transmisión en vivo como para las versiones de video a pedido, y también incorporando a sus propios patrocinadores.",
				slide2T: "Productor / lugar",
				slide2T2: "Escale espectáculos más allá de su lugar / ubicación",
				slide2D:
					"Con UshowMe puede convertirse en un híbrido como productor y / o lugar y llegar a su audiencia más allá de los límites físicos, ganar dinero con múltiples transmisiones y digitalizar patrocinadores que ya están presentes en su lugar / festival físico.",
				slide3T: "marca",
				slide3T2: "Patrocinar espectáculos y medir interacciones",
				slide3D:
					"Su marca finalmente tiene el poder de maximizar el conocimiento y crear nuevas formas de interactuar con las audiencias digitales. UshowMe le brinda herramientas para que su marca logre lo más destacado que se merece con resultados medibles. UshowMe ofrece opciones de integración completas.",
				slide4T: "admirador",
				slide4T2: "Diviértete con nuevas interacciones",
				slide4D:
					"Con UshowMe tienes más acceso a tus artistas favoritos que si estuvieras allí en persona. Conecta tu cámara, expresa tus emociones y tus mejores movimientos en el escenario Top Fans. Habla con todos en el chat e intercambia ideas con artistas en emocionantes Meet & Greets.",
				newLet: "Suscríbete a la newsletter:",
				// WHO END

				// FOOTER START
				footer: [
					{
						t: "Cómo funciona",
						l: "/howItWorks",
					},
					{
						t: "Preguntas más frecuentes",
						l: "/faq",
					},
					{
						t: "Trabajos",
						l: "/jobs",
					},
					{
						t: "Contáctenos",
						l: "",
					},
					{
						t: "medios de comunicación",
						l: "",
					},
					{
						t: "Política de privacidad",
						l: "/privacyPolicy",
					},
					{
						t: "Términos & amp; condiciones",
						l: "/termsConditions",
					},
				],
				footerBtn: "Ver todos los programas",
				// FOOTER END
			},
			hiw: {
				// HERO START
				heroBtn: "Vídeo de participación y control",
				// HERO END

				// SIDEBAR START
				sideBar: [
					{ t: "SOBRE NOSOTROS" },
					{ t: "ESPECTÁCULOS SELECCIONADOS" },
					{ t: "HÍBRIDO ES EL FUTURO" },
					{ t: "CÓMO FUNCIONA" },
					{ t: "¿QUIÉN ERES TÚ?" },
					{ t: "Preguntas más frecuentes" },
				],
				// SIDEBAR END

				// SIDEBAR START
				sideBar2: [
					{ t: "SOBRE NOSOTROS" },
					{ t: "HÍBRIDO ES EL FUTURO" },
					{ t: "¿QUIÉN ERES TÚ?" },
					{ t: "ESPECTÁCULOS SELECCIONADOS" },
					{ t: "CÓMO FUNCIONA" },
					{ t: "Preguntas más frecuentes" },
				],
				// SIDEBAR END
				// FOOTER START
				footer: [
					{
						t: "Cómo funciona",
						l: "/howItWorks",
					},
					{
						t: "Preguntas más frecuentes",
						l: "/faq",
					},
					{
						t: "Trabajos",
						l: "/jobs",
					},
					{
						t: "Contáctenos",
						l: "",
					},
					{
						t: "medios de comunicación",
						l: "",
					},
					{
						t: "Política de privacidad",
						l: "/privacyPolicy",
					},
					{
						t: "Términos & amp; condiciones",
						l: "/termsConditions",
					},
				],
				footerBtn: "Ver todos los programas",
				// FOOTER END

				// PARTNER START
				newsletter1: "Suscríbete al boletín",
				newsletterBtn: "Enviar",
				// PARTNER END

				// HIW BODY START
				h1: "Cómo funciona",
				h2: "De la preproducción al análisis",
				hwiData: [
					{
						t: "Crear y personalizar",
						d: [
							"Crea tu espectáculo a través de nuestra plataforma, módulo a módulo. Comience con los detalles del programa. ",
							"Luego, seleccione las fuentes de ingresos que desea poner a disposición de su audiencia. ",
							"Inserte los banners y logotipos superpuestos, CTA, videos e invite a su equipo de moderación, y listo.",
						],
					},
					{
						t: "Participar y controlar",
						d: [
							"Mientras se desarrolla el espectáculo, interactúe con su audiencia en el chat en vivo y en las preguntas y respuestas. Los artistas también pueden ver e interactuar con audiencias digitales durante el espectáculo en el escenario.",
							"Termine en la parte superior con emocionantes Meet & Greets.",
							"Al utilizar nuestras potentes herramientas de moderación disponibles, puede asegurarse de que la experiencia sea positiva para todos en todo momento.",
						],
					},
					{
						t: "Sigue monetizando",
						d: [
							"Active la opción VOD (video a pedido) en la configuración, para seguir monetizando el mismo contenido una y otra vez.",
							"A los fanáticos que se perdieron la transmisión en vivo o que quieran volver a ver sus interacciones, les encantará que pienses en ellos.",
						],
					},
					{
						t: "Medir y analizar",
						d: [
							"Tendrá acceso a un informe detallado, donde podrá medir y analizar la Calidad de la Experiencia Entregada (QoDE).",
							"Esta poderosa información le permite saber exactamente quién es su audiencia y qué es lo que quiere.",
						],
					},
				],
				cBtn: "Contacta con nosotras para acceder",
				// HIW BODY END
			},
			privacyPolicy: {
				// HERO START
				hero: "Política de privacidad",
				// HERO END

				// SIDEBAR START
				sideBar: [
					{ t: "SOBRE NOSOTROS" },
					{ t: "ESPECTÁCULOS SELECCIONADOS" },
					{ t: "HÍBRIDO ES EL FUTURO" },
					{ t: "CÓMO FUNCIONA" },
					{ t: "¿QUIÉN ERES TÚ?" },
					{ t: "Preguntas más frecuentes" },
				],
				// SIDEBAR END

				// SIDEBAR START
				sideBar2: [
					{ t: "SOBRE NOSOTROS" },
					{ t: "HÍBRIDO ES EL FUTURO" },
					{ t: "¿QUIÉN ERES TÚ?" },
					{ t: "ESPECTÁCULOS SELECCIONADOS" },
					{ t: "CÓMO FUNCIONA" },
					{ t: "Preguntas más frecuentes" },
				],
				// SIDEBAR END
				// FOOTER START
				footer: [
					{
						t: "Cómo funciona",
						l: "/howItWorks",
					},
					{
						t: "Preguntas más frecuentes",
						l: "/faq",
					},
					{
						t: "Trabajos",
						l: "/jobs",
					},
					{
						t: "Contáctenos",
						l: "",
					},
					{
						t: "medios de comunicación",
						l: "",
					},
					{
						t: "Política de privacidad",
						l: "/privacyPolicy",
					},
					{
						t: "Términos & amp; condiciones",
						l: "/termsConditions",
					},
				],
				footerBtn: "Ver todos los programas",
				// FOOTER END

				// PARTNER START
				newsletter1: "Suscríbete al boletín",
				newsletterBtn: "Enviar",
				// PARTNER END

				// BODY START
				h1: "Última actualización: 10 de junio de 2021",
				topPs: [
					{
						p: (
							<p>
								UshowMe es propiedad de USMLive, Lda, ubicada en Rua António
								Santos Serrador 88, R / C Dto, 2415-399 Leiria, ("nosotros",
								"nosotros" o "Nuestro") opera el {""}
								<a
									target="blank"
									href="https://ushowme.tv"
									className="text-decoration-none text-dark"
								>
									https://ushowme.tv
								</a>{" "}
								{""}y{" "}
								<a
									target="blank"
									href="https://app.ushowme.tv"
									className="text-decoration-none text-dark"
								>
									{""}
									https://app.ushowme.tv {""}
								</a>{" "}
								{""}
								dominios (en lo sucesivo, el "Servicio").
							</p>
						),
					},
					{
						p: (
							<p>
								Esta página le informa de nuestras políticas con respecto a la
								colección, uso y divulgación de datos personales cuando utiliza
								nuestro {""}
								<span className="fw-bold"> Servicio </span> y las opciones que
								han asociado con esos datos.
							</p>
						),
					},
					{
						p: (
							<p>
								Usamos sus datos para proporcionar y mejorar el {""}
								<span className="fw-bold"> Servicio. </span>
							</p>
						),
					},
					{
						p: (
							<p>
								Al utilizar el <span className="fw-bold"> Servicio </span>,
								aceptar la recopilación y el uso de información de acuerdo con
								con esta política.
							</p>
						),
					},
					{
						p: (
							<p>
								A menos que se defina lo contrario en esta Política de
								privacidad, los términos utilizados en esta Política de
								privacidad tienen los mismos significados que en nuestros
								Términos y condiciones, accesibles desde {""}
								<Link
									className="purpleBg text-white text-decoration-none px-1"
									to="termsConditions"
								>
									aquí
								</Link>
								.
							</p>
						),
					},
				],

				collectData: {
					h2: "Tipos de datos recopilados:",
					innerData: [
						{
							t: "Datos personales:",
							d: (
								<div>
									<p>
										Mientras utiliza nuestro Servicio, es posible que le pidamos
										que nos proporcione cierta información de identificación
										personal que se puede utilizar para contactarlo o
										identificarlo ("Datos personales").
									</p>
									<p>
										La información de identificación personal puede incluir,
										pero no es limitado a:
									</p>
									<ul>
										<li> Dirección de correo electrónico </li>
										<li> Nombre y apellido </li>
										<li> Imagen de perfil </li>
										<li> Cookies y datos de uso. </li>
									</ul>
									<p>
										Podemos utilizar sus datos personales para comunicarnos con
										usted con boletines, materiales de marketing o promocionales
										y otros información que pueda ser de su interés. Puede optar
										por no participar de recibir alguna, o todas, estas
										comunicaciones de nosotros por siguiendo el enlace para
										darse de baja o las instrucciones proporcionadas en
										cualquier correo electrónico que enviemos.
									</p>
								</div>
							),
						},
						{
							t: "Datos de uso:",
							d: (
								<div>
									<p>
										También podemos recopilar información sobre cómo se
										encuentra el Servicio. accedido y utilizado ("Datos de
										uso").
									</p>
									<p>
										Estos datos de uso pueden incluir información como su la
										dirección de Protocolo de Internet de la computadora (por
										ejemplo, dirección IP), tipo de navegador, versión del
										navegador, agente de usuario, las páginas de nuestro
										Servicio que visita, la hora y fecha de su visita, el tiempo
										dedicado a esas páginas, identificadores únicos de
										dispositivos y otros datos de diagnóstico.
									</p>
								</div>
							),
						},
						{
							t: "Datos de seguimiento y cookies:",
							d: (
								<div>
									<p>
										Usamos cookies y tecnologías de seguimiento similares para
										rastrear la actividad en nuestro Servicio y mantenemos
										ciertos Las cookies son archivos con una pequeña cantidad de
										datos que puede incluir un identificador único anónimo.
										Galletas se envían a su navegador desde un sitio web y se
										almacenan en su dispositivo. También se utilizan otras
										tecnologías de seguimiento como balizas, etiquetas y scripts
										para recopilar y rastrear información y para mejorar y
										analizar nuestro Servicio. Puede instruir a su navegador
										para rechazar todas las cookies o para indicar cuando una
										cookie está siendo enviado. Sin embargo, si no acepta las
										cookies, es posible que no pueda utilizar algunas partes de
										nuestro Servicio.
									</p>
									<p className="mb-3"> Ejemplos de cookies que usamos: </p>
									<ul className="list-unstyled">
										<li className="mb-0"> Cookies de sesión. </li>
										<li>
											{" "}
											Usamos cookies de sesión para operar nuestro Servicio.{" "}
										</li>
										<li className="mt-4"> Cookies de preferencia. </li>
										<li>
											Usamos cookies de preferencia para recordar sus
											preferencias y varias configuraciones.
										</li>
										<li className="mt-4"> Cookies de seguridad. </li>
										<li>
											{" "}
											Usamos cookies de seguridad por motivos de seguridad.{" "}
										</li>
									</ul>

									<p>
										El uso de los sitios web de UshowMe utiliza los datos
										recopilados para varios propósitos:
									</p>
									<ul>
										<li> Para proporcionar y mantener nuestro Servicio. </li>
										<li>
											{" "}
											Para notificarle sobre cambios en nuestro Servicio.{" "}
										</li>
										<li>
											Para permitirle participar en funciones interactivas de
											nuestro Servicio cuando elija hacerlo.
										</li>
										<li> Para brindar asistencia al cliente. </li>
										<li>
											Recopilar análisis o información valiosa para que podamos
											mejorar nuestro servicio.
										</li>
										<li> Para monitorear el uso de nuestro Servicio. </li>
										<li>
											{" "}
											Para detectar, prevenir y abordar problemas técnicos.{" "}
										</li>
										<li>
											Para brindarle noticias, ofertas especiales y
											generalidades. información sobre otros bienes, servicios y
											eventos que ofrecemos que son similares a los que ya
											tienes comprado o consultado a menos que haya optado por
											no recibir dicha información.
										</li>
									</ul>
								</div>
							),
						},
						{
							t: "Base legal para el procesamiento de datos personales según el Reglamento general de protección de datos (GDPR):",
							d: (
								<div>
									<p>
										Si es del Espacio Económico Europeo (EEE), UshowMe base
										legal para la recopilación y el uso de la información
										personal La información descrita en esta Política de
										privacidad depende de la Datos personales que recopilamos y
										el contexto específico en el que lo recogemos.
									</p>
									<p> UshowMe puede procesar sus datos personales porque: </p>

									<ul>
										<li> Necesitamos celebrar un contrato con usted. </li>
										<li> Nos ha dado permiso para hacerlo. </li>
										<li>
											El procesamiento responde a nuestros intereses legítimos y
											es no anulado por sus derechos.
										</li>
										<li> Para fines de procesamiento de pagos. </li>
										<li> Para cumplir con la ley. </li>
									</ul>

									<p>
										También podemos obtener información, incluida la
										información, de terceros como redes sociales o plataformas
										de redes sociales para las que tiene explícitamente
										conectado con nosotros. Cuando accede al Servicio UshowMe a
										través de las redes sociales o las redes sociales que está
										autorizando UshowMe para recopilar, almacenar y utilizar
										dicha información y contenido de acuerdo con esta Política
										de privacidad.
									</p>
								</div>
							),
						},
						{
							t: "Retención de datos:",
							d: (
								<div>
									<p>
										UshowMe retendrá sus datos personales solo durante el tiempo
										que es necesario para los fines establecidos en esta
										Privacidad Política. Conservaremos y utilizaremos sus datos
										personales para medida necesaria para cumplir con nuestras
										obligaciones legales (por ejemplo, si estamos obligados a
										conservar sus datos para cumplir con las leyes aplicables),
										resolver disputas y hacer cumplir nuestra acuerdos y
										políticas legales.
									</p>
									<p>
										UshowMe también retendrá los datos de uso para análisis
										internos propósitos. Los datos de uso generalmente se
										conservan durante un período más breve. período de tiempo,
										excepto cuando estos datos se utilizan para fortalecer la
										seguridad o para mejorar la funcionalidad de nuestro
										Servicio, o estamos legalmente obligados a conservar estos
										datos durante más tiempo períodos.
									</p>
								</div>
							),
						},
						{
							t: "Transferencia de datos:",
							d: (
								<div>
									<p>
										Su información, incluidos los datos personales, puede ser
										transferidos y mantenidos en computadoras ubicadas fuera de
										su estado, provincia, país u otro jurisdicción gubernamental
										donde las leyes de protección de datos pueden difieren de
										los de su jurisdicción. fuera de Moldavia y decide
										proporcionarnos información, tenga en cuenta que
										transferimos los datos, incluidos los Datos, a Portugal y
										procesarlos allí.
									</p>
									<p>
										Su consentimiento a esta Política de privacidad seguida de
										su la presentación de dicha información representa su
										aceptación de esa transferencia.
									</p>
									<p>
										UshowMe tomará todas las medidas razonablemente necesarias
										para asegurarse de que sus datos sean tratados de forma
										segura y de conformidad con esta Política de privacidad y
										sin transferencia de su Los datos se enviarán a una
										organización o un país a menos que existen controles
										adecuados, incluida la seguridad de sus datos y otra
										información personal.
									</p>
								</div>
							),
						},
						{
							t: "Divulgación de datos:",
							d: (
								<div>
									<p className="fw-bold">
										No vendemos sus datos de información personal.
									</p>
									<p>
										Sin embargo, podemos compartir su información personal en el
										siguientes situaciones:·
									</p>

									<ul>
										<li className="mb-0"> Con proveedores de servicios: </li>
										<p>
											{""}
											Podemos compartir su información personal con el Servicio
											Proveedores para monitorear y analizar el uso de Nuestros
											Servicios.
										</p>
										<li className="mb-0"> Para transferencias comerciales: </li>
										<p>
											Podemos compartir o transferir su información personal en
											conexión con, o durante las negociaciones de, cualquier
											fusión o adquisición de todo o una parte de Nuestro
											negocio a otro empresa.·
										</p>
										<li className="mb-0">
											Con afiliados: podemos compartir su información con
											nuestro afiliados, en cuyo caso requeriremos a esos
											afiliados para cumplir con esta Política de privacidad.
										</li>
										<p>
											Los afiliados incluyen nuestra empresa matriz y cualquier
											otra subsidiarias, socios de empresas conjuntas u otras
											empresas que controlamos o que están bajo control común
											con Nosotros. ·
										</p>
										<li>
											Con socios comerciales: podemos compartir su información
											con Nuestros socios comerciales para ofrecerle ciertos
											productos, servicios o promociones, y le solicitaremos su
											permiso primero.
										</li>
										<li> Con otros usuarios: </li>
										<p>
											cuando comparte información personal o interactúa de otra
											manera en las áreas públicas con otros usuarios, dicha
											información puede ser visto por todos los usuarios y puede
											distribuirse públicamente fuera de. Si interactúa con
											otros usuarios, puede ver Su nombre, perfil, fotos y video
											de su cámara. Del mismo modo, otros usuarios podrán ver su
											nombre, video de tu cámara y tu perfil. ·
										</p>
										<li>
											Con su consentimiento: podemos divulgar su información
											para cualquier otro propósito con su consentimiento.
										</li>
										<li> Divulgación para las fuerzas del orden </li>
										<p>
											En determinadas circunstancias, es posible que se requiera
											que UshowMe divulgar sus datos personales si así lo
											requiere la ley o en respuesta a solicitudes válidas de
											las autoridades públicas (p. ej. un tribunal o una agencia
											gubernamental).
										</p>
									</ul>
								</div>
							),
						},
						{
							t: "Requisitos legales:",
							d: (
								<div>
									<p className="mb-0">
										UshowMe puede divulgar sus Datos personales de buena fe
										creencia de que tal acción es necesaria para:
									</p>
									<ul>
										<li> Para cumplir con una obligación legal. </li>
										<li>
											Para proteger y defender los derechos o propiedad de
											UshowMe.
										</li>
										<li>
											Para prevenir o investigar posibles irregularidades en
											conexión con el Servicio.
										</li>
										<li>
											Para proteger la seguridad personal de los usuarios del
											Servicio o el público.
										</li>
										<li> Para protegerse contra la responsabilidad legal. </li>
									</ul>
								</div>
							),
						},
						{
							t: "Seguridad de los datos:",
							d: (
								<div>
									<p>
										La seguridad de sus datos es importante para nosotros pero
										recuerde que ningún método de transmisión a través de
										Internet o método de almacenamiento electrónico es 100%
										seguro. Mientras nos esforzamos por usar medios
										comercialmente aceptables para proteger sus datos
										personales, no podemos garantizar su absoluta seguridad.
									</p>
									<p className="mb-0">
										Sus derechos de protección de datos en virtud de los datos
										generales Reglamento de protección (GDPR) Si es residente
										del Espacio Económico Europeo (EEE), tienes ciertos datos
										derechos de protección. UshowMe tiene como objetivo tomar
										medidas razonables para permitirle corregir, modificar,
										eliminar o limitar el uso de su Información personal.
									</p>
									<p>
										Si desea ser informado sobre qué datos personales tenemos
										sobre usted y si desea que se elimine de nuestros sistemas,
										por favor contáctenos.
									</p>
									<p>
										En determinadas circunstancias, dispone de los siguientes
										datos derechos de protección:
									</p>
									<ul>
										<li>
											El derecho a acceder, actualizar o eliminar la información
											que tener sobre ti.
										</li>
									</ul>
									<p>
										{""}
										Siempre que sea posible, puede acceder, actualizar o
										solicitar eliminación de sus datos personales directamente
										dentro de su cuenta sección de configuración. Si no puede
										realizar estas acciones usted mismo, comuníquese con
										nosotros para ayudarlo.
									</p>
									<ul>
										<li>
											El derecho de rectificación. Tienes derecho a tener su
											información rectificada si esa información es inexacto o
											incompleto.
										</li>
										<li>
											El derecho a oponerse. Tiene derecho a oponerse a nuestra
											procesamiento de sus datos personales.
										</li>
										<li>
											El derecho de restricción. Tienes derecho a solicitar que
											restringimos el procesamiento de su información personal
											información.
										</li>
										<li>
											El derecho a la portabilidad de datos. Tienes derecho a
											ser proporcionado con una copia de la información que
											tenemos sobre usted en un formato estructurado, legible
											por máquina y de uso común.
										</li>
										<li>
											El derecho a retirar el consentimiento. También tienes
											derecho a retirar su consentimiento en cualquier momento
											en el que UshowMe confió su consentimiento para procesar
											su información personal, por simplemente elimine su
											cuenta. Cuando crea su cuenta a través del inicio de
											sesión social, debe eliminar los permisos de la aplicación
											UshowMe en dicha plataforma.
										</li>
									</ul>

									<p>
										Tenga en cuenta que es posible que le pidamos que verifique
										su identidad antes de responder a tales solicitudes.
									</p>
									<p>
										Tiene derecho a presentar una reclamación ante una
										protección de datos Autoridad sobre nuestra recopilación y
										uso de su Personal Datos.
									</p>
									<p className="mb-0">
										Para obtener más información, comuníquese con sus datos
										locales. autoridad de protección en el Espacio Económico
										Europeo (EEE). Proveedores de servicios Podemos emplear
										empresas de terceros e individuos para facilitar nuestro
										Servicio ("Servicio Proveedores ”), proporcionar el Servicio
										en nuestro nombre, realizar Servicios relacionados con el
										servicio o ayudarnos a analizar cómo Se utiliza el servicio.
									</p>
									<p>
										Estos terceros solo tienen acceso a sus datos personales
										realizar estas tareas en nuestro nombre y no estamos
										obligados a para divulgarlo o usarlo para cualquier otro
										propósito.
									</p>
								</div>
							),
						},
						{
							t: "Analytics:",
							d: (
								<div>
									<p>
										Podemos utilizar proveedores de servicios de terceros para
										monitorear y analizar el uso de nuestro Servicio.
									</p>
									<ul>
										<li> Google Analytics </li>
										<p className="mb-0">
											{""}
											Google Analytics es un servicio de análisis web ofrecido
											por Google que rastrea e informa el tráfico del sitio web.
											Google utiliza los datos recopilados para rastrear y
											monitorear el uso de nuestro servicio. Estos datos se
											comparten con otros usuarios de Google. servicios. Google
											puede utilizar los datos recopilados para contextualizar y
											personalizar los anuncios propios red publicitaria.
										</p>
										<p>
											Para obtener más información sobre las prácticas de
											privacidad de Google, visite la página web de Privacidad y
											condiciones de Google:
											<a
												target="blank"
												className="text-decoration-none text-dark"
												href="https://policies.google.com/privacy?hl=en"
											>
												https://policies.google.com/privacy?hl=en
											</a>
										</p>
										<li> Servicios web de Amazon (AWS) </li>
										<p>
											Para obtener más información sobre las prácticas de
											privacidad de AWS, visite la página web del Aviso de
											privacidad de AWS:
											<a
												target="blank"
												className="text-decoration-none text-dark"
												href="https://aws.amazon.com/privacy/?nc1=h_ls"
											>
												https://aws.amazon.com/privacy/?nc1=h_ls{" "}
											</a>
										</p>
										<li>Pagos </li>
										<p>
											Podemos proporcionar productos y / o servicios pagados
											dentro del Servicio. En ese caso, utilizamos servicios de
											terceros para procesamiento de pagos (por ejemplo,
											procesadores de pagos).
											<br />
											No almacenaremos ni recopilaremos los datos de su tarjeta
											de pago. Esa información se proporciona directamente a
											nuestro tercero. procesadores de pagos cuyo uso de su
											información personal se rige por su Política de
											privacidad. Estos pagos procesadores se adhieren a los
											estándares establecidos por PCI-DSS como gestionado por el
											PCI Security Standards Council, que es un esfuerzo
											conjunto de marcas como Visa, MasterCard, American
											Expresar y descubrir. Los requisitos de PCI-DSS ayudan a
											garantizar manejo seguro de la información de pago.
										</p>

										<p className="mt-4">
											El procesador de pagos disponible en los sitios web de
											UshowMe y dominios es: Stripe
										</p>
										<p>
											Su política de privacidad se puede ver en
											<a
												target="blank"
												className="text-decoration-none text-dark"
												href="https://stripe.com/en-pt/privacy"
											>
												https://stripe.com/en-pt/privacy
											</a>
										</p>
									</ul>
								</div>
							),
						},
						{
							t: "Vínculos a otros sitios:",
							d: (
								<div>
									<p>
										Nuestro Servicio puede contener enlaces a otros sitios que
										no son operado por nosotros. Si hace clic en el enlace de un
										tercero, será dirigido al sitio de ese tercero. Le
										recomendamos encarecidamente para revisar la Política de
										privacidad de cada sitio que visite. no tiene control y no
										asume ninguna responsabilidad por el contenido, políticas de
										privacidad o prácticas de terceros sitios o servicios.
									</p>
								</div>
							),
						},
						{
							t: "Privacidad de los niños:",
							d: (
								<div>
									<p>
										Nuestro Servicio no se dirige a nadie menor de 13 años.
										("Niños").
									</p>
									<p>
										No recopilamos a sabiendas información de identificación
										personal información de cualquier persona menor de 13 años.
									</p>
									<p>
										Si es padre o tutor y sabe que su El niño nos ha
										proporcionado datos personales, contáctenos. Si nos damos
										cuenta de que hemos recopilado datos personales de
									</p>
									<p>
										niños sin verificación del consentimiento de los padres, lo
										haremos tomar las medidas necesarias para eliminar esa
										información de nuestra servidores.
									</p>
								</div>
							),
						},
						{
							t: "Cambios en esta Política de privacidad:",
							d: (
								<div>
									<p>
										Es posible que actualicemos nuestra Política de privacidad
										de vez en cuando. Lo haremos notificarle de cualquier cambio
										mediante la publicación de la nueva Política de privacidad
										en esta página.
									</p>
									<p>
										Le informaremos por correo electrónico y / o un aviso
										destacado en nuestro Servicio, antes de que el cambio entre
										en vigencia y actualizar la "fecha de vigencia" en la parte
										superior de esta Privacidad Política. Se le recomienda que
										revise esta Política de privacidad. periódicamente para
										cualquier cambio. Cambios a esta política de privacidad son
										efectivos cuando se publican en esta página.
									</p>
								</div>
							),
						},
						{
							t: "Contáctenos:",
							d: (
								<div>
									<p>
										Si tiene alguna pregunta sobre esta Política de privacidad,
										por favor contáctenos por correo electrónico:
										<a
											target="blank"
											className="text-decoration-none text-dark"
											href="mailto:legal@ushowme.tv"
										>
											legal@ushowme.tv
										</a>
									</p>
								</div>
							),
						},
					],
				},
				// BODY END
			},
			terms: {
				// HERO START
				hero: "Términos y Condiciones",
				// HERO END

				// SIDEBAR START
				sideBar: [
					{ t: "SOBRE NOSOTROS" },
					{ t: "ESPECTÁCULOS SELECCIONADOS" },
					{ t: "HÍBRIDO ES EL FUTURO" },
					{ t: "CÓMO FUNCIONA" },
					{ t: "¿QUIÉN ERES TÚ?" },
					{ t: "Preguntas más frecuentes" },
				],
				// SIDEBAR END

				// SIDEBAR START
				sideBar2: [
					{ t: "SOBRE NOSOTROS" },
					{ t: "HÍBRIDO ES EL FUTURO" },
					{ t: "¿QUIÉN ERES TÚ?" },
					{ t: "ESPECTÁCULOS SELECCIONADOS" },
					{ t: "CÓMO FUNCIONA" },
					{ t: "Preguntas más frecuentes" },
				],
				// SIDEBAR END
				// FOOTER START
				footer: [
					{
						t: "Cómo funciona",
						l: "/howItWorks",
					},
					{
						t: "Preguntas más frecuentes",
						l: "/faq",
					},
					{
						t: "Trabajos",
						l: "/jobs",
					},
					{
						t: "Contáctenos",
						l: "",
					},
					{
						t: "medios de comunicación",
						l: "",
					},
					{
						t: "Política de privacidad",
						l: "/privacyPolicy",
					},
					{
						t: "Términos & amp; condiciones",
						l: "/termsConditions",
					},
				],
				footerBtn: "Ver todos los programas",
				// FOOTER END

				// PARTNER START
				newsletter1: "Suscríbete al boletín",
				newsletterBtn: "Enviar",
				// PARTNER END

				// BODY START
				h1: "Última actualización: 10 de junio de 2021",

				topData: [
					{
						p: <h4 className="fw-bold mt-5"> Su acuerdo </h4>,
					},
					{
						p: (
							<p className="mt-5">
								Gracias por mostrar interés en utilizar nuestra aplicación web.
							</p>
						),
					},
					{
						p: (
							<p>
								Este es un acuerdo legal vinculante entre USMLive, Lda, ubicado
								en Rua António Santos Serrador 88 R / C dto, 2415-399 Leiria,
								referido en estos Términos y Condiciones como "UshowMe" o
								"Compañía", un proveedor de servicios de transmisión de video
								interactivo y usted como individuo y, en su caso, la empresa u
								otra entidad legal usted representa ("Usted"). Estos Términos y
								Condiciones ("T&C") rigen su acceso y uso de los servicios,
								contenidos y funcionalidades disponibles, así que léalos
								atentamente antes de utilizar el servicios. UshowMe se reserva
								el derecho de limitar o rescindir su acceder a los servicios o
								dar por terminado o suspender su registro o dar cuenta del
								incumplimiento de estos T&C por cualquier motivo en cualquier
								momento. Acceso a determinadas funciones o parte de los
								servicios puede no estar disponible para todos los usuarios.
							</p>
						),
					},
				],

				list: {
					t: "Contenido:",
					nList: [
						"Aceptación",
						"Cuentas",
						"Servicios",
						"Creación de eventos",
						"Monetización de contenido",
						"Tarifa",
						"Contenido generado por el usuario (CGU)",
						"Concesión de licencia: propiedad intelectual para cuentas de transmisores",
						"Propiedad intelectual del contenido de UshowMe",
						"Confidencialidad",
						"Renuncias y limitaciones de responsabilidad",
						"Modificaciones a estos Términos y condiciones",
					],
				},

				bodyList: [
					{
						t: "1. Aceptación",
						d: (
							<div>
								<h5> A) Versión Beta </h5>
								<p>
									Usted comprende y acepta que UshowMe y sus servicios son se
									proporciona como una versión "beta" y está disponible en una
									Base "tal cual". Los servicios de UshowMe pueden contener
									errores, errores y otros problemas Sin embargo, trabajaremos
									lo más rápido posible para arreglar, parchear o actualizar
									nuestros servicios para hacerlos como estable y funcional como
									sea posible, así que si encuentra algún error, errores u otros
									problemas, le rogamos que informe a nosotros mediante el
									correo electrónico: bugs@ushowme.tv
								</p>

								<h5> B) Actualizaciones de software </h5>
								<p>
									UshowMe puede de vez en cuando, a su exclusivo criterio,
									desarrollar y proporcionar Actualizaciones de software
									("Actualizaciones"). Las actualizaciones pueden incluir,
									actualizaciones, parches, correcciones de errores y otras
									modificaciones a mejorar el rendimiento y la estabilidad de
									nuestro sistema y la servicios. Las actualizaciones también
									pueden modificar o eliminar en su totalidad ciertas
									características y funcionalidades previamente disponibles.
									usted acepta que UshowMe no tiene la obligación de
									proporcionar Actualizaciones o para continuar proporcionando o
									habilitando cualquier característica particular o
									funcionalidades. Si no desea tales Actualizaciones, todo el o
									parte de los servicios puede no estar disponible. Usted
									reconoce que es posible que deba instalar Actualizaciones para
									utilizar el servicios y acepta instalar de inmediato cualquier
									actualización proporcionado tan pronto como sea posible. Su
									uso continuado del services es su aceptación de estos Términos
									de servicio.
								</p>

								<h5> C) Suspensiones de servicio y tiempo de inactividad </h5>
								<p>
									Usted reconoce que: De vez en cuando, podemos realizar tiempo
									de inactividad programado, para permitirnos realizar el
									mantenimiento y / o realizar modificaciones en nuestros
									servicios y en la medida en que puede, nos esforzaremos por
									proporcionarle un correo electrónico previo aviso de cualquier
									suspensión de servicio y tiempo de inactividad programado y
									para publicar actualizaciones en el sitio de UshowMe con
									respecto a la reanudación de servicios posteriores a dicha
									suspensión, pero no tendrá responsabilidad por la manera en
									que podemos hacerlo o si fallamos para hacerlo.
								</p>
								<p>
									Su acceso y uso de los servicios puede suspenderse por la
									duración de cualquier tiempo de inactividad no anticipado o no
									programado o indisponibilidad de cualquier parte o de todos
									los servicios para cualquier motivo, y que los servicios están
									sujetos a interrupciones y fallas por una variedad de razones
									fuera del control de UshowMe incluso:
								</p>

								<ul>
									<li>
										{""}
										Recepción de datos móviles y Wi-Fi, proveedores de
										servicios, transportistas, y otros, que pueden causar fallas
										o demoras de servicios.
									</li>
									<li>
										Cortes de energía, fallas del sistema u otras
										interrupciones, y también tendremos derecho, sin ninguna
										responsabilidad hacia usted, a suspender el acceso a
										cualquier parte o todos los servicios en cualquier tiempo.
									</li>
									<li>
										En caso de un ataque al servicio u otro evento que
										determinamos, a nuestro exclusivo criterio, que puede
										suponer un riesgoal servicio, a usted oa cualquiera de
										nuestros otros clientes.
									</li>
									<li>
										si el servicio no fue suspendido, o en el caso de que
										nosotros determinar, a nuestro exclusivo criterio, que es
										necesario o prudente hacerlo por razones legales o
										reglamentarias.
									</li>
								</ul>

								<p>
									No tendremos responsabilidad alguna por ningún daño, pasivos,
									pérdidas (incluida cualquier pérdida de datos o beneficios) o
									cualquier otra consecuencia en la que pueda incurrir como
									resultado de cualquier suspensión del servicio.
								</p>

								<h5> D) Seguridad </h5>
								<p>
									Nos esforzamos por mantener seguros su cuenta y su contenido,
									pero no podemos garantizar que tendremos éxito en hacerlo,
									dado el naturaleza de Internet. Reconoces que llevas lenguado
									responsabilidad de utilizar la seguridad adecuada para
									proteger su cuenta y contenido y le recomendamos
									encarecidamente que utilice tecnología de cifrado para
									proteger su cuenta y contenido de Acceso no autorizado.
								</p>
							</div>
						),
					},
					{
						t: "2. Cuentas",
						d: (
							<div>
								<h5> 2.1. Registro. </h5>
								<p>
									Para acceder a los recursos que ofrece UshowMe, es posible que
									se le solicite para crear una cuenta ("Cuenta") por correo
									electrónico, o iniciar sesión a través de social, y compartir
									ciertos detalles de registro u otros información. Solo puede
									crear una (1) cuenta por correo electrónico dirección, con la
									excepción de nuestras cuentas vinculadas en Streamer Cuentas
									en la sección 2.5. debajo. Es una condición para utilizar
									Nuestro Servicios e información interactivos. Tu proporcionas
									que todo la información es correcta, actual y completa. Usted
									acepta que Toda la información que proporcione se rige por
									nuestra Privacidad. Política, y que da su consentimiento a
									todas las acciones que tomemos con respeto a su información de
									acuerdo con nuestra privacidad Política. Si no está de acuerdo
									o no puede cumplir con alguno de los estos Términos, no use ni
									acceda a los Servicios.
								</p>

								<h5> 2.2. Elegibilidad y privacidad de los niños. </h5>
								<p>
									Debe tener al menos 13 años para crear una cuenta o utilizar
									Nuestros servicios. Las personas menores de la edad aplicable
									deben veces utilizamos nuestros servicios solo en conjunción
									con y bajo el supervisión de un padre o tutor legal que tenga
									al menos 18 años años de edad. En todos los casos, dicho padre
									o tutor legal es el usuario y es responsable de todas y cada
									una de las actividades bajo la cuenta.
								</p>
								<p>
									Nuestro Servicio no se dirige a nadie menor de 13 años.
									("Niños"). No recopilamos personalmente a sabiendas
									información identificable de niños menores de 13 años. padre o
									tutor y se entera de que sus hijos tienen nos proporcionó
									información personal, comuníquese con nosotros. Si nos damos
									cuenta de que hemos recopilado información personal de un niño
									menor de 13 años sin verificación de los padres
									consentimiento, tomamos medidas para eliminar esa información
									de nuestro servidores.
								</p>

								<h5>
									2.3. Activando su cuenta (que no use Social log in
									autenticación).
								</h5>

								<p>
									Cuando se registre con nosotros, le enviaremos un correo
									electrónico para misma dirección de correo electrónico que nos
									ha proporcionado, que contiene instrucciones para activar su
									cuenta. Solo después de su cuenta está registrado y activo,
									puede utilizar los servicios en su totalidad.
								</p>

								<h5>
									{" "}
									2.4. Cuentas individuales ("Cuentas de asistentes a eventos"){" "}
								</h5>
								<p>
									Si se registra para los servicios como asistente de eventos,
									garantiza que la información de registro que proporciona es, y
									permanecerá durante todo el Plazo, exacto y completo, y para
									mantener la exactitud de dicha información.
								</p>

								<h5>
									{" "}
									2.5. Cuentas de creador de eventos ("Cuentas de transmisores"){" "}
								</h5>
								<p>
									Si se registra en los servicios como Streamer, garantiza que
									la información de registro que proporciona es, y permanecerá
									durante todo el Plazo, precisa y completa. En Para transmitir
									con nosotros, debe crear una cuenta de Streamer y luego de
									proporcionar los detalles necesarios y aprobados por nuestro
									equipo, se le permite transmitir en vivo contenido de video
									desde su espectáculos en vivo. Si trabaja para un sello,
									agencia, teatro, lugar o cualquier otra empresa, usted
									garantiza que está debidamente autorizado para operar en
									nombre de esa empresa o marca y sus empleados, funcionarios,
									representantes y otros agentes acceder a los servicios están
									debidamente autorizados para acceder a los servicios y
									vincularlo legalmente a este Acuerdo y a todos transacciones
									realizadas bajo su Cuenta. Adicional información may ser
									requerido por nuestros servicios. Si eres un intérprete como
									artista, banda, DJ u otro, y desea transmita con nosotros,
									también necesita una cuenta de Streamer. Para esos que ya creó
									una cuenta Event-Goer, puede solicitar vinculación de cuenta,
									para usar solo una (1) cuenta de correo electrónico para ambos
									tipos de cuentas.
								</p>

								<h5>
									2.6. Acciones en su cuenta (Event-Goer y Streamer cuentas)
								</h5>
								<p>
									Usted es el único plenamente responsable de todas las
									actividades que suceder en su cuenta. Aceptas notificarnos
									inmediatamente de cualquier uso no autorizado de su Cuenta, o
									si su Cuenta las credenciales se pierden o son robadas o
									cualquier otra infracción de seguridad. Es posible que se le
									considere responsable de las pérdidas sufridas por UshowMe o
									cualquier otro usuario de los servicios debido al uso de su
									cuenta por otra persona. UshowMe no se hace responsable de
									ninguna pérdida o daño que surja de su incumplimiento de la
									por encima de las obligaciones.
								</p>

								<h5>
									{" "}
									2.7. Código de conducta (que afecta a todas las cuentas){" "}
								</h5>
								<p>
									Para crear experiencias positivas para todos, tenemos creó el
									siguiente código de conducta que usted garantiza el respeto.
								</p>
								<p> Está prohibido: </p>

								<ul>
									<li>
										Usar los servicios para acosar, intimidar, acosar o
										cualquier tipo de discriminación;
									</li>
									<li>
										Publicar contenido o contenido pornográfico o sexualmente
										explícito. que contiene desnudez;
									</li>
									<li>
										Usar los servicios para amenazar o promover el discurso de
										odio, violencia o autolesión, actividades ilegales o
										peligrosas;
									</li>
									<li>
										Usar los servicios para cargar, distribuir o transmitir
										virus, gusanos, troyanos u otros virus maliciosos o dañinos
										materiales;
									</li>
									<li>
										Usar los servicios de una manera que socave el propósito o
										integridad de los servicios;
									</li>
									<li>
										Cargar o publicar la información personal o privada de
										cualquier tercero en los servicios;
									</li>
									<li>
										Subir o publicar publicidad no autorizada, promocional
										materiales, correo no deseado u otras solicitudes, incluidas
										las y / o contenido político;
									</li>
									<li>
										Cargar o publicar cualquier material que infrinja los
										derechos de autor, marca registrada, u otro derecho de
										propiedad intelectual u otro persona o entidad;
									</li>
									<li>
										Hacerse pasar por cualquier persona o entidad o su
										afiliación con cualquier persona o entidad;
									</li>
									<li> Proporcionar información falsa o engañosa; </li>
									<li>
										Creación de copias, modificaciones, desmontaje, reversión
										ingeniería, o la creación de obras derivadas de los
										servicios o cualquier contenido en el mismo;
									</li>
									<li>
										Usar los servicios con fines comerciales sin nuestro previo
										consentimiento por escrito o de otra manera distribuir,
										vender o otorgar licencias o sublicenciar los servicios;
									</li>
									<li>
										Incorporar los servicios, o cualquier parte de los
										servicios, en cualquier otro software, producto o servicio,
										sin nuestra consentimiento previo por escrito;
									</li>
									<li>
										Interferir o interrumpir los servicios o eludir cualquier
										medidas de seguridad o restricciones que hemos implementado;
									</li>
									<li>
										El uso de scripts automatizados para recopilar información
										del servicios;
									</li>
									<li>
										Usar los servicios de cualquier forma que UshowMe, en su
										única y exclusiva juicio exclusivo, se considera ofensivo u
										objetable, o que expone a UshowMe, los servicios u otros
										usuarios a responsabilidad o daño.
									</li>
								</ul>
							</div>
						),
					},
					{
						t: "3.Servicios",
						d: (
							<div>
								<p>
									Los servicios que brindamos servicios interactivos de
									transmisión en vivo para espectáculos musicales y
									representaciones artísticas y culturales.
								</p>
								<p>
									3.1. Sujeto a su cumplimiento de estos Términos y Condiciones,
									UshowMe le proporcionará acceso y uso de los Servicios
									UshowMe. Se puede acceder a los Servicios UshowMe solo a
									través de la interfaz web designada por UshowMe u otro
									herramientas proporcionadas por UshowMe, según corresponda.
								</p>
								<p>
									3.2. Los Servicios permitirán a los asistentes a eventos y
									transmisores acceder a determinadas características,
									funcionalidades, información y servicios proporcionados por
									nosotros y / o nuestras afiliadas, que pueden incluir, sin
									limitación, proporcionar Usuario registrado Cuentas con
									capacidad para:
								</p>
								<p>
									A) acceder, ver e incrustar ciertos contenidos
									audiovisualesent (incluidos, entre otros, determinados vídeos
									musicales y video de actuación);
								</p>
								<p>
									B) acceder a información y contenidos personalizados sobre
									música, artistas y bandas, como recomendaciones, sugerencias y
									notificaciones sobre contenido audiovisual, tickets y otros
									productos y servicios relacionados.
								</p>
							</div>
						),
					},
					{
						t: "4. Creación de eventos",
						d: (
							<p>
								Para la creación de eventos, UshowMe necesita autenticarse y
								validar las cuentas de Streamer. Solo los creadores de eventos y
								Los artistas asociados con las cuentas de Streamer validadas
								pueden tener acceso a la creación de eventos. Con este fin,
								UshowMe lo hará requieren más información y contamos con una
								validación proceso que puede tardar hasta 24 (veinticuatro)
								horas. Me muestras se reserva el derecho de rechazar o cancelar
								cualquier Cuenta de Streamer o evento creado en cualquier
								momento sin previo aviso, si no cumplen con estos términos.
							</p>
						),
					},
					{
						t: "5. Monetización de contenido",
						d: (
							<div>
								<p>
									Las cuentas de streamer pueden monetizar sus eventos y otorgar
									acceso al contenido y las interacciones de múltiples formas,
									como tickets, donaciones / consejos y / o cualquier otro
									formulario disponible.
								</p>
								<p>
									5.1. Socios comerciales: monetización de algunos de estos
									contenidos los servicios pueden ser proporcionados por
									nuestros socios comerciales y no por nosotros, que le
									informaremos y colocaremos un enlace de redireccionamiento a
									sus sitios web / aplicaciones para que usted pueda hacer
									negocios con ellos. En de alguna forma, es posible que
									necesitemos compartir algunos detalles de su cuenta
									información, y pueden solicitar más información necesaria para
									que los servicios funcionen (es decir, está comprando un
									boleto para acceder a un evento pago que es atendido por
									nuestro Negocio Socios, como una plataforma de venta de
									entradas y solicitan facturación
									<br />
									información y asociar el código de acceso al ticket con su
									cuenta de correo electrónico, para que podamos validarla en la
									plataforma de UshowMe).
								</p>
								<p>
									5.2. Cualquier socio comercial con el que hagamos negocios es
									obligado a respetar nuestros Términos y condiciones y Política
									de privacidad, y no utilizará su información de ninguna otra
									manera, que no sea para que el servicio esté disponible y sea
									funcional para usted y para nosotros, sin embargo, al utilizar
									los servicios de nuestro socio comercial, también Cumplir con
									respetar sus Términos y condiciones y Política de privacidad.
								</p>
								<p>
									5.3. Los boletos solo deben usarse en la fecha del evento, o
									no se considerará válido. Esto no le da derecho a cualquier
									reembolso.
								</p>
								<p>
									5.4. Es su responsabilidad verificar si el evento fue
									cancelado o reprogramado y es nueva fecha y hora. Lo haremos
									utilizar todos nuestros esfuerzos para informarle de la
									cancelación o reprogramación de un evento, pero no
									garantizamos que será informado de dicha cancelación o
									reprogramación antes de la evento.
								</p>
								<p>
									5.5. La reproducción, venta, reventa o canje de entradas está
									prohibido. En estas situaciones, nosotros y / o nuestro
									negocio Los socios tienen derecho a cancelar el boleto y su
									cuenta. Sin embargo, apoyamos que compre boletos y ofrezca
									ellos como regalo.
								</p>
								<p>
									5.6. Las entradas no deben utilizarse con fines publicitarios,
									promociones, concursos o sorteos sin nuestro consentimiento,
									Cuentas de Streamer asociadas con y / o nuestro negocio
									Socios.
								</p>
								<p>
									5.7. Términos adicionales a los boletos: Su boleto es
									propiedad del Cuentas de Streamer y / o socios comerciales o
									nosotros, ya sea un Licencia personal revocable que puede ser
									retirada o rechazada. su admisión en cualquier momento, e hizo
									un reembolso de lo visible precio en el boleto.
								</p>
								<p>
									5.7.1. Nuestras cuentas de Streamer pueden prohibirnos
									realizar cambios o reembolsos después de la compra, o en caso
									de pérdida, robo, daño o destrucción total o parcial del
									billete. Es <br />
									es su responsabilidad mantener su boleto seguro.
								</p>
								<p>
									5.7.2. Como UshowMe actúa como intermediario para el ticket
									adquisición y propiedad, no tenemos ninguna responsabilidad
									contractual para usted con respecto al evento y las entradas
									en cuestión, a menos que haya es de UshowMe, cualquier
									conducta negligente, inexistente representación o si ocurre la
									violación de cualquier ley relevante. Para una pequeña
									cantidad de eventos, debidamente identificados, UshowMe puede
									actuar como principal y no como un título intermediario, es
									decir que el contrato para el evento y la adquisición de
									entradas es apuestaWeen You and UshowMe, y le informaremos de
									este condición especial.
								</p>
							</div>
						),
					},
					{
						t: "6. Tarifas",
						d: (
							<div>
								<p>
									UshowMe cobra por minutos de transmisión interactiva y puede
									Facilitar los pagos por compras de Contenido, incluido el
									digital. Contenido disponible a través de streaming y descarga
									a través de Servicio ("Contenido digital"), mercancía física y
									en línea ("Mercancía") y suscripciones de artistas (cuentas de
									streamer) y otros puestos a disposición.
								</p>
								<p> 6.1. Tarifas de servicio </p>
								<p>
									En consideración a su uso de cualquiera de los Servicios
									Pagos, usted acepta pagar las tarifas establecidas en el
									Servicio aplicable Descripción en la página Creación de
									eventos o cualquier contrato firmado con nosotros.
								</p>
								<p>
									Las tarifas por cualquier Servicio o nueva característica del
									Servicio serán efectivas al publicarlo en el Sitio para el
									Servicio correspondiente. Nosotros puede aumentar o agregar
									nuevas tarifas por cualquier Servicio existente o
									Característica del servicio o implementar una tarifa para
									cualquier Función de servicio o servicio gratuito, otorgándole
									treinta (30) aviso con días de antelación. Dicho aviso se
									publicará en el Sitio. en la página Creación de eventos de
									servicio para los afectados.
								</p>
								<p>
									Servicio. Acepta que es responsable de comprobar el Sitio cada
									mes para confirmar si hay nuevas tarifas y su (s) fecha (s) de
									vigencia. Todas las tarifas pagaderas por usted son exclusivas
									de impuestos y aranceles aplicables, incluidos, entre otros,
									IVA e impuesto sobre las ventas aplicable. Deberá proporcionar
									tal información para nosotros según sea razonablemente
									necesario para determinar si estamos obligados a cobrarle el
									IVA, incluso sin limitación de su número de identificación de
									IVA.
								</p>
								<p> 6.2. Pago </p>
								<p>
									Podemos especificar la forma en que pagará las tarifas, y
									tales El pago estará sujeto a nuestras cuentas por cobrar
									generales. políticas vigentes de vez en cuando. Todos los
									importes pagaderos por usted bajo este Acuerdo se hará sin
									compensación o reconvención y sin deducción ni retención. Si
									alguna la deducción o retención es requerida por la ley
									aplicable, usted nos notificará y nos pagará los importes
									adicionales que necesario para asegurar que la cantidad neta
									que recibimos, después dicha deducción y retención, es igual a
									la cantidad que haber recibido si no se hubiera realizado tal
									deducción o retención requerido. Además, nos proporcionará
									documentación que acredite que las retenciones y deducciones
									los importes se han pagado a la autoridad fiscal
									correspondiente.
								</p>
							</div>
						),
					},
					{
						t: "7. Contenido generado por el usuario (CGU)",
						d: (
							<div>
								<p>
									El Servicio también brinda a los usuarios la posibilidad de
									agregar, cargar, enviar, distribuir o publicar ("Enviar")
									contenido, videos (incluida la aparición en transmisión en
									vivo en funciones como Top Fans y VIP Stage), comentarios
									escritos en el foro, datos, texto, fotografías, gráficos u
									otra información al Sitio (colectivamente, los "Envíos del
									usuario"). Al enviar el usuario Contenido generado en el Sitio
									o de otro modo a través del Servicio, usted: reconoce que al
									enviar cualquier Usuario Contenido generado en el sitio, está
									publicando ese sumisión, y que puede ser identificado
									públicamente por su ID de usuario o nombre de cuenta en
									asociación con dicho usuario Contenido generado; mediante el
									envío de cualquier contenido generado por el usuario a través
									del Sitio o el Servicio, usted otorga a UshowMe un mundial, no
									exclusivo, perpetuo, irrevocable, libre de regalías,
									totalmente pagado, sublicenciable y transferible licencia para
									usar, editar, modificar, reproducir, distribuir, preparar
									trabajos derivados de, exhibir públicamente, realizar
									públicamente (incluso a través de la audiencia y por medio de
									una transmisión de audio y video digital), comunicarse con el
									Público, sincronizar y explotar completamente al Usuario
									Contenido generado en relación con el Sitio, el Servicio y El
									negocio de UshowMe (y sus sucesores y cesionarios), incluyendo
									sin limitación para promover y redistribuir parte o la
									totalidad del Sitio (y trabajos derivados del mismo) o el
									Servicio en cualquier formato de medios y a través de
									cualquier canal de medios (incluidos, entre otros, sitios web
									de terceros), ya sea ahora conocido o desarrollado en el
									futuro. Por la presente también haces y deberás otorgar a cada
									usuario registrado del Sitio y / o el Servicio un licencia no
									exclusiva para acceder a su contenido generado por el usuario
									a través del Sitio y el Servhielo, y usar, editar, modificar,
									reproducir (en todos y cada uno de los dispositivos propiedad
									o controlados por el usuario), distribuir, preparar trabajos
									derivados de, mostrar y realizar dicho Contenido generado por
									el usuario para uso personal únicamente para uso personal y no
									comercial.
								</p>
								<p>
									Para mayor claridad, la concesión de licencia anterior a
									UshowMe no afectar sus otros derechos de propiedad o licencia
									en su Usuario Contenido generado, incluido el derecho a
									otorgar licencias para el material en su contenido generado
									por el usuario, a menos que se acuerde lo contrario por
									escrito; representar y garantizar, y puede demostrar a plena
									satisfacción de UhshowMe a pedido que Tú;
								</p>
								<p>
									A) posee o controla todos los derechos sobre todo el contenido
									de su Contenido generado por el usuario, o que el contenido de
									dicho usuario El contenido generado es de dominio público o
									tiene licencia directa,
								</p>
								<p>
									B) tiene plena autoridad para actuar en nombre de todos y cada
									uno propietarios de cualquier derecho, título o interés sobre
									cualquier contenido en su Contenido generado por el usuario
									para utilizar dicho contenido como contemplado en estos
									Términos de uso y para otorgar la licencia derechos
									establecidos anteriormente,
								</p>
								<p>
									C) tiene permiso para usar el nombre y la imagen de cada
									persona individual identificable y para utilizar tales la
									información personal o de identificación del individuo como
									contemplado en estos Términos y condiciones; y
								</p>
								<p>
									D) está autorizado a otorgar todos los derechos sobre el
									contenido generado por el usuario para UshowMe y todos los
									usuarios del Servicio; acepta pagar todas las regalías y otros
									montos adeudados a cualquier persona o entidad, incluidos los
									PRO, adeudados a su envío de cualquier Contenido generado por
									el usuario al Servicio; que el uso u otra explotación de dicho
									Usuario Contenido generado por UshowMe y uso u otra
									explotación por usuarios del Sitio y el Servicio según lo
									contemplado por este El acuerdo no infringirá ni violará los
									derechos de ningún tercero. parte, incluidos, entre otros, los
									derechos de privacidad, derechos de publicidad, derechos de
									autor, derechos contractuales o cualquier otro propiedad
									intelectual o derechos de propiedad; y entender que UshowMe
									tendrá derecho a eliminar, editar, modificar, reformatear,
									extraer o traducir cualquier material, contenido o información
									enviada por usted; y que toda la informacion publicado
									públicamente o transmitido de forma privada a través del Sitio
									es la responsabilidad exclusiva de la persona de la que dicho
									contenido originado y que UshowMe no será responsable de
									ningún error u omisiones en cualquier contenido; y que UshowMe
									no puede garantizar la identidad de cualquier otro usuario con
									el que pueda interactuar en el curso de uso del Servicio.
									UshowMe no respalda y no tiene control sobre ningún Contenido
									generado por el usuario, sin embargo, lo hacemos ofrecer
									cuentas de Streamer con herramientas de moderación de
									contenido, en para que sea una experiencia positiva para
									todos. UshowMe no puedo Garantizar la autenticidad de los
									datos que los usuarios puedan facilitar. sobre ellos mismos.
									Reconoce que todo el Contenido al que accede que utiliza el
									Servicio es bajo su propio riesgo y será el único responsable
									de cualquier daño o pérdida a cualquier parte resultante de la
									misma.
								</p>
							</div>
						),
					},
					{
						t: "8.Concesión de licencia: propiedad intelectual para cuentas de transmisores",
						d: (
							<div>
								<p>
									El Servicio proporciona a las Cuentas Streamer la capacidad de
									cargar Contenido digital propiedad o controlado por dicho
									Streamer Cuentas en el sitio, incluidas, entre otras, la
									transmisión en vivo contenido, grabaciones de video y videos
									sincronizados con sonido Grabaciones y otras obras
									audiovisuales, y las obras musicales incorporados en
									grabaciones de sonido y videos musicales.
									<br />
									UshowMe no tendrá ningún derecho de propiedad sobre ningún
									elemento de un Contenido de cuentas de Streamer, sin embargo,
									UshowMe necesita el siguiente licencia para realizar el
									Servicio. Cada Streamer La carga de Contenido de la cuenta al
									Servicio otorga a UshowMe y sus sublicenciatarios autorizados
									y distribuidores, si los hubiere, el derecho y licencia
									mundial, no exclusivo, libre de regalías para:
								</p>
								<p>
									A) reproducir, distribuir, realizar públicamente (incluso en
									un a través de la audiencia y por medio de un audio digital y
									transmisión de video), mostrar públicamente, crear derivadas
									obras de, comunicar al público, sincronizar y de otro modo
									explotar (1) el contenido de la cuenta Streamer y realizar el
									Servicio en nombre de la cuenta Streamer (p. Ej., Reproducir,
									transccodificar, copiar y almacenar el contenido de la cuenta
									Streamer en servidores informáticos propiedad y / o operados
									por o en nombre de UshowMe o sus sublicenciatarios y
									distribuidores autorizados, y realizar públicamente,
									transmitir, sincronizar, transmitir, distribuir, y reproducir
									el contenido de la cuenta Streamer) utilizando cualquier
									tecnologías o metodologías conocidas ahora o en el futuro
									desarrollado, y (2) explotar todos los trabajos asociados con
									derechos de autor o metadatos, que incluyen, entre otros,
									letras de canciones y anotaciones musicales, carátulas de
									álbumes, fotografías, gráficos, y texto descriptivo en
									relación con el Servicio);
								</p>
								<p>
									B) permitir a los usuarios del Servicio recibir actuaciones
									públicas y exhibiciones públicas del Contenido de la Cuenta
									Streamer y Obras de arte y para reproducir el contenido de la
									cuenta Streamer y Obras de arte en todos y cada uno de los
									dispositivos propiedad o controlados por el usuario con fines
									no comerciales y recibir actuaciones y exhibiciones de la
									misma; y
								</p>
								<p>
									C) reproducir, usar y publicar, y permitir que otros
									reproducir, usar y publicar, el nombre (s), marcas
									registradas, semejanzas y materiales personales y biográficos
									de la Cuenta Streamer, en relación con la provisión de la
									Servicio. Para permitir que la empresa explote su cuenta de
									Streamer Contenido de conformidad con las disposiciones
									anteriores, por la presente concede a UshowMe the mundial, no
									exclusivo, libre de regalías, derecho sublicenciable y
									transferible para usar, distribuir, reproducir, copiar y
									mostrar sus marcas comerciales, marcas de servicio, eslóganes,
									logotipos o derechos de propiedad similares (colectivamente,
									las "Marcas comerciales") únicamente en relación con el
									Servicio o en la comercialización, promoción o publicidad del
									servicio, incluso en todas las formas de marketing, promoción
									y materiales publicitarios ahora conocidos o creados en el
									futuro. Por subir cualquier Contenido o Obras de Arte al
									Sitio: usted representa y garantiza, y puede demostrar a
									UshowMe el pleno satisfacción previa solicitud, que
								</p>
								<p>
									D) posee o controla todos los derechos sobre su Música y
									Contenido de video y obras de arte (o que dicha música y obras
									de arte son de dominio público o han sido directamente con
									licencia a la Cuenta Streamer por escrito con una concesión de
									derechos suficientes para permitir que la cuenta Streamer
									entre en este Acuerdo y otorgar todos los derechos con
									respecto a el Contenido o las Obras de Arte de la Cuenta
									Streamer como se establece en este acuerdo);
								</p>
								<p>
									E) tiene un comprobante de compra de Música y otro Contenido
									que adquirido para utilizarlo de forma comercial y realizar su
									negocio (por ejemplo, compró una música / canción para
									reproducirla en el público en plataformas donde el Titular
									original, te conceda una licencia para esos derechos de
									autor);
								</p>
								<p>
									F) tiene plena autoridad para actuar en nombre de todos y cada
									uno propietarios de cualquier derecho, título o interés sobre
									cualquier Contenido sube al Servicio y las Obras de Arte;
								</p>
								<p>
									G) tiene permiso para usar el nombre y la imagen de cada uno
									Persona individual identificable cuyo nombre o semejanza es
									contenidos o utilizados dentro del Contenido y / o Obras de
									Arte, y para utilizar la información personal o de
									identificación de dicha persona (para la medida en que dicha
									información se utilice o contenga en el Contenido y / o obras
									de arte) según lo contemplado por estos Términos y Condiciones
									y
								</p>
								<p>
									H) está autorizado a otorgar todos los derechos sobre el
									contenido y / o las obras de arte para UshowMe y todos los
									usuarios del Servicio. usted declara y garantiza que el uso o
									otra explotación de su contenido y / o obras de arte por parte
									de UshowMe y sus sublicenciatarios autorizados y
									distribuidores y / o por los usuarios del Sitio según lo
									contemplado por este Acuerdo no infringir o violar los
									derechos de cualquier tercero, incluidos, sin limitación,
									cualquier derecho de privacidad, derecho de publicidad,
									derechos de autor, derechos contractuales o cualquier otro
									intelectual propiedad o derechos de propiedad, usted declara y
									garantiza que, en la medida en que usted sea el compositor y /
									o creador / co-creador de cualquiera o todas las Obras
									musicales incorporadas en su Sonido Grabaciones o videos
									musicales, ya sea en su totalidad o en parte (por ejemplo,
									como coguionista), tienes todo el derecho, el poder y la
									autoridad para otorgar los derechos establecidos en este
									Acuerdo sin perjuicio de las disposiciones de cualquier
									acuerdo que pueda tener celebrado con cualquier organización
									de derechos de ejecución, ya sea con sede en los Estados
									Unidos o en cualquier otro lugar, o cualquiermúsica editor, y
									que usted es el único responsable de tomar todas las pasos
									necesarios para informar a dicho editor de música de su
									subvención de una licencia libre de regalías para UshowMe para
									el público actuaciones y comunicaciones al público de su
									Contenido Funciona, y que no hay honorarios ni pagos de ningún
									tipo. se adeudará a cualquier editor de música por la
									interpretación pública o comunicación al público de sus Obras
									de contenido. usted declarar y garantizar que no se adeudarán
									honorarios de ningún tipo cualquier tercero, incluidos, entre
									otros, cualquier sindicato, gremio, vocalista o músico no
									destacado, ingeniero o productor, para el uso o reutilización
									de su Contenido según lo autorizado bajo este acuerdo.
								</p>
							</div>
						),
					},
					{
						t: "9.Propiedad intelectual del contenido de UshowMe",
						d: (
							<div>
								<p>
									De vez en cuando podemos poner a su disposición, a través del
									sitio y / o un portal para desarrolladores, una variedad de
									software, datos y otros contenidos y documentación impresa y
									electrónica para su acceso, instalación y / o uso en relación
									con el Servicios (todos estos materiales, excepto los
									fabricados específicamente disponible por nosotros bajo
									términos de licencia separados, el "UshowMe Propiedades ”).
									Las Propiedades de UshowMe pueden incluir sin limitación: API;
									herramientas de desarrollo para su uso en conexión con las
									API, como el código fuente de muestra y las bibliotecas;
									artículos y documentación para su uso en relación con el uso y
									implementación de las API (colectivamente, "Documentación");
									especificaciones que describen el operacional y funcional
									capacidades, limitaciones de uso, técnicas y de ingeniería
									requisitos y criterios de prueba y rendimiento relevantes para
									el uso adecuado de un Servicio y sus API relacionadas y otros
									tecnología, materiales textuales disponibles como parte de la
									Servicio ("Materiales de texto"); y otras formas de digital
									contenido, datos, texto, imágenes, logotipos, diseños de
									interfaz de usuario y otros diseños creativos, audio y video
									(con el texto Materiales, colectivamente, "Contenido de
									UshowMe"). Estos términos & Las condiciones se aplican a su
									acceso, instalación y uso del Propiedades de UshowMe y
									Contenido de UshowMe. Aparte de lo limitado derechos y
									licencias expresamente establecidos en este Acuerdo, nosotros
									se reservan todos los derechos, títulos e intereses (incluidos
									todos propiedad intelectual y derechos de propiedad) en y
									para: (a) los Servicios, (b) las Propiedades de UshowMe, (c)
									las Marcas, y (d) cualquier otra tecnología y software que
									proporcionemos o usemos para proporcionar los Servicios y las
									Propiedades de UshowMe, y todos obras derivadas de lo
									anterior. No lo hace, en virtud de este Acuerdo o de otro
									modo, adquirir cualquier interés de propiedad o derechos en
									cualquiera de los anteriores.
								</p>
							</div>
						),
					},
					{
						t: "10.Confidencialidad",
						d: (
							<div>
								<p>
									No divulgará Información confidencial de UshowMe durante el
									Plazo o en cualquier momento durante el período de dos (2)
									años después del final del Plazo. Como se usa en este Acuerdo,{" "}
									{""}
									<span className="fw-bold">
										{""}
										“Información confidencial de UshowMe” {""}
									</span>{" "}
									{""}
									significa toda la información no pública divulgada por
									nosotros, nuestro negocio socios o nuestros o sus respectivos
									agentes o contratistas que está designado como confidencial o
									que, dada la naturaleza del información o circunstancias que
									rodean su divulgación, razonablemente debe entenderse que es
									confidencial. Me muestras La información confidencial incluye,
									sin limitación:
								</p>
								<p>
									A) información no pública relacionada con nuestro o nuestro
									negocio tecnología de socios, clientes, planes de negocios,
									promociones y actividades de marketing, finanzas y otros
									asuntos comerciales (incluyendo, pero no limitado a, cualquier
									información sobre o que implica una de nuestras llamadas
									pruebas beta o una prueba beta producto que obtiene como
									resultado de su participación en tal prueba beta),
								</p>
								<p>
									B) información de terceros que estamos obligados a conservar
									confidencial y
								</p>
								<p>
									C) la naturaleza, contenido y existencia de cualquier
									discusión o negociaciones entre usted y nosotros. La
									información confidencial no no incluir ninguna información
									información que usted y nosotros somos requerido para divulgar
									por ley.
								</p>
								<p>
									{" "}
									10.1. Conflicto con el acuerdo de no divulgación independiente{" "}
								</p>
								<p>
									Si usted y nosotros somos partes de una no divulgación
									separada acuerdo ("NDA independiente") y hay un conflicto
									entre los términos de the Stand-Alone NDA, los términos del El
									NDA autónomo controlará.
								</p>
							</div>
						),
					},
					{
						t: "11. Renuncias y limitaciones de responsabilidad",
						d: (
							<div>
								<p>
									Porque UshowMe no es el comprador ni el vendedor en ningún
									Transacciones de venta de entradas y mercancías entre Streamer
									Cuentas y cuentas de asistentes a eventos y no es el agente de
									ya sea para cualquier propósito, UshowMe no tiene el deber de
									resolver y no participará en la resolución de disputas entre
									participantes relacionados con o que surjan de tales
									Transacciones de venta de entradas y mercancías. Las cuentas
									de Streamer son individualmente responsable del cumplimiento
									de todos los consumidores leyes de derechos aplicables a su
									venta de entradas y mercancías Transacciones, incluidas las
									leyes de derechos del consumidor de la UE.
								</p>
								<p>
									Nada en este Acuerdo tiene la intención de crear o crea tipo
									de empresa conjunta, acreedor-deudor, fideicomiso, sociedad o
									cualquier relación de empleador / empleado o fiduciario o de
									franquicia entre usted y nosotros.
								</p>
								<p>
									Si alguna parte de este Acuerdo está en manos de un tribunal
									de jurisdicción competente sea inválida o inaplicable, la las
									partes restantes de este Acuerdo permanecerán en su totalidad
									fuerza y ​​efecto, y cualquier parte inválida o inaplicable se
									interpretará de la manera que refleje más fielmente la efecto
									e intención del idioma original. Si tal la construcción no es
									posible, la provisión se cortará de este Acuerdo, y el resto
									del Acuerdo deberá permanecen en plena vigencia y efecto.
								</p>
								<p className="fw-bold">
									En ningún caso y EN LA MEDIDA MÁXIMA DISPONIBLE POR LA LEY,
									UshowMe, ni sus directores, empleados, agentes, socios,
									proveedores o proveedores de contenido, serán responsables
									bajo contrato, agravio, responsabilidad objetiva, negligencia
									o cualquier otro tipo legal o teoría equitativa con respecto
									al Servicio;
								</p>
								<p>
									A) por cualquier lucro cesante, pérdida de datos, costo de
									adquisición de bienes o servicios sustitutivos, o especiales,
									indirectos, daños incidentales, punitivos o consecuentes de
									cualquier tipo en cualquier caso, bienes o servicios
									sustitutivos (cualquiera que sea su origen),
								</p>
								<p>
									B) para detectar errores, virus, troyanos o similares
									(independientemente de la fuente de origen).
								</p>
								<p> 11.1. Indemnización </p>
								<p>
									Deberá defender, indemnizar y eximir de responsabilidad a
									UshowMe y sus afiliados, sublicenciatarios autorizados y
									distribuidores, y cada de sus empleados, contratistas,
									directores, proveedores y representantes, de todas y cada una
									de las responsabilidades, reclamaciones y gastos, incluidos
									los honorarios razonables de abogados y los costos, que surgen
									de o se relacionan con su uso o mal uso de, o acceso al Sitio,
									Servicio, Contenido o de otro modo desde su Contenido de la
									cuenta de transmisor o contenido generado por el usuario
									Envíos, violación de estos Términos y condiciones, o
									infracción por su parte, o cualquier tercero que utilice su
									cuenta, de cualquier propiedad intelectual u otro derecho de
									cualquier persona o entidad, y por incumplimiento de
									cualquiera de sus representaciones y garantías en estos
									Términos y condiciones. Para evitar duda, por la presente
									acepta defender, indemnizar y mantener inofensivo UshowMe de
									todas y cada una de las reclamaciones de un tercero poseer,
									controlar o reclamar cualquier derecho sobre o sobre su Música
									u otro Contenido, incluidas las reclamaciones por regalías por
									rendimiento, regalías de sincronización, regalías mecánicas y
									uso o tarifas de reutilización. UshowMe se reserva el derecho
									de asumir el defensa y control exclusivos de cualquier asunto
									de otro modo sujeto a indemnización por su parte, en cuyo caso
									asistirá y cooperar con UshowMe para hacer valer las defensas
									disponibles en su único gasto.
								</p>
								<p> 11.2. Renuncias de responsabilidad de código abierto </p>
								<p>
									Algunos de los servicios de UshowMe pueden incluir código de
									terceros con licencia de UshowMe para su uso y redistribución
									bajo licencias de código abierto. A continuación se muestra
									una lista de divulgaciones y renuncias en relación con la
									incorporación de UshowMe de cierto software con licencia de
									código abierto en sus servicios. Sin perjuicio de cualquiera
									de los términos y condiciones de su acuerdo con UshowMe, los
									términos de ciertos códigos abiertos las licencias pueden ser
									aplicables a su uso de UshowMe software, como se establece a
									continuación. Esta lista de código de fuente abierta fue
									compilado con referencia a software de terceros incorporado en
									los servicios a partir de la fecha en que se generó la lista.
									Esta la lista se puede actualizar de vez en cuando unnd puede
									no estar completo. TODA LA INFORMACIÓN AQUÍ SE PROPORCIONA
									"TAL CUAL". USHOWME HACER NO DECLARACIONES O GARANTÍAS,
									EXPRESAS O IMPLÍCITAS, CON RESPECTO A A ESTA LISTA O SU
									EXACTITUD O INTEGRIDAD, O CON RESPETO A CUALQUIER RESULTADO
									QUE SE OBTENGA DEL USO O DISTRIBUCIÓN DEL LISTA. AL USAR O
									DISTRIBUIR ESTA LISTA, USTED ACEPTA QUE EN NINGUNA EL EVENTO
									SERÁ RESPONSABLE DE USHOWME POR CUALQUIER DAÑO RESULTADO DE
									CUALQUIER USO O DISTRIBUCIÓN DE ESTA LISTA, INCLUYENDO, SIN
									LIMITACIÓN, CUALQUIER ESPECIAL, CONSECUENTE, DAÑOS
									INCIDENTALES U OTROS, DIRECTOS O INDIRECTOS.
								</p>
								<p> 11.2.-A WebRTC </p>
								<p>
									http://www.webrtc.org/Copyright © 2011 El proyecto WebRTC
									autores. Todos los derechos reservados Redistribución y uso en
									fuente y las formas binarias, con o sin modificación, están
									permitidas siempre que se cumplan las siguientes condiciones:
									Las redistribuciones del código fuente deben conservar los
									derechos de autor anteriores. aviso, esta lista de condiciones
									y las siguientes descargo de responsabilidad Las
									redistribuciones en forma binaria deben reproducir el aviso de
									copyright anterior, esta lista de condiciones y la siguiente
									descargo de responsabilidad en la documentación y / u otros
									materiales proporcionados con la distribución. Google ni los
									nombres de sus colaboradores pueden utilizarse para respaldar
									o promover productos derivados de este software sin permiso
									previo específico por escrito ESTE SOFTWARE ES PROPORCIONADO
									POR LOS TITULARES DE LOS DERECHOS DE AUTOR Y COLABORADORES
									"TAL CUAL" Y CUALQUIER EXPRESO O GARANTÍAS IMPLÍCITAS,
									INCLUYENDO, PERO NO LIMITADO A, EL GARANTÍAS IMPLÍCITAS DE
									COMERCIABILIDAD Y APTITUD PARA UN SE RECHAZA UN PROPÓSITO
									PARTICULAR. EN NINGÚN CASO EL TITULAR DE LOS DERECHOS DE AUTOR
									O COLABORADORES SERÁN RESPONSABLES DE CUALQUIER DIRECTO,
									INDIRECTO, INCIDENTAL, ESPECIAL, EJEMPLAR O CONSECUENTE DAÑOS
									(INCLUYENDO, PERO NO LIMITADO A, ADQUISICIÓN DE BIENES O
									SERVICIOS SUSTITUTOS; PÉRDIDA DE USO, DATOS O BENEFICIOS; O
									INTERRUPCIÓN COMERCIAL) SIN EMBARGO Y CON CUALQUIER TEORÍA DE
									RESPONSABILIDAD, YA SEA POR CONTRATO, RESPONSABILIDAD ESTRICTA
									O AGRAVIO (INCLUYENDO NEGLIGENCIA O DE OTRO MODO) QUE SURJA DE
									CUALQUIER FORMA DE EL USO DE ESTE SOFTWARE, INCLUSO SI SE
									ADVIERTE DE LA POSIBILIDAD DE TAL DAÑO.
								</p>
								<p> 11.2.-B libvpx / libwebm </p>
								<p>
									http://www.webmproject.org/Copyright © 2010 Google Inc. Todos
									Derechos reservados Redistribución y uso de licencias de
									software en fuentes y formas binarias, con o sin modificación,
									son permitido siempre que se cumplan las siguientes
									condiciones cumplido: las redistribuciones del código fuente
									deben conservar lo anterior aviso de copyright, esta lista de
									condiciones y las siguientes descargo de responsabilidad Las
									redistribuciones en forma binaria deben reproducir el aviso de
									copyright anterior, esta lista de condiciones y la siguiente
									descargo de responsabilidad en la documentación y / u otros
									materiales proporcionados con la distribución. Google ni los
									nombres de sus colaboradores pueden utilizarse para respaldar
									o promover productos derivados de este software sin permiso
									previo específico por escrito ESTE SOFTWARE ES PROPORCIONADO
									POR LOS TITULARES DE LOS DERECHOS DE AUTOR Y COLABORADORES
									"TAL CUAL" Y CUALQUIER EXPRESO O GARANTÍAS IMPLÍCITAS,
									INCLUYENDO, PERO NO LIMITADO A, EL GARANTÍAS IMPLÍCITAS DE
									COMERCIABILIDAD Y APTITUD PARA UN SE RECHAZA UN PROPÓSITO
									PARTICULAR. EN NINGÚN CASO EL TITULAR DE LOS DERECHOS DE AUTOR
									O COLABORADORES SERÁN RESPONSABLES DE CUALQUIER DIRECTO,
									INDIRECTO, INCIDENTAL, ESPECIAL, EJEMPLAR O CONSECUENTE DAÑOS
									(INCLUYENDO, PERO NO LIMITADO A, ADQUISICIÓN DE BIENES O
									SERVICIOS SUSTITUTOS; PÉRDIDA DE USO, DATOS O BENEFICIOS; O
									INTERRUPCIÓN COMERCIAL) SIN EMBARGO Y CON CUALQUIER TEORÍA DE
									RESPONSABILIDAD, YA SEA POR CONTRATO, RESPONSABILIDAD ESTRICTA
									O AGRAVIO (INCLUYENDO NEGLIGENCIA O DE OTRO MODO) QUE SURJA DE
									CUALQUIER FORMA DE EL USO DE ESTE SOFTWARE, INCLUSO SI SE
									ADVIERTE DE LA POSIBILIDAD DE TAL DAÑO. Otorgamiento adicional
									de derechos de propiedad intelectual (patentes)
									implementaciones ”significa las obras protegidas por derechos
									de autor que implementan los códecs WebM distribuidos por
									Google como parte del WebM Proyecto. Por la presente, Google
									le concede un servicio perpetuo, en todo el mundo, no
									exclusivo, sin cargo, libre de regalías, irrevocable (excepto
									como establecido en esta sección) licencia de patente para
									hacer, haber realizado, utilizar, ofrecer para vender, vender,
									importar, transferir y ejecutar de otro modo, modificar y
									propagar el contenido de estas implementaciones de WebM, donde
									dicha licencia se aplica solo a las reclamaciones de patentes,
									ambos son actualmente propiedad de Google y adquiridos en el
									futuro, licenciables por Google que son necesariamente
									infringidas por estos implementaciones de WebM. Esta
									subvención no incluyee reclama que se infringiría solo como
									consecuencia de más modificación de estas implementaciones. Si
									usted o su agente o instituto licenciatario exclusivo o
									encargar o aceptar la institución de litigio de patentes o
									cualquier otra patente actividad de ejecución contra cualquier
									entidad (incluida una reclamación cruzada o reconvención en
									una demanda) alegando que cualquiera de estas implementaciones
									de WebM o cualquier código incorporado en cualquiera de estas
									implementaciones de WebM constituye directa o infracción de
									patente contributiva, o inducción de patente infracción,
									cualquier derecho de patente que se le haya otorgado en virtud
									de este La licencia para estas implementaciones de WebM
									terminará como a partir de la fecha de presentación de dicho
									litigio.
								</p>
								<p> 11.3.-C FFmpeg </p>
								<p>
									http://www.ffmpeg.org/Copyright © 2000 Fabrice Bellard
									Licenciado bajo la GNU General Public License versión 2.1, o
									posterior, que se incluye a continuación o está disponible en
									http://www.gnu.org/licenses/lgpl-2.1.html. Sin embargo, FFmpeg
									incorpora varias partes opcionales y optimizaciones que son
									cubierto por la GNU General Public License versión 2 o
									posterior, que se incluye a continuación o está disponible en
									http://www.gnu.org/licenses/old-licenses/gpl-2.0.html. Si esas
									partes se utilizan, la GPL se aplica a todo FFmpeg. Leer los
									textos de la licencia para saber cómo afecta esto a los
									programas basados ​​en parte superior de FFmpeg o reutilizando
									FFmpeg. Es posible que también desee tener un consulte las
									preguntas frecuentes de la GPL. Tenga en cuenta que FFmpeg no
									está disponible en cualquier otro término de licencia,
									especialmente no propietarios / comerciales, ni siquiera a
									cambio de pago.
								</p>
							</div>
						),
					},
					{
						t: "12. Modificaciones a estos Términos y condiciones",
						d: (
							<div>
								<p>
									UshowMe se reserva el derecho, a su sola discreción, de
									modificar o reemplazar cualquiera de los términos de estos
									Términos y condiciones, o cambiar, suspender o descontinuar el
									Servicio (incluso sin limitación, la disponibilidad de
									cualquier función, base de datos o contenido) en cualquier
									momento mediante la publicación de un aviso en el Sitio o por
									enviándole un correo electrónico. UshowMe también puede
									imponer límites a ciertas características y servicios o
									restringir su acceso a partes o todo el Servicio sin previo
									aviso ni responsabilidad. Es tu responsabilidad de comprobar
									estos Términos y condiciones periódicamente para cambios. Su
									uso continuado del Servicio después de la La publicación de
									cualquier cambio en estos Términos y condiciones constituye
									aceptación de esos cambios. No obstante lo anterior frases de
									esta sección, sin modificaciones a estos Términos y Las
									condiciones se aplicarán a cualquier disputa entre usted y
									UshowMe que surgieron antes de la fecha de dicha modificación.
								</p>
								<p>
									Para cualquier duda o consulta, comuníquese con nosotros a:{" "}
									{""}
									<a
										target="en blanco"
										className="texto-decoración-ninguno color3"
										href="mailto: legal@ushowme.tv"
									>
										legal@ushowme.tv
									</a>
								</p>
							</div>
						),
					},
				],

				// BODY END
			},
		},
		PT: {
			home: {
				// HERO START
				hero: "É tudo sobre a sua experiência",
				hero2: "FULL SCREEN VIDEO GERAL CURTO AUTOPLAY SEM SOM",
				heroBtn: "Ir para shows",
				// HERO END

				// ABOUT START
				aboutH: "Sobre nós",
				aboutL:
					"UshowMe é uma plataforma interativa de transmissão ao vivo e vídeo sob demanda para ajudar artistas, produtores de eventos, como locais e festivais, a evoluir para shows híbridos com alcance global, oferecer novas experiências, múltiplos fluxos de receita e dar a marcas e públicos digitais novas formas de engajamento .",
				aboutR1: "CONSTRUÇÃO PARA QUALQUER DISPOSITIVO MODERNO",
				aboutR2: (
					<p>
						O design responsivo do UshowMe é adaptado para oferecer as melhores
						experiências e interações ao seu público, independentemente do
						dispositivo moderno que eles usam
						<img src={asterik} alt="" className="asterik_up" />.
					</p>
				),
				aboutR3: (
					<p className="text-white mb-0 spaceMono">
						veja a lista de dispositivos suportados na página de{" "}
						<span className="purpleBg px-1">FAQ</span>.
					</p>
				),
				// ABOUT END

				// HYBRID START
				hybH: "Por que híbrido é o futuro?",
				hybP: [
					"Mais do que cantar aquelas músicas favoritas com sua “Tribo” e interagir com os artistas, os shows são sobre viver experiências compartilhadas e expressar nossas emoções, criando memórias duradouras de bons momentos juntos.",
					"O Hybrid amplifica isso e remove as limitações de tijolo e argamassa que deixam muitos ventiladores de fora, enquanto adiciona mais fontes de receita e um novo envolvimento que pode ser medido.",
					"UshowMe é construído de forma modular para maximizar suas necessidades específicas.",
					"Comece selecionando quem é você abaixo.",
				],
				// HYBRID END

				// SIDEBAR START
				sideBar: [
					{ t: "SOBRE NÓS" },
					{ t: "MOSTRA EM DESTAQUE" },
					{ t: "HÍBRIDO É O FUTURO" },
					{ t: "COMO FUNCIONA" },
					{ t: "QUEM É VOCÊ?" },
					{ t: "Perguntas frequentes" },
				],
				// SIDEBAR END

				// SIDEBAR START
				sideBar2: [
					{ t: "SOBRE NÓS" },
					{ t: "HÍBRIDO É O FUTURO" },
					{ t: "MOSTRA EM DESTAQUE" },
					{ t: "QUEM É VOCÊ?" },
					{ t: "COMO FUNCIONA" },
					{ t: "Perguntas frequentes" },
				],
				// SIDEBAR END

				// WHO START
				who1: "COMECE SELECIONANDO",
				who2: "Quem é você?",
				// WHO END

				// FEATURE START
				feature1: "Programas em Destaque",
				feature2: "Ver todos os programas",
				// FEATURE END

				// FEATURE START
				itsAll1: "É tudo sobre DIVERSÃO!",
				itsAll2: "Veja o vídeo completo",
				// FEATURE END

				// NEWS START
				news: "Nas notícias",
				// NEWS END

				// PARTNER START
				partner1: "PARCEIROS",
				partner2: "Torne-se um parceiro",
				partner3: "Lidere o futuro para programas híbridos.",
				// PARTNER END

				// PARTNER START
				newsletter1: "Assine o Newsletter",
				newsletterBtn: "Mandar",
				// PARTNER END

				// WHO END
				who1under: "Eu sou um",
				present: "Obtenha a apresentação:",
				present2: "Abonniere den Newsletter:",
				send: "Mandar",
				slide1T: "Artista / gravadora",
				slide1T2: "Alcance e interaja com públicos globais",
				slide1D:
					"Nunca mais terá que deixar seus fãs de fora. Com o UshowMe, conte com a inclusão e interação com todos, aumentando a receita por meio de vários streams para as versões de stream ao vivo e vídeo sob demanda e também traga seus próprios patrocinadores a bordo.",
				slide2T: "Produtor / Local",
				slide2T2: "Mostra a escala além do seu local / local",
				slide2D:
					"Com o UshowMe, você, como produtor e / ou local, pode evoluir para um híbrido e atingir seu público além das limitações físicas, monetizar com vários streams e trazer patrocinadores já presentes em seu local / festival físico para o digital.",
				slide3T: "Marca",
				slide3T2: "Patrocinador mostra e avalia compromissos",
				slide3D:
					"Sua marca finalmente tem o poder de maximizar o conhecimento e novas formas de engajamento com o público digital. UshowMe fornece ferramentas para sua marca obter o destaque que merece com resultados mensuráveis. UshowMe oferece recursos de integração total.",
				slide4T: "Fã",
				slide4T2: "Divirta-se com novas interações",
				slide4D:
					"O UshowMe dá a você mais acesso aos seus artistas favoritos do que se você estivesse lá pessoalmente. Conecte sua câmera, expresse emoções e seus melhores movimentos no Top Fans Stage. Fale com todos no chat e envolva-se com artistas em excitantes Meet & Greets.",
				newLet: "Assine o Newsletter:",
				// WHO END

				// FOOTER START
				footer: [
					{
						t: "Como funciona",
						l: "/howItWorks",
					},
					{
						t: "Perguntas frequentes",
						l: "/faq",
					},
					{
						t: "Empregos",
						l: "/jobs",
					},
					{
						t: "Entre em contato conosco",
						l: "",
					},
					{
						t: "meios de comunicação",
						l: "",
					},
					{
						t: "Política de Privacidade",
						l: "/privacyPolicy",
					},
					{
						t: "termos e Condições",
						l: "/termsConditions",
					},
				],
				footerBtn: "Ver todos os programas",
				// FOOTER END
			},
			hiw: {
				// HERO START
				heroBtn: "Envolva e controle o vídeo",
				// HERO END

				// SIDEBAR START
				sideBar: [
					{ t: "SOBRE NÓS" },
					{ t: "MOSTRA EM DESTAQUE" },
					{ t: "HÍBRIDO É O FUTURO" },
					{ t: "COMO FUNCIONA" },
					{ t: "QUEM É VOCÊ?" },
					{ t: "Perguntas frequentes" },
				],
				// SIDEBAR END

				// SIDEBAR START
				sideBar2: [
					{ t: "SOBRE NÓS" },
					{ t: "HÍBRIDO É O FUTURO" },
					{ t: "MOSTRA EM DESTAQUE" },
					{ t: "QUEM É VOCÊ?" },
					{ t: "COMO FUNCIONA" },
					{ t: "Perguntas frequentes" },
				],
				// SIDEBAR END
				// FOOTER START
				footer: [
					{
						t: "Como funciona",
						l: "/howItWorks",
					},
					{
						t: "Perguntas frequentes",
						l: "/faq",
					},
					{
						t: "Empregos",
						l: "/jobs",
					},
					{
						t: "Entre em contato conosco",
						l: "",
					},
					{
						t: "meios de comunicação",
						l: "",
					},
					{
						t: "Política de Privacidade",
						l: "/privacyPolicy",
					},
					{
						t: "termos e Condições",
						l: "/termsConditions",
					},
				],
				footerBtn: "Ver todos os programas",
				// FOOTER END

				// PARTNER START
				newsletter1: "Assine o Newsletter",
				newsletterBtn: "Mandar",
				// PARTNER END

				// HIW BODY START
				h1: "Cómo funciona",
				h2: "De la preproducción al analisis",
				hwiData: [
					{
						t: "Criar e personalizar",
						d: [
							"Crea tu espectáculo a través de nuestra plataforma, módulo a módulo. Comience com os detalhes do programa. ",
							"Luego, selecione as fontes de alimentação que desejam uma disposição de sua audiencia.",
							"Inserte los banners y logotipos superpuestos, CTA, videos e convide a su equipo de moderación, y listo.",
						],
					},
					{
						t: "Participar e controlar",
						d: [
							"Mientras se desarrolla el espectáculo, interactúe con su audiencia en el chat en vivo y en las preguntas y respuestas. Los artistas também podem ver e interagir com audiências digitais durante o espectáculo no cenário.",
							"Termine en la parte superior com emocionantes Meet & Greets.",
							"Al use nuestras potentes herramientas de moderación disponibles, puede assegurarse de que la experiencia sea positiva para todos en todo momento.",
						],
					},
					{
						t: "Sigue monetizando",
						d: [
							"Ative a opção VOD (vídeo a pedido) na configuração, para seguir monetizando o mismo contido uma vez.",
							"A los fanáticos que se perdem a transmisión en vivo o que quieran volver a ver sus interacciones, les encantará que pienses en ellos.",
						],
					},
					{
						t: "Medir y analizar",
						d: [
							"Tendrá acesse um informe detalhado, faça a avaliação e analise a Calidad de la Experiencia Entregada (QoDE).",
							"Esta poderosa informação permite saber exatamente qual é a sua audiencia y qué es lo que quiere.",
						],
					},
				],
				cBtn: "Contate-nos para acesso",
				// HIW BODY END
			},
			privacyPolicy: {
				// HERO START
				hero: "Política de Privacidade",
				// HERO END

				// SIDEBAR START
				sideBar: [
					{ t: "SOBRE NÓS" },
					{ t: "MOSTRA EM DESTAQUE" },
					{ t: "HÍBRIDO É O FUTURO" },
					{ t: "COMO FUNCIONA" },
					{ t: "QUEM É VOCÊ?" },
					{ t: "Perguntas frequentes" },
				],
				// SIDEBAR END

				// SIDEBAR START
				sideBar2: [
					{ t: "SOBRE NÓS" },
					{ t: "HÍBRIDO É O FUTURO" },
					{ t: "MOSTRA EM DESTAQUE" },
					{ t: "QUEM É VOCÊ?" },
					{ t: "COMO FUNCIONA" },
					{ t: "Perguntas frequentes" },
				],
				// SIDEBAR END
				// FOOTER START
				footer: [
					{
						t: "Como funciona",
						l: "/howItWorks",
					},
					{
						t: "Perguntas frequentes",
						l: "/faq",
					},
					{
						t: "Empregos",
						l: "/jobs",
					},
					{
						t: "Entre em contato conosco",
						l: "",
					},
					{
						t: "meios de comunicação",
						l: "",
					},
					{
						t: "Política de Privacidade",
						l: "/privacyPolicy",
					},
					{
						t: "termos e Condições",
						l: "/termsConditions",
					},
				],
				footerBtn: "Ver todos os programas",
				// FOOTER END

				// PARTNER START
				newsletter1: "Assine o Newsletter",
				newsletterBtn: "Mandar",
				// PARTNER END

				// BODY START
				h1: "Última atualização: 10 de junho de 2021",
				topPs: [
					{
						p: (
							<p>
								A UshowMe é propriedade da USMLive, Lda, situada na Rua António
								Santos Serrador 88, R / C Dto, 2415-399 Leiria, ("nós", "nós" ou
								"Nosso") opera o {""}
								<a
									target="blank"
									href="https://ushowme.tv"
									className="text-decoration-none text-dark"
								>
									https://ushowme.tv
								</a>{" "}
								{""}
								{""}e{" "}
								<a
									target="blank"
									href="https://app.ushowme.tv"
									className="text-decoration-none text-dark"
								>
									{""}
									https://app.ushowme.tv {""}
								</a>{" "}
								{""}
								{""}
								domínios (doravante, o "Serviço").
							</p>
						),
					},
					{
						p: (
							<p>
								Esta página informa sobre nossas políticas relacionadas coleta,
								uso e divulgação de dados pessoais quando você usa nosso {""}
								<span className="fw-bold"> Serviço </span> e as opções que
								associaram a esses dados.
							</p>
						),
					},
					{
						p: (
							<p>
								Usamos seus dados para fornecer e melhorar o {""}
								<span className="fw-bold"> Serviço. </span>
							</p>
						),
					},
					{
						p: (
							<p>
								Ao usar o <span className="fw-bold"> Serviço </span>, concordar
								com a coleta e uso de informações de acordo com com esta
								política.
							</p>
						),
					},
					{
						p: (
							<p>
								A menos que definido de outra forma nesta Política de
								Privacidade privacidade, os termos usados ​​nesta Política de
								Privacidade privacidade tem os mesmos significados que em nosso
								Termos e condições, acessíveis em {""}
								<Link
									className="purpleBg text-white text-decoration-none px-1"
									to="termsConditions"
								>
									aqui
								</Link>
								.
							</p>
						),
					},
				],

				collectData: {
					h2: "Tipos de dados coletados:",
					innerData: [
						{
							t: "Dados pessoais:",
							d: (
								<div>
									<p>
										Enquanto você estiver usando nosso serviço, podemos
										pedir-lhe nos forneça certas informações de identificação
										pessoal que pode ser usado para entrar em contato com você
										ou identificá-lo ("Dados pessoais").
									</p>
									<p>
										As informações de identificação pessoal podem incluir, mas
										não se limita a:
									</p>
									<ul>
										<li> endereço de e-mail </li>
										<li> Nome e sobrenome </li>
										<li> Imagem de perfil </li>
										<li> Cookies e dados de uso. </li>
									</ul>
									<p>
										Podemos usar seus dados pessoais para nos comunicarmos com
										com boletins informativos, materiais de marketing ou
										promocionais e outras informações que podem ser do seu
										interesse. Você pode escolher por não participar do
										recebimento de alguns ou todos esses nossas comunicações
										seguindo o link para cancele a inscrição ou as instruções
										fornecidas em qualquer e-mail que enviarmos.
									</p>
								</div>
							),
						},
						{
							t: "Dados de uso:",
							d: (
								<div>
									<p>
										Também podemos coletar informações sobre como Encontre o
										serviço. acessado e usado ("Dados de usar").
									</p>
									<p>
										Esses dados de uso podem incluir informações como seu
										Endereço de protocolo de Internet do computador (para
										exemplo, endereço IP), tipo de navegador, versão do
										navegador, agente de usuário, as páginas de nosso Serviço de
										visita, hora e data da sua visita, hora dedicado a essas
										páginas, identificadores exclusivos de dispositivos e outros
										dados de diagnóstico.
									</p>
								</div>
							),
						},
						{
							t: "Rastreando dados e cookies:",
							d: (
								<div>
									<p>
										Usamos cookies e tecnologias de rastreamento semelhantes
										para rastrear a atividade em nosso serviço e manter certos
										cookies são arquivos com uma pequena quantidade de dados que
										podem incluir um identificador exclusivo anônimo. Os cookies
										são enviados para o seu navegador a partir de um site e são
										armazenados no seu dispositivo. Outros também são usados
										tecnologias de rastreamento, como beacons, tags e scripts
										para coletar e rastrear informações e para melhorar e
										analisar nosso serviço. Você pode instruir seu navegador
										para rejeitar todos os cookies ou para indicar quando um o
										cookie está sendo enviado. No entanto, se você não aceitar o
										cookies, você pode não ser capaz de usar algumas partes de
										nosso serviço.
									</p>
									<p className="mb-3"> Exemplos de cookies que usamos: </p>
									<ul className="list-unstyled">
										<li className="mb-0"> Cookies de sessão. </li>
										<li>
											{""}
											Usamos cookies de sessão para operar nosso Serviço. {""}
										</li>
										<li className="mt-4"> Cookies de preferência. </li>
										<li>
											Usamos cookies de preferência para lembrar o seu
											preferências e várias configurações.
										</li>
										<li className="mt-4"> Cookies de segurança. </li>
										<li>
											{""}
											Usamos cookies de segurança por motivos de segurança. {""}
										</li>
									</ul>

									<p>
										O uso dos sites UshowMe usa os dados recolhidos para vários
										fins:
									</p>
									<ul>
										<li> Para fornecer e manter nosso serviço. </li>
										<li>
											{""}
											Para notificá-lo sobre alterações em nosso Serviço. {""}
										</li>
										<li>
											Para permitir que você participe de recursos interativos
											de nosso serviço quando você decidir fazê-lo.
										</li>
										<li> Para fornecer suporte ao cliente. </li>
										<li>
											Colete análises ou informações valiosas para que possamos
											melhorar nosso serviço.
										</li>
										<li> Para monitorar o uso do nosso serviço. </li>
										<li>
											{""}
											Para detectar, prevenir e resolver problemas técnicos.{" "}
											{""}
										</li>
										<li>
											Para trazer notícias, ofertas especiais e generalidades.
											informações sobre outros bens, serviços e eventos que
											oferecemos que são semelhantes aos que já oferecemos você
											comprou ou consultou, a menos que tenha optado por não
											receber essas informações.
										</li>
									</ul>
								</div>
							),
						},
						{
							t: "Base jurídica para o processamento de dados pessoais de acordo com o Regulamento Geral de Proteção de Dados (GDPR):",
							d: (
								<div>
									<p>
										Se você é do Espaço Econômico Europeu (EEE), o UshowMe vai
										basear legal para a coleta e uso de informações pessoal As
										informações descritas nesta Política de Privacidade A
										privacidade depende dos dados pessoais que coletamos e o
										contexto específico em que o coletamos.
									</p>
									<p> UshowMe pode processar seus dados pessoais porque: </p>

									<ul>
										<li> Precisamos celebrar um contrato com você. </li>
										<li> Ele nos deu permissão para fazer isso. </li>
										<li>
											O processamento responde aos nossos interesses legítimos e
											não é anulado pelos seus direitos.
										</li>
										<li> Para fins de processamento de pagamentos. </li>
										<li> Para cumprir a lei. </li>
									</ul>

									<p>
										Também podemos obter informações, incluindo informações de
										terceiros, como redes sociais ou plataformas de redes
										sociais para as quais você explicitamente conectado conosco.
										Quando você acessa o serviço UshowMe em por meio de redes
										sociais ou redes sociais que são autorizando o UshowMe a
										coletar, armazenar e usar tais informações e conteúdo de
										acordo com esta Política De privacidade.
									</p>
								</div>
							),
						},
						{
							t: "Retenção de dados:",
							d: (
								<div>
									<p>
										UshowMe irá reter seus dados pessoais apenas por enquanto
										que é necessário para os fins estabelecidos neste Política
										de Privacidade. Nós reteremos e usaremos seus dados pessoal
										à medida necessária para cumprir com o nosso obrigações
										legais (por exemplo, se formos obrigados a mantenha seus
										dados para cumprir as leis aplicáveis), resolver disputas e
										fazer cumprir nossos acordos e políticas legais.
									</p>
									<p>
										O UshowMe também reterá os dados de uso para análise. fins
										internos. Os dados de uso são geralmente retenha por um
										período mais curto. período de tempo, exceto quando esses
										dados são usados ​​para fortalecer o segurança ou para
										melhorar a funcionalidade do nosso Serviço, ou somos
										legalmente obrigados a retê-los dados por períodos mais
										longos.
									</p>
								</div>
							),
						},
						{
							t: "Transferência de dados:",
							d: (
								<div>
									<p>
										Suas informações, incluindo dados pessoais, podem ser
										transferidos e mantidos em computadores localizados fora de
										seu estado, província, país ou outra jurisdição
										governamental onde as leis de proteção de dados podem ser
										diferentes aqueles em sua jurisdição. fora da Moldávia e
										decidir nos forneça informações, observe que transferimos os
										dados, incluindo os Dados, para Portugal e processá-los lá.
									</p>
									<p>
										Seu consentimento com esta Política de Privacidade seguido
										por O envio de tais informações representa o seu aceitação
										dessa transferência.
									</p>
									<p>
										UshowMe tomará todas as medidas razoavelmente necessárias
										para garantir que seus dados sejam tratados de uma forma
										seguro e de acordo com esta Política de Privacidade e sem
										transferência de seus dados serão enviados para um
										organização ou país, a menos que existam controles
										adequados, incluindo a segurança de seus dados e outros
										informação pessoal.
									</p>
								</div>
							),
						},
						{
							t: "Divulgação de dados:",
							d: (
								<div>
									<p className="fw-bold">
										Não vendemos seus dados de informações pessoais.
									</p>
									<p>
										No entanto, podemos compartilhar suas informações pessoais
										no seguintes situações:
									</p>

									<ul>
										<li className="mb-0"> Com provedores de serviços: </li>
										<p>
											{""}
											Podemos compartilhar suas informações pessoais com o
											Serviço Provedores para monitorar e analisar o uso de
											Nosso Serviços.
										</p>
										<li className="mb-0"> Para transferências comerciais: </li>
										<p>
											Podemos compartilhar ou transferir suas informações
											pessoais em conexão com, ou durante as negociações de
											qualquer fusão ou aquisição de toda ou parte de nosso
											negócio para outra empresa.
										</p>
										<li className="mb-0">
											Com afiliados: podemos compartilhar suas informações com
											nossos afiliados, caso em que exigiremos aqueles afiliados
											para cumprir esta Política de Privacidade.
										</li>
										<p>
											Afiliados incluem nossa empresa-mãe e qualquerier outras
											subsidiárias, parceiros de joint venture ou outros
											empresas que controlamos ou estão sob controle comum
											connosco. ·
										</p>
										<li>
											Com parceiros de negócios: podemos compartilhar suas
											informações com nossos parceiros de negócios para lhe
											oferecer produtos, serviços ou promoções, e iremos
											solicitar o seu permissão primeiro.
										</li>
										<li> Com outros usuários: </li>
										<p>
											quando você compartilha informações pessoais ou interage
											com outra forma em áreas públicas com outros usuários,
											disse as informações podem ser vistas por todos os
											usuários e podem ser distribuído publicamente fora de. Se
											você interagir com outros usuários, você pode ver seu
											nome, perfil, fotos e vídeo de sua câmera. Da mesma forma,
											outros usuários poderão ver seu nome, vídeo de sua câmera
											e seu perfil. ·
										</p>
										<li>
											Com o seu consentimento: podemos divulgar suas informações
											para qualquer outro propósito com o seu consentimento.
										</li>
										<li> Divulgação para agências de aplicação da lei </li>
										<p>
											Em certas circunstâncias, que o UshowMe divulgue seus
											dados pessoais em caso afirmativo exigido por lei ou em
											resposta a pedidos válidos para autoridades públicas (por
											exemplo, um tribunal ou agência governamental).
										</p>
									</ul>
								</div>
							),
						},
						{
							t: "Requisitos legais:",
							d: (
								<div>
									<p className="mb-0">
										UshowMe pode divulgar seus dados pessoais de boa fé crença
										de que tal ação é necessária para:
									</p>
									<ul>
										<li> Para cumprir uma obrigação legal. </li>
										<li>
											Para proteger e defender os direitos ou propriedade de
											Mostre-me.
										</li>
										<li>
											Para prevenir ou investigar possíveis irregularidades em
											conexão com o Serviço.
										</li>
										<li>
											Para proteger a segurança pessoal dos usuários do Serviço
											ou o público.
										</li>
										<li> Para se proteger contra responsabilidades legais. </li>
									</ul>
								</div>
							),
						},
						{
							t: "Segurança de dados:",
							d: (
								<div>
									<p>
										A segurança dos seus dados é importante para nós, mas
										lembre-se de que nenhum método de transmissão via Internet
										ou método de armazenamento eletrônico é 100% seguro. À
										medida que nos esforçamos para usar meios comercialmente
										aceitável para proteger seus dados pessoais, não podemos
										garantir a sua segurança absoluta.
									</p>
									<p className="mb-0">
										Seus direitos de proteção de dados sob os dados Regulamento
										de Proteção Geral (GDPR) Se você é um residente do Espaço
										Econômico Europeu (EEE), você tem alguns dados direitos de
										proteção. UshowMe pretende levar passos razoáveis ​​para
										permitir que você corrija, modifique, excluir ou limitar o
										uso de suas informações pessoais.
									</p>
									<p>
										Se você quiser ser informado sobre quais dados pessoais nós
										temos sobre você e se quiser removê-lo de nossos sistemas,
										Por favor, entre em contato conosco.
									</p>
									<p>
										Em certas circunstâncias, você tem o seguinte direitos de
										proteção de dados:
									</p>
									<ul>
										<li>
											O direito de acessar, atualizar ou excluir informações
											para ter em você.
										</li>
									</ul>
									<p>
										{""}
										Sempre que possível, você pode acessar, atualizar ou
										solicitar a exclusão de seus dados pessoais diretamente na
										seção de configurações de sua conta. Se ele não pode execute
										essas ações você mesmo, entre em contato nós para ajudá-lo.
									</p>
									<ul>
										<li>
											O direito de retificação. Você tem o direito de ter o seu
											informações retificadas se essas informações forem
											imprecisas ou incompleto.
										</li>
										<li>
											O direito de se opor. Você tem o direito de se opor ao
											nosso processamento dos seus dados pessoais.
										</li>
										<li>
											O direito de restrição. Você tem o direito de solicitar
											que restringimos o processamento de suas informações
											pessoais em formação.
										</li>
										<li>
											O direito à portabilidade dos dados. Você tem o direito de
											receber uma cópia das informações que temos sobre você em
											um formato estruturado e legível por máquina e comumente
											usados.
										</li>
										<li>
											O direito de retirarO consentimento. Você também tem
											direito de retirar seu consentimento a qualquer momento em
											que UshowMe confiou seu consentimento para processar suas
											informações pessoais, simplesmente excluindo seu conta.
											Quando você cria sua conta no início de sessão social,
											você precisa remover as permissões do aplicativo UshowMe
											na referida plataforma.
										</li>
									</ul>

									<p>
										Observe que podemos pedir que você verifique sua identidade
										antes de responder a tais solicitações.
									</p>
									<p>
										Você tem o direito de registrar uma reclamação com um
										Autoridade de proteção de dados sobre nossa coleção e uso de
										seus dados pessoais.
									</p>
									<p className="mb-0">
										Para obter mais informações, entre em contato com seus
										detalhes local. autoridade de proteção na Área Econômica
										Europeu (EEE). Prestadores de serviços que podemos empregar
										empresas terceirizadas e indivíduos para facilitar nosso
										Serviço ("Provedores de Serviço"), fornecer o Serviço em
										nosso nome, realizar serviços relacionados ao serviço ou
										ajude-nos a analisar como o serviço é usado.
									</p>
									<p>
										Esses terceiros só têm acesso aos seus dados pessoais
										realizar essas tarefas em nosso nome e não somos obrigado a
										divulgá-lo ou usá-lo para qualquer outro propósito.
									</p>
								</div>
							),
						},
						{
							t: "Analytics:",
							d: (
								<div>
									<p>
										Podemos usar prestadores de serviços terceirizados para
										monitorar e analisar o uso de nosso Serviço.
									</p>
									<ul>
										<li> Google Analytics </li>
										<p className="mb-0">
											{""}
											Google Analytics é um serviço de análise da web oferecido
											pelo Google, que rastreia e relata o tráfego do site. O
											Google usa os dados coletados para rastrear e monitorar o
											uso de nosso serviço. Estes dados são compartilhar com
											outros usuários do Google. Serviços. Google Você pode usar
											os dados coletados para contextualizar e personalizar seus
											próprios anúncios da rede de anunciantes.
										</p>
										<p>
											Para obter mais informações sobre as práticas de
											Privacidade do Google, visite a página de privacidade e
											Condições do Google:
											<a
												target="blank"
												className="text-decoration-none text-dark"
												href="https://policies.google.com/privacy?hl=en"
											>
												https://policies.google.com/privacy?hl=en
											</a>
										</p>
										<li> Amazon Web Services (AWS) </li>
										<p>
											Para obter mais informações sobre as práticas de Aviso de
											privacidade da AWS, visite a página da web Aviso de
											privacidade. Privacidade AWS:
											<a
												target="blank"
												className="text-decoration-none text-dark"
												href="https://aws.amazon.com/privacy/?nc1=h_ls"
											>
												https://aws.amazon.com/privacy/?nc1=h_ls {""}
											</a>
										</p>
										<li> Pagamentos </li>
										<p>
											Podemos fornecer produtos e / ou serviços pagos dentro do
											Serviço. Nesse caso, usamos serviços de terceiros para
											processamento de pagamentos (por exemplo, processadores de
											pagamento).
											<br />
											Não vamos armazenar ou coletar os detalhes do seu cartão
											de pagamento. Essas informações são fornecidas diretamente
											para nosso terceiro. processadores de pagamento cujo uso
											de seu as informações pessoais são regidas por sua
											Política de Privacidade Privacidade. Esses processadores
											de pagamento aderem ao padrões estabelecidos pelo PCI-DSS
											conforme gerenciado pelo PCI Security Standards Council,
											que é um esforço conjunto de marcas como Visa, MasterCard,
											American Expresse e descubra. Requisitos de ajuda do
											PCI-DSS garantir o manuseio seguro das informações de
											pagamento.
										</p>

										<p className="mt-4">
											O processador de pagamento disponível nos sites de UshowMe
											e domínios é: Stripe
										</p>
										<p>
											Sua política de privacidade pode ser vista em
											<a
												target="blank"
												className="text-decoration-none text-dark"
												href="https://stripe.com/en-pt/privacy"
											>
												https://stripe.com/en-pt/privacy
											</a>
										</p>
									</ul>
								</div>
							),
						},
						{
							t: "Links para outros sites:",
							d: (
								<div>
									<p>
										Nosso serviço pode conter links para outros sites que eles
										não são operados por nós. Se você clicar no link para
										umterceiro, você será direcionado para o site desse
										terceiro. Vocês Recomendamos fortemente que reveja a
										Política privacidade de cada site que você visita. não tem
										controle e não não assume nenhuma responsabilidade pelo
										conteúdo, políticas de privacidade ou práticas de sites ou
										serviços de terceiros.
									</p>
								</div>
							),
						},
						{
							t: "Privacidade infantil:",
							d: (
								<div>
									<p>
										Nosso serviço não é direcionado a menores de 13 anos.
										("Crianças").
									</p>
									<p>
										Não coletamos intencionalmente informações de identificação
										informações pessoais de qualquer pessoa com menos de 13
										anos.
									</p>
									<p>
										Se você é um pai ou responsável e sabe que seu filho tem
										forneceu dados pessoais, contacte-nos. Se nos dermos conta
										da qual coletamos dados pessoais
									</p>
									<p>
										crianças sem verificação do consentimento dos pais, vamos
										tomar as medidas necessárias para eliminar este informações
										de nossos servidores.
									</p>
								</div>
							),
						},
						{
							t: "Mudanças nesta Política de Privacidade:",
							d: (
								<div>
									<p>
										Podemos atualizar nossa Política de Privacidade de vez em
										quando. Iremos notificá-lo de qualquer mudança postando a
										nova Política de Privacidade nesta página.
									</p>
									<p>
										Iremos informá-lo por e-mail e / ou aviso destacado em nosso
										Serviço, antes da mudança entre efetivo e atualize a "data
										efetiva" na parte topo desta Política de Privacidade. É
										recomendado que reveja esta Política de Privacidade.
										periodicamente para qualquer mudança. Mudanças nesta
										política de privacidade são eficaz quando postado nesta
										página.
									</p>
								</div>
							),
						},
						{
							t: "Entre em contato conosco:",
							d: (
								<div>
									<p>
										Se você tiver alguma dúvida sobre esta Política de
										Privacidade, entre em contato conosco por e-mail:
										<a
											target="blank"
											className="text-decoration-none text-dark"
											href="mailto:legal@ushowme.tv"
										>
											legal@ushowme.tv
										</a>
									</p>
								</div>
							),
						},
					],
				},
				// BODY END
			},
			terms: {
				// HERO START
				hero: "Termos e Termos",
				// HERO END

				// SIDEBAR START
				sideBar: [
					{ t: "SOBRE NÓS" },
					{ t: "MOSTRA EM DESTAQUE" },
					{ t: "HÍBRIDO É O FUTURO" },
					{ t: "COMO FUNCIONA" },
					{ t: "QUEM É VOCÊ?" },
					{ t: "Perguntas frequentes" },
				],
				// SIDEBAR END

				// SIDEBAR START
				sideBar2: [
					{ t: "SOBRE NÓS" },
					{ t: "HÍBRIDO É O FUTURO" },
					{ t: "MOSTRA EM DESTAQUE" },
					{ t: "QUEM É VOCÊ?" },
					{ t: "COMO FUNCIONA" },
					{ t: "Perguntas frequentes" },
				],
				// SIDEBAR END
				// FOOTER START
				footer: [
					{
						t: "Como funciona",
						l: "/howItWorks",
					},
					{
						t: "Perguntas frequentes",
						l: "/faq",
					},
					{
						t: "Empregos",
						l: "/jobs",
					},
					{
						t: "Entre em contato conosco",
						l: "",
					},
					{
						t: "meios de comunicação",
						l: "",
					},
					{
						t: "Política de Privacidade",
						l: "/privacyPolicy",
					},
					{
						t: "termos e Condições",
						l: "/termsConditions",
					},
				],
				footerBtn: "Ver todos os programas",
				// FOOTER END

				// PARTNER START
				newsletter1: "Assine o Newsletter",
				newsletterBtn: "Mandar",
				// PARTNER END

				// BODY START
				h1: "Última atualização: 10 de junho de 2021",

				topData: [
					{
						p: <h4 className="fw-bold mt-5"> Seu contrato </h4>,
					},
					{
						p: (
							<p className="mt-5">
								Obrigado por mostrar interesse em usar nosso aplicativo da web.
							</p>
						),
					},
					{
						p: (
							<p>
								Este é um acordo legal vinculativo entre USMLive, Lda,
								localizada na Rua António Santos Serrador 88 R / C dto, 2415-399
								Leiria, referido nestes Termos e Condições como "UshowMe" ou
								"Company", fornecedora de serviços de streaming de vídeo
								interativo e você como indivíduo e, quando apropriado, a empresa
								ou outra pessoa jurídica que você representa ("Você"). Estes
								Termos e Condições ("T&C") regem seu acesso e uso dos serviços,
								conteúdo e funcionalidades disponíveis, então leia-os com
								cuidado antes de usar os serviços. Reservas do UshowMe o direito
								de limitar ou encerrar seu acesso aos serviços ou encerrar ou
								suspender seu registro ou conta para o violação destes T&C por
								qualquer motivo em qualquer momento. Acesso a certas funções ou
								parte do os serviços podem não estar disponíveis para todos os
								usuários.
							</p>
						),
					},
				],

				list: {
					t: "Conteúdo:",
					nList: [
						"Aceitação",
						"Contas",
						"Serviços",
						"Criação de evento",
						"Monetização de conteúdo",
						"Avaliar",
						"Conteúdo gerado pelo usuário (CGU)",
						"Concessão de licença: propriedade intelectual para contas de transmissor",
						"Propriedade intelectual do conteúdo do UshowMe",
						"Confidencialidade",
						"Isenções de responsabilidade e limitações de responsabilidade",
						"Modificações a estes Termos e Condições",
					],
				},

				bodyList: [
					{
						t: "1. Aceitação",
						d: (
							<div>
								<h5> A) Versão Beta </h5>
								<p>
									Você entende e concorda que UshowMe e seus serviços são
									fornecido como uma versão "beta" e está disponível em um Base
									"como está". Os serviços UshowMe podem conter bugs, bugs e
									outros problemas No entanto, vamos trabalhar o mais rápido
									possível para consertar, corrigir ou atualizar nossos serviços
									para torná-los tão estáveis ​​e funcionais quanto possível,
									então, se você encontrar quaisquer bugs, bugs ou outros
									problemas, pedimos que você nos informe usando o email:
									bugs@ushowme.tv
								</p>

								<h5> B) Atualizações de software </h5>
								<p>
									UshowMe pode, de tempos em tempos, a seu exclusivo critério,
									desenvolver e fornecer atualizações de software
									("Atualizações"). As atualizações podem incluir, atualizações,
									patches, correções de bugs e muito mais modificações melhoram
									o desempenho e a estabilidade de nosso sistema e serviços.
									Atualizações também pode modificar ou eliminar em sua
									totalidade certas recursos e funcionalidades disponíveis
									anteriormente. você concorda que o UshowMe não tem obrigação
									de fornecer atualizações ou continuar a fornecer ou habilitar
									qualquer recurso específico ou funcionalidades. Se você não
									quiser essas atualizações, a totalidade ou alguns dos serviços
									podem não estar disponíveis. Vocês Você reconhece que pode
									precisar instalar atualizações para usar os serviços e
									concordar em instalar imediatamente qualquer atualização
									fornecida o mais rápido possível. Está o uso continuado dos
									serviços é a sua aceitação destes Termos de serviço.
								</p>

								<h5> C) Suspensões de serviço e tempo de inatividade </h5>
								<p>
									Você reconhece que: De vez em quando, podemos arranjar tempo
									tempo de inatividade programado, para nos permitir realizar o
									manutenção e / ou fazer modificações em nosso serviços e na
									medida do possível, faremos o possível para fornecer-lhe um
									e-mail com aviso prévio de qualquer suspensão do serviço e
									tempo de inatividade programado e para postar atualizações no
									site UshowMe com Em relação à retomada dos serviços após o
									referido suspensão, mas não terá nenhuma responsabilidade pela
									maneira como que podemos fazer isso ou se deixarmos de
									fazê-lo.
								</p>
								<p>
									Seu acesso e uso dos serviços podem ser suspensos pelo duração
									de qualquer tempo de inatividade imprevisto ou imprevisto
									programada ou indisponibilidade de qualquer ou todas serviços
									por qualquer motivo, e que os serviços são sujeito a
									interrupções e falhas por uma variedade de razões fora do
									controle do UshowMe, incluindo:
								</p>

								<ul>
									<li>
										{""}Recepção de dados móveis e Wi-Fi, provedores de
										serviços, operadoras e outros, que podem causar falhas ou
										atrasos no serviço.
									</li>
									<li>
										Quedas de energia, falhas de sistema ou outros interrupções,
										e também teremos o direito, sem qualquer responsabilidade
										para com você, para suspender o acesso a qualquer parte ou
										todos os serviços a qualquer momento.
									</li>
									<li>
										No caso de um ataque de serviço ou outro evento que
										Determinamos, a nosso exclusivo critério, que você pode
										representam um risco para o serviço, você ou qualquer um de
										nossos outros clientes.
									</li>
									<li>
										se o serviço não foi suspenso, ou no caso de nós
										determinamos, a nosso exclusivo critério, o que é necessário
										ou prudente fazê-lo por razões legais ou regulatório.
									</li>
								</ul>

								<p>
									Não teremos qualquer responsabilidade por quaisquer danos,
									responsabilidades, perdas (incluindo qualquer perda de dados
									ou lucros) ou qualquer outra consequência que possa ocorrer
									como resultado de qualquer suspensão do serviço.
								</p>

								<h5> D) Segurança </h5>
								<p>
									Nós nos esforçamos para manter sua conta e seu conteúdo
									seguros, mas não podemos garantir que teremos sucesso ao fazer
									isso, dada a natureza da Internet. Você reconhece que tem
									responsabilidade de usar segurança adequada para proteja sua
									conta e conteúdo e nós recomendamos encorajamos você a usar
									tecnologia de criptografia para proteja sua conta e conteúdo
									de acesso não autorizado.
								</p>
							</div>
						),
					},
					{
						t: "2. Contas",
						d: (
							<div>
								<h5> 2.1. Registro. </h5>
								<p>
									Para acessar os recursos oferecidos pelo UshowMe, você pode
									você é solicitado a criar uma conta ("Conta") por e-mail
									e-mail ou faça login nas redes sociais e compartilhe certos
									detalhes de registro ou outras informações. Pode apenas crie
									uma (1) conta por endereço de e-mail, com o exceção de nossas
									contas vinculadas em contas Streamer na seção 2.5. abaixo. É
									uma condição para usar Nossos serviços interativos e
									informações. Tu forneces que todas as informações estão
									corretas, atuais e completas. Vocês Você concorda que todas as
									informações que você fornece são regidas por nossa
									privacidade. Política, e que você consente com todas as ações
									que tomamos em relação às suas informações de de acordo com
									nossa Política de Privacidade. Se você discorda ou você não
									pode cumprir qualquer um destes Termos, não use ou acessar os
									Serviços.
								</p>

								<h5> 2.2. Elegibilidade e privacidade das crianças. </h5>
								<p>
									Você deve ter pelo menos 13 anos para criar uma conta ou usar
									Nossos serviços. Pessoas abaixo da idade aplicável às vezes
									devemos usar nossos serviços apenas em conjunto com e sob a
									supervisão de um dos pais ou responsável legal que tenha pelo
									menos 18 anos de idade. Em todos os casos, o referido pai ou o
									responsável legal é o usuário e é responsável por cada uma das
									atividades da conta.
								</p>
								<p>
									Nosso serviço não é direcionado a menores de 13 anos.
									("Crianças"). Nós não coletamos pessoalmente informações
									identificáveis ​​de crianças menores de 13 anos. pai ou tutor
									e descubra que seus filhos nos forneceram informações
									pessoais, entre em contato conosco. Se nos dermos conta que
									coletamos informações pessoais de uma criança menores de 13
									anos sem verificação dos pais consentimento, tomamos medidas
									para excluir essas informações de nossos servidores.
								</p>

								<h5>
									2.3. Ativando sua conta (não use o login nas redes sociais
									autenticação).
								</h5>

								<p>
									Quando você se registrar conosco, enviaremos um e-mail e-mail
									para o mesmo endereço de e-mail que nós você forneceu, que
									contém instruções para ativar seu conta. Somente depois que
									sua conta estiver registrada e ativa, você pode usar os
									serviços em sua totalidade.
								</p>

								<h5>
									{""}
									2.4. Contas individuais ("Contas de participantes do evento"){" "}
									{""}
								</h5>
								<p>
									Se você se registrar para serviços como um participante do
									evento, garante que as informações de registro fornecidas são,
									e permanecerá por todo o Prazo, exato e completo, e por manter
									a precisão de tais informações.
								</p>

								<h5>
									{""}
									2,5. Contas de criador de eventos ("Contas de transmissor"){" "}
									{""}
								</h5>
								<p>
									Se você se inscrever em serviços como o Streamer, você garante
									que as informações de registro que você fornece são e
									permanecerão ao longo do Termo, preciso e completo. Em fluxo
									conosco, você precisa criar uma conta Streamer e então
									fornecer os detalhes necessários aprovados por nosso
									equipamento, você tem permissão para transmitir conteúdo de
									vídeo ao vivo de seus shows ao vivo. Se você trabalha para uma
									gravadora, agência, teatro, local ou qualquer outra empresa,
									você garante que está devidamente autorizado a operar em nome
									dessa empresa ou marca e seus funcionários, diretores,
									representantes e outros agentes que acessam os serviços são
									devidamente autorizado a acessar os serviços e vincula você
									legalmente a este Contrato e a todas as transações feito em
									sua conta. Informações adicionais podem ser exigidos pelos
									nossos serviços. Se você é um intérprete como artista, banda,
									DJ ou outro, e deseja transmitir conosco, você também precisa
									de uma conta Streamer. Para quem já criou uma conta
									Event-Goer, você pode solicitar a vinculação de contas, usar
									apenas uma (1) conta de e-mail para ambos tipos de contas.
								</p>

								<h5>2.6. Ações em sua conta (contas Event-Goer e Streamer)</h5>
								<p>
									Você é o único responsável por todos atividades que acontecem
									em sua conta. Você concorda em nos notificar imediatamente de
									qualquer uso não autorizado de sua conta, ou Se as credenciais
									da sua conta forem perdidas ou roubadas ou qualquer outra
									violação de segurança. Você deve ser considerar responsável
									por perdas sofridas por UshowMe ou qualquer outro usuário dos
									serviços devido ao uso de seus conta para outra pessoa.
									UshowMe não é responsável por qualquer perda ou dano
									decorrente da violação do obrigações acima.
								</p>

								<h5>
									{""}
									2.7. Código de conduta (que afeta todas as contas) {""}
								</h5>
								<p>
									Para criar experiências positivas para todos, criamos o seguir
									o código de conduta que você garante respeito.
								</p>
								<p> É proibido: </p>

								<ul>
									<li>
										Use os serviços para assediar, intimidar, assediar ou
										qualquer tipo de discriminação;
									</li>
									<li>
										Publique conteúdo ou conteúdo pornográfico ou sexual
										explícito. contendo nudez;
									</li>
									<li>
										Usar os serviços para ameaçar ou promover o discurso de
										ódio, violência ou automutilação, atividades ilegais ou
										perigoso;
									</li>
									<li>
										Use os serviços para fazer upload, distribuir ou transmitir
										vírus, worms, trojans ou outros vírus maliciosos ou
										prejudiciais materiais;
									</li>
									<li>
										Usar os serviços de uma forma que prejudique a finalidade ou
										integridade dos serviços;
									</li>
									<li>
										Faça upload ou publique as informações pessoais ou privadas
										de qualquer terceiro nos serviços;
									</li>
									<li>
										Faça upload ou publique publicidade promocional não
										autorizada materiais, spam ou outras solicitações, incluindo
										o conteúdo e / ou político;
									</li>
									<li>
										Faça upload ou poste qualquer material que viole o direitos
										autorais, marca registrada ou outro direito de propriedade
										intelectual ou outra pessoa ou entidade;
									</li>
									<li>
										Roubar a identidade de qualquer pessoa ou entidade ou de
										seus afiliação com qualquer pessoa ou entidade;
									</li>
									<li> Forneça informações falsas ou enganosas; </li>
									<li>
										Criação de cópias, modificações, desmontagem, reversão
										engenharia, ou a criação de trabalhos derivados serviços ou
										qualquer conteúdo nele;
									</li>
									<li>
										Usar os serviços para fins comerciais sem nosso prévio
										consentimento por escrito ou de outra forma distribuir,
										vender, licenciar ou sublicenciar os serviços;
									</li>
									<li>
										Incorpore os serviços, ou qualquer parte do serviços, em
										qualquer outro software, produto ou serviço, sem nosso
										consentimento prévio por escrito;
									</li>
									<li>
										Interferir ou interromper serviços ou contornar qualquer
										medidas de segurança ou restrições que colocamos em prática;
									</li>
									<li>
										Usando scripts automatizadospara coletar informações dos
										serviços;
									</li>
									<li>
										Use os serviços de qualquer forma que o UshowMe, em sua
										julgamento único e exclusivo exclusivo, é considerado
										ofensivo ou questionável, ou que expõe o UshowMe, os
										serviços ou outros usuários a responsabilidades ou danos.
									</li>
								</ul>
							</div>
						),
					},
					{
						t: "3.Serviços",
						d: (
							<div>
								<p>
									Os serviços que oferecemos serviços interativos transmissão ao
									vivo para shows musicais e representações artísticas e
									culturais.
								</p>
								<p>
									3.1. Sujeito à sua conformidade com estes Termos e Condições,
									UshowMe fornecerá a você acesso e uso dos Serviços Mostre-me.
									Os serviços UshowMe podem ser acessados ​​apenas em através da
									interface da web designada por UshowMe ou outro ferramentas
									fornecidas por UshowMe, conforme aplicável.
								</p>
								<p>
									3.2. Os Serviços permitirão aos participantes do evento e
									transmissores acessam certos recursos, funcionalidades,
									informações e serviços prestados por nós e / ou nossos
									afiliados, que podem incluir, mas não estão limitados a
									limitação, fornecer contas de usuário registrado com
									Capacidade para:
								</p>
								<p>
									A) acessar, visualizar e incorporar determinado conteúdo
									audiovisuais (incluindo, mas não se limitando a, certos vídeos
									musicais e vídeo performático);
								</p>
								<p>
									B) acessar informações e conteúdo personalizado sobre música,
									artistas e bandas, como recomendações, sugestões e
									notificações sobre conteúdo audiovisual, ingressos e outros
									produtos e serviços relacionados.
								</p>
							</div>
						),
					},
					{
						t: "4. Criação de eventos",
						d: (
							<p>
								Para a criação de eventos, o UshowMe precisa se autenticar e
								validar contas Streamer. Apenas criadores de eventos e Artistas
								associados a contas Streamer validadas pode ter acesso à criação
								de eventos. Para este fim, UshowMe exigirá mais informações e
								temos um validação de processo que pode levar até 24 (vinte e
								quatro) horas. Samples Me reserva-se o direito de recusar ou
								cancelar qualquer conta Streamer ou evento criado em qualquer
								momento sem aviso prévio, caso não cumpram estes termos.
							</p>
						),
					},
					{
						t: "5. Monetização de conteúdo",
						d: (
							<div>
								<p>
									As contas do Streamer podem monetizar seus eventos e premiar
									acesso ao conteúdo e interações de várias maneiras, como
									ingressos, doações / dicas e / ou qualquer outro formulário
									disponível.
								</p>
								<p>
									5.1. Parceiros de negócios: monetização de alguns desses
									serviços de conteúdo podem ser fornecidos por nossos parceiros
									de negócios e não por nós, que iremos informar e colocar um
									link de redirecionamento para seus sites / aplicativos para
									você fazer negócios com eles. De alguma forma, é possível que
									precisamos compartilhar alguns detalhes de sua conta
									informações, e pode solicitar mais informações necessárias
									para que os serviços funcionam (ou seja, você está comprando
									um ingresso para acessar um evento pago com a presença de
									nossos Parceiros de Negócios, como uma plataforma para a venda
									de ingressos e solicitar faturamento
									<br />
									informações e associar o código de acesso ao tíquete ao seu
									conta de e-mail, para que possamos validá-la no Plataforma
									UshowMe).
								</p>
								<p>
									5,2 Qualquer parceiro de negócios com quem fazemos negócios é
									obrigado a respeitar nossos Termos e Condições e Política
									política de privacidade, e não usará suas informações de
									qualquer outro forma, a não ser que o serviço esteja
									disponível e seja funcional para você e para nós, no entanto,
									ao usar os serviços do nosso parceiro de negócios, também
									cumprem com respeitar seus Termos e Condições e Política de
									Privacidade.
								</p>
								<p>
									5.3. Os ingressos devem ser utilizados apenas na data do
									evento, ou não será considerado válido. Isso não lhe dá
									direito a qualquer reembolso.
								</p>
								<p>
									5,4 É sua responsabilidade verificar se o evento foi cancelado
									ou reprogramado e é uma nova data e hora. O faremos usaremos
									todos os nossos esforços para informá-lo sobre o cancelamento
									ou reprogramação de um evento, mas não Nós garantimos que você
									será informado de tal cancelamento ou reagendamento antes de
									evento.
								</p>
								<p>
									5.5. A reprodução, venda, revenda ou troca de ingressos é
									proibido. Nessas situações, nós e / ou nosso membros
									empresariais têm o direito de cancelar o bilhete e seus conta.
									No entanto, apoiamos você na compra de ingressos e na oferta
									como um presente.
								</p>
								<p>
									5,6. Os ingressos não devem ser usados ​​para fins
									publicitários, promoções, concursos ou sorteios sem o nosso
									consentimento, Contas do Streamer associadas a e / ou nosso
									negócio Sócios
								</p>
								<p>
									5.7. Termos Adicionais do Ingresso: Seu ingresso é propriedade
									de contas Streamer e / ou parceiros de negócios ou nós, uma
									licença pessoal revogável que pode ser retirado ou rejeitado.
									sua admissão a qualquer momento, e um reembolso do preço
									visível no bilhete.
								</p>
								<p>
									5.7.1. Nossas contas Streamer podem nos banir fazer trocas ou
									reembolsos após a compra, ou no caso perda, roubo, dano ou
									destruição total ou parcial do bilhete. É <br />é sua
									responsabilidade manter o seu bilhete seguro.
								</p>
								<p>
									5.7.2. Como o UshowMe atua como intermediário para o ingresso
									aquisição e propriedade, não temos responsabilidade contratual
									para você em relação ao evento e ingressos em questão, a menos
									que haja de UshowMe, qualquer conduta negligente,
									representação inexistente ou se o violação de qualquer lei
									relevante. Por um pouco número de eventos, devidamente
									identificados, o UshowMe pode atuar como principal e não como
									um título intermediário, é dizer que o contrato para o evento
									e a aquisição de ingressos é entre você e UshowMe, e iremos
									informá-lo de esta condição especial.
								</p>
							</div>
						),
					},
					{
						t: "6. Taxas",
						d: (
							<div>
								<p>
									O UshowMe cobra pelos minutos de streaming interativo e pode
									Facilite os pagamentos para compras de Conteúdo, incluindo
									digital. Conteúdo disponível via streaming e download por meio
									do Serviço ("Conteúdo Digital"), mercadoria física e online
									("Mercadoria") e assinaturas de artistas ( streamer) e outros
									disponibilizados.
								</p>
								<p> 6.1. Taxas de serviço </p>
								<p>
									Em consideração ao seu uso de qualquer um dos Serviços
									Pagamentos, você concorda em pagar as taxas estabelecidas no
									Descrição do serviço aplicável na página Criação de eventos ou
									qualquer contrato firmado conosco.
								</p>
								<p>
									As taxas de qualquer serviço ou novo recurso do O serviço
									entrará em vigor quando publicado no Site para o Serviço
									correspondente. Podemos aumentar ou adicionar novas taxas para
									qualquer serviço existente ou Recurso de serviço ou
									implementar uma taxa para qualquer função de serviço ou
									serviço gratuito, garantindo a você aviso prévio de trinta
									(30) dias. O referido aviso é vai postar no site. na página de
									Criação de Eventos serviço para as pessoas afetadas.
								</p>
								<p>
									Serviço. Você concorda que é responsável por verificar o Site
									cada mês para confirmar se há novas taxas e sua (s) data (s)
									de validade. Todas as taxas pagas por você são exclusivas
									impostos e taxas aplicáveis, incluindo, mas não se limitando
									a, IVA e imposto sobre vendas aplicável. Você precisará
									fornecer tais informações para nós como razoavelmente
									necessário para determinar se somos obrigados a coletar o IVA,
									mesmo sem limitação do seu número de identificação de CUBA.
								</p>
								<p> 6.2. Pagamento </p>
								<p>
									Podemos especificar como você pagará as taxas e Tal pagamento
									estará sujeito às nossas contas a receber em geral. políticas
									em vigor de tempos em tempos. Todos os valores a serem pagos
									por você sob este Acordo serão feitos sem compensação ou
									reconvenção e sem dedução ou retenção. sim qualquer dedução ou
									retenção é exigida por lei aplicável, você nos notificará e
									nos pagará os valores adicional do que o necessário para
									garantir que a quantidade líquida que recebemos, após a
									referida dedução e retenção, é igual a a quantia que teria
									sido recebida se não houvesse tal dedução ou retenção exigida.
									Além disso, ele nos fornecerá documentação comprovando que
									retenções e deduções os valores foram pagos ao fisco
									correspondente.
								</p>
							</div>
						),
					},
					{
						t: "7. Conteúdo gerado pelo usuário (CGU)",
						d: (
							<div>
								<p>
									O Serviço também oferece aos usuários a capacidade de
									adicionar, fazer upload, enviar, distribuir ou publicar
									("Enviar") conteúdo, vídeos (incluindo apresentação de
									transmissão em Eu vivo em funções como Top Fans e VIP Stage),
									comentários escrito no fórum, dados, texto, fotografias,
									gráficos ou outras informações para o Site (coletivamente, os
									"Envios de usuário "). Ao enviar o Conteúdo do usuário gerado
									no Site ou de outra forma através do Serviço, você: reconhece
									que por enviar qualquer Conteúdo do Usuário gerado no site, é
									postar esse envio e quem pode ser identificado publicamente
									por seu ID de usuário ou nome de conta em associação com o
									referido conteúdo gerado pelo usuário; Através de enviar
									qualquer conteúdo gerado pelo usuário por meio de do Site ou
									do Serviço, você concede ao UshowMe um serviço mundial, não
									exclusivo, perpétuo, irrevogável, livre de royalties, licença
									totalmente paga, sublicenciável e transferível para usar,
									editar, modificar, reproduzir, distribuir, preparar trabalhos
									derivados de, exibição pública, atuação publicamente
									(incluindo por meio de audiências e uma transmissão digital de
									áudio e vídeo), comunique-se com o Público, sincronize e
									explore totalmente o usuário Conteúdo gerado em conexão com o
									Site, o Serviço e o Os negócios da UshowMe (e seus sucessores
									e cessionários), incluindo sem limitação para promover e
									redistribuir parte ou o todo o Site (e trabalhos derivados do
									mesmo) ou o Serviço em qualquer formato de mídia e por meio
									qualquer canal de mídia (incluindo, mas não se limitando a
									sites terceiros), agora conhecidos ou desenvolvidos no futuro.
									Você também faz e deve conceder a cada usuário registrado do
									Site e / ou do Serviço, uma licença não exclusivo para acessar
									seu conteúdo gerado pelo usuário através do Site e do Ice
									Serv, e usar, editar, modificar, jogar (em cada dispositivo de
									propriedade ou controlado pelo usuário), distribuir, preparar
									trabalhos derivado de, exibição e execução de dito Conteúdo
									gerado por o usuário para uso pessoal apenas para uso pessoal
									e não comercial.
								</p>
								<p>
									Para maior clareza, o licenciamento antes de O UshowMe não
									afetará seus outros direitos de propriedade ou licença no seu
									conteúdo gerado pelo usuário, incluindo o direito de licenciar
									o material em seu conteúdo gerado pelo usuário, a menos que
									acordado de outra forma escrito; representar e garantir, e
									pode demonstrar totalmente Satisfação UhshowMe em seu pedido;
								</p>
								<p>
									A) possui ou controla todos os direitos de todo o conteúdo de
									seu Conteúdo Gerado pelo Usuário, ou que o conteúdo de dito
									usuário O conteúdo gerado é de domínio público ou é licenciado
									diretamente,
								</p>
								<p>
									B) tem autoridade total para agir em nome de cada um
									proprietário de qualquer direito, título ou interesse sobre
									qualquer conteúdo em seu conteúdo gerado pelo usuário usar o
									referido conteúdo conforme contemplado nestes Termos de uso e
									para conceder os direitos de licença estabelecido acima,
								</p>
								<p>
									C) você tem permissão para usar o nome e a imagem de cada
									pessoa individual identificável e para usar tal informações
									pessoais ou de identificação do indivíduo, como contemplado
									nestes Termos e Condições; e
								</p>
								<p>
									D) está autorizado a conceder todos os direitos sobre o
									conteúdo gerado pelo usuário para UshowMe e todos usuários do
									Serviço; concorda em pagar todos os royalties e outros valores
									devidos a qualquer pessoa ou entidade, incluindo PRO, devido
									ao seu envio de qualquer Conteúdo gerado por o usuário ao
									Serviço; que o uso ou outra exploração do referido Conteúdo do
									usuário gerado por UshowMe e uso ou outro exploração pelos
									usuários do Site e do Serviço como contemplado por este Acordo
									não irá infringir ou violar o direitos de terceiros. parte,
									incluindo, mas não se limitando a, o direitos de privacidade,
									direitos de publicidade, direitos de autor, direitos
									contratuais ou qualquer outra propriedade direitos
									intelectuais ou de propriedade; e entender que UshowMe cháVocê
									terá o direito de excluir, editar, modificar, reformatar,
									extrair ou traduzir qualquer material, conteúdo ou informação
									enviado por você; e que todas as informações publicadas
									transmitido publicamente ou em particular através do Site É de
									responsabilidade exclusiva da pessoa de quem disse conteúdo
									originado e pelo qual UshowMe não será responsável sem erros
									ou omissões em qualquer conteúdo; e aquele UshowMe não pode
									garantir a identidade de qualquer outro usuário com aquele que
									pode interagir durante a utilização do Serviço. UshowMe não
									endossa e não tem controle sobre qualquer conteúdo gerado pelo
									usuário, no entanto, oferecemos Contas Streamer com
									ferramentas de moderação conteúdo, a fim de torná-lo uma
									experiência positiva para todo o mundo. UshowMe Não posso
									garantir a autenticidade do dados que os usuários podem
									fornecer. Sobre eles mesmos. Você reconhece que todo o
									Conteúdo que você acessa que usa o O serviço é por sua própria
									conta e risco e você será o único responsável de qualquer dano
									ou perda a qualquer parte resultante do ela própria.
								</p>
							</div>
						),
					},
					{
						t: "8. Concessão de licença: propriedade intelectual para contas de transmissor",
						d: (
							<div>
								<p>
									O serviço fornece contas Streamer com a capacidade de fazer
									upload de conteúdo digital pertencente ou controlado por tais
									Contas Streamer no site, incluindo, mas não se limitando a, o
									conteúdo de streaming ao vivo, gravações de vídeo e vídeos
									sincronizado com gravações de som e outros trabalhos
									audiovisuais e obras musicais incorporadas em gravações de som
									e vídeos musicais.
									<br />
									UshowMe não terá nenhum direito de propriedade a qualquer
									elemento de um conteúdo de conta do Streamer, no entanto, O
									UshowMe precisa da seguinte licença para realizar o Serviço.
									Cada Streamer enviando conteúdo da conta para Serviço
									concedido ao UshowMe e seus sublicenciados autorizados e
									distribuidores, se houver, o direito e a licença mundial, não
									exclusivo, isento de royalties para:
								</p>
								<p>
									A) reproduzir, distribuir, executar publicamente (incluindo em
									a por meio do público e por meio de áudio digital e streaming
									de vídeo), mostrar publicamente, criar derivados trabalhos de,
									comunicar ao público, sincronizar e de outra forma explorar
									(1) o conteúdo da conta do Streamer e realizar o Serviço em
									nome da conta do Streamer (por exemplo, Play, transcodifique,
									copie e armazene o conteúdo da conta Streamer em servidores de
									computador pertencentes e / ou operados por ou em nome de
									UshowMe ou seus sublicenciados e distribuidores autorizados e
									desempenham publicamente, transmitir, sincronizar, transmitir,
									distribuir e reproduzir o conteúdo da conta do Streamer)
									usando qualquer tecnologias ou metodologias conhecidas agora
									ou no futuro desenvolvido, e (2) explorar todos os trabalhos
									associados com direitos autorais ou metadados, incluindo, mas
									não se limitando a, letras de músicas e notações musicais,
									capas de álbuns álbuns, fotografias, gráficos e texto
									descritivo em relação com o Serviço);
								</p>
								<p>
									B) permitir que os usuários do Serviço recebam performances
									exibições públicas e públicas do conteúdo da conta Streamer e
									Artwork e reproduzir o conteúdo do Conta e arte do Streamer em
									cada um dos dispositivos pertencentes ou controlados pelo
									usuário para fins não comerciais e recebem performances e
									exposições do ela própria; e
								</p>
								<p>
									C) reproduzir, usar e publicar e permitir que outros
									reproduzir, usar e publicar, o (s) nome (s), marcas
									registradas material pessoal e biográfico, semelhanças e
									registros da Conta Streamer, em relação ao fornecimento do
									Serviço. Para permitir que a empresa explore sua conta
									Conteúdo do Streamer de acordo com as disposições acima,
									concede ao UshowMe o mundo, não direito exclusivo, livre de
									royalties, sublicenciável e transferível para usar,
									distribuir, reproduzir, copiar e exibir suas marcas
									registradas, marcas de serviço, slogans, logotipos ou direitos
									de propriedade semelhantes (coletivamente, as "Marcas") apenas
									em relação ao Serviço ou no marketing, promoção ou publicidade
									do serviço, incluindo em todas as formas de marketing,
									promoçãoe materiais publicitários agora conhecidos ou criados
									no futuro. Para fazer upload de qualquer conteúdo ou arte para
									o Site - Você representa e garante, e pode demonstrar a
									UshowMe sua plena satisfação mediante solicitação, que
								</p>
								<p>
									D) possui ou controla todos os direitos de sua música e
									Conteúdo de vídeo e arte (ou que tal música e arte arte são de
									domínio público ou foram diretamente com licença para a conta
									Streamer por escrito com a concessão de direitos suficientes
									para permitir a conta Streamer celebrar este Contrato e
									conceder todos os direitos com Em relação ao conteúdo ou arte
									da conta Streamer conforme estabelecido neste contrato);
								</p>
								<p>
									E) ter prova de compra de Música e outro Conteúdo que você
									adquiriu para usá-lo comercialmente e realizar seu negócio
									(por exemplo, você comprou uma música / canção para
									reproduzi-lo ao público em plataformas onde o titular
									original, concedo-lhe uma licença para os direitos de Autor);
								</p>
								<p>
									F) tem autoridade total para agir em nome de cada um
									proprietário de qualquer direito, título ou interesse sobre
									quaisquer uploads de Conteúdo para o Serviço e as Obras de
									Arte;
								</p>
								<p>
									G) vocês têm permissão para usar o nome e a imagem um do outro
									Pessoa individual identificável cujo nome ou semelhança é
									contido ou usado dentro do Conteúdo e / ou Trabalhos de Arte,
									e para usar informações pessoais ou identificação da referida
									pessoa (na medida em que disse as informações são usadas ou
									contidas no Conteúdo e / ou obras da arte) conforme
									contemplado por estes Termos e Condições e
								</p>
								<p>
									H) está autorizado a conceder todos os direitos sobre o
									conteúdo e / ou arte para UshowMe e todos usuários do Serviço.
									você representa e garante que o uso ou outra exploração de seu
									conteúdo e / ou obras de arte por UshowMe e seus
									sublicenciados autorizados e distribuidores e / ou por
									usuários do Site como contemplado por este Acordo para não
									infringir ou violar o direitos de terceiros, incluindo, sem
									limitação, qualquer direito de privacidade, direito de
									publicidade, direitos autorais, direitos contratuais ou
									qualquer outro propriedade intelectual ou direitos de
									propriedade, você declara e garante que, na medida em que você
									é o compositor e / ou criador / co-criador de qualquer ou
									todas as Obras música incorporada em suas gravações de som ou
									vídeos musicais, no todo ou em parte (por exemplo, como
									co-escritor), você tem todo o direito, poder e autoridade para
									conceder os direitos estabelecidos neste Acordo, sem prejuízo
									das disposições de qualquer acordo que você pode ter com
									qualquer organização direitos de aplicação, seja com base nos
									Estados Unidos United ou outro lugar, ou qualquer editora
									musical, e que você é o único responsável por realizar todas
									as etapas necessário informar a dita editora musical de sua
									concessão de uma licença livre de royalties para o UshowMe
									para as apresentações públicas e comunicações ao público de
									seus O conteúdo funciona, e não há taxas ou pagamentos de
									qualquer Gentil. qualquer editora musical será devida pelo
									interpretação pública ou comunicação ao público de suas Obras
									de conteúdo. você declara e garante que eles não serão devidos
									taxas de qualquer tipo de terceiros, incluindo, mas não se
									limitando a outros, qualquer sindicato, guilda, vocalista ou
									músico não apresentado, engenheiro ou produtor, para uso ou
									reutilização de seu Conteúdo conforme autorizado por este
									contrato.
								</p>
							</div>
						),
					},
					{
						t: "9. Propriedade intelectual do conteúdo do UshowMe",
						d: (
							<div>
								<p>
									De vez em quando, podemos disponibilizar, por meio do site e /
									ou portal do desenvolvedor, uma variedade de software, dados e
									outros conteúdos e documentação impressa e eletrônicos para
									acesso, instalação e / ou uso em relação a com os Serviços
									(todos esses materiais, exceto o fabricado especificamente
									disponível por nós em termos de licença separados, as
									"Propriedades UshowMe"). As propriedades de UshowMe podem
									incluir, sem limitação: API; ferramentas de desenvolvimento
									para uso em conexão com API, pois o código eraamostra nte e
									bibliotecas; artigos e documentação para seu uso em conexão
									com o uso e Implementação da API (coletivamente,
									"Documentação"); especificações que descrevem o operacional e
									funcional capacidades, uso, limitações técnicas e de
									engenharia requisitos e critérios de teste e desempenho
									relevantes para o uso adequado de um serviço e suas APIs
									relacionadas e outros tecnologia, materiais textuais
									disponíveis como parte do Serviço ("Materiais de Texto"); e
									outras formas de digital conteúdo, dados, texto, imagens,
									logotipos, designs interface do usuário e outros designs
									criativos, áudio e vídeo (com os Materiais de texto,
									coletivamente, "Conteúdo de UshowMe "). Estes Termos e
									Condições se aplicam ao seu acesso, instalação e uso das
									Propriedades do UshowMe e Conteúdo do UshowMe. Além dos
									direitos limitados e licenças expressamente estabelecidas
									neste Acordo, nós Todos os direitos, títulos e interesses são
									reservados (incluindo toda propriedade intelectual e direitos
									de propriedade) em e para: (a) os Serviços, (b) as
									Propriedades do UshowMe, (c) as Marcas, e (d) qualquer outra
									tecnologia e software que que fornecemos ou usamos para
									fornecer os Serviços e Propriedades de UshowMe, e todos os
									trabalhos derivados dele anterior. Não, sob este Contrato ou
									outro forma, adquirir qualquer participação ou direitos de
									propriedade sobre qualquer uma das anteriores.
								</p>
							</div>
						),
					},
					{
						t: "10. Confidencialidade",
						d: (
							<div>
								<p>
									Você não divulgará Informações Confidenciais do UshowMe
									durante o Prazo ou a qualquer momento durante o período de
									dois (2) anos após o término do Prazo. Conforme usado neste
									Contrato, {""}
									{""}
									<span className="fw-bold">
										{""}
										"Informações confidenciais do UshowMe" {""}
									</span>{" "}
									{""}
									{""}
									significa todas as informações não públicas divulgadas por
									nós, nossos parceiros de negócios ou nossos ou seus
									respectivos agentes ou contratados designados como
									confidenciais ou que, dada a natureza das informações ou
									circunstâncias que cercar sua divulgação, deve ser
									razoavelmente entendido que é confidencial. Você me mostra que
									informações confidenciais incluem, sem limitação:
								</p>
								<p>
									A) informações não públicas relacionadas ao nosso ou ao nosso
									parceiros de tecnologia de negócios, clientes, planos de
									negócios, promoções e marketing, finanças e outras atividades
									assuntos de negócios (incluindo, mas não se limitando a,
									qualquer informações sobre ou envolvendo uma de nossas
									ligações teste beta ou um produto de teste beta que você obtém
									como resultado de sua participação em tais testes beta),
								</p>
								<p>
									B) informações de terceiros que somos obrigados a manter
									confidencial e
								</p>
								<p>
									C) a natureza, conteúdo e existência de qualquer discussão ou
									negociações entre você e nós. o informações confidenciais não
									incluem nenhuma informação informações que você e nós somos
									obrigados a divulgar por lei.
								</p>
								<p>
									{""}
									10.1. Conflito com acordo de sigilo independente {""}
								</p>
								<p>
									Se você e nós somos partes em um sigilo acordo separado ("NDA
									independente") e há um conflito entre os termos do NDA
									independente, os termos do El O NDA autônomo controlará.
								</p>
							</div>
						),
					},
					{
						t: "11. Isenções de responsabilidade e limitações de responsabilidade",
						d: (
							<div>
								<p>
									Porque UshowMe não é o comprador ou vendedor em qualquer
									Transações de vendas de ingressos e mercadorias entre Streamer
									Contas e contas dos participantes do evento e não é o agente
									de seja para qualquer finalidade, o UshowMe não tem o dever de
									resolverá e não participará da resolução de disputas entre
									participantes relacionados ou decorrentes de tais Transações
									de vendas de ingressos e mercadorias. As contas do Streamer
									são individualmente responsáveis ​​pela conformidade de todas
									as leis de direitos do consumidor aplicáveis ​​ao seu venda de
									ingressos e transações de mercadorias, incluindo Legislação da
									UE em matéria de direitos do consumidor.
								</p>
								<p>
									Nada neste Acordo se destina a criar ou criar tipo joint
									venture, credor-devedor, trust, parceria ou qualquer relação
									empregador / empregado ou administradorou de franquia entre
									você e nós.
								</p>
								<p>
									Se alguma parte deste Contrato estiver nas mãos de um tribunal
									da jurisdição competente é inválido ou inexequível, o as
									partes restantes deste Contrato permanecerão em sua totalidade
									força e efeito, e quaisquer peças inválidas ou inexequíveis
									são terá um desempenho que melhor reflita o efeito e intenção
									do idioma original. Se for assim, a construção não é possível,
									a disposição será cortada deste Acordo, e o resto do Acordo
									permanecerá em pleno vigor e efeito.
								</p>
								<p className="fw-bold">
									Em nenhum caso e NA EXTENSÃO MÁXIMA DISPONÍVEL POR LEI,
									UshowMe, nem seus diretores, funcionários, agentes, parceiros,
									provedores ou provedores de conteúdo, serão responsáveis sob
									contrato, ato ilícito, responsabilidade objetiva, negligência
									ou qualquer outro tipo legal ou teoria equitativa a respeito
									serviço;
								</p>
								<p>
									A) por quaisquer lucros cessantes, perda de dados, custo de
									aquisição de bens ou serviços substitutos ou especiais, danos
									indiretos, incidentais, punitivos ou consequenciais de
									qualquer tipo em qualquer caso, bens ou serviços substitutos
									(seja qual for sua origem),
								</p>
								<p>
									B) para detectar erros, vírus, cavalos de Troia ou semelhantes
									(independentemente da fonte de origem).
								</p>
								<p> 11.1. Indenização </p>
								<p>
									Você deve defender, indenizar e isentar de responsabilidade
									UshowMe e suas afiliadas, sublicenciados autorizados e
									distribuidores, e cada um de seus funcionários, contratados,
									diretores, fornecedores e representantes de todos e cada um de
									responsabilidades, reclamações e despesas, incluindo
									honorários advocatícios e custas razoáveis, decorrentes de ou
									relacionadas ao seu uso ou uso indevido ou acesso ao Site,
									Serviço, Conteúdo ou outro de seu Conteúdo do conta streamer
									ou conteúdo gerado pelo usuário Envios, violação destes Termos
									e Condições, ou violação de sua parte, ou qualquer terceiro
									usando seu conta, de qualquer propriedade intelectual ou outro
									direito de qualquer pessoa ou entidade, e por violação de
									qualquer uma de suas representações e garantias nestes Termos
									e Condições. Para evitar dúvidas, venho por este meio Você
									concorda em defender, indenizar e isentar UshowMe de cada
									reivindicação de um terceiro possui, controlar ou reivindicar
									quaisquer direitos sobre ou sobre sua música ou outro
									Conteúdo, incluindo reivindicações de royalties para
									desempenho, royalties de sincronização, royalties mecânicos e
									taxas de uso ou reutilização. UshowMe reserva-se o direito
									assumir a defesa e controle exclusivos de qualquer assunto
									caso contrário, sujeito a compensação de sua parte, caso em
									que ajudar e cooperar com UshowMe para fazer cumprir as
									defesas disponível às suas custas.
								</p>
								<p> 11.2. Exoneração de responsabilidade do código aberto </p>
								<p>
									Alguns dos serviços UshowMe podem incluir o código de
									terceiros licenciados para UshowMe para uso e redistribuição
									sob licenças de código aberto. A continuação se mostra uma
									lista de divulgações e isenções de responsabilidade em conexão
									com o Incorporação UshowMe de certo software licenciado de
									open source em seus serviços. Sem preconceito de ninguem dos
									termos e condições do seu contrato com UshowMe, o termos de
									certas licenças de código aberto podem ser aplicável ao seu
									uso do software UshowMe, conforme estabelecido em continuação.
									Esta lista de código-fonte aberto era compilado com referência
									a software de terceiros incorporado em serviços a partir da
									data em que a lista foi gerada. Esta lista pode ser atualizada
									de tempos em tempos e pode não ser completo. TODAS AS
									INFORMAÇÕES AQUI SÃO FORNECIDAS "TAL QUAL". USHOWME NÃO FAZ
									REPRESENTAÇÕES OU GARANTIAS, EXPRESSA OU IMPLÍCITA, COM
									RESPEITO A ESTA LISTAGEM OU A SUA PRECISÃO OU INTEGRIDADE, OU
									COM RESPEITO A QUAISQUER RESULTADOS QUE É OBTIDO PELO USO OU
									DISTRIBUIÇÃO DA LISTA. AO USAR OU DISTRIBUINDO ESTA LISTA,
									VOCÊ CONCORDA QUE EM NENHUMA HIPÓTESE SERÁ RESPONSÁVEL PELO
									USHOWME POR QUAISQUER DANOS RESULTANTES DE QUALQUER USO OU
									DISTRIBUIÇÃO DESTA LISTAGEM, INCLUINDO, SEM LIMITAÇÃO,
									QUAISQUER DANOS ESPECIAIS, CONSEQUENCIAIS INCIDENTAL OU OUTRO,
									DIRETO OU INDIRETO.
								</p>
								<p> 11.2.-A WebRTC </p>
								<p>
									http://www.webrtc.org/Copyright © 2011 The WebRTC project
									autores. Todos os direitos reservados. Redistribuição e uso em
									formas de origem e binárias, com ou sem modificação, são
									permitido, desde que as seguintes condições sejam atendidas:
									As redistribuições do código-fonte devem preservar o direitos
									autorais anteriores. observe, esta lista de condições e as
									seguintes isenções de responsabilidade As redistribuições em
									forma binária devem reproduzir o aviso de copyright acima,
									esta lista de condições e as seguintes isenção de
									responsabilidade na documentação e / ou outro materiais
									fornecidos com a distribuição. Nem o Google nomes de seus
									colaboradores podem ser usados ​​para endossar ou promover
									produtos derivados deste software sem permissão específico
									antes por escrito ESTE SOFTWARE É FORNECIDO PELOS
									PROPRIETÁRIOS DE DIREITOS AUTORAIS E COLABORADORES "COMO ESTÁ"
									E QUAISQUER GARANTIAS EXPRESSAS OU IMPLÍCITAS, INCLUINDO, MAS
									NÃO SE LIMITANDO A, GARANTIAS IMPLÍCITAS DE COMERCIALIZAÇÃO E
									ADEQUAÇÃO A UM FIM REJEITADO ESPECIAL. EM NENHUM CASO O
									TITULAR DOS DIREITOS DE AUTOR OU OS COLABORADORES SERÃO
									RESPONSÁVEIS POR QUALQUER DIRETO, DANOS INDIRETOS,
									INCIDENTAIS, ESPECIAIS, EXEMPLARES OU CONSEQUENCIAIS
									(INCLUINDO, MAS NÃO SE LIMITANDO A, AQUISIÇÃO DE ATIVOS OU
									SERVIÇOS DE SUBSTITUIÇÃO; PERDA DE USO, DADOS OU LUCROS; OU
									INTERRUPÇÃO COMERCIAL) NO ENTANTO E COM QUALQUER TEORIA DE
									RESPONSABILIDADE, SEJA POR CONTRATO, RESPONSABILIDADE RIGOROSA
									OU DELITO (INCLUINDO NEGLIGÊNCIA OU DE OUTRA FORMA) DECORRENTE
									DE QUALQUER FORMA DE USO DESTE SOFTWARE, MESMO SE AVISO DA
									POSSIBILIDADE DE TAIS DANOS.
								</p>
								<p> 11.2.-B libvpx / libwebm </p>
								<p>
									http://www.webmproject.org/Copyright © 2010 Google Inc. Todos
									Todos os direitos reservados. Redistribuição e uso de licenças
									de software em fontes e formas binárias, com ou sem
									modificação, são permitidos, desde que os seguintes sejam
									atendidos condições atendidas: redistribuições do código-fonte
									deve manter o aviso de direitos autorais acima, esta lista de
									condições e o seguinte aviso de isenção de responsabilidade As
									redistribuições em forma binária devem reproduzir o aviso de
									copyright acima, esta lista de condições e as seguintes
									isenção de responsabilidade na documentação e / ou outro
									materiais fornecidos com a distribuição. Nem o Google nomes de
									seus colaboradores podem ser usados ​​para endossar ou
									promover produtos derivados deste software sem permissão
									específico antes por escrito ESTE SOFTWARE É FORNECIDO PELOS
									PROPRIETÁRIOS DE DIREITOS AUTORAIS E COLABORADORES "COMO ESTÁ"
									E QUAISQUER GARANTIAS EXPRESSAS OU IMPLÍCITAS, INCLUINDO, MAS
									NÃO SE LIMITANDO A, GARANTIAS IMPLÍCITAS DE COMERCIALIZAÇÃO E
									ADEQUAÇÃO A UM FIM REJEITADO ESPECIAL. EM NENHUM CASO O
									TITULAR DOS DIREITOS DE AUTOR OU OS COLABORADORES SERÃO
									RESPONSÁVEIS POR QUALQUER DIRETO, DANOS INDIRETOS,
									INCIDENTAIS, ESPECIAIS, EXEMPLARES OU CONSEQUENCIAIS
									(INCLUINDO, MAS NÃO SE LIMITANDO A, AQUISIÇÃO DE ATIVOS OU
									SERVIÇOS DE SUBSTITUIÇÃO; PERDA DE USO, DADOS OU LUCROS; OU
									INTERRUPÇÃO COMERCIAL) NO ENTANTO E COM QUALQUER TEORIA DE
									RESPONSABILIDADE, SEJA POR CONTRATO, RESPONSABILIDADE RIGOROSA
									OU DELITO (INCLUINDO NEGLIGÊNCIA OU DE OUTRA FORMA) DECORRENTE
									DE QUALQUER FORMA DE USO DESTE SOFTWARE, MESMO SE AVISO DA
									POSSIBILIDADE DE TAIS DANOS. Prêmio Adicional de direitos de
									propriedade intelectual (patentes) implementações ”significa
									as obras protegidas por direitos do autor que implementa os
									codecs WebM distribuídos por Google como parte do Projeto
									WebM. Por este meio, Google concede a você serviço perpétuo,
									em todo o mundo, não exclusivo, sem cobrança, livre de
									royalties, irrevogável (exceto conforme estabelecido nesta
									seção) licença de patente para fazer, ter feito, usar,
									oferecer para vender, vender, importar, transferir e de outra
									forma executar, modificar e propagar o conteúdo dessas
									implementações WebM, onde a referida licença se aplica apenas
									a reivindicações de patentes, ambos são atualmente propriedade
									do Google e adquiridos no futuro, licenciável pelo Google, que
									são necessariamente violado por essas implementações WebM.
									Está A concessão não inclui e afirma que seria infringida
									apenas como conseqüência de modificações adicionais dessas
									implementaçõesnes. sim você ou seu agente ou instituto de
									licenciamento exclusivo ou encomendar ou aceitar a instituição
									de litígio de patentes ou qualquer outra atividade de
									aplicação de patentes contra qualquer entidade (incluindo uma
									reclamação cruzada ou reconvenção em uma ação judicial),
									alegando que qualquer uma dessas implementações WebM ou
									qualquer código incorporado em qualquer um desses
									implementações de WebM constituem violação direta ou patente
									contributiva, ou indução de violação de patente, quaisquer
									direitos de patente concedidos a você sob deste A licença para
									essas implementações WebM terminará a partir da data de
									depósito do referido litígio.
								</p>
								<p> 11.3.-C FFmpeg </p>
								<p>
									http://www.ffmpeg.org/Copyright © 2000 Fabrice Bellard
									Licenciado sob a GNU General Public License versão 2.1, ou
									mais tarde, listado abaixo ou disponível em
									http://www.gnu.org/licenses/lgpl-2.1.html. No entanto, FFmpeg
									incorpora várias partes opcionais e otimizações que são
									coberto pela GNU General Public License versão 2 ou mais
									tarde, listado abaixo ou disponível em
									http://www.gnu.org/licenses/old-licenses/gpl-2.0.html. Se
									aqueles partes são usadas, a GPL se aplica a todos os FFmpeg.
									Leia o textos de licença para descobrir como isso afeta o
									programas baseados em FFmpeg ou reutilizando FFmpeg. Você
									também pode querer consultar o Perguntas mais frequentes sobre
									a GPL. Observe que o FFmpeg não está disponível em qualquer
									outro termo de licença, especialmente não proprietário /
									comercial, nem mesmo para mudança de pagamento.
								</p>
							</div>
						),
					},
					{
						t: "12. Modificações a estes Termos e Condições",
						d: (
							<div>
								<p>
									UshowMe reserva-se o direito, a seu exclusivo critério, de
									modificar ou substituir qualquer um dos termos destes Termos e
									condições, ou alterar, suspender ou descontinuar o Serviço
									(incluindo, sem limitação, a disponibilidade de qualquer
									função, banco de dados ou conteúdo) em qualquer momento,
									postando um aviso no site ou por enviando um e-mail para você.
									UshowMe também pode impor limites a certos recursos e serviços
									ou restringir seu acesso a partes ou a todo o Serviço sem
									aviso prévio aviso ou responsabilidade. É sua responsabilidade
									verificar estes Termos e Condições periodicamente para
									alterações. Está uso continuado do Serviço após a publicação
									de Qualquer alteração a estes Termos e Condições constitui
									aceitação dessas mudanças. Não obstante as frases acima de
									esta seção, sem modificações a estes Termos e condições serão
									aplicadas a qualquer disputa entre você e UshowMe que surgiu
									antes da data de tal modificação.
								</p>
								<p>
									Para qualquer dúvida ou consulta, entre em contato conosco em:{" "}
									{""}
									{""}
									<a
										target="em branco"
										className="text-decoration-none color3"
										href="mailto: legal@ushowme.tv"
									>
										legal@ushowme.tv
									</a>
								</p>
							</div>
						),
					},
				],
				// BODY END
			},
		},
	},
];
