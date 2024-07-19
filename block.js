const site=window.location.hostname;
   const blacklist = [
        "www.facebook.com",
        "www.twitter.com",
        "www.instagram.com",
        "www.linkedin.com",
        "www.snapchat.com",
        "www.reddit.com",
        "www.pinterest.com",
        "www.tumblr.com",
        "www.youtube.com",
        "www.discord.com",
        "www.whatsapp.com",
        "www.tiktok.com",
        "www.quora.com",
        "www.twitch.tv",
        "www.medium.com",
        "www.viber.com",
        "www.wechat.com",
        "www.vk.com",
        "www.telegram.org"];

if (blacklist.includes(site)) {
    // Create a translucent layer
    console.log("ok matched")
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    overlay.style.zIndex = '9999'; 
    document.body.appendChild(overlay);
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top ='50%';
    modal.style.left ='50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.backgroundColor = 'white';
    modal.style.padding = '20px';
    modal.style.borderRadius = '10px';
    modal.style.zIndex = '10000';
    modal.innerHTML=`
    <center>
        <h1 style="font-size:large;">Social media sites are blocked</h1>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
        <path d="M 25 3 C 18.364481 3 13 8.3644809 13 15 L 13 20 L 9 20 C 7.3545455 20 6 21.354545 6 23 L 6 47 C 6 48.645455 7.3545455 50 9 50 L 41 50 C 42.645455 50 44 48.645455 44 47 L 44 23 C 44 21.354545 42.645455 20 41 20 L 37 20 L 37 15 C 37 8.3644809 31.635519 3 25 3 z M 25 5 C 30.564481 5 35 9.4355191 35 15 L 35 20 L 15 20 L 15 15 C 15 9.4355191 19.435519 5 25 5 z M 9 22 L 13.832031 22 A 1.0001 1.0001 0 0 0 14.158203 22 L 35.832031 22 A 1.0001 1.0001 0 0 0 36.158203 22 L 41 22 C 41.554545 22 42 22.445455 42 23 L 42 47 C 42 47.554545 41.554545 48 41 48 L 9 48 C 8.4454545 48 8 47.554545 8 47 L 8 23 C 8 22.445455 8.4454545 22 9 22 z M 25 30 C 23.3 30 22 31.3 22 33 C 22 33.9 22.4 34.699219 23 35.199219 L 23 38 C 23 39.1 23.9 40 25 40 C 26.1 40 27 39.1 27 38 L 27 35.199219 C 27.6 34.699219 28 33.9 28 33 C 28 31.3 26.7 30 25 30 z"></path>
        </svg>
        </center>
        <p style="padding-top:20px;font-size:large;color:red;">To continue browsing disable Taskmitra extension.</p>
    `;
    document.body.appendChild(modal);

}
