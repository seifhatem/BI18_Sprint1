<template>

<header>

<div class="wrapper">

<h1 id="logo"><a href="/"><img src="../assets/Nawwar.jpg" alt="Avatar" style="display: inline;">Nawwar<span class="color">.</span></a></h1>
<nav>
    <ul>
        <li><a onclick="location.href = 'http://localhost:8080/#/';">Home</a></li>
        <li><a onclick="location.href = 'http://localhost:8080/#/Profile';">Profile</a></li>
        <li><a onclick="location.href = 'http://localhost:8080/#/Courses';">Courses</a></li>
        <li><a onclick="location.href = 'http://localhost:8080/#/Activities';">Activities</a></li>
        <li><a onclick="location.href = 'http://localhost:8080/#/Articles';">Articles</a></li>
        <li><a onclick="location.href = 'http://localhost:8080/#/Schedules';">Schedules</a></li>
    </ul>
</nav>
</div>

</header>

</template>

<style>

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

</style>
<script>

</script>
