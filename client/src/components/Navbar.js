import React from 'react';

const Nav = () => {
    return (
        <div>
            <header>
                <h1 className="logo">
                    RuneGuide
                </h1>
                <input type="checkbox" id="nav-toggle" class="nav-toggle"></input>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/guides">Guides</a></li>
                        <li><a href="/ge">Money Making</a></li>
                        <li><a href="/news">News</a></li>
                    </ul>
                </nav>
                <label for="nav-toggle" class="nav-toggle-label">
                    <span></span>
                </label>
            </header>
        </div>
    )
}

export default Nav;