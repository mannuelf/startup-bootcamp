import React from 'react';
import './css/App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="logo"><span className="sr-only">Noroff</span></div>
            </header>

            <section className="row">
                <div className="hero-banner">
                    <div className="inner-padding">
                        <h1>Startup Bootcamp</h1>
                    </div>
                </div>
            </section>

            <section className="row">
                <div className="grid">
                    <article className="grid-item bg-color-a">
                        <div className="inner-padding">
                            <p className="first-para">Call for Frontend, VFX, Games and Digital Marketing students online and on campus.</p>
                            <p>Do you think you might have the next big business idea? Would you like to try and see if it can fly in the real world? Here’s your shot! Team up and pitch your very best idea in front of students and industry at our Noroff Startup bootcamp in January. Campus students are invited to lectures and pitching sessions.</p>
                            <p>Cooperate with mentors to create something extraordinary over the course of four short and intense weeks.  Challenge yourself and your team to put everything you’ve got, and then some, into your work. </p>
                            <p>Team up across VFX, Frontend and Games programs to up the game and push your limits even further. Learn how to strategically launch and market your work, how to communicate your brand and lift your business idea up from the ground. To finish it all off you will deliver your entire project in a 15 minute Grand Finale presentation. Time to hit the grand jury with your best shot! Are you excited yet?</p>
                        </div>
                    </article>
                    <aside className="grid-item bg-color-b">
                        <div className="inner-padding">
                        <p>For more information - join our info meeting at Oslo campus - December 14th @12:15PM</p>
                            <p>Online students from VFX, Games and Frontend studies are welcome to sign up for the bootcamp and be part of the campus experience for the full course.</p>
                        </div>
                    </aside>
                </div>
            </section>

            <section className="row bg-color-c">
                <div className="inner-padding">
                    <h2 className="page-title text-centered ">Location</h2>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d999.5669112842014!2d10.754864357200955!3d59.92992156976396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e625bebdd55%3A0x87598940160b87fa!2sNoroff%20Oslo!5e0!3m2!1sen!2sno!4v1576069085604!5m2!1sen!2sno" 
                        width="100%" 
                        height="450" 
                        frameborder="0"
                        allowfullscreen=""
                        >
                    </iframe>
                </div>
            </section>

            <section className="row text-centered ">
                <div className="inner-padding">
                    <h2 className="page-title">Organizer Noroff School Of Technology & Digital Media</h2>
                    <p>The students at Noroff are future digital innovators. You will be training hands-on from day one. And from day one, the industry will follow your education closely. We put ourselves in the place of your future employers, and came up with a wish list. Our curriculum stems from this exercise.</p>
                </div>
            </section>

            <footer className="footer text-centered bg-color-c">
                <div className="inner-padding">
                    <p>Noroff Fagskole</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
