<!DOCTYPE html>
<html lang="en">
  <head>
    <title>XFOS - The Discord Bot</title>
    <link rel="stylesheet" type="text/css" href="/mdb.min.css" />
    <script src="/mdb.min.js"></script>
    <link rel="stylesheet" type="text/css" href="css/style.css" />
    <link
      href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
      rel="stylesheet"
    />
    <meta property="og:title" content="XFOS" />
    <meta name="author" content="SobaToriSoya" />
    <meta property="og:type" content="website" />
    <link
      rel="icon"
      href="https://cdn.discordapp.com/avatars/782197715098009609/b5183a0e35e1510aabcc293d0696104f.webp?size=4096"
    />
    <meta property="og:url" content="https://xfos.glitch.me" />
    <meta
      property="og:image"
      content="https://cdn.discordapp.com/avatars/782197715098009609/b5183a0e35e1510aabcc293d0696104f.webp?size=4096"
    />
    <meta content="#7289da" name="theme-color" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1.0,user-scalable=yes"
    />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha2/css/bootstrap.min.css"
      integrity="sha384-DhY6onE6f3zzKbjUPRc2hOzGAdEf4/Dz+WJwBvEYL/lkkIsI3ihufq9hk9K4lVoK"
      crossorigin="anonymous"
    />
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha2/js/bootstrap.bundle.min.js"
      integrity="sha384-BOsAfwzjNJHrJ8cZidOg56tcQWfp6y72vEJ8xQ9w6Quywb24iOsW913URv1IS4GD"
      crossorigin="anonymous"
    ></script>
    <meta property="og:site_name" content="XFOS official website" />
  </head>

  <style>
    .card {
      item-float: left;
    }

    .containers {
      margin: 10px;
    }

    #main {
      width: calc(100% - 180px);
      height: auto;
      background-color: #2C2F33;
      margin: 30px auto;
      border: solid 4px #23272A;
      padding: 10px;
      color: black;
      text-align: left;
    }

    #commands {
      font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
      border-collapse: collapse;
      width: 100%;
      background-color: white;
      overflow: auto;
    }

    #commands td,
    #commands th {
      border: 2.5px solid #7289DA;
      padding: 8px;
    }

    #commands tr:nth-child(even) {
      background-color: #f2f2f2;
    }

    #commands tr:hover {
      background-color: #ddd;
    }

    #commands th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: #7289DA;
      color: white;
    }

    .title {
      color: grey;
      font-size: 18px;
    }

    /*button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}*/

    a {
      text-decoration: none;
      color: black;
    }

    button:hover,
    a:hover {
      opacity: 0.7;
    }
  </style>

  <body>
    <style>
      body,
      html {
        margin: 0px;
        padding: 0px;
        background-color: #2b2b2b;
      }

      .float {
        animation: float 7s ease-in-out infinite;
      }

      @keyframes float {
        0% {
          box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0);
          transform: translateY(0px);
        }

        50% {
          box-shadow: 0px 25px 15px 0px rgba(0, 0, 0, 0);
          transform: translateY(-20px);
        }

        100% {
          box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0);
          transform: translateY(0px);
        }
      }
    </style>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">XFOS⠀⠀|</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/invite">Invite</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/cmd">Commands</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="jumbotron" style="display: flex; align-items: center; min-height: 100%; min-height: 100vh;">
<div class="container p-5 text-center">
<div class="row ">
<div class="d-flex justify-content-center align-items-center">
  <div class="flex-between">
<a class="btn btn-outline-light btn-m" href="/cmd/util">UTILITY</a>
</div>
    <div class="flex-between">
<a class="btn btn-outline-light btn-m" href="/cmd/main">MAIN</a>
</div>
    <div class="flex-between">
<a class="btn btn-outline-light btn-m" href="/cmd/nsfw">NSFW</a>
      
</div>
</div>
</div>
</div>
</div>
  </body>
</html>
