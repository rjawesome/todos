
<!--CSS Imports-->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

<!--JS Imports-->
<script>
  import { firebase } from "./index.js"
  import { FirebaseApp } from "sveltefire"
  import { User } from "./sveltefire2"
  import Login from "./Login.svelte"
  import Todos from "./Todos.svelte"
</script>

<main>
  <FirebaseApp {firebase}>
    <User firebase={firebase} let:user>
      
      <div slot="signed-out" class="centered-div" >
        <Login />
      </div>

      <div slot="loading" class="centered-div">
        Loading...
      </div>

      <Todos user={user} />
    </User>
  </FirebaseApp>
  
</main>