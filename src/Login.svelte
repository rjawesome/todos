<script>
  import { googleSignIn } from "./index"
</script>

<link rel="stylesheet" href="login.css">

<div id="img-div"><img src="/logo.png" alt="Todos Logo" id="logo"></div>
<img on:click={googleSignIn} src="signin_btn.png" id="google-logo" alt="google logo">