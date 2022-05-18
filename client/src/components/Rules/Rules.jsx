import React from 'react';
import './Rules.scss'

const Rules = () => {
  return (
    <div id='rules' className='app__darkgreenbg'>
        <h2 className='head-text-purple'>Rules & Regulations</h2>

        <p className='p-text'>
            Welcome to the guys joining us for the first time! <br/> 
            Here's information that will make your golfing more enjoyable. <br />
            All competition is based on what you shoot
            against your own the average score (or what you told us you shoot). <br />
            Each day has prize money, so make sure to bring your A game.
            You have already anteed up when you paid for your golf.
        </p>

        <ul>
            <li>Senior Tees
                <p className='p-text'>We are all using the tees that are 5800 yards and shorter.</p>
            </li>
            <li> Max Stroke on Any Hole is Par plus 3
                <p className='p-text'>On a par 3, max is 6, par 4 max is 7, par 5 max is 8. Once you reach this score, please pick up and move to the next hole.</p>
            </li>
            <li> Balls Hit Out f Bounds, into the Water, or Any Other Hazard
                <p className='p-text'>Play the ball laterally and add a stroke (if in the water drop on other side). Provisional balls not necessary.</p>
                <p className='p-text'>For unplayable sand traps, ok to move the ball to where it can be played, but it cannot be closer to the pin</p>
                <p className='p-text'>Ok to roll the ball in the fairway, lift and clean is ok.</p>
            </li>
            <li>Putts: Gimmes are Ok
                <p className='p-text'>Player must add a stroke for the gimme.</p>
            </li>
        </ul>

        <h3>Please Reach Out to us if You Have Questions. <br />Looking Forward to a Great Trip!</h3>
    </div>
  );
}

export default Rules;