<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spotify Function</title>
    <link rel="stylesheet" href="./index.css">
    <link href="https://fonts.googleapis.com/css2?family=Sour+Gummy:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet">
</head>

<body>

    <div class="mainNav">
        <div class="logos">
            <svg class="logo" viewBox="0 0 24 24" fill="white">
                <path
                    d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
        </div>
        <div class="centerNav">
            <div class="homeIcon">
                <svg class="homeIcons" viewBox="0 0 24 24" fill="white">
                    <path
                        d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z" />
                </svg>
            </div>
            <div class="searchIcon">
                <div class="one">
                    <svg class="searchIcons" viewBox="0 0 24 24" fill="white">
                        <path
                            d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.279 7.407-7.279s7.407 3.273 7.407 7.279-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.279z" />
                    </svg>
                </div>
                <div class="two">


                    <input class="inputBox" type="text" placeholder="What do you want to play?">
                </div>
                <div class="three">
                    <svg class="bags" viewBox="0 0 24 24" fill="white" role="img" aria-hidden="true" class="">
                        <path d="M15 15.5c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z"></path>
                        <path
                            d="M1.513 9.37A1 1 0 0 1 2.291 9h19.418a1 1 0 0 1 .979 1.208l-2.339 11a1 1 0 0 1-.978.792H4.63a1 1 0 0 1-.978-.792l-2.339-11a1 1 0 0 1 .201-.837zM3.525 11l1.913 9h13.123l1.913-9H3.525zM4 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4h-2V3H6v3H4V2z">
                        </path>
                    </svg>
                </div>
            </div>
        </div>
        <div class="authButton">
            <button class="signupBtn">Sign up</button>
            <button class="loginBtn">Log in</button>
        </div>
    </div>
    <div class="mainBox">
        <div class="asideLeft">
            <div class="library-header">
                <span aria-hidden="true" class="IconWrapper__Wrapper-sc-16usrgb-0 "><svg data-encore-id="icon"
                        role="img" aria-hidden="true" viewBox="0 0 24 24" class="Day2">
                        <path
                            d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z">
                        </path>
                    </svg></span>
                <span class="library-text">Your Library</span>
                <span class="circle-button">+</span>

            </div>

            <div class="firstplaylist">
                <div class="library-container">

                    <div class="library-card">
                        <h2>Create your first playlist</h2>
                        <p>It's easy, we'll help you</p>
                        <button class="action-button"> <a href="indexCreatelist.html"
                                style="text-decoration: none;">Create playlist</a></button>
                    </div>
                </div>
                <div class="Browsepodcasts">

                    <div class="library-card">
                        <h2>Let's find some podcasts to follow</h2>
                        <p>We'll keep you updated on new episodes</p>
                        <button class="action-button">Browse podcasts</button>
                    </div>
                </div>
                <div class="footer-links">
                    <div class="legal-links">
                        <a href="#">Legal</a>
                        <a href="#">Safety & Privacy Center</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Cookies</a>
                        <a href="#">About Ads</a>
                        <a href="#">Accessibility</a>
                    </div>
                    <div class="language-select">
                        <button class="lang-button">
                            <span class="globe-icon">🌐</span>
                            English
                        </button>
                    </div>
                </div>
            </div>

        </div>
        <div class="mainDiv">
            <div class="day1">
                <section class="spotify-playlists">
                    <h2 class="section-title">Featured Charts</h2>
                    <div class="list">
                        <div class="item">

                            <img src="/image/1.jpg" />
                            <div class="play">
                                <span class="fa fa-play"></span>
                            </div>
                            <h4>Aaj Ki Raat</h4>
                            <p>Madhubanti Bagchi, Amitabh Bhattacharya</p>
                        </div>
                        <div class="item">
                            <img src="/image/2.jpg" />
                            <div class="play">
                                <span class="fa fa-play"></span>
                            </div>
                            <h4>Aayi Nai</h4>
                            <p>Amitabh Bhattacharya, Divya Kumar</p>
                        </div>

                        <div class="item">
                            <img src="/image/3.jpg" />
                            <div class="play">
                                <span class="fa fa-play"></span>
                            </div>
                            <h4>Agar Ho Tum</h4>
                            <p>Jubin Nautiyal, Kausar Munir</p>
                        </div>

                        <div class="item">
                            <img src="/image/4.jpg" />
                            <div class="play">
                                <span class="fa fa-play"></span>
                            </div>
                            <h4>Chaleya</h4>
                            <p>Shilpa Rao, Arijit Singh</p>
                        </div>

                        <div class="item">
                            <img src="./Image/5.jpg" />
                            <div class="play">
                                <span class="fa fa-play"></span>
                            </div>
                            <h4>Ghagra</h4>
                            <p>Vishal Dadlani, Rekha Bhardwaj</p>
                        </div>

                        <div class="item">
                            <img src="./Image/6.jpg" />
                            <div class="play">
                                <span class="fa fa-play"></span>
                            </div>
                            <h4>Halki Halki Si</h4>
                            <p>Saaj Bhatt, Sanjeev Chaturvedi</p>
                        </div>
                    </div>
                </section>
                <section class="spotify-playlists">
                    <h2 class="section-title">Playlists from our Editors</h2>
                    <div class="list">
                        <div class="item">
                            <img src="/image/7.jpg" />
                            <div class="play">
                                <span class="fa fa-play"></span>
                            </div>
                            <h4>Hauli Hauli</h4>
                            <p>Neha Kakkar, Garry Sandhu</p>
                        </div>

                        <div class="item">
                            <img src="/image/8.jpg" />
                            <div class="play">
                                <span class="fa fa-play"></span>
                            </div>
                            <h4>Ittar</h4>
                            <p>Jasmine Sandlas, B Praak</p>
                        </div>

                        <div class="item">
                            <img src="/image/9.jpg" />
                            <div class="play">
                                <span class="fa fa-play"></span>
                            </div>
                            <h4>Khudaya</h4>
                            <p>Suhit Abhyankar, Sagar Bhatia</p>
                        </div>

                        <div class="item">
                            <img src="/image/10.jpg" />
                            <div class="play">
                                <span class="fa fa-play"></span>
                            </div>
                            <h4>Kissik</h4>
                            <p>Sublahshini, Devi Sri Prasad</p>
                        </div>

                        <div class="item">
                            <img src="/image/11.jpg" />
                            <div class="play">
                                <span class="fa fa-play"></span>
                            </div>
                            <h4>Mere Mehboob Mere Sanam</h4>
                            <p>Udit Narayan, Alka Yagnik</p>
                        </div>

                        <div class="item">
                            <img src="/image/12.jpg" />
                            <div class="play">
                                <span class="fa fa-play"></span>
                            </div>
                            <h4>O Maahi</h4>
                            <p>Pritam, Arijit Singh and Irshad Kamil</p>
                        </div>
                    </div>
                </section>
                <div class="footer-content">
                    <div class="footer-sections">
                        <div class="footer-section">
                            <h3>Company</h3>
                            <a href="#">About</a>
                            <a href="#">Jobs</a>
                            <a href="#">For the Record</a>
                        </div>

                        <div class="footer-section">
                            <h3>Communities</h3>
                            <a href="#">For Artists</a>
                            <a href="#">Developers</a>
                            <a href="#">Advertising</a>
                            <a href="#">Investors</a>
                            <a href="#">Vendors</a>
                        </div>

                        <div class="footer-section">
                            <h3>Useful links</h3>
                            <a href="#">Support</a>
                            <a href="#">Free Mobile App</a>
                        </div>

                        <div class="footer-section">
                            <h3>Spotify Plans</h3>
                            <a href="#">Premium Individual</a>
                            <a href="#">Premium Duo</a>
                            <a href="#">Premium Family</a>
                            <a href="#">Premium Student</a>
                            <a href="#">Spotify Free</a>
                        </div>
                    </div>
                    <div class="footer-social">
                        <div class="social-links">
                            <a href="#" aria-label="Instagram">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="#FFFFFF">
                                    <path
                                        d="M8 1.44c2.136 0 2.389.009 3.233.047.78.036 1.203.166 1.485.276.374.145.642.318.922.598.28.28.453.548.598.922.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.009 2.389-.047 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.642-.598.922-.28.28-.548.453-.922.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.389-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276-.374-.145-.642-.318-.922-.598-.28-.28-.453-.548-.598-.922-.11-.282-.24-.705-.276-1.485-.038-.844-.047-1.097-.047-3.233s.009-2.389.047-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.642.598-.922.28-.28.548-.453.922-.598.282-.11.705-.24 1.485-.276.844-.038 1.097-.047 3.233-.047M8 0C5.827 0 5.555.009 4.702.048 3.85.087 3.269.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.509-.333 1.09-.372 1.942C.009 5.555 0 5.827 0 8s.009 2.445.048 3.298c.039.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.509.198 1.09.333 1.942.372.853.039 1.125.048 3.298.048s2.445-.009 3.298-.048c.852-.039 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.509.333-1.09.372-1.942.039-.853.048-1.125.048-3.298s-.009-2.445-.048-3.298c-.039-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.509-.198-1.09-.333-1.942-.372C10.445.009 10.173 0 8 0zm0 3.892a4.108 4.108 0 100 8.216 4.108 4.108 0 000-8.216zm0 6.775a2.667 2.667 0 110-5.334 2.667 2.667 0 010 5.334zM13.23 3.731a.96.96 0 11-1.92 0 .96.96 0 011.92 0z" />
                                </svg>
                            </a>
                            <a href="#" aria-label="Twitter">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="#FFFFFF">
                                    <path
                                        d="M13.54 3.889q.56-.383 1.034-.921-.525.238-1.097.297.602-.364.832-1.044-.551.33-1.167.455Q12.54 2 11.778 2q-1.442 0-2.455 1.22-.442.535-.627 1.2-.186.666-.093 1.34-2.134-.112-3.96-1.11T2.375 2.32q-.754 1.303-.19 2.898.196.546.564 1.059-.503.014-.931-.218v.023q0 1.145.635 2.052.634.907 1.713 1.251-.475.126-.98.138-.226 0-.444-.023.309.994 1.127 1.638.819.644 1.919.679-1.777 1.4-4.015 1.4-.293 0-.551-.017 2.249 1.438 5.036 1.438 2.006 0 3.792-.826 1.786-.825 2.958-2.21.673-.797 1.128-1.733.456-.936.74-1.93.285-.994.285-1.962v-.318q.561-.412.993-.95z" />
                                </svg>
                            </a>
                            <a href="#" aria-label="Facebook">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="#FFFFFF">
                                    <path
                                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                </svg>
                            </a>

                        </div>
                    </div>




                    <script src="https://kit.fontawesome.com/23cecef777.js" crossorigin="anonymous"></script>
                </div>
                <div class="footerCopy">
                    <div class="footer-copyright">
                        © 2024 Spotify AB
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="bottomFooter">
        <div class="bottom">
            <Input type="range" name="range" id="myProgressBar" min="0" value="0" max="100">
            <div class="icons">
                <i class="fas fa-3x fa-solid fa-backward-step"></i>
                <i class="far fa-3x fa-regular fa-circle-play" id="masterPlay"></i>
                <i class="fas fa-3x fa-solid fa-forward-step"></i>
            </div>
            <div class="songInfo">
                <img src="/Gif.gif" width="65px" alt="" id="gif">
            </div>
            <div class="songInfo" style="left: 180px; top: 30px;">
                <span id="songName">Song Name</span>
                <div class="time-display">
                    <span id="currentTime">00:00</span>
                    <span id="duration">00:00</span>
                </div>

            </div>
            <div class="container">
                <input type="range" id="volumeBar" min="0" max="100" value="100">
                <button id="repeatBtn"><i class="fas fa-repeat"></i></button>
                <button id="circleModeBtn"><i class="far fa-circle-play"></i></button>
            </div>
        </div>
    </div>


    <script src="index.js"></script>
    <script src="https://kit.fontawesome.com/a93b9875e8.js" crossorigin="anonymous"></script>
</body>

</html>