import React from 'react';
import logo from './img/noroff-logo.png';
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
                       <h2 className="page-title">Description</h2>
                       <p>Call for Frontend, VFX and Games students online and on campus. Do you think you might have the next big business idea? Would you like to try and see if it can fly in the real world? Here’s your shot! Team up and pitch your very best idea in front of students and industry at our Noroff Startup bootcamp in January. Campus students are invited to lectures and pitching sessions.</p>
                       <p>Cooperate with mentors to create something extraordinary over the course of four short and intense weeks.  Challenge yourself and your team to put everything you’ve got, and then some, into your work. Team up across VFX, Frontend and Games programs to up the game and push your limits even further. Learn how to strategically launch and market your work, how to communicate your brand and lift your business idea up from the ground. To finish it all off you will deliver your entire project in a 15 minute Grand Finale presentation. Time to hit the grand jury with your best shot! Are you excited yet?</p>
                       <p>For more information - join our info meeting at Oslo campus - December 14th @12:15PM</p>
                       <p>Online students from VFX, Games and Frontend studies are welcome to sign up for the bootcamp and be part of the campus experience for the full course.</p>
                       <h3>External contributors:</h3>
                       <ul>
                           <li>Anne Worsøe - Bakken & Bæck</li>
                           <li>Anniken Fjelberg - 657 Oslo</li>
                           <li>Ingar Bentsen - The Factory</li>
                           <li>Christian Wig - Pivotic</li>
                       </ul>
                   </div>
               </article>
               <aside className="grid-item bg-color-b">
                   <div className="inner-padding">
                       <h2 className="page-title">Location</h2>
                   </div>
               </aside>
           </div>
        </section>
        <section className="row">
            <div className="inner-padding">
                <h2 className="page-title">Organizer Noroff School Of Technology & Digital Media</h2>
                <p>The students at Noroff are future digital innovators. You will be training hands-on from day one. And from day one, the industry will follow your education closely. We put ourselves in the place of your future employers, and came up with a wish list. Our curriculum stems from this exercise.</p>
            </div>
        </section>
        <footer className="footer">
            <div className="inner-padding">
                <h4 className="page-title">Noroff Fagskole</h4>
            </div>
        </footer>
    </div>
  );
}

export default App;
