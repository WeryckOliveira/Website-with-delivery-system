<?php

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Meat Master</title>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0"/>
    <meta name="author" content="Weryck Oliveira"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,300&display=swap" rel="stylesheet">
    <link href="Images/Icon.ico" rel="icon"/>
    <link href="CSS/Style.min.css" rel="stylesheet"/>
    <script src="https://kit.fontawesome.com/2ce6de8acf.js" crossorigin="anonymous"></script>
</head>

<body>
    <header class="check-header">
        <div class="container">
        <div class="logo"><a href="index.html">Meat Master</a></div>
        <div class="check-secure"><i class="fas fa-lock"></i><span>Secure Checkout</span></div>
        </div>
    </header>

    <div id="return-storage">
        <ul>

        </ul>
    </div><!--return-storage-->

    <div class="check-main">
        <form method="POST" action="send.php">
            <div class="check-back"><a href="index.html">Back to Home</a></div>
            <h1>Checkout</h1>
            <p>make sure you are in our city</p>
            <p>(Order pay on delivery)</p>
        <div class="container flex">

        <div class="check-info">
            <h2>Your Information</h2>

                <div class="w50"><input type="text" name="nome" required placeholder="*First Name"/></div>
                <div class="w50"><input type="text" name="sobrenome" required placeholder="*Last Name"/></div>
                <div><input type="email" name="email" placeholder="Email"/></div>
                <div><input type="text" name="tel" required placeholder="*Phone"/></div>

                <h3>Your Address</h3>

                <div><input type="text" name="rua" required placeholder="*Address"/></div>
                <div><input type="text" name="num" required placeholder="*House Number"/></div>
                <div><input type="text" name="cep" required placeholder="*Zip Code"/></div>
                <p>*Required fields</p>
                <input type="hidden" name="produtos" value=""/>
                <input type="hidden" name="total" value=""/>

        </div><!--check-info-->

        <div class="check-payment">
            <h2>Your Cart</h2><span>0</span>

            <ul id="check-cart">

            </ul>
            <div class="check-line"></div>
            <h3 class="check-total" id="check-total">Total<span></span></h3>
            <div class="clear"></div>
            <input type="submit" value="PLACE ORDER"/>
        </div><!--check-payment-->
    </div><!--container-->
    </form>
    </div><!--check-main-->

    <footer>
        <div class="black-bg"></div>
        <div class="container">
        <h2>Meat Master</h2>
        <p>Copyright © 2021 All Rights Reserved By WK.Code</p>
        <ul>
        <li><a href="#">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#menu">MENU</a></li>
        <li><a href="#find">LOCAL</a></li>
        <li><a href="#contact">CONTACT</a></li>
        </ul>

        <a href="#"><i class="fab fa-instagram"></i></a>
    </div><!--container-->
    </footer>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="JS/Function.js"></script>
</body>
</html>


