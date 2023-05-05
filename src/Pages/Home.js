import React from 'react'
import { FaTasks } from 'react-icons/fa';
import { FaChartArea } from 'react-icons/fa';
import Version from '../components/Version';
import NavigationSection from '../components/NavigationSection';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import NavigationSection2 from '../components/NavigationSection2';
// import { FaTasks } from 'react-icons/fa';
function Home() {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

//   const props = useSpring({
//     to: {
//       opacity: inView ? 1 : 0,
//       transform: inView ? 'translateY(0)' : 'translateY(50px)',
//     },
//     from: {
//       opacity: 0,
//       transform: 'translateY(50px)',
//     },
//   });

  const items = ['Item 1', 'Item 2', 'Item 3'];

//   const props = useTrail(items.length, {
//     to: { opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(50px)' },
//     from: { opacity: 0, transform: 'translateY(50px)' },
//   });

  return (
    <div className="home">
        <div className="banner">
            <div className="first-part">
                <div className="text-work">
                    <div className="text">
                        <h1 >One app to replace them all.</h1>
                        <p>All your work in one place:</p>
                    </div>
                    <div className="work">
                        <ul>
                            <li> Tasks <FaTasks/></li>
                            <li> Whiteboards</li>
                            <li> Dashboards <FaChartArea /></li>
                            <li>Chat</li>
                            <li>Goals</li>
                        </ul>
                    </div>
                    <div className="email-field">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <div className="mt-2">
                                    <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Enter you work email"/>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="get-started-btn">
                        <button>Get Started</button>
                    </div>
                </div>
            </div>
            <div className="img">
                <img src="https://clickup.com/images/clickup-v3/CU_3.0_Teaser_LP_Task_View_Redesign_banner.png" />
            </div>
        </div>

        <div className="teams mt-5">
            <div className="container-100 content">
                <div>
                    <p className="text-center">JOIN 800,000+ HIGHLY PRODUCTIVE TEAMS</p>
                </div>
                <div className="partners">
                    <div>
                        <img src="https://clickup.com/assets/logos/booking_com.svg" />
                    </div>
                    <div>
                        <img src="https://clickup.com/assets/logos/ibm.svg" />
                    </div>
                    <div>
                        <img src="https://clickup.com/assets/logos/logitech.svg" />
                    </div>
                    <div>
                        <img src="https://clickup.com/assets/logos/fortinet.svg" />
                    </div>
                    <div>
                        <img src="https://clickup.com/assets/logos/spotify_logo_with_text.svg" />
                    </div>
                    <div>
                        <img src="https://clickup.com/assets/logos/t-mobile_logo.svg" />
                    </div>
                    <div>
                        <img src="https://clickup.com/assets/logos/netflix.svg" />
                    </div>
                </div>
            </div>
        </div>

        <div className="version">
            <Version />
        </div>

        <div className="navigation-section">
            <NavigationSection />
        </div>

        <NavigationSection2 />

        {/* <div className="support">
            <div className="info">
                <span className="ontop">#1 SUPPORT IN SOFTWARE</span>
                <h2 className="h2-titull">24/7 real-time <br /> support.</h2>
                <p className="p-text">ClickUp has the highest rated client support in software. <br /> We're here 24 hours a day, every day of the week, including <br/> holidays</p>
                <div className="list">
                    <div className="supp-services">
                        <div className="check">
                            <i className="gg-check-o"></i>
                        </div>
                        <div className="supp-p"><p>Email Support</p></div>
                    </div>
                    <div className="supp-services">
                        <div className="check">
                            <i className="gg-check-o"></i>
                        </div>
                        <div className="supp-p"><p>Live Chat for Unlimited Plan+ Workspaces</p></div>
                    </div>
                    <div className="supp-services">
                        <div className="check">
                            <i className="gg-check-o"></i>
                        </div>
                        <div className="supp-p"><p>Frequent Webinars</p></div>
                    </div>
                </div>
            </div>
            <div className="img">
                <img className="customerimg" src="img/customer-support.jpg" alt="" />
            </div>
        </div> */}
    </div>
  )
}

export default Home;