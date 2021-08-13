<?php
    include_once('../conect.php');

    $status = $_POST['status'];

    $result_pedido = "INSERT INTO mystatus (statush) VALUES ('$status')";
    $resultado_pedido = mysqli_query($conexao, $result_pedido);
?>

<!DOCTYPE html>
<html lang="eng">

<head>
    <title>Check</title>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0"/>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,700;1,300&display=swap" rel="stylesheet">
    <link href="css/check.css" rel="stylesheet"/>
</head>

<body>

    <div class="blue-vivacity"></div>
    <div class="modal-check">
        <div class="success-checkmark">
            <div class="check-icon">
              <span class="icon-line line-tip"></span>
              <span class="icon-line line-long"></span>
              <div class="icon-circle"></div>
              <div class="icon-fix"></div>
            </div>
          </div><!--success-checkmark-->

          <h2>Saved table!</h2>
          <a href="painel.php"><button>BACK</button></a>
    </div><!--modal-check-->
</body>
</html>