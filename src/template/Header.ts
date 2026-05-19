    export const Header = ():string =>{
    return `
    <div class="Header-main">
        <div class="Header-logo">
            <h1>
                <a href="#/">
                    Scientist
                </a>
            </h1>
        </div>
        <div class="Header-search">
            <form id="search-form" onsubmit="event.preventDefault();">
                <input type="text" id="search-input" placeholder="Search characters..." autocomplete="off">
            </form>
        </div>
        <div class="Header-nav">
            <a href="/#/about/">About</a>
        </div>
    </div>
    `
}