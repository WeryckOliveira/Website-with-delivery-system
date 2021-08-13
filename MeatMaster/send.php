<?php
    include_once('conect.php');

    $nome = $_POST['nome'];
    $sobrenome = $_POST['sobrenome'];
    $email = $_POST['email'];
    $tel = $_POST['tel'];
    $rua = $_POST['rua'];
    $num = $_POST['num'];
    $cep = $_POST['cep'];
    $produtos = $_POST['produtos'];
    $total = $_POST['total'];

    $result_pedido = "INSERT INTO lista (nome, sobrenome, email, telefone, rua, numero, cep, produtos, total, horario) VALUES ('$nome', '$sobrenome', '$email', '$tel', '$rua', '$num', '$cep', '$produtos', '$total', NOW())";
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
    <link href="Images/Icon.ico" rel="icon"/>
    <link href="CSS/check.css" rel="stylesheet"/>
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

          <h2>Order placed!</h2>
          <p>now just wait for the delivery</p>
          <a href="index.html"><button>BACK TO HOME</button></a>
    </div><!--modal-check-->

</body>
</html>