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
											https://policies.google.com/privacy?hl=en
										</p>
										<li>Amazon Web Services (AWS)</li>
										<p>
											For more information on the privacy practices of AWS,
											please visit the AWS Privacy Notice web page:
											https://aws.amazon.com/privacy/?nc1=h_ls
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
			},
		},
	},
];
