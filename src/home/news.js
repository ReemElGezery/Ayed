import React from 'react';
// import './home.css';
import '../css/news.css';
import NavBar from './NavBar'
import Footer from '../home/footer'
const news = () => {
  return (
    <div>
      <NavBar></NavBar>
      <h2 style={{ color: 'red' }}>Our news</h2>
      <ul >
        <li>
          <text>Date:May 16,2016</text>
          <div>
            <div className='row'>
              <div className='col-sm-4'>
                <a href="/new1" >
                  <img
                    src="/images/new1.png"
                    width="300em"
                    height="200em"
                    className="newimage"
                  />
                </a>
              </div>


              <div className='col-sm-8'>
                <a href='/new1' >
                  <span className='newtxt'> Mohamed El-Shorbagy to meet Gregory Gaultier in El-Gouna Squash Open final – Daily News Egypt </span>
                </a>
              </div>

            </div>
            <p>Mohamed El-Shorbagy to meet Gregory Gaultier in El-Gouna Squash Open final – Daily News Egypt squash – The semifinals in the El-Gouna Squash Open concluded on Thursday المصدر : […]</p>
            <br></br>

            <a href="/new1" >
              <button className='read'> read more</button>;
          <br></br>
            </a>
            <br></br>
            <text>-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</text>
          </div>
          <br></br>
        </li>
        <li> <text>Date:May 16,2016</text>
          <div>
            <div className='row'>
              <div className='col-sm-4'>
                <a href="/new2" >
                  <img
                    src="/images/new2.jpg"
                    width="300em"
                    height="200em"
                    className="newimage"
                  />
                </a>
              </div>

              <a href="/new2">
                <div className='col-sm-12'>
                  <span className='newtxt'> El Gouna Squash International – Mosaad was the runner-up in the 2015 PSA Men’s World Squash Championship, and won the 2016 National Squash Championship. </span>
                </div>
              </a>
              <p> El Gouna Squash International: Interview with Egyptian squash champion Omar Mosaad – Daily News Egypt El Gouna Squash International – Mosaad was the runner-up in the 2015 PSA Men’s […]</p>
            </div>
            <br></br>
            <a href="/new2" >
              <button className='read'> read more</button>;
     <br></br>
            </a>
            <text>-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</text>
          </div>
          <br></br>
        </li>
        <li>
          <text>Date:May 16,2016</text>
          <div>
            <div className='row'>
              <div className='col-sm-4'>
                <a href="/new3" >
                  <img
                    src="/images/new3.jpg"
                    width="300em"
                    height="200em"
                    className="newimage"
                  />
                </a>
              </div>

              <a href="/new3">
                <div className='col-sm-12'>
                  <span className='newtxt'> World Cup could feature 40 teams by 2026 – Daily News Egypt </span>
                </div>
              </a>
              <p>  World Cup could feature 40 teams by 2026 – Daily News Egypt World Cup – The World Cup could be expanded to 40 teams by 2026 with FIFA set […]
</p>
            </div>
            <br></br>
            <a href="/new3" >
              <button className='read'> read more</button>;
     <br></br>
            </a>
            <text>-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</text>
          </div>
          <br></br>
        </li>


        <li>
          <text>Date:May 16,2016</text>
          <div>
            <div className='row'>
              <div className='col-sm-4'>
                <a href="/new4" >
                  <img
                    src="/images/new4.jpg"
                    width="300em"
                    height="200em"
                    className="newimage"
                  />
                </a>
              </div>

              <a href="/new4">
                <div className='col-sm-12'>
                  <span className='newtxt'>New breeds of ducks </span>
                </div>
              </a>
              <p>There we have the best animal feed types for broiler cattle of different kinds we have the best animal feed types for broiler and cattle of different kinds we have […]
</p>
            </div>
            <br></br>
            <a href="/new4" >
              <button className='read'> read more</button>;
     <br></br>
            </a>
            <text>-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</text>
          </div>
          <br></br>
        </li>
        <li>
          <text>Date:february ,2016</text>
          <div>
            <div className='row'>
              <div className='col-sm-4'>
                <a href="/new5" >
                  <img
                    src="/images/new5.jpg"
                    width="300em"
                    height="200em"
                    className="newimage"
                  />
                </a>
              </div>

              <a href="/new5" >
                <div className='col-sm-12'>
                  <span className='newtxt'>Better forage species</span>
                </div>
              </a>
              <p>There we have the best animal feed types for broiler cattle of different kinds we have the best animal feed types for broiler and cattle of different kinds we have […]</p>
            </div>
            <br></br>
            <a href="/new5" >
              <button className='read'> read more</button>;
     <br></br>
            </a>
            <text>-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</text>
          </div>
          <br></br>
        </li>
        <li>
          <text>Date:february 22,2016</text>
          <div>
            <div className='row'>
              <div className='col-sm-4'>
                <a href="/new6" >
                  <img
                    src="/images/new6.jpg"
                    width="300em"
                    height="200em"
                    className="newimage"
                  />
                </a>
              </div>

              <a href="/new6">
                <div className='col-sm-12'>
                  <span className='newtxt'> Create a new factory </span>
                </div>
              </a>
            </div>
            <p>There we have the best animal feed types for broiler cattle of different kinds we have the best animal feed types for broiler and cattle of different kinds we have […]</p>
            <br></br>
            <a href="/new6" >
              <button className='read'> read more</button>;
     <br></br>
            </a>
            <text>-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</text>
          </div>
          <br></br>
        </li>

      </ul>
      <div className="Footer"> 
     <Footer></Footer>
     </div>
    </div>
  );
}

export default news;