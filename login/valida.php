<?php
	session_start();	
	//Including the database connection
	include_once("conexao.php");	
	//The user and password field filled in enter the if to validate
	if((isset($_POST['email'])) && (isset($_POST['senha']))){
		$usuario = mysqli_real_escape_string($conn, $_POST['email']); //Escaping special characters, such as quotes, preventing SQL injection
		$senha = mysqli_real_escape_string($conn, $_POST['senha']);
		$senha = md5($senha);
			
		//Search the user table for the user that matches the data entered in the form
		$result_usuario = "SELECT * FROM usuarios WHERE email = '$usuario' && senha = '$senha' LIMIT 1";
		$resultado_usuario = mysqli_query($conn, $result_usuario);
		$resultado = mysqli_fetch_assoc($resultado_usuario);
		
		//Found a user in the user table with the same data entered in the form
		if(isset($resultado)){
			$_SESSION['usuarioId'] = $resultado['id'];
			$_SESSION['usuarioNome'] = $resultado['nome'];
			$_SESSION['usuarioNiveisAcessoId'] = $resultado['niveis_acesso_id'];
			$_SESSION['usuarioEmail'] = $resultado['email'];
			if($_SESSION['usuarioNiveisAcessoId'] == "1"){
				header("Location: administrativo.php");
			}elseif($_SESSION['usuarioNiveisAcessoId'] == "2"){
				header("Location: colaborador.php");
			}else{
				header("Location: cliente.php");
			}
		//It wasn't found a user in the user table with the same data typed in the form
		//redirects user to login page
		}else{	
			//Global variable getting error message
			$_SESSION['loginErro'] = "Usuário ou senha Inválido";
			header("Location: index.php");
		}
	//The unfilled username and password field enters else and redirects the user to the login page
	}else{
		$_SESSION['loginErro'] = "Usuário ou senha inválido";
		header("Location: index.php");
	}
?>