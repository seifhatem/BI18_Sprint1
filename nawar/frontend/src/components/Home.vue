<template>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Simply</title>
    <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
</head>

<body>
    <header>
    <div class="wrapper">

    <h1 id="logo"><a href="/"><img src="../assets/Nawwar.jpg" alt="Avatar" style="display: inline;">Nawwar<span class="color">.</span></a></h1>

    <nav>
        <ul>
            <li><a onclick="location.href = 'http://localhost:8080/#/Home';">Home</a></li>
            <li><a onclick="location.href = 'http://localhost:8080/#/Profile';">Profile</a></li>
            <li><a onclick="location.href = 'http://localhost:8080/#/Courses';">Courses</a></li>
            <li><a onclick="location.href = 'http://localhost:8080/#/Activities';">Activities</a></li>
            <li><a onclick="location.href = 'http://localhost:8080/#/Articles';">Articles</a></li>
        </ul>
    </nav>
    </div>
    </header>

    <div id="hero-image">
    <div class="wrapper">
        <h2><strong>An Online Educational Website For</strong><br/>
        Parents, Teachers, Children.</h2>
        <a onclick="location.href = 'http://localhost:8080/#/Register';" class="button-1">Get Started</a>
    </div>
    </div>

    <div id="features">
    <div class="wrapper">
        <ul>
            <li class="feature-1">
                <h4>Courses</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mollis turpis ac libero interdum, id fringilla purus feugiat. Etiam malesuada mattis nibh at bibendum.</p>
            </li>
            <li class="feature-2">
                <h4>Articles</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mollis turpis ac libero interdum, id fringilla purus feugiat. Etiam malesuada mattis nibh at bibendum.</p>
            </li>
            <li class="feature-3">
                <h4>Activities</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mollis turpis ac libero interdum, id fringilla purus feugiat. Etiam malesuada mattis nibh at bibendum.</p>
            </li>
            <div class="clear"></div>
        </ul>
    </div>
</div>

<div id="primary-content">
<div class="wrapper">
    <article>
        <h3>Featured Content</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod leo a nibh dignissim tincidunt. Nam ultricies odio ac neque suscipit volutpat. Ut dictum adipiscing felis sed malesuada. Integer porta sem nec nibh hendrerit imperdiet. </p>
        <a href="#"><img src="images/video-placeholder.jpg" alt="video placeholder" /></a>
    </article>
</div>
</div>

<div id="secondary-content">
<div class="wrapper">
    <article id="art">
        <div class="overlay">
            <h4>Are you a Pshycologist?</h4>
            <p><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod leo a nibh dignissim tincidunt nam.</small></p>
            <a href="#" class="more-link">View more</a>
        </div>
    </article>
    <article style="background-image: url('../assets/article-image-2.jpg');">
        <div class="overlay">
            <h4>Secondary Content</h4>
            <p><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod leo a nibh dignissim tincidunt nam.</small></p>
            <a href="#" class="more-link">View more</a>
        </div>
    </article><div class="clear"></div>
</div>
</div>

    <div id="cta">
        <div class="wrapper">
        </div>
    </div>
    <div id="cta">
        <div class="wrapper">
            <h3>Heard Enough?</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod leo a nibh dignissim tincidunt. Nam ultricies odio ac neque suscipit volutpat. Ut dictum adipiscing felis sed malesuada. Integer porta sem nec nibh hendrerit imperdiet. </p>
            <a onclick="location.href = 'http://localhost:8080/#/Register';" class="button-2">Get Started</a>
        </div>
    </div>

    <footer>
    <div class="wrapper">
        <div id="footer-info">
            <p>Copyright 2014 CompanyName. All rights reserved.</p>
            <p><a href="#">Terms of Service</a> I <a href="#">Privacy</a></p>
        </div>
        <div id="footer-links">
            <ul>
                <li><h5>Company</h5></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Meet The Team</a></li>
                <li><a href="#">What We Do</a></li>
                <li><a href="#">Careers</a></li>
            </ul>
        </div>
        <div class="clear"></div>
    </div>
</footer>

</body>
</html>
</template>
<script>
export default {

}
</script>

<style>
body {
      background: url('../assets/blur.jpg') no-repeat center center fixed;
    background-size: cover;
    height: 100%;
    color: #777;
    font: normal 15px "Helvetica Neue", Arial, Helvetica, Geneva, sans-serif;
}
p {
    line-height: 20px;
    margin-bottom: 20px;
    color: #000000;
}
h1 {
    font-family: 'Crete Round', serif;
    font-weight: bold;
    color: #444;
    font-size: 45px;
    margin-bottom: 20px;
}
h2 {
    font-weight: 300;
    color: #444;
    font-size: 55px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 20px;
}
h3 {
    font-size: 30px;
    color: #444;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 20px;
}
h4 {
    font-size: 24px;
    color: #000000;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 20px;
}
h5 {
    font-size: 15px;
    color: #444;
    font-weight: bold;
    text-transform: uppercase;
}
a {
    text-decoration: none;
    color: #444;
}
a:hover {
    color: #02b8dd;
}
strong {
    font-weight: bold;
}
small {
    font-size: 13px;
    color: #777;
    font-style: italic;
}
.clear {
    clear: both;
}
.wrapper {
    margin: 0 auto;
    padding: 0 10px;
    width: 940px;
}
header {
    height: 120px;
}
header h1 {
    float: left;
    margin-top: 32px;
}
header h1 .color {
    color: #02b8dd;
}
header nav {
    float: right;
}
header nav ul li {
    float: left;
    display: inline-block;
    margin-top: 50px;
}
header nav ul li a {
    color: #444;
    text-transform: uppercase;
    font-weight: bold;
    display: block;
    margin-right: 20px;
}
#logo img {
  border-radius: 50%;
  float: left;
  margin-right: 10px;
  margin-top: -20px;
  width: 100px;
  height: 100px;
  background: #555;
}

#hero-image h2 {
    margin: 180px 0 40px 0;
    color: #000000;
}
.button-1 {
    display: block;
    text-align: center;
    background: #444;
    border-radius: 3px;
    color: #fff;
    width: 180px;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    margin: 0 auto;
}
.button-1:hover {
    background-color: #02b8dd;
    color: #fff;
}
#features ul {
    margin: 80px 0;
    color: #FF0000;
}
#features ul li {
    width: 290px;
    padding-top: 140px;
    float: left;
    margin-right: 10px;
    text-align: center;
    color: #FF0000;
}
#features ul li.feature-1 {
    background: url('../assets/features-icon-1.png') no-repeat top center;
}
#features ul li.feature-2 {
    background: url('../assets/features-icon-2.png') no-repeat top center;
}
#features ul li.feature-3 {
    background: url('../assets/features-icon-3.png') no-repeat top center;
}
#primary-content {
    background-color: #f8fafa;
    padding: 60px 0;
    text-align: center;
}
#primary-content h3 {
    display: block;
    margin: 0 auto 20px auto;
    width: 400px;
    border-bottom: 1px solid #02b8dd;
    padding: 0 0 20px 0;
}
#primary-content a img {
    margin: 20px 0;
}
#secondary-content {
    padding: 60px 0;
    text-align: center;
}
#secondary-content article {
    width: 460px;
    height: 270px;
    float: left;
    background-color: #f5f5f5;
}
#secondary-content article:first-child {
    margin-right: 20px;
}
#secondary-content article .overlay {
    background: rgba(255, 255, 255, .95);
    height: 230px;
    width: 190px;
    padding: 20px;
}
#art{
  background: url('../assets/mon.jpeg');

}
article h4 {
    border-bottom: 1px solid #02b8dd;
    padding-bottom: 20px;
}
.more-link {
    border: 1px solid #02b8dd;
    color: #02b8dd;
    padding: 6px 20px;
    border-radius: 3px;
}
.more-link:hover {
    background-color: #02b8dd;
    color: #fff;
}
#cta {
    padding: 60px 0;
    text-align: center;
}
#cta h3 {
    display: block;
    margin: 0 auto 20px auto;
    width: 400px;
    border-bottom: 1px solid #02b8dd;
    padding: 0 0 20px 0;
}
.button-2 {
    display: block;
    margin: 0 auto;
    border: 2px solid #02b8dd;
    color: #02b8dd;
    border-radius: 3px;
    width: 180px;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
}
.button-2:hover {
    background-color: #02b8dd;
    color: #fff;
}
footer {
    padding: 60px 0;
    background-color: #f8fafa;
}
#footer-info {
    width: 380px;
    float: left;
    margin-top: 10px;
}
#footer-links {
    width: 520px;
    float: right;
}
#footer-links ul {
    width: 100px;
    float: left;
    margin-left: 20px;
}
#footer-links ul li {
    margin: 10px 0;
}
</style>
