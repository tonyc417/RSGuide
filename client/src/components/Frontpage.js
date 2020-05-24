import React, { Component } from 'react';



class Front extends Component {
    render() {
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
                <section class="hero-image">
                </section>
            </div>
        )

    }
};


export default Front;