<?php
session_start();
include('verifica_login.php');
include_once('../conect.php');

$consulta = "SELECT * FROM lista";
$con = mysqli_query($conexao, $consulta) or die ($mysqli->error);

$consultaSts = "SELECT * FROM mystatus ORDER BY ID DESC LIMIT 1";
$conSts = mysqli_query($conexao, $consultaSts) or die ($mysqli->error);
?>
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <title>Dashboard</title>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0"/>
    <meta name="author" content="eu">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge"/>
    <link href="css/style.min.css" rel="stylesheet"/>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,300&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/2ce6de8acf.js" crossorigin="anonymous"></script>
</head>

<body>

    <section class="aside-left">
        
        <div class="logo">
            <h2>Meat.Master</h2>
        </div><!--logo-->

        <nav>
            <ul>
                <li class="selected"><i class="fas fa-clipboard-list"></i><a href="#">PANEL</a></li>
                <li><i class="far fa-window-restore"></i><a href="#">REQUESTS</a></li>
                <li><i class="fas fa-chart-line"></i><a href="#">STATISTICS</a></li>
                <li><i class="fas fa-door-open"></i><a href="logout.php">EXIT</a></li>
            </ul>
        </nav>
        <div class="arrow"><i class="fas fa-arrow-left"></i></div>
    </section><!--aside-left-->

    <header>
        <div class="menu">
            <i class="fas fa-bars"></i>
        </div><!--menu-->
    <div class="search">
        <input type="search" placeholder="Buscar..."/><i class="fas fa-search"></i><i class="fas fa-times"></i>
     </div><!--search-->
    </header>

    <section class="main">

        <div class="welcome">
            <h2>Welcome <?php echo $_SESSION['usuario'];?></h2>
            <p>this is your website control panel, where you can manage orders and view your website statistics</p>
            
            <div class="flex">
                <div>
                <h2>Statistics(in working)</h2>
                <p>Is the place where you can see your website statistics such as number of visits, time on the website and so on. Statistics are implemented with google analytics</p>
                </div>
                <div>
                 <h2>Requests</h2>
                <p>Orders is the area where you can manage the orders placed by your customers, and you can change their status (pending, completed or canceled). It is also the place where you can see the details of the person who placed the order.</p>
                </div>
            </div><!--flex-->
        </div><!--welcome-->
    </section><!--main-->

    <?php
        while($dado = $con->fetch_array()){
    ?>
    <section class="storage-bd">

        <div><?php echo $dado["ID"];  ?></div>
        <div><?php echo $dado["nome"];echo "\x20\x20\x20"; echo $dado["sobrenome"];  ?></div>
        <div><?php echo $dado["telefone"];  ?></div>
        <div><?php echo date("d/m/Y h:m:s", strtotime($dado["horario"]));  ?></div>
        <div>$<?php echo $dado["total"];  ?></div>
        <div><?php echo $dado["rua"];  ?></div>
        <div><?php echo $dado["numero"];  ?></div>
        <div><?php echo $dado["cep"];  ?></div>
        <div><?php echo $dado["email"];  ?></div>
        <div><?php echo $dado["produtos"];  ?></div>

    </section><!--storage-bd-->

    <?php
        }
    ?>

    <?php
        while($dado = $conSts->fetch_array()){
    ?>

    <section class="storage-sts">

        <div><?php echo $dado["statush"];  ?></div>

    </section><!--storage-bd-->
    
    <?php
        }
    ?>

    <section class="requests">
        <div class="blue"></div>
        <div class="container">

            <h2>Orders</h2>

            <div class="storage-status">
                <form method="POST" action="sendStatus.php">
                        <div class="save-status"></div>
                        <input type="hidden" name="status" value=""/>
                    <button class="send-status"><i class="fas fa-save"></i></button>
                </form>
            </div><!--storage-status-->
            <table class="main-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Horário</th>
                        <th>Status</th>
                        <th>Total</th>
                    </tr>
                </thead>

                <tbody class="client">

                </tbody>

            </table>

            <div class="client-data">
            <div class="exit">X</div>
            <div class="client-data-wraper">
                <h2></h2>

                <div class="dados">
                    <div></div>
                    <div></div>
                    <div></div>
                </div><!--flex-->

                <table>
                <thead>
                    <tr>
                        <th>Quant</th>
                        <th>Item</th>
                        <th>Preço</th>
                    </tr>
                </thead>

                <tbody class="table-item">

                </tbody>

                </table>

                <div class="buttons flex">
                    <div><p><i class="fas fa-clock"></i>Pendente</p></div>
                    <div><p><i class="fas fa-times-circle"></i>Cancelado</p></div>
                    <div><p><i class="fas fa-check-circle"></i>Concluído</p></div>
                </div><!--buttons-->
            </div><!--client-data-wraper-->
            </div><!--client-data-->
            
        </div><!--container-->
    </section><!--requests-->

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mark.js/8.11.1/jquery.mark.min.js"></script>
    <script src="js/functions.js"></script>
</body>
</html>